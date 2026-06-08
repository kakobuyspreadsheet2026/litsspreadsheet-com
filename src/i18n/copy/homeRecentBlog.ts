import type { RouteLocale } from '../config';

export type HomeRecentBlogCopy = {
  heading: string;
  viewAll: string;
  emptyNote: string;
  englishArticlesNote: string;
  lastUpdatedLabel: string;
  newBadge: string;
};

const en: HomeRecentBlogCopy = {
  heading: 'Latest from the blog',
  viewAll: 'View all posts →',
  emptyNote: 'New LitBuy guides coming soon.',
  englishArticlesNote: '',
  lastUpdatedLabel: 'Feed refreshed',
  newBadge: 'New',
};

const byLocale: Record<RouteLocale, HomeRecentBlogCopy> = {
  en,
  de: {
    heading: 'Neueste im Blog',
    viewAll: 'Alle Beiträge →',
    emptyNote: 'Neue LitBuy-Guides folgen in Kürze.',
    englishArticlesNote:
      'Beiträge derzeit vollständig auf Englisch; Kurztitel und Daten erscheinen hier lokalisiert.',
    lastUpdatedLabel: 'Stand',
    newBadge: 'Neu',
  },
  pt: {
    heading: 'Últimas no blog',
    viewAll: 'Ver todas as publicações →',
    emptyNote: 'Novos guias LitBuy em breve.',
    englishArticlesNote:
      'Posts integralmente em inglês por agora; títulos e datas seguem o idioma da página.',
    lastUpdatedLabel: 'Atualizado',
    newBadge: 'Novo',
  },
  es: {
    heading: 'Lo último en el blog',
    viewAll: 'Ver todas las entradas →',
    emptyNote: 'Nuevas guías LitBuy próximamente.',
    englishArticlesNote:
      'Artículos íntegramente en inglés por ahora; títulos y fechas siguen el idioma del sitio.',
    lastUpdatedLabel: 'Actualizado',
    newBadge: 'Nuevo',
  },
  fr: {
    heading: 'Derniers articles du blog',
    viewAll: 'Voir tous les articles →',
    emptyNote: 'Nouveaux guides LitBuy bientôt.',
    englishArticlesNote:
      'Articles entièrement en anglais pour l’instant ; titres et dates suivent la langue du site.',
    lastUpdatedLabel: 'Mis à jour',
    newBadge: 'Nouveau',
  },
  it: {
    heading: 'Ultimi dal blog',
    viewAll: 'Vedi tutti gli articoli →',
    emptyNote: 'Nuove guide LitBuy in arrivo.',
    englishArticlesNote:
      'Articoli per ora interamente in inglese; titoli e date seguono la lingua della pagina.',
    lastUpdatedLabel: 'Aggiornato',
    newBadge: 'Nuovo',
  },
  pl: {
    heading: 'Najnowsze na blogu',
    viewAll: 'Zobacz wszystkie wpisy →',
    emptyNote: 'Nowe poradniki LitBuy już wkrótce.',
    englishArticlesNote:
      'Wpisy na razie w całości po angielsku; tytuły i daty są lokalnie na tej stronie.',
    lastUpdatedLabel: 'Aktualizacja',
    newBadge: 'Nowe',
  },
};

export function getHomeRecentBlogCopy(locale: string): HomeRecentBlogCopy {
  const lc = locale as RouteLocale;
  return byLocale[lc] ?? byLocale.en;
}
