import type { RouteLocale } from '../config';

export type HomeHubIntroCopy = {
  title: string;
  paragraphs: readonly string[];
};

const en: HomeHubIntroCopy = {
  title: 'Your LitBuy Spreadsheet starting point',
  paragraphs: [
    'The LitBuy Spreadsheet collects thousands of Taobao, Weidian, and 1688 links in one place. We sort them by category so you can find quality picks without navigating Chinese marketplaces on your own.',
    'The trending grid above highlights fresh rows we are watching. Sellers update listings often—if a link breaks, browse another pick in the same category or open the full catalogue.',
    'We provide the links and sizing notes. LitBuy handles payment, warehouse QC photos, and international shipping. Copy a URL, paste it into LitBuy, and you are ready to order.',
  ],
};

const byLocale: Record<RouteLocale, HomeHubIntroCopy> = {
  en,
  de: {
    title: 'Dein Einstieg ins LitBuy Spreadsheet',
    paragraphs: [
      'Das LitBuy Spreadsheet bündelt tausende Taobao-, Weidian- und 1688-Links an einem Ort. Wir sortieren sie nach Kategorien, damit du gute Funde findest, ohne chinesische Marktplätze allein zu durchsuchen.',
      'Das Trend-Grid oben zeigt aktuelle Zeilen, die wir im Blick haben. Verkäufer ändern Angebote oft—wenn ein Link stirbt, wähle einen anderen Treffer in derselben Kategorie oder öffne den vollen Katalog.',
      'Wir liefern Links und Größenhinweise. LitBuy übernimmt Zahlung, Lager-QC-Fotos und internationalen Versand. URL kopieren, bei LitBuy einfügen—fertig.',
    ],
  },
  es: {
    title: 'Tu punto de partida en LitBuy Spreadsheet',
    paragraphs: [
      'El LitBuy Spreadsheet reúne miles de enlaces de Taobao, Weidian y 1688 en un solo lugar. Los organizamos por categoría para que encuentres buenas opciones sin navegar los marketplaces chinos por tu cuenta.',
      'La cuadrícula de tendencias arriba destaca filas recientes que seguimos. Los vendedores actualizan listados a menudo—si un enlace falla, elige otro en la misma categoría o abre el catálogo completo.',
      'Nosotros damos los enlaces y notas de tallas. LitBuy gestiona el pago, fotos QC de almacén y envío internacional. Copia una URL, pégala en LitBuy y listo.',
    ],
  },
  fr: {
    title: 'Votre point de départ LitBuy Spreadsheet',
    paragraphs: [
      'Le LitBuy Spreadsheet regroupe des milliers de liens Taobao, Weidian et 1688 au même endroit. Nous les trions par catégorie pour que vous trouviez de bons articles sans parcourir seul les marketplaces chinois.',
      'La grille tendance ci-dessus met en avant les lignes que nous suivons. Les vendeurs mettent leurs annonces à jour souvent—si un lien est mort, choisissez un autre dans la même catégorie ou ouvrez le catalogue complet.',
      'Nous fournissons les liens et les notes de taille. LitBuy gère le paiement, les photos QC entrepôt et l’expédition internationale. Copiez une URL, collez-la dans LitBuy—c’est parti.',
    ],
  },
  it: {
    title: 'Il tuo punto di partenza LitBuy Spreadsheet',
    paragraphs: [
      'Il LitBuy Spreadsheet raccoglie migliaia di link Taobao, Weidian e 1688 in un unico posto. Li ordiniamo per categoria così trovi buone scelte senza navigare da solo i marketplace cinesi.',
      'La griglia trending sopra evidenzia le righe che stiamo seguendo. I venditori aggiornano spesso gli annunci—se un link non funziona, scegli un altro nella stessa categoria o apri il catalogo completo.',
      'Noi forniamo link e note sulle taglie. LitBuy gestisce pagamento, foto QC magazzino e spedizione internazionale. Copia un URL, incollalo su LitBuy e sei pronto.',
    ],
  },
  pl: {
    title: 'Twój start z LitBuy Spreadsheet',
    paragraphs: [
      'LitBuy Spreadsheet zbiera tysiące linków Taobao, Weidian i 1688 w jednym miejscu. Sortujemy je według kategorii, żebyś znalazł dobre oferty bez samodzielnego przeszukiwania chińskich marketplace’ów.',
      'Siatka trendów powyżej pokazuje świeże wiersze, które obserwujemy. Sprzedawcy często aktualizują oferty—gdy link padnie, wybierz inny w tej samej kategorii lub otwórz pełny katalog.',
      'My dajemy linki i wskazówki rozmiarowe. LitBuy obsługuje płatność, zdjęcia QC magazynu i wysyłkę międzynarodową. Skopiuj URL, wklej w LitBuy—gotowe.',
    ],
  },
  pt: {
    title: 'Seu ponto de partida no LitBuy Spreadsheet',
    paragraphs: [
      'O LitBuy Spreadsheet reúne milhares de links Taobao, Weidian e 1688 em um só lugar. Organizamos por categoria para você achar boas opções sem navegar os marketplaces chineses sozinho.',
      'A grade de tendências acima destaca linhas recentes que estamos acompanhando. Vendedores atualizam anúncios com frequência—se um link falhar, escolha outro na mesma categoria ou abra o catálogo completo.',
      'Nós fornecemos os links e notas de tamanho. O LitBuy cuida do pagamento, fotos QC do armazém e envio internacional. Copie uma URL, cole no LitBuy e pronto.',
    ],
  },
};

export function getHomeHubIntroCopy(locale: string): HomeHubIntroCopy {
  const lc = locale as RouteLocale;
  return byLocale[lc] ?? byLocale.en;
}
