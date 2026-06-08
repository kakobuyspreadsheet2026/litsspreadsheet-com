/** Header nav pills (shown on embedded + full header). Categories dropdown keeps English SKU labels intentionally. */

import type { RouteLocale } from './config';

const navTexts: Record<
  RouteLocale,
  {
    howToBuy: string;
    news: string;
    blog: string;
    spreadsheet: string;
    about: string;
    categories: string;
  }
> = {
  en: {
    howToBuy: 'How to buy',
    news: 'News',
    blog: 'Blog',
    spreadsheet: 'Spreadsheet',
    about: 'About',
    categories: 'Categories',
  },
  de: {
    howToBuy: 'So kaufen',
    news: 'News',
    blog: 'Blog',
    spreadsheet: 'Spreadsheet',
    about: 'Über uns',
    categories: 'Kategorien',
  },
  pt: {
    howToBuy: 'Como comprar',
    news: 'Notícias',
    blog: 'Blog',
    spreadsheet: 'Planilha',
    about: 'Sobre',
    categories: 'Categorias',
  },
  es: {
    howToBuy: 'Cómo comprar',
    news: 'Noticias',
    blog: 'Blog',
    spreadsheet: 'Hoja',
    about: 'Acerca de',
    categories: 'Categorías',
  },
  fr: {
    howToBuy: 'Comment acheter',
    news: 'Actus',
    blog: 'Blog',
    spreadsheet: 'Feuille',
    about: 'À propos',
    categories: 'Catégories',
  },
  it: {
    howToBuy: 'Come acquistare',
    news: 'Novità',
    blog: 'Blog',
    spreadsheet: 'Foglio',
    about: 'Informazioni',
    categories: 'Categorie',
  },
  pl: {
    howToBuy: 'Jak kupować',
    news: 'Aktualności',
    blog: 'Blog',
    spreadsheet: 'Arkusz',
    about: 'O nas',
    categories: 'Kategorie',
  },
};

export function headerNavTexts(locale: string) {
  const lc = locale as RouteLocale;
  return navTexts[lc] ?? navTexts.en;
}
