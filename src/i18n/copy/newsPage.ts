import type { RouteLocale } from '../config';
import {
  LITBUY_FREIGHT_ESTIMATOR,
  LITBUY_HELP_HUB,
  LITBUY_NOTICE_HUB,
  LITBUY_OFFICIAL_HOME,
} from '../../data/litbuyOfficialNews';

/** Tokens in `hydrateNewsCopy`: `{guideUrl}` `{howToUrl}` `{litbuyHomeUrl}` `{litbuyNoticeUrl}` `{homeCuratedUrl}` `{mlCatalogUrl}` `{litbuyHelpUrl}` `{litbuyFreightUrl}` `{count}`. */
export type NewsOfficialBlock = {
  badge: string;
  faqHubLabel: string;
  metaHtml: string;
  sourcePageLabel: string;
};

export type NewsCopy = {
  title: string;
  description: string;
  keywords: string;
  backHomeLabel: string;
  h1: string;
  topIntroHtml: string;
  promotionsHeading: string;
  promotionsIntroHtml: string;
  logisticsHeading: string;
  logisticsIntroHtml: string;
  readOnLitbuyLabel: string;
  viewAllNoticesLabel: string;
  official: NewsOfficialBlock;
  toolsHeading: string;
  toolLitbuyHomeLabel: string;
  toolNoticeHubLabel: string;
  toolHelpLabel: string;
  toolFreightLabel: string;
  toolSourceTrackLabel: string;
  disclaimerHtml: string;
};

export function hydrateNewsCopy(
  raw: NewsCopy,
  urls: {
    guideUrl: string;
    howToUrl: string;
    litbuyHomeUrl: string;
    homeCuratedUrl: string;
    mlCatalogUrl: string;
    excerptCount: number;
  },
): NewsCopy {
  const map: Record<string, string> = {
    '{guideUrl}': urls.guideUrl,
    '{howToUrl}': urls.howToUrl,
    '{litbuyHomeUrl}': urls.litbuyHomeUrl,
    '{litbuyNoticeUrl}': LITBUY_NOTICE_HUB,
    '{homeCuratedUrl}': urls.homeCuratedUrl,
    '{mlCatalogUrl}': urls.mlCatalogUrl,
    '{litbuyHelpUrl}': LITBUY_HELP_HUB,
    '{litbuyFreightUrl}': LITBUY_FREIGHT_ESTIMATOR,
    '{count}': String(urls.excerptCount),
  };

  function sub(html: string) {
    let o = html;
    for (const [k, v] of Object.entries(map)) {
      o = o.split(k).join(v);
    }
    return o;
  }

  let officialMeta = raw.official.metaHtml.replaceAll('{count}', String(urls.excerptCount));

  return {
    ...raw,
    topIntroHtml: sub(raw.topIntroHtml),
    promotionsIntroHtml: sub(raw.promotionsIntroHtml),
    logisticsIntroHtml: sub(raw.logisticsIntroHtml),
    official: { ...raw.official, metaHtml: officialMeta },
    disclaimerHtml: sub(raw.disclaimerHtml),
  };
}

const en: NewsCopy = {
  title: 'LitBuy news — promotions, logistics & warehouse updates | litsspreadsheet.com',
  description:
    'Mirrored LitBuy announcements from litbuy.com: active promotions, warehouse storage rules, shipping policy, and logistics notices for LitBuy Spreadsheet shoppers.',
  keywords:
    'litbuy news, litbuy promotions, litbuy shipping policy, litbuy warehouse storage, litbuy spreadsheet updates',
  backHomeLabel: '← Back to home',
  h1: 'LitBuy news',
  topIntroHtml: `This page mirrors <strong>live announcements from <a href="{litbuyHomeUrl}" target="_blank" rel="noopener noreferrer">litbuy.com</a></strong>—promotions, logistics bulletins, and warehouse policy changes. Use it as a reading desk while you browse the <a href="{mlCatalogUrl}" target="_blank" rel="noopener noreferrer">LitBuy Spreadsheet catalogue</a>; checkout, QC, and parcel payment still happen only on LitBuy.<br/><br/>
Need paste-link steps? See <a href="{howToUrl}">How to buy</a> or the <a href="{guideUrl}" target="_blank" rel="noopener noreferrer">buying guide</a>.`,
  promotionsHeading: 'Active promotions & events',
  promotionsIntroHtml: `Pulled from the <strong>Promotions</strong> tab on <a href="{litbuyNoticeUrl}" target="_blank" rel="noopener noreferrer">litbuy.com/notice</a>. Eligibility, deadlines, and reward maths are defined only in each official notice—open the link before you commit spend.`,
  logisticsHeading: 'Logistics & warehouse updates',
  logisticsIntroHtml: `Storage windows, shipping lanes, parcel ID changes, and warehouse ops notices from LitBuy’s <strong>Logistics Updates</strong> feed. When a summary conflicts with LitBuy, trust the canonical notice on <a href="{litbuyHomeUrl}" target="_blank" rel="noopener noreferrer">litbuy.com</a>.`,
  readOnLitbuyLabel: 'Read on litbuy.com ↗',
  viewAllNoticesLabel: 'All announcements on litbuy.com ↗',
  official: {
    badge: 'Policy excerpts · litbuy.com',
    faqHubLabel: 'LitBuy help center ↗',
    metaHtml: `Expand for mirrored policy text from litbuy.com. <strong>{count}</strong> excerpts below—always verify against <a href="{litbuyHelpUrl}" target="_blank" rel="noopener noreferrer">LitBuy Help Center</a> before you ship.`,
    sourcePageLabel: 'Canonical notice ↗',
  },
  toolsHeading: 'LitBuy tools',
  toolLitbuyHomeLabel: 'LitBuy home',
  toolNoticeHubLabel: 'Announcement list',
  toolHelpLabel: 'Help center',
  toolFreightLabel: 'Freight estimator',
  toolSourceTrackLabel: 'SourceTrack',
  disclaimerHtml: `<strong>Disclaimer:</strong> litsspreadsheet.com is an independent guide—not LitBuy support. Announcement titles and summaries are mirrored for convenience; enforcement, refunds, and carrier liability remain with LitBuy and your local regulators.`,
};

const de: NewsCopy = {
  ...en,
  title: 'LitBuy News — Aktionen, Logistik & Lager-Updates | litsspreadsheet.com',
  description:
    'Gespiegelte LitBuy-Ankündigungen von litbuy.com: Aktionen, Lagerregeln, Versandrichtlinien und Logistik-Hinweise für LitBuy Spreadsheet-Nutzer.',
  keywords:
    'litbuy news, litbuy aktionen, litbuy versandrichtlinie, litbuy lager, litbuy spreadsheet updates',
  backHomeLabel: '← Zurück zur Startseite',
  h1: 'LitBuy News',
  topIntroHtml: `Diese Seite spiegelt <strong>live Ankündigungen von <a href="{litbuyHomeUrl}" target="_blank" rel="noopener noreferrer">litbuy.com</a></strong>—Aktionen, Logistik und Lager-Policy. Checkout, QC und Versand bleiben bei LitBuy.<br/><br/>
Paste-Schritte? Siehe <a href="{howToUrl}">So kaufen</a> oder den <a href="{guideUrl}" target="_blank" rel="noopener noreferrer">Einkaufsguide</a>.`,
  promotionsHeading: 'Aktive Aktionen & Events',
  promotionsIntroHtml: `Aus dem Tab <strong>Promotions</strong> auf <a href="{litbuyNoticeUrl}" target="_blank" rel="noopener noreferrer">litbuy.com/notice</a>. Teilnahme und Fristen nur in der offiziellen Notice.`,
  logisticsHeading: 'Logistik & Lager-Updates',
  logisticsIntroHtml: `Lagerfristen, Versandlinien und Warehouse-Hinweise aus LitBuys <strong>Logistics Updates</strong>. Bei Widersprüchen gilt litbuy.com.`,
  readOnLitbuyLabel: 'Auf litbuy.com lesen ↗',
  viewAllNoticesLabel: 'Alle Ankündigungen auf litbuy.com ↗',
  official: {
    ...en.official,
    badge: 'Policy-Auszüge · litbuy.com',
    faqHubLabel: 'LitBuy Hilfezentrum ↗',
    metaHtml: `Eingeklappte Policy-Texte von litbuy.com. <strong>{count}</strong> Auszüge—vor dem Versand im <a href="{litbuyHelpUrl}" target="_blank" rel="noopener noreferrer">Help Center</a> prüfen.`,
    sourcePageLabel: 'Offizielle Notice ↗',
  },
  toolsHeading: 'LitBuy Tools',
  toolLitbuyHomeLabel: 'LitBuy Start',
  toolNoticeHubLabel: 'Ankündigungsliste',
  toolHelpLabel: 'Hilfezentrum',
  toolFreightLabel: 'Frachtrechner',
  toolSourceTrackLabel: 'SourceTrack',
  disclaimerHtml: `<strong>Hinweis:</strong> litsspreadsheet.com ist ein unabhängiger Guide—kein LitBuy-Support. Maßgeblich sind die Live-Notices auf litbuy.com.`,
};

const pt: NewsCopy = {
  ...en,
  backHomeLabel: '← Voltar ao início',
  h1: 'Notícias LitBuy',
  promotionsHeading: 'Promoções e eventos ativos',
  logisticsHeading: 'Logística e atualizações de armazém',
  readOnLitbuyLabel: 'Ler em litbuy.com ↗',
  viewAllNoticesLabel: 'Todos os anúncios em litbuy.com ↗',
  toolsHeading: 'Ferramentas LitBuy',
  toolLitbuyHomeLabel: 'Início LitBuy',
  toolNoticeHubLabel: 'Lista de anúncios',
  toolHelpLabel: 'Centro de ajuda',
  toolFreightLabel: 'Estimador de frete',
};

const es: NewsCopy = {
  ...en,
  backHomeLabel: '← Volver al inicio',
  h1: 'Noticias LitBuy',
  promotionsHeading: 'Promociones y eventos activos',
  logisticsHeading: 'Logística y actualizaciones de almacén',
  readOnLitbuyLabel: 'Leer en litbuy.com ↗',
  viewAllNoticesLabel: 'Todos los anuncios en litbuy.com ↗',
  toolsHeading: 'Herramientas LitBuy',
  toolLitbuyHomeLabel: 'Inicio LitBuy',
  toolNoticeHubLabel: 'Lista de anuncios',
  toolHelpLabel: 'Centro de ayuda',
  toolFreightLabel: 'Calculadora de flete',
};

const fr: NewsCopy = {
  ...en,
  backHomeLabel: '← Retour à l’accueil',
  h1: 'Actualités LitBuy',
  promotionsHeading: 'Promotions et événements actifs',
  logisticsHeading: 'Logistique et mises à jour entrepôt',
  readOnLitbuyLabel: 'Lire sur litbuy.com ↗',
  viewAllNoticesLabel: 'Toutes les annonces sur litbuy.com ↗',
  toolsHeading: 'Outils LitBuy',
  toolLitbuyHomeLabel: 'Accueil LitBuy',
  toolNoticeHubLabel: 'Liste des annonces',
  toolHelpLabel: 'Centre d’aide',
  toolFreightLabel: 'Estimateur de fret',
};

const it: NewsCopy = {
  ...en,
  backHomeLabel: '← Torna alla home',
  h1: 'Novità LitBuy',
  promotionsHeading: 'Promozioni ed eventi attivi',
  logisticsHeading: 'Logistica e aggiornamenti magazzino',
  readOnLitbuyLabel: 'Leggi su litbuy.com ↗',
  viewAllNoticesLabel: 'Tutti gli annunci su litbuy.com ↗',
  toolsHeading: 'Strumenti LitBuy',
  toolLitbuyHomeLabel: 'Home LitBuy',
  toolNoticeHubLabel: 'Elenco annunci',
  toolHelpLabel: 'Centro assistenza',
  toolFreightLabel: 'Stima spedizione',
};

const pl: NewsCopy = {
  ...en,
  backHomeLabel: '← Wróć na stronę główną',
  h1: 'Aktualności LitBuy',
  promotionsHeading: 'Aktywne promocje i wydarzenia',
  logisticsHeading: 'Logistyka i aktualizacje magazynu',
  readOnLitbuyLabel: 'Czytaj na litbuy.com ↗',
  viewAllNoticesLabel: 'Wszystkie ogłoszenia na litbuy.com ↗',
  toolsHeading: 'Narzędzia LitBuy',
  toolLitbuyHomeLabel: 'Strona LitBuy',
  toolNoticeHubLabel: 'Lista ogłoszeń',
  toolHelpLabel: 'Centrum pomocy',
  toolFreightLabel: 'Kalkulator frachtu',
};

export const NEWS_PAGE_COPY: Record<RouteLocale, NewsCopy> = {
  en,
  de,
  pt,
  es,
  fr,
  it,
  pl,
};

export function getNewsCopy(locale: string): NewsCopy {
  const lc = locale as RouteLocale;
  return NEWS_PAGE_COPY[lc] ?? en;
}

export { LITBUY_OFFICIAL_HOME };
