import type { HomeStubContent } from '../types';
import { pillsFor } from './categoryPaths';

export const plHome: HomeStubContent = {
  title: 'LitBuy Spreadsheet 2026 — Linki, Kategorie i Przewodnik QC',
  description:
    'Hub LitBuy Spreadsheet na litsspreadsheet.com: znaleziska Taobao, Weidian i 1688 według kategorii, wklej linki w LitBuy i przeczytaj wskazówki QC przed wysyłką.',
  keywords:
    'litbuy spreadsheet, litbuy spreadsheet 2026, litbuy spreadsheet links, litbuy spreadsheet taobao, litbuy spreadsheet qc, litbuy spreadsheet guide',
  webPageName: 'LitBuy Spreadsheet 2026 · litsspreadsheet.com',
  webPageKeywords: [
    'litbuy spreadsheet hub',
    'litbuy spreadsheet kategorie',
    'litbuy spreadsheet litrepstar',
    'litbuy paste link workflow',
    'litbuy warehouse qc',
  ],
  hero: {
    h1: 'LitBuy Spreadsheet Hub',
    kicker: 'litbuy spreadsheet · Taobao · Weidian · 1688',
    body:
      'litsspreadsheet.com to Twój punkt startowy LitBuy Spreadsheet: wybierz kategorię, otwórz oferty na Litrepstar, skopiuj URL produktu i dokończ checkout na LitBuy z QC w magazynie przed wysyłką międzynarodową.',
    ctaBrowse: 'Otwórz katalog LitBuy Spreadsheet →',
    ctaLogin: 'Zaloguj się na LitBuy →',
    heroPlaneAlt: 'LitBuy Spreadsheet hero · litsspreadsheet.com',
    searchAria: 'Przeszukaj katalog LitBuy Spreadsheet',
    searchPlaceholder: 'Szukaj stylów, marek lub słów kluczowych…',
    searchByImage: 'Szukaj po obrazie',
    searchSubmit: 'Szukaj',
    searchByImageAria: 'Wyszukiwanie po obrazie otwiera katalog w nowej karcie',
  },
  categoriesAria: 'Skróty kategorii LitBuy Spreadsheet',
  exploreTitle: 'Kategorie LitBuy Spreadsheet',
  redditAria: 'Społeczność LitBuy na Reddit (otwiera w nowej karcie)',
  redditSnooAlt: 'Reddit — społeczność LitBuy Spreadsheet',
  guideH2: 'Jak działa workflow LitBuy Spreadsheet',
  guideIntro:
    'Cztery pytania, które zadaje każdy nowy użytkownik LitBuy Spreadsheet. Rozwiń wiersz po szybką odpowiedź lub otwórz How to buy po zrzuty ekranu paste-link.',
  sections: [
    {
      h3: 'Czym jest LitBuy Spreadsheet?',
      paragraphs: [
        'LitBuy Spreadsheet to kurowany indeks linków produktów Taobao, Weidian i 1688 stworzony dla kupujących LitBuy. Wiersze zawierają zdjęcia, wskazówki cenowe i notatki sprzedawcy, aby wkleić stabilny URL w LitBuy zamiast szukać na ślepo na chińskich marketplace’ach.',
        'litsspreadsheet.com to warstwa przewodnika: mapujemy kategorie, linkujemy do katalogu na żywo na Litrepstar i kierujemy do LitBuy po płatność, zdjęcia QC i eksport paczek.',
      ],
    },
    {
      h3: 'Jak kupić z wiersza spreadsheet?',
      paragraphs: [
        'Otwórz ofertę, skopiuj URL marketplace, wklej w LitBuy, potwierdź rozmiar i kolor, następnie zapłać krajową cenę sprzedawcy.',
        'Gdy produkt trafi do magazynu LitBuy, sprawdź zdjęcia QC na koncie. Zatwierdź, wymień lub zwróć, zanim cokolwiek wyjedzie za granicę.',
      ],
    },
    {
      h3: 'Dlaczego łączyć spreadsheet z LitBuy?',
      paragraphs: [
        'Chińscy sprzedawcy rzadko wysyłają międzynarodowo sami. LitBuy kupuje lokalnie, przechowuje bezpiecznie, fotografuje do QC i może połączyć wiele zamówień w jedną paczkę wyjściową.',
        'Używaj litsspreadsheet.com do odkrywania linków, a LitBuy zajmie się zakupem, inspekcją i wysyłką w jednym miejscu.',
      ],
    },
    {
      h3: 'Co jeśli link spreadsheet przestanie działać?',
      paragraphs: [
        'Oferty zmieniają się szybko. Gdy wiersz zwraca 404, wybierz inny produkt w tej samej kategorii na Litrepstar lub wróć do siatki strony głównej.',
        'Jeśli LitBuy nie może kupić po Twojej płatności, agent zwraca środki na saldo, aby wkleić link zastępczy.',
      ],
    },
  ],
  ctaHeading: 'Zacznij przeglądać LitBuy Spreadsheet',
  ctaIntro: 'Otwórz katalog na żywo pod',
  ctaIntroSuffix: ' — odkrywaj linki tutaj, wklejaj i płać na LitBuy.',
  ctaFooterNote: 'Zawsze ponownie sprawdź QC, polityki sprzedawcy i wyceny wysyłki na LitBuy przed eksportem paczki.',
  sheetLinkLabel: 'LitBuy Spreadsheet na Litrepstar',
  categoryPills: pillsFor({
    shoes: { label: 'Shoes', alt: 'LitBuy Spreadsheet sneakers and boots' },
    't-shirts': { label: 'T-Shirts', alt: 'LitBuy Spreadsheet tees and graphics' },
    pants: { label: 'Pants/Shorts', alt: 'LitBuy Spreadsheet pants and joggers' },
    accessories: { label: 'Accessories', alt: 'LitBuy Spreadsheet belts and jewellery' },
    bags: { label: 'Bags', alt: 'LitBuy Spreadsheet bags and backpacks' },
    electronics: { label: 'Electronics', alt: 'LitBuy Spreadsheet tech and audio' },
    jackets: { label: 'Jackets', alt: 'LitBuy Spreadsheet jackets and shells' },
    hoodies: { label: 'Hoodies/Sweaters', alt: 'LitBuy Spreadsheet hoodies and knits' },
    headwear: { label: 'Headwear', alt: 'LitBuy Spreadsheet caps and beanies' },
    jersey: { label: 'Jersey', alt: 'LitBuy Spreadsheet jerseys and mesh tops' },
    perfume: { label: 'Perfume', alt: 'LitBuy Spreadsheet fragrance picks' },
    other: { label: 'Other stuff', alt: 'LitBuy Spreadsheet lifestyle finds' },
  }),
  footer: {
    disclaimerLabel: 'Zastrzeżenie:',
    disclaimerHtml:
      'litsspreadsheet.com to niezależny przewodnik <strong>LitBuy Spreadsheet</strong> — tylko skróty kategorii, wskazówki paste i kontekst QC. Checkout i zdjęcia magazynowe odbywają się na <a href="https://www.litbuy.com/" target="_blank" rel="noopener noreferrer">LitBuy</a> i w <a href="https://litrepstar.com/en" target="_blank" rel="noopener noreferrer">katalogu Litrepstar</a>. Nie przetwarzamy płatności ani paczek.',
    copyrightLine:
      '© 2026 litsspreadsheet.com · Hub SEO LitBuy Spreadsheet — to nie strona checkout LitBuy.',
  },
  categoryPage: {
    titleTemplate: 'LitBuy Spreadsheet {uiName} 2026 — Wybrane Picks',
    descriptionTemplate:
      'Przeglądaj LitBuy Spreadsheet {uiNameLower} na 2026: redakcyjne picks z linkami do ofert Litrepstar gotowymi do wklejenia w LitBuy.',
    introTemplate:
      'Redakcyjna ścieżka {uiNameLower} dla kupujących LitBuy Spreadsheet. Karty otwierają Litrepstar w nowej karcie — wklej URL w LitBuy, gdy jesteś gotowy do zakupu.',
    homeHubBackLink: '← Strona główna LitBuy Spreadsheet',
    introToggleLabel: 'O tej kategorii',
    externalBtnTemplate: 'Przeglądaj {uiName} na Litrepstar →',
    noProducts: 'Brak picks w tej ścieżce — spróbuj innej kategorii LitBuy Spreadsheet.',
  },
};
