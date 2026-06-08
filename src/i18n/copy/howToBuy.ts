import type { RouteLocale } from '../config';

export type HowToBuyCopy = {
  title: string;
  description: string;
  keywords: string;
  backHomeLabel: string;
  h1: string;
  /** Use `{ml}` for spreadsheet catalogue URL. */
  introHtml: string;
  badge: string;
  officialFaqHrefLabel: string;
  /** `{count}` = number of excerpts. */
  officialMetaHtml: string;
  sourcePageLabel: string;
};

const en: HowToBuyCopy = {
  title: 'How to Buy with LitBuy Spreadsheet — Step-by-Step | litsspreadsheet.com',
  description:
    'LitBuy Spreadsheet buying guide: browse curated links, copy Taobao/Weidian/1688 URLs, paste into LitBuy, review warehouse QC, and ship your parcel.',
  keywords:
    'LitBuy Spreadsheet how to buy, paste link LitBuy, warehouse QC guide, Taobao agent tutorial',
  backHomeLabel: '← Back to home',
  h1: 'How to buy',
  introHtml: `This page covers the standard <strong>LitBuy Spreadsheet</strong> flow: find a listing in the <a href="{ml}" target="_blank" rel="noopener noreferrer">catalogue browse</a>, copy the product URL, and complete payment, QC, and shipping inside <a href="https://www.litbuy.com/" target="_blank" rel="noopener noreferrer">LitBuy</a>. UI labels may change—follow what you see when logged in.<br/><br/>Below the FAQ excerpts you will find the full <a href="#spreadsheet-guide">spreadsheet guide</a>—category browse, column tips, and marketplace notes.`,
  badge: 'LitBuy FAQ excerpts · reference',
  officialFaqHrefLabel: 'Live LitBuy FAQ ↗',
  officialMetaHtml: `Sections below mirror LitBuy help text (collapsed by default). If anything conflicts with the <a href="https://www.litbuy.com/" target="_blank" rel="noopener noreferrer">live FAQ</a>, trust LitBuy. <strong>{count}</strong> excerpts shown.`,
  sourcePageLabel: 'Source ↗',
};

const de: HowToBuyCopy = {
  title: 'LitBuy Spreadsheet kaufen — Schritt für Schritt | litsspreadsheet.com',
  description:
    'LitBuy Spreadsheet Anleitung: kuratierte Links durchsuchen, Taobao/Weidian/1688-URLs kopieren, bei LitBuy einfügen, Lager-QC prüfen und Paket versenden.',
  keywords:
    'LitBuy Spreadsheet Anleitung, Produktlink einfügen, QC Magazin, Taobao Agent',
  backHomeLabel: '← Zur Startseite',
  h1: 'So kaufen',
  introHtml: `Diese Seite beschreibt den <strong>LitBuy Spreadsheet</strong>-Workflow: Listing im <a href="{ml}" target="_blank" rel="noopener noreferrer">Katalog-Browse</a> finden, Produkt-URL kopieren und Zahlung, QC sowie Versand bei <a href="https://www.litbuy.com/" target="_blank" rel="noopener noreferrer">LitBuy</a> abschließen. UI-Texte können sich ändern.`,
  badge: 'LitBuy FAQ-Auszüge · Referenz',
  officialFaqHrefLabel: 'Live-FAQ LitBuy ↗',
  officialMetaHtml: `Die folgenden Abschnitte spiegeln LitBuy-Hilfetexte (standardmäßig eingeklappt). Bei Widersprüchen gilt die <a href="https://www.litbuy.com/" target="_blank" rel="noopener noreferrer">aktuelle FAQ</a>. <strong>{count}</strong> Auszüge.`,
  sourcePageLabel: 'Quelle ↗',
};

const pt: HowToBuyCopy = {
  title: 'Como comprar com LitBuy Spreadsheet — Passo a passo | litsspreadsheet.com',
  description:
    'Guia LitBuy Spreadsheet: navegue links curados, copie URLs Taobao/Weidian/1688, cole no LitBuy, revise QC do armazém e envie seu pacote.',
  keywords:
    'LitBuy Spreadsheet como comprar, colar URL LitBuy, QC armazém, agente Taobao',
  backHomeLabel: '← Voltar ao início',
  h1: 'Como comprar',
  introHtml: `Esta página explica o fluxo do <strong>LitBuy Spreadsheet</strong>: encontrar um anúncio no <a href="{ml}" target="_blank" rel="noopener noreferrer">catálogo</a>, copiar a URL do produto e concluir pagamento, QC e envio no <a href="https://www.litbuy.com/" target="_blank" rel="noopener noreferrer">LitBuy</a>. Os rótulos da interface podem mudar.`,
  badge: 'Trechos LitBuy FAQ · referência',
  officialFaqHrefLabel: 'FAQ oficial LitBuy ↗',
  officialMetaHtml: `As seções abaixo espelham textos de ajuda do LitBuy (recolhidas por padrão). Em caso de conflito, prevalece a <a href="https://www.litbuy.com/" target="_blank" rel="noopener noreferrer">FAQ ao vivo</a>. <strong>{count}</strong> trechos.`,
  sourcePageLabel: 'Fonte ↗',
};

const es: HowToBuyCopy = {
  title: 'Cómo comprar con LitBuy Spreadsheet — Paso a paso | litsspreadsheet.com',
  description:
    'Guía LitBuy Spreadsheet: explore enlaces curados, copie URLs Taobao/Weidian/1688, pegue en LitBuy, revise QC de almacén y envíe su paquete.',
  keywords:
    'LitBuy Spreadsheet cómo comprar, pegar enlace LitBuy, QC almacén, agente Taobao',
  backHomeLabel: '← Volver al inicio',
  h1: 'Cómo comprar',
  introHtml: `Esta página resume el flujo del <strong>LitBuy Spreadsheet</strong>: encontrar un anuncio en el <a href="{ml}" target="_blank" rel="noopener noreferrer">catálogo</a>, copiar la URL del producto y completar pago, QC y envío en <a href="https://www.litbuy.com/" target="_blank" rel="noopener noreferrer">LitBuy</a>. Las etiquetas de la interfaz pueden cambiar.`,
  badge: 'Extractos LitBuy FAQ · referencia',
  officialFaqHrefLabel: 'FAQ LitBuy en vivo ↗',
  officialMetaHtml: `Las secciones siguientes reflejan textos de ayuda de LitBuy (plegadas por defecto). Si hay conflicto, prevalece la <a href="https://www.litbuy.com/" target="_blank" rel="noopener noreferrer">FAQ vigente</a>. <strong>{count}</strong> extractos.`,
  sourcePageLabel: 'Fuente ↗',
};

const fr: HowToBuyCopy = {
  title: 'Comment acheter avec LitBuy Spreadsheet — Étape par étape | litsspreadsheet.com',
  description:
    'Guide LitBuy Spreadsheet : parcourez les liens curés, copiez les URL Taobao/Weidian/1688, collez dans LitBuy, vérifiez le QC entrepôt et expédiez.',
  keywords:
    'LitBuy Spreadsheet comment acheter, coller lien LitBuy, QC entrepôt, agent Taobao',
  backHomeLabel: '← Retour à l’accueil',
  h1: 'Comment acheter',
  introHtml: `Cette page décrit le flux <strong>LitBuy Spreadsheet</strong> : trouver une annonce dans le <a href="{ml}" target="_blank" rel="noopener noreferrer">catalogue</a>, copier l’URL produit et finaliser paiement, QC et expédition sur <a href="https://www.litbuy.com/" target="_blank" rel="noopener noreferrer">LitBuy</a>. Les libellés de l’interface peuvent changer.`,
  badge: 'Extraits LitBuy FAQ · référence',
  officialFaqHrefLabel: 'FAQ LitBuy officielle ↗',
  officialMetaHtml: `Les sections ci-dessous reprennent l’aide LitBuy (repliées par défaut). En cas d’écart, la <a href="https://www.litbuy.com/" target="_blank" rel="noopener noreferrer">FAQ en ligne</a> prime. <strong>{count}</strong> extraits.`,
  sourcePageLabel: 'Source ↗',
};

const it: HowToBuyCopy = {
  title: 'Come acquistare con LitBuy Spreadsheet — Passo dopo passo | litsspreadsheet.com',
  description:
    'Guida LitBuy Spreadsheet: sfoglia link curati, copia URL Taobao/Weidian/1688, incolla su LitBuy, controlla QC magazzino e spedisci.',
  keywords:
    'LitBuy Spreadsheet come acquistare, incolla URL LitBuy, QC magazzino, agente Taobao',
  backHomeLabel: '← Torna alla home',
  h1: 'Come acquistare',
  introHtml: `Questa pagina illustra il flusso <strong>LitBuy Spreadsheet</strong>: trovare un annuncio nel <a href="{ml}" target="_blank" rel="noopener noreferrer">catalogo</a>, copiare l’URL prodotto e completare pagamento, QC e spedizione su <a href="https://www.litbuy.com/" target="_blank" rel="noopener noreferrer">LitBuy</a>. Le etichette dell’interfaccia possono cambiare.`,
  badge: 'Estratti LitBuy FAQ · riferimento',
  officialFaqHrefLabel: 'FAQ LitBuy live ↗',
  officialMetaHtml: `Le sezioni seguenti riprendono l’aiuto LitBuy (chiuse di default). In caso di conflitto, vale la <a href="https://www.litbuy.com/" target="_blank" rel="noopener noreferrer">FAQ aggiornata</a>. <strong>{count}</strong> estratti.`,
  sourcePageLabel: 'Fonte ↗',
};

const pl: HowToBuyCopy = {
  title: 'Jak kupować przez LitBuy Spreadsheet — Krok po kroku | litsspreadsheet.com',
  description:
    'Poradnik LitBuy Spreadsheet: przeglądaj linki, kopiuj URL Taobao/Weidian/1688, wklej w LitBuy, sprawdź QC magazynu i wyślij paczkę.',
  keywords:
    'LitBuy Spreadsheet jak kupować, wklej URL LitBuy, QC magazyn, agent Taobao',
  backHomeLabel: '← Wróć na stronę główną',
  h1: 'Jak kupować',
  introHtml: `Ta strona opisuje standardowy przepływ <strong>LitBuy Spreadsheet</strong>: znajdź ofertę w <a href="{ml}" target="_blank" rel="noopener noreferrer">katalogu</a>, skopiuj URL produktu i dokończ płatność, QC oraz wysyłkę w <a href="https://www.litbuy.com/" target="_blank" rel="noopener noreferrer">LitBuy</a>. Etykiety interfejsu mogą się zmieniać.`,
  badge: 'Fragmenty LitBuy FAQ · dokumentacja',
  officialFaqHrefLabel: 'FAQ LitBuy na żywo ↗',
  officialMetaHtml: `Poniższe sekcje odzwierciedlają pomoc LitBuy (domyślnie zwinięte). W razie rozbieżności obowiązuje <a href="https://www.litbuy.com/" target="_blank" rel="noopener noreferrer">aktualne FAQ</a>. <strong>{count}</strong> fragmentów.`,
  sourcePageLabel: 'Źródło ↗',
};

export const HOW_TO_BUY_COPY: Record<RouteLocale, HowToBuyCopy> = {
  en,
  de,
  pt,
  es,
  fr,
  it,
  pl,
};

export function getHowToBuyCopy(locale: string): HowToBuyCopy {
  const lc = locale as RouteLocale;
  return HOW_TO_BUY_COPY[lc] ?? en;
}

export function hydrateHowToBuyCopy(raw: HowToBuyCopy, mlHref: string, count: number): HowToBuyCopy {
  return {
    ...raw,
    officialMetaHtml: raw.officialMetaHtml.replaceAll('{count}', String(count)),
    introHtml: raw.introHtml.replace(/\{ml\}/g, mlHref),
  };
}
