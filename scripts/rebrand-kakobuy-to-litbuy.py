#!/usr/bin/env python3
"""Rebrand kakobuy-cn-com → litbuyspreadsheet.com (fork sync)."""
from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SKIP_DIRS = {".git", "node_modules", "dist", ".astro", ".cursor", ".banner-review"}
EXTS = {
    ".ts",
    ".tsx",
    ".astro",
    ".mjs",
    ".json",
    ".md",
    ".example",
    ".css",
    ".html",
    ".txt",
    ".py",
}


def should_skip(path: Path) -> bool:
    return bool(set(path.parts) & SKIP_DIRS)


def transform(text: str) -> str:
    text = text.replace("kakobuy-cn.com", "litbuyspreadsheet.com")
    text = text.replace("https://kakobuy.com", "https://litbuyspreadsheet-top.com")
    text = text.replace("kakobuy.com", "litbuyspreadsheet-top.com")
    text = text.replace("/kakobuy-brand/", "/litbuyspreadsheet-brand/")
    text = text.replace("kakobuy-brand", "litbuyspreadsheet-brand")
    text = text.replace("PUBLIC_KAKOBUY_", "PUBLIC_LITBUY_")
    text = text.replace("kakobuyMay2026", "litbuyspreadsheetMay2026")
    text = text.replace("redditKakobuyShareSummaries", "redditLitbuyShareSummaries")
    text = text.replace("officialKakobuyNoticeExcerpts", "officialLitbuyNoticeExcerpts")
    text = text.replace("mlSpreadsheetKakobuy", "mlSpreadsheetLitbuyspreadsheet")
    text = text.replace("KakobuyHomeHero", "LitBuyHomeHero")
    text = text.replace("KakobuyThinTopStrip", "LitBuyThinTopStrip")
    text = text.replace("defaultKakobuyDiscordUrl", "defaultLitbuyspreadsheetDiscordUrl")
    text = text.replace("kakobuyHomeHeroMobileBannerUrl", "litbuyspreadsheetHomeHeroMobileBannerUrl")
    text = text.replace("kakobuyHomeHeroBannerUrl", "litbuyspreadsheetHomeHeroBannerUrl")
    text = text.replace("kakobuyHomeTopStripBannerUrl", "litbuyspreadsheetHomeTopStripBannerUrl")
    text = text.replace("kakobuyTopBannerImageUrl", "litbuyspreadsheetTopBannerImageUrl")
    text = text.replace("kakobuyTopBannerInnerMaxPx", "litbuyspreadsheetTopBannerInnerMaxPx")
    text = text.replace("{kakobuyHomeUrl}", "{litbuyHomeUrl}")
    text = text.replace("kakobuyHomeUrl", "litbuyHomeUrl")
    text = text.replace("{kakobuyIssueUrl}", "{litbuyIssueUrl}")
    text = text.replace("kakobuyIssueUrl", "litbuyIssueUrl")
    text = text.replace("urls.kakobuyHomeUrl", "urls.litbuyHomeUrl")
    text = text.replace("{kakobuyUrl}", "{litbuyUrl}")
    text = text.replace("/promotions/kakobuy-may-2026/", "/promotions/litbuyspreadsheet-may-2026/")
    text = text.replace("kakobuy-may-2026", "litbuyspreadsheet-may-2026")
    text = text.replace("/blog/kakobuy-", "/blog/litbuyspreadsheet-")
    text = text.replace("kakobuy-", "litbuyspreadsheet-")
    text = text.replace("KAKOBUY", "LITBUY")
    text = text.replace("Kakobuy", "LitBuy")
    text = text.replace("kakobuy", "litbuy")

    def restore_reddit(m: re.Match) -> str:
        return m.group(0).replace("litbuy", "kakobuy")

    text = re.sub(
        r"https://(?:www\.reddit\.com|preview\.redd\.it)[^\s\"]*",
        restore_reddit,
        text,
    )
    return text


def main() -> None:
    skip_names = {"rebrand-kakobuy-to-litbuy.py", "rebrand-kakobuynet.py", "rebrand-kakobuy.py"}
    changed = 0
    for path in ROOT.rglob("*"):
        if path.is_dir() or should_skip(path):
            continue
        if path.suffix.lower() not in EXTS:
            continue
        if path.name in skip_names:
            continue
        raw = path.read_text(encoding="utf-8")
        out = transform(raw)
        if out != raw:
            path.write_text(out, encoding="utf-8")
            changed += 1
    print(f"Updated {changed} files.")


if __name__ == "__main__":
    main()
