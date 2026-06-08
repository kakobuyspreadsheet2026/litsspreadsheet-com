/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_LITBUY_SPREADSHEET_URL?: string;
  /** Overrides Discord invite used by TOP banner `/join/discord` redirect */
  readonly PUBLIC_LITBUY_DISCORD_URL?: string;
  /** Override intro video source (default LitBuy CDN MP4 in `src/consts.ts`); HTTPS URL or same-origin path to an MP4 */
  readonly PUBLIC_FLOAT_VIDEO_URL?: string;
  readonly PUBLIC_FLOAT_DISCORD_URL?: string;
  readonly PUBLIC_FLOAT_REDDIT_URL?: string;
  readonly PUBLIC_FLOAT_WHATSAPP_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
