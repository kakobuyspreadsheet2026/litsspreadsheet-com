import type { RouteLocale } from '../config';

export type HomeSpreadsheetPromoCopy = {
  title: string;
  body: string;
  bullets: readonly string[];
  ctaSpreadsheet: string;
  ctaHowToBuy: string;
};

const en: HomeSpreadsheetPromoCopy = {
  title: 'LitBuy Spreadsheet tips before you paste',
  body:
    'A row looks fine until the link dies, seller photos mislead, or shipping costs surprise you at export. Scan these basics first.',
  bullets: [
    'Copy the product URL—not the shop homepage',
    'Trust LitBuy warehouse photos, not spreadsheet previews',
    'Plan for duties, insurance, and volumetric shipping',
  ],
  ctaSpreadsheet: 'LitBuy Spreadsheet guide →',
  ctaHowToBuy: 'How to buy →',
};

const byLocale: Record<RouteLocale, HomeSpreadsheetPromoCopy> = {
  en,
  de: {
    title: 'LitBuy Spreadsheet: Tipps vor dem Einfügen',
    body:
      'Eine Zeile wirkt sicher—bis der Link stirbt, Vorschaubilder trügen oder die Fracht beim Export überrascht. Kurz die Grundlagen lesen.',
    bullets: [
      'Produkt-URL kopieren, nicht die Shop-Startseite',
      'LitBuy-Lagerfotos zählen, nicht Spreadsheet-Vorschauen',
      'Zoll, Versicherung und Volumengewicht einplanen',
    ],
    ctaSpreadsheet: 'LitBuy Spreadsheet Leitfaden →',
    ctaHowToBuy: 'So kaufen →',
  },
  pt: {
    title: 'LitBuy Spreadsheet: dicas antes de colar',
    body:
      'A linha parece certa até o link cair, a foto enganar ou o frete surpreender no export. Leia o básico primeiro.',
    bullets: [
      'Copie a URL do produto, não a página da loja',
      'Confie nas fotos do armazém LitBuy, não nas prévias',
      'Preveja tributos, seguro e frete volumétrico',
    ],
    ctaSpreadsheet: 'Guia LitBuy Spreadsheet →',
    ctaHowToBuy: 'Como comprar →',
  },
  es: {
    title: 'LitBuy Spreadsheet: consejos antes de pegar',
    body:
      'La fila parece bien hasta que el enlace falla, la foto engaña o el flete sorprende al exportar. Repasa lo básico primero.',
    bullets: [
      'Copia la URL del producto, no la página de la tienda',
      'Confía en las fotos de almacén LitBuy, no en las vistas previas',
      'Calcula aranceles, seguro y envío volumétrico',
    ],
    ctaSpreadsheet: 'Guía LitBuy Spreadsheet →',
    ctaHowToBuy: 'Cómo comprar →',
  },
  fr: {
    title: 'LitBuy Spreadsheet : conseils avant de coller',
    body:
      'La ligne semble correcte jusqu’au lien mort, à la photo trompeuse ou au fret qui surprend à l’export. Lisez l’essentiel d’abord.',
    bullets: [
      'Copiez l’URL produit, pas la page boutique',
      'Fiez-vous aux photos entrepôt LitBuy, pas aux aperçus',
      'Anticipez droits, assurance et fret volumétrique',
    ],
    ctaSpreadsheet: 'Guide LitBuy Spreadsheet →',
    ctaHowToBuy: 'Comment acheter →',
  },
  it: {
    title: 'LitBuy Spreadsheet: consigli prima dell’incolla',
    body:
      'La riga sembra a posto finché il link non muore, l’anteprima inganna o il freight sorprende all’export. Leggi le basi prima.',
    bullets: [
      'Copia l’URL prodotto, non la homepage del negozio',
      'Fidati delle foto magazzino LitBuy, non delle anteprime',
      'Pianifica dazi, assicurazione e spedizione volumetrica',
    ],
    ctaSpreadsheet: 'Guida LitBuy Spreadsheet →',
    ctaHowToBuy: 'Come acquistare →',
  },
  pl: {
    title: 'LitBuy Spreadsheet: wskazówki przed wklejeniem',
    body:
      'Wiersz wygląda dobrze—dopóki link nie padnie, podgląd nie kłamie albo fracht nie zaskoczy przy eksporcie. Najpierw przeczytaj podstawy.',
    bullets: [
      'Kopiuj URL produktu, nie stronę sklepu',
      'Ufaj zdjęciom magazynu LitBuy, nie podglądom w arkuszu',
      'Uwzględnij cła, ubezpieczenie i wagę gabarytową',
    ],
    ctaSpreadsheet: 'Przewodnik LitBuy Spreadsheet →',
    ctaHowToBuy: 'Jak kupować →',
  },
};

export function getHomeSpreadsheetPromoCopy(locale: string): HomeSpreadsheetPromoCopy {
  const lc = locale as RouteLocale;
  return byLocale[lc] ?? byLocale.en;
}
