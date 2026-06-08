/** Curated from litbuy.com/notice (June 2026) — official announcements only, not checkout. */

import { litbuyOfficialOrigin } from '../../site.config.mjs';

const litbuyOfficial = litbuyOfficialOrigin.replace(/\/$/, '');

export const LITBUY_OFFICIAL_HOME = `${litbuyOfficial}/`;
export const LITBUY_NOTICE_HUB = `${litbuyOfficial}/notice`;
export const LITBUY_HELP_HUB = `${litbuyOfficial}/help`;
export const LITBUY_FREIGHT_ESTIMATOR = `${litbuyOfficial}/shipping-estimate`;

export type LitbuyNewsCard = {
  title: string;
  summary: string;
  sourceUrl: string;
  imageSrc: string;
  imageAlt: string;
};

/** LitBuy homepage carousel banners — hosted locally under `/public/images/news/`. */
const PROMO_BANNERS = [
  {
    imageSrc: '/images/news/promo-1.jpg',
    imageAlt: 'LitBuy Spreadsheet — new user shipping coupons · homepage promo banner',
  },
  {
    imageSrc: '/images/news/promo-2.jpg',
    imageAlt: 'LitBuy Spreadsheet — Easter Egg Hunt event · homepage promo banner',
  },
  {
    imageSrc: '/images/news/promo-3.jpg',
    imageAlt: 'LitBuy Spreadsheet — Spin Wheel event · homepage promo banner',
  },
  {
    imageSrc: '/images/news/promo-4.jpg',
    imageAlt: 'LitBuy Spreadsheet — Team Cashback Challenge · homepage promo banner',
  },
  {
    imageSrc: '/images/news/promo-5.jpg',
    imageAlt: 'LitBuy Spreadsheet — Lit Line Next Stop event · homepage promo banner',
  },
  {
    imageSrc: '/images/news/promo-6.jpg',
    imageAlt: 'LitBuy Spreadsheet — Affiliate Program · homepage promo banner',
  },
] as const;

/** Homepage banner: effective April 22, 2026 warehouse rules update. */
export const LITBUY_HOMEPAGE_NOTICE = {
  title: 'LITBUY warehouse rules updated',
  effective: 'April 22, 2026',
  sourceUrl: 'https://www.litbuy.com/notice/1775431599229829121',
};

export const litbuyPromotions: LitbuyNewsCard[] = [
  {
    title: 'New user shipping coupons',
    summary:
      'LitBuy issues a stack of shipping coupons after you register and log in—automatically credited to new accounts.',
    sourceUrl: 'https://www.litbuy.com/register',
    ...PROMO_BANNERS[0],
  },
  {
    title: 'LitBuy Easter Egg Hunt — Official Rules',
    summary: 'Seasonal egg-hunt event with prizes—full eligibility and claim steps on LitBuy.',
    sourceUrl: 'https://www.litbuy.com/notice/2039221757880750081',
    ...PROMO_BANNERS[1],
  },
  {
    title: 'LitBuy Spin Wheel Event — Official Rules',
    summary: 'Spin-wheel promotion on LitBuy—check the notice for spin limits, rewards, and deadlines.',
    sourceUrl: 'https://www.litbuy.com/notice/2033455369597661186',
    ...PROMO_BANNERS[2],
  },
  {
    title: 'Litbuy Team Cashback Challenge — Official Rules',
    summary: 'Team cashback challenge with tiered rewards—rules and payout timing live on LitBuy.',
    sourceUrl: 'https://www.litbuy.com/notice/1993204142339395586',
    ...PROMO_BANNERS[3],
  },
  {
    title: 'Lit Line Next Stop – Event Rules',
    summary: 'LitBuy route-vote style event—participation steps and prize pool in the official notice.',
    sourceUrl: 'https://www.litbuy.com/notice/2059479624071065601',
    ...PROMO_BANNERS[4],
  },
  {
    title: 'Affiliate Program',
    summary: 'Refer friends through LitBuy’s invite center and earn referral rewards per live campaign terms.',
    sourceUrl: 'https://www.litbuy.com/invite-center',
    ...PROMO_BANNERS[5],
  },
];

export const litbuyLogistics: LitbuyNewsCard[] = [
  {
    title: 'Warehouse Storage Service & Overdue Storage Fee Policy',
    summary:
      '90 days free storage per inbound item; from day 91 overdue fees apply (0.2% of paid price per day, min ¥1, cap ¥300/month). Reminders at 7d, 3d, and on expiry.',
    sourceUrl: 'https://www.litbuy.com/notice/1775431599229829121',
  },
  {
    title: 'Shipping Policy',
    summary:
      'Covers processing time, destination limits, estimated delivery windows, tracking (allow 48h), customs/duties split by channel, and lost-package claims (contact within 7 days).',
    sourceUrl: 'https://www.litbuy.com/notice/2013882340022579202',
  },
  {
    title: 'LitBuy Insurance Rules',
    summary: 'Parcel insurance options and claim workflow—read before selecting insured shipping lines.',
    sourceUrl: 'https://www.litbuy.com/notice',
  },
  {
    title: 'Taobao links temporarily unavailable',
    summary: 'LitBuy flagged intermittent Taobao link parsing issues—retry later or paste product details manually.',
    sourceUrl: 'https://www.litbuy.com/notice',
  },
  {
    title: 'Package Number format adjustment',
    summary: 'Warehouse parcel ID format changed—update any saved templates or spreadsheets that reference old IDs.',
    sourceUrl: 'https://www.litbuy.com/notice',
  },
  {
    title: 'Short notice from LITBUY Warehouse Team',
    summary: 'Operational warehouse bulletin—check the live notice for inbound handling or QC queue updates.',
    sourceUrl: 'https://www.litbuy.com/notice',
  },
];
