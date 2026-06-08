#!/usr/bin/env python3
"""Rebuild excerpt JSON from Desktop saves 1.html … N.html (Oopbuy notice/issueView snapshots).

Examples:
  python3 scripts/import-oobuy-notices-from-desktop.py
  python3 scripts/import-oobuy-notices-from-desktop.py --src ~/Desktop/news \\
      --out src/data/howToBuyDesktopNewsExcerpts.json --sync-images

Snapshot HTML may use <img src="./3_files/...">. Those are rewritten to
``/oopbuy-desktop-news/{n}/...``. Pass ``--sync-images`` to copy files from
``{src}/{n}_files/`` into ``public/oopbuy-desktop-news/{n}/``.
"""

import argparse
import html as html_module
import json
import pathlib
import re
import shutil
from typing import Optional

PROJECT_ROOT = pathlib.Path(__file__).resolve().parents[1]
DEFAULT_SRC = pathlib.Path("/Users/lwl/Desktop/how to buy")
DEFAULT_OUT = PROJECT_ROOT / "src/data/officialOopbuyNoticeExcerpts.json"
PUBLIC_SNAPSHOT_IMG_ROOT = PROJECT_ROOT / "public" / "oopbuy-desktop-news"
MISSING_BODY_HTML = (
    '<p>此条在离线保存时没有抓到正文（页面仍在加载或停在列表页）。请以 '
    '<a href="https://oopbuy.com/issueView" target="_blank" rel="noopener noreferrer">'
    "Oopbuy 常见问题"
    "</a> 上对应详情为准。</p>"
)


def extract_inner(html: str):
    pos = html.find('class="main-body">')
    if pos < 0:
        return None
    pos += len('class="main-body">')
    m = re.match(r"\s*<div[^>]*>", html[pos:])
    if not m:
        return None
    content_start = pos + m.end()
    i = content_start
    depth = 1
    n = len(html)
    close_pos = None
    while i < n and depth > 0:
        sub = html[i:]
        mo = re.search(r"<div\b", sub)
        mc = re.search(r"</div>", sub)
        if not mc:
            return None
        close_pos_abs = i + mc.start()
        if mo and (i + mo.start()) < close_pos_abs:
            open_pos_abs = i + mo.start()
            gt = html.find(">", open_pos_abs)
            if gt < 0:
                return None
            depth += 1
            i = gt + 1
        else:
            depth -= 1
            i = close_pos_abs + 6
            close_pos = close_pos_abs
    if depth != 0 or close_pos is None:
        return None
    return html[content_start:close_pos]


def extract_title(html: str) -> str:
    slice_start = html.find("class=\"page content")
    window = html[slice_start : slice_start + 12000] if slice_start != -1 else html[:12000]
    m = re.search(r"class=\"title\"\s*>([^<]+)</div>", window)
    if m:
        return m.group(1).strip()
    m = re.search(r"class=\"title\"\s*>([^<]+)</div>", html[:400000])
    return m.group(1).strip() if m else "Untitled"


def extract_url(html: str) -> Optional[str]:
    mc = re.search(r"saved from url=\([^)]+\)(https?://[^\s\)]+)", html[:800])
    if mc:
        u = mc.group(1).strip()
        return u.replace("http://", "https://")
    m = re.search(r"https://oopbuy\.com/notice/\d+", html[:200000])
    if m:
        return m.group(0)
    m2 = re.search(r'https://oopbuy\.com/issueView[^\s\"\'\)]*', html[:200000])
    return m2.group(0).rstrip("/") if m2 else None


def rewrite_snapshot_relative_img_urls(html: str) -> str:
    """Offline saves use ./N_files/foo.png — site serves from /oopbuy-desktop-news/N/foo.png."""
    return re.sub(r"\./(\d+)_files/", r"/oopbuy-desktop-news/\1/", html)


def sync_snapshot_assets(html_parts: list[str], src_dir: pathlib.Path, dest_root: pathlib.Path) -> tuple[int, int]:
    """Copy referenced ./n_files/name assets into dest_root/n/name. Returns (copied, missing)."""
    pat = re.compile(r"\./(\d+)_files/([^\"]+)")
    seen: set[tuple[str, str]] = set()
    copied = 0
    missing = 0
    for html in html_parts:
        for m in pat.finditer(html):
            idx, fname = m.group(1), m.group(2)
            key = (idx, fname)
            if key in seen:
                continue
            seen.add(key)
            src_fp = src_dir / f"{idx}_files" / fname
            if not src_fp.is_file():
                missing += 1
                print(f"missing snapshot asset: {src_fp}")
                continue
            dest_dir = dest_root / idx
            dest_dir.mkdir(parents=True, exist_ok=True)
            shutil.copy2(src_fp, dest_dir / fname)
            copied += 1
    return copied, missing


def main():
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument(
        "--src",
        type=pathlib.Path,
        default=DEFAULT_SRC,
        help=f"Folder with 1.html, 2.html, … (default: {DEFAULT_SRC})",
    )
    ap.add_argument(
        "--out",
        type=pathlib.Path,
        default=DEFAULT_OUT,
        help=f"Output JSON path (default: {DEFAULT_OUT})",
    )
    ap.add_argument(
        "--sync-images",
        action="store_true",
        help="Copy ./N_files/* referenced in bodies from --src into public/oopbuy-desktop-news/",
    )
    args = ap.parse_args()
    src_dir: pathlib.Path = args.src.expanduser().resolve()
    out_path: pathlib.Path = args.out.expanduser().resolve()
    paths = sorted(src_dir.glob("[0-9]*.html"), key=lambda p: int(p.stem))
    rows_data: list[tuple[str, str, str]] = []
    for path in paths:
        html = path.read_text(encoding="utf-8", errors="replace")
        title = html_module.unescape(extract_title(html))
        url = extract_url(html) or "https://oopbuy.com/"
        inner = extract_inner(html)
        body_raw = inner.strip() if inner else MISSING_BODY_HTML
        rows_data.append((title, url, body_raw))

    if args.sync_images:
        copied, miss = sync_snapshot_assets(
            [triple[2] for triple in rows_data],
            src_dir,
            PUBLIC_SNAPSHOT_IMG_ROOT,
        )
        print(f"Synced snapshot images: {copied} copied, {miss} missing")

    rows = [
        {
            "title": t,
            "sourceUrl": u,
            "bodyHtml": rewrite_snapshot_relative_img_urls(b),
        }
        for t, u, b in rows_data
    ]
    out_path.parent.mkdir(parents=True, exist_ok=True)
    out_path.write_text(json.dumps(rows, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Wrote {len(rows)} entries from {src_dir} to {out_path}")


if __name__ == "__main__":
    main()
