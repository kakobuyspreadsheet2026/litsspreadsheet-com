#!/usr/bin/env python3
"""One-off rebrand oopbuy → kakobuy for kakobuy-cn-com (preserves Reddit CDN/thread URL segments)."""
from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

SKIP_DIRS = {'.git', 'node_modules', 'dist', '.astro'}

EXTS = {'.ts', '.tsx', '.astro', '.mjs', '.json', '.md', '.example', '.css'}


def should_skip(path: Path) -> bool:
    parts = set(path.parts)
    return bool(parts & SKIP_DIRS)


def transform(text: str, path: Path) -> str:
    # Order matters
    text = text.replace('oopbuyai.com', 'kakobuy-cn.com')
    text = text.replace('https://Oopbuy.com', 'https://kakobuy.com')
    text = text.replace('https://oopbuy.com', 'https://kakobuy.com')
    text = text.replace('Oopbuy.com', 'kakobuy.com')
    text = text.replace('oopbuy.com', 'kakobuy.com')
    text = text.replace('OOPBUY', 'KAKOBUY')
    text = text.replace('Oopbuy', 'Kakobuy')
    text = text.replace('PUBLIC_OOPBUY_', 'PUBLIC_KAKOBUY_')
    text = text.replace('redditOopbuyShareSummaries', 'redditKakobuyShareSummaries')
    text = text.replace('officialOopbuyNoticeExcerpts', 'officialKakobuyNoticeExcerpts')
    text = text.replace('{oopbuyUrl}', '{kakobuyUrl}')
    text = text.replace('oopbuyHomeUrl', 'kakobuyHomeUrl')
    text = text.replace('{oopbuyHomeUrl}', '{kakobuyHomeUrl}')
    text = text.replace('oopbuyIssueUrl', 'kakobuyIssueUrl')
    text = text.replace('{oopbuyIssueUrl}', '{kakobuyIssueUrl}')
    text = text.replace('urls.oopbuyHomeUrl', 'urls.kakobuyHomeUrl')
    text = text.replace('defaultOopbuyDiscordUrl', 'defaultKakobuyDiscordUrl')
    text = text.replace('oopbuyTopBannerImageUrl', 'kakobuyTopBannerImageUrl')
    text = text.replace('oopbuyTopBannerInnerMaxPx', 'kakobuyTopBannerInnerMaxPx')

    text = text.replace('/news/oopbuy-activity/', 'https://kakobuy.com/')

    # Restore Reddit-hosted URL paths that must stay lowercase slugs
    def restore_reddit(m: re.Match) -> str:
        return m.group(0).replace('kakobuy', 'oopbuy')

    text = re.sub(
        r'https://(?:www\.reddit\.com|preview\.redd\.it)[^\s\"]*',
        restore_reddit,
        text,
    )

    return text


def main() -> None:
    for path in ROOT.rglob('*'):
        if path.is_dir() or should_skip(path):
            continue
        if path.suffix.lower() not in EXTS:
            continue
        if path.name == 'rebrand-kakobuy.py':
            continue
        raw = path.read_text(encoding='utf-8')
        out = transform(raw, path)
        if out != raw:
            path.write_text(out, encoding='utf-8')


if __name__ == '__main__':
    main()
