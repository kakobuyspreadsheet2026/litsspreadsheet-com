import type { RouteLocale } from '../config';

export type BlogPageCopy = {
  title: string;
  description: string;
  keywords: string;
  h1: string;
  breadcrumbHomeLabel: string;
  introHtml: string;
  emptyListMessage: string;
  paginationTitleAffixBeforePipeTemplate: string;
  blogEnglishBannerLead: string;
  blogEnglishBannerLinkText: string;
  postCardEnglishNote: string;
  paginationPrevious: string;
  paginationNext: string;
  paginationPageSummaryTemplate: string;
  paginationNavAriaLabel: string;
};

const en: BlogPageCopy = {
  title: 'Blog · LitBuy Spreadsheet hub | litsspreadsheet.com',
  description:
    'Long-form guides on LitBuy Spreadsheet workflows, sourcing discipline, warehouse QC, and freight—published on a steady cadence.',
  keywords:
    'LitBuy Spreadsheet blog, agent shopping guides, spreadsheet sourcing, LitBuy QC freight',
  h1: 'Blog',
  breadcrumbHomeLabel: 'Home',
  introHtml: `<p class="section-intro">Editorial articles land here first, newest posts shown first — ten per page; use Next below for older entries.</p>`,
  emptyListMessage: 'New guides are on the way—check back soon.',
  paginationTitleAffixBeforePipeTemplate: ' · Page {current}',
  blogEnglishBannerLead: '',
  blogEnglishBannerLinkText: '',
  postCardEnglishNote: '',
  paginationPrevious: 'Previous',
  paginationNext: 'Next',
  paginationPageSummaryTemplate: 'Page {current} of {total}',
  paginationNavAriaLabel: 'Blog archive pagination',
};

const byLocale: Record<RouteLocale, BlogPageCopy> = {
  en,
  de: {
    ...en,
    title: 'Blog · LitBuy-Einkaufsführer & Tipps | litsspreadsheet.com',
    description:
      'Längere Redaktionsartikel zu LitBuy Spreadsheet, Beschaffung, Lager-QC und Fracht — im gleichen Rhythmus wie die englische Ausgabe.',
    keywords: 'LitBuy Spreadsheet Blog, Agent-Shopping, Spreadsheet Einkauf, LitBuy QC Fracht',
    breadcrumbHomeLabel: 'Startseite',
    introHtml: `<p class="section-intro">Redaktionelle Artikel erscheinen hier, neueste zuerst — zehn Beiträge pro Seite; ältere über „Weiter“ unten.</p>`,
    emptyListMessage: 'Neue Beiträge folgen in Kürze.',
    paginationTitleAffixBeforePipeTemplate: ' · Seite {current}',
    blogEnglishBannerLead:
      'Die verlinkten Blogbeiträge sind vollständig auf Englisch; diese Übersichtsseite ist lokalisiert.',
    blogEnglishBannerLinkText: 'Über uns',
    postCardEnglishNote: 'Vollständiger Artikel auf Englisch',
    paginationPrevious: 'Zurück',
    paginationNext: 'Weiter',
    paginationPageSummaryTemplate: 'Seite {current} von {total}',
    paginationNavAriaLabel: 'Seiten der Blog-Übersicht',
  },
  pt: {
    ...en,
    title: 'Blog · Guias de Compra & Dicas LitBuy | litsspreadsheet.com',
    description:
      'Posts editoriais longos sobre fluxos LitBuy Spreadsheet, sourcing, QC em armazém e frete com pé no chão.',
    keywords: 'Blog LitBuy Spreadsheet, guias agente, sourcing spreadsheet',
    breadcrumbHomeLabel: 'Início',
    introHtml: `<p class="section-intro">Artigos editoriais aparecem aqui primeiro, mais novos primeiro — dez por página; entradas mais antigas em „Próxima“, abaixo.</p>`,
    emptyListMessage: 'Novos artigos em breve.',
    paginationTitleAffixBeforePipeTemplate: ' · Página {current}',
    blogEnglishBannerLead:
      'Os posts listados estão integralmente em inglês; esta página de índice segue o idioma do site.',
    blogEnglishBannerLinkText: 'Sobre',
    postCardEnglishNote: 'Artigo completo em inglês',
    paginationPrevious: 'Anterior',
    paginationNext: 'Próxima',
    paginationPageSummaryTemplate: 'Página {current} de {total}',
    paginationNavAriaLabel: 'Paginação do arquivo do blog',
  },
  es: {
    ...en,
    title: 'Blog · Guías de Compra & Consejos LitBuy | litsspreadsheet.com',
    description:
      'Artículos editoriales largos sobre flujos LitBuy Spreadsheet, sourcing, QC en almacén y flete realista.',
    keywords: 'Blog LitBuy Spreadsheet, guías agente, sourcing spreadsheet',
    breadcrumbHomeLabel: 'Inicio',
    introHtml: `<p class="section-intro">Los artículos editoriales aparecen aquí primero, los más nuevos arriba — diez por página; entradas más antiguas con „Siguiente“, abajo.</p>`,
    emptyListMessage: 'Nuevos artículos próximamente.',
    paginationTitleAffixBeforePipeTemplate: ' · Página {current}',
    blogEnglishBannerLead:
      'Las entradas enlazadas están íntegramente en inglés; esta página índice está localizada.',
    blogEnglishBannerLinkText: 'Acerca de',
    postCardEnglishNote: 'Artículo completo en inglés',
    paginationPrevious: 'Anterior',
    paginationNext: 'Siguiente',
    paginationPageSummaryTemplate: 'Página {current} de {total}',
    paginationNavAriaLabel: 'Paginación del archivo del blog',
  },
  fr: {
    ...en,
    title: 'Blog · Guides d’achat & Conseils LitBuy | litsspreadsheet.com',
    description:
      'Articles éditoriaux longs sur les workflows LitBuy Spreadsheet, sourcing, QC entrepôt et fret réaliste.',
    keywords: 'Blog LitBuy Spreadsheet, guides agent, sourcing spreadsheet',
    breadcrumbHomeLabel: 'Accueil',
    introHtml: `<p class="section-intro">Les articles éditoriaux arrivent ici en premier, les plus récents en tête — dix par page ; plus anciens via „Suivant“, ci-dessous.</p>`,
    emptyListMessage: 'De nouveaux articles arrivent bientôt.',
    paginationTitleAffixBeforePipeTemplate: ' · Page {current}',
    blogEnglishBannerLead:
      'Les articles liés sont entièrement en anglais ; cette page d’index est localisée.',
    blogEnglishBannerLinkText: 'À propos',
    postCardEnglishNote: 'Article complet en anglais',
    paginationPrevious: 'Précédent',
    paginationNext: 'Suivant',
    paginationPageSummaryTemplate: 'Page {current} sur {total}',
    paginationNavAriaLabel: 'Pagination de l’archive du blog',
  },
  it: {
    ...en,
    title: 'Blog · Guide all\'acquisto & Consigli LitBuy | litsspreadsheet.com',
    description:
      'Articoli editoriali lunghi su workflow LitBuy Spreadsheet, sourcing, QC in magazzino e spedizioni realistiche.',
    keywords: 'Blog LitBuy Spreadsheet, guide agent, sourcing spreadsheet',
    breadcrumbHomeLabel: 'Home',
    introHtml: `<p class="section-intro">Gli articoli editoriali arrivano qui per primi, i più recenti in cima — dieci per pagina; i più vecchi con „Successiva“, sotto.</p>`,
    emptyListMessage: 'Nuovi articoli in arrivo.',
    paginationTitleAffixBeforePipeTemplate: ' · Pagina {current}',
    blogEnglishBannerLead:
      'Gli articoli collegati sono interamente in inglese; questa pagina indice è localizzata.',
    blogEnglishBannerLinkText: 'Informazioni',
    postCardEnglishNote: 'Articolo completo in inglese',
    paginationPrevious: 'Precedente',
    paginationNext: 'Successiva',
    paginationPageSummaryTemplate: 'Pagina {current} di {total}',
    paginationNavAriaLabel: 'Paginazione dell’archivio del blog',
  },
  pl: {
    ...en,
    title: 'Blog · Poradniki zakupowe & Wskazówki LitBuy | litsspreadsheet.com',
    description:
      'Dłuższe artykuły redakcyjne o workflow LitBuy Spreadsheet, sourcingu, QC w magazynie i realnym frachcie.',
    keywords: 'Blog LitBuy Spreadsheet, poradniki agent, sourcing spreadsheet',
    breadcrumbHomeLabel: 'Strona główna',
    introHtml: `<p class="section-intro">Artykuły redakcyjne trafiają tu najpierw, najnowsze na górze — dziesięć na stronę; starsze przez „Następna“, poniżej.</p>`,
    emptyListMessage: 'Nowe artykuły już wkrótce.',
    paginationTitleAffixBeforePipeTemplate: ' · Strona {current}',
    blogEnglishBannerLead:
      'Powiązane wpisy są w całości po angielsku; ta strona indeksu jest zlokalizowana.',
    blogEnglishBannerLinkText: 'O nas',
    postCardEnglishNote: 'Pełny artykuł po angielsku',
    paginationPrevious: 'Poprzednia',
    paginationNext: 'Następna',
    paginationPageSummaryTemplate: 'Strona {current} z {total}',
    paginationNavAriaLabel: 'Paginacja archiwum bloga',
  },
};

export function getBlogCopy(locale: string): BlogPageCopy {
  const lc = locale as RouteLocale;
  return byLocale[lc] ?? byLocale.en;
}
