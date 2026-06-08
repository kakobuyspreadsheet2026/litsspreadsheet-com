import type { RouteLocale } from '../config';

export type AboutPageCopy = {
  title: string;
  description: string;
  keywords: string;
  h1: string;
  /** Visible breadcrumb + back link label for the locale home */
  breadcrumbHomeLabel: string;
  introHtml: string;
  sections: readonly { h2: string; html: string }[];
};

const en: AboutPageCopy = {
  title: 'About LitBuy Spreadsheet Hub · litsspreadsheet.com',
  description:
    'Who runs litsspreadsheet.com, how we relate to LitBuy and Chinese marketplaces, and how to use our LitBuy Spreadsheet guides.',
  keywords:
    'litsspreadsheet.com about, LitBuy Spreadsheet hub, shopping agent guide',
  h1: 'About this site',
  breadcrumbHomeLabel: 'Home',
  introHtml: `<p class="section-intro"><strong>litsspreadsheet.com</strong> is an independent hub for <strong>LitBuy Spreadsheet</strong> shoppers. We publish category guides, paste-link tips, and QC context. We do not run checkout, warehousing, or dispute resolution.</p>`,
  sections: [
    {
      h2: 'Relationship to LitBuy',
      html: `<p>We link to <a href="https://www.litbuy.com/" target="_blank" rel="noopener noreferrer">litbuy.com</a> because readers search for LitBuy Spreadsheet help. We are <strong>not</strong> official LitBuy support or documentation. Prices, coupons, QC tools, and freight quotes on LitBuy can change—trust your signed-in account for binding decisions.</p>`,
    },
    {
      h2: 'Marketplaces and the catalogue',
      html: `<p>Taobao, Weidian, and 1688 listings belong to sellers and platforms under their own terms. Our <a href="/how-to-buy/#spreadsheet-guide">Spreadsheet guide</a> pages and catalogue links are convenience guides—they do not guarantee stock, authenticity, or seller behavior.</p>`,
    },
    {
      h2: 'Editorial standards',
      html: `<p>We aim for clear, practical advice about LitBuy Spreadsheet workflows. When our pages conflict with LitBuy's live interface, trust LitBuy first and treat our content as outdated until updated.</p>`,
    },
    {
      h2: 'Language coverage',
      html: `<p>Navigation, category pages, and hub guides are available in <strong>English, German, Portuguese, Spanish, French, Italian, and Polish</strong>. Core product listings open in English.</p>`,
    },
  ],
};

const byLocale: Record<RouteLocale, AboutPageCopy> = {
  en,
  de: {
    ...en,
    breadcrumbHomeLabel: 'Startseite',
    title: 'Über LitBuy Spreadsheet Hub · litsspreadsheet.com',
    description:
      'Wer litsspreadsheet.com betreibt, wie wir zu LitBuy und chinesischen Marktplätzen stehen, und wie Sie unsere LitBuy Spreadsheet Guides nutzen.',
    keywords:
      'litsspreadsheet.com Über uns, LitBuy Spreadsheet Hub',
    h1: 'Über diese Website',
    introHtml: `<p class="section-intro"><strong>litsspreadsheet.com</strong> ist ein unabhängiger Hub für <strong>LitBuy Spreadsheet</strong>-Nutzer. Wir veröffentlichen Kategorie-Guides, Paste-Tipps und QC-Kontext. Wir betreiben keine Kasse, kein Lager und keine Streitbeilegung.</p>`,
    sections: [
      {
        h2: 'Verhältnis zu LitBuy',
        html: `<p>Wir verlinken auf <a href="https://www.litbuy.com/" target="_blank" rel="noopener noreferrer">litbuy.com</a>, weil Nutzer nach LitBuy Spreadsheet-Hilfe suchen. Wir sind <strong>nicht</strong> offizieller LitBuy-Support. Preise, Coupons und Fracht auf LitBuy können sich ändern—maßgeblich ist Ihr eingeloggtes Konto.</p>`,
      },
      {
        h2: 'Marktplätze und Katalog',
        html: `<p>Taobao-, Weidian- und 1688-Angebote unterliegen den jeweiligen Verkäufern. Unsere <a href="/de/how-to-buy/#spreadsheet-guide">Spreadsheet</a>-Seiten und Katalog-Links sind Orientierung—keine Garantie für Verfügbarkeit oder Echtheit.</p>`,
      },
      {
        h2: 'Redaktionslinie',
        html: `<p>Wir geben klare, praktische Hinweise zum LitBuy Spreadsheet-Workflow. Widerspricht eine Seite der Live-Oberfläche von LitBuy, gilt LitBuy.</p>`,
      },
      {
        h2: 'Sprachen',
        html: `<p>Navigation, Kategorieseiten und Hub-Guides gibt es auf <strong>Englisch, Deutsch, Portugiesisch, Spanisch, Französisch, Italienisch und Polnisch</strong>. Produktlistings öffnen auf Englisch.</p>`,
      },
    ],
  },
  pt: {
    ...en,
    breadcrumbHomeLabel: 'Início',
    title: 'Sobre o LitBuy Spreadsheet Hub · litsspreadsheet.com',
    description:
      'Quem mantém o litsspreadsheet.com, relação com LitBuy e marketplaces chineses, e como usar nossos guias LitBuy Spreadsheet.',
    keywords: 'litsspreadsheet.com sobre, LitBuy Spreadsheet hub',
    h1: 'Sobre este site',
    introHtml: `<p class="section-intro">O <strong>litsspreadsheet.com</strong> é um hub independente para quem usa o <strong>LitBuy Spreadsheet</strong>. Publicamos guias por categoria, dicas de colar links e contexto de QC. Não operamos checkout, armazém ou disputas.</p>`,
    sections: [
      {
        h2: 'Relação com a LitBuy',
        html: `<p>Linkamos para <a href="https://www.litbuy.com/" target="_blank" rel="noopener noreferrer">litbuy.com</a> porque leitores buscam ajuda com LitBuy Spreadsheet. <strong>Não somos</strong> suporte oficial da LitBuy. Preços e frete na LitBuy podem mudar—confie na sua conta logada.</p>`,
      },
      {
        h2: 'Marketplaces e catálogo',
        html: `<p>Anúncios em Taobao, Weidian e 1688 pertencem aos vendedores. Nossas páginas de <a href="/pt/how-to-buy/#spreadsheet-guide">Spreadsheet</a> e links de catálogo são guias—sem garantia de estoque ou autenticidade.</p>`,
      },
      {
        h2: 'Padrão editorial',
        html: `<p>Buscamos conselhos claros sobre o fluxo LitBuy Spreadsheet. Se algo divergir da interface ao vivo da LitBuy, prevalece a LitBuy.</p>`,
      },
      {
        h2: 'Idiomas',
        html: `<p>Navegação, categorias e guias do hub estão em <strong>inglês, alemão, português, espanhol, francês, italiano e polonês</strong>. Listagens de produtos abrem em inglês.</p>`,
      },
    ],
  },
  es: {
    ...en,
    breadcrumbHomeLabel: 'Inicio',
    title: 'Acerca de LitBuy Spreadsheet Hub · litsspreadsheet.com',
    description:
      'Quién mantiene litsspreadsheet.com, relación con LitBuy y marketplaces chinos, y cómo usar nuestras guías LitBuy Spreadsheet.',
    keywords: 'litsspreadsheet.com acerca, LitBuy Spreadsheet hub',
    h1: 'Acerca de este sitio',
    introHtml: `<p class="section-intro"><strong>litsspreadsheet.com</strong> es un hub independiente para usuarios del <strong>LitBuy Spreadsheet</strong>. Publicamos guías por categoría, consejos para pegar enlaces y contexto de QC. No operamos checkout, almacén ni disputas.</p>`,
    sections: [
      {
        h2: 'Relación con LitBuy',
        html: `<p>Enlazamos a <a href="https://www.litbuy.com/" target="_blank" rel="noopener noreferrer">litbuy.com</a> porque los lectores buscan ayuda con LitBuy Spreadsheet. <strong>No somos</strong> soporte oficial de LitBuy. Precios y flete en LitBuy pueden cambiar—confíe en su cuenta activa.</p>`,
      },
      {
        h2: 'Marketplaces y catálogo',
        html: `<p>Los anuncios en Taobao, Weidian y 1688 pertenecen a los vendedores. Nuestras páginas de <a href="/es/how-to-buy/#spreadsheet-guide">Spreadsheet</a> y enlaces de catálogo son guías—sin garantía de stock ni autenticidad.</p>`,
      },
      {
        h2: 'Línea editorial',
        html: `<p>Ofrecemos consejos claros sobre el flujo LitBuy Spreadsheet. Si algo contradice la interfaz en vivo de LitBuy, prima LitBuy.</p>`,
      },
      {
        h2: 'Idiomas',
        html: `<p>Navegación, categorías y guías del hub están en <strong>inglés, alemán, portugués, español, francés, italiano y polaco</strong>. Los listados de productos abren en inglés.</p>`,
      },
    ],
  },
  fr: {
    ...en,
    breadcrumbHomeLabel: 'Accueil',
    title: 'À propos de LitBuy Spreadsheet Hub · litsspreadsheet.com',
    description:
      'Qui gère litsspreadsheet.com, lien avec LitBuy et marketplaces chinois, et comment utiliser nos guides LitBuy Spreadsheet.',
    keywords: 'litsspreadsheet.com à propos, LitBuy Spreadsheet hub',
    h1: 'À propos de ce site',
    introHtml: `<p class="section-intro"><strong>litsspreadsheet.com</strong> est un hub indépendant pour les utilisateurs du <strong>LitBuy Spreadsheet</strong>. Nous publions des guides par catégorie, des conseils de collage de liens et du contexte QC. Nous n’exploitons pas la caisse, l’entrepôt ni les litiges.</p>`,
    sections: [
      {
        h2: 'Rapport avec LitBuy',
        html: `<p>Nous renvoyons vers <a href="https://www.litbuy.com/" target="_blank" rel="noopener noreferrer">litbuy.com</a> car les lecteurs cherchent de l’aide LitBuy Spreadsheet. Nous ne sommes <strong>pas</strong> le support officiel LitBuy. Prix et fret sur LitBuy peuvent changer—fiez-vous à votre compte connecté.</p>`,
      },
      {
        h2: 'Places de marché et catalogue',
        html: `<p>Les annonces Taobao, Weidian et 1688 appartiennent aux vendeurs. Nos pages <a href="/fr/how-to-buy/#spreadsheet-guide">Spreadsheet</a> et liens catalogue sont des guides—sans garantie de stock ni d’authenticité.</p>`,
      },
      {
        h2: 'Standards éditoriaux',
        html: `<p>Nous visons des conseils clairs sur le workflow LitBuy Spreadsheet. En cas de conflit avec l’interface LitBuy en ligne, LitBuy prime.</p>`,
      },
      {
        h2: 'Langues',
        html: `<p>Navigation, catégories et guides du hub sont en <strong>anglais, allemand, portugais, espagnol, français, italien et polonais</strong>. Les fiches produits s’ouvrent en anglais.</p>`,
      },
    ],
  },
  it: {
    ...en,
    breadcrumbHomeLabel: 'Home',
    title: 'Informazioni su LitBuy Spreadsheet Hub · litsspreadsheet.com',
    description:
      'Chi gestisce litsspreadsheet.com, rapporto con LitBuy e marketplace cinesi, e come usare le nostre guide LitBuy Spreadsheet.',
    keywords: 'litsspreadsheet.com chi siamo, LitBuy Spreadsheet hub',
    h1: 'Informazioni sul sito',
    introHtml: `<p class="section-intro"><strong>litsspreadsheet.com</strong> è un hub indipendente per chi usa il <strong>LitBuy Spreadsheet</strong>. Pubblichiamo guide per categoria, consigli per incollare link e contesto QC. Non gestiamo checkout, magazzino o dispute.</p>`,
    sections: [
      {
        h2: 'Rapporto con LitBuy',
        html: `<p>Rinviamo a <a href="https://www.litbuy.com/" target="_blank" rel="noopener noreferrer">litbuy.com</a> perché i lettori cercano aiuto sul LitBuy Spreadsheet. <strong>Non</strong> siamo supporto ufficiale LitBuy. Prezzi e spedizioni su LitBuy possono cambiare—affidatevi al vostro account.</p>`,
      },
      {
        h2: 'Marketplace e catalogo',
        html: `<p>Le inserzioni su Taobao, Weidian e 1688 appartengono ai venditori. Le nostre pagine <a href="/it/how-to-buy/#spreadsheet-guide">Spreadsheet</a> e i link al catalogo sono guide—senza garanzia di stock o autenticità.</p>`,
      },
      {
        h2: 'Linea editoriale',
        html: `<p>Offriamo consigli chiari sul flusso LitBuy Spreadsheet. In caso di conflitto con l’interfaccia live LitBuy, prevale LitBuy.</p>`,
      },
      {
        h2: 'Lingue',
        html: `<p>Navigazione, categorie e guide dell’hub sono in <strong>inglese, tedesco, portoghese, spagnolo, francese, italiano e polacco</strong>. Le schede prodotto si aprono in inglese.</p>`,
      },
    ],
  },
  pl: {
    ...en,
    breadcrumbHomeLabel: 'Strona główna',
    title: 'O LitBuy Spreadsheet Hub · litsspreadsheet.com',
    description:
      'Kto prowadzi litsspreadsheet.com, relacja do LitBuy i chińskich marketplace oraz jak korzystać z naszych poradników LitBuy Spreadsheet.',
    keywords: 'litsspreadsheet.com o nas, LitBuy Spreadsheet hub',
    h1: 'O tej stronie',
    introHtml: `<p class="section-intro"><strong>litsspreadsheet.com</strong> to niezależny hub dla użytkowników <strong>LitBuy Spreadsheet</strong>. Publikujemy poradniki kategorii, wskazówki wklejania linków i kontekst QC. Nie prowadzimy kasy, magazynu ani sporów.</p>`,
    sections: [
      {
        h2: 'Stosunek do LitBuy',
        html: `<p>Odwołujemy się do <a href="https://www.litbuy.com/" target="_blank" rel="noopener noreferrer">litbuy.com</a>, bo użytkownicy szukają pomocy z LitBuy Spreadsheet. To <strong>nie</strong> oficjalny support LitBuy. Ceny i fracht na LitBuy mogą się zmieniać—wiążące jest to, co widzisz po zalogowaniu.</p>`,
      },
      {
        h2: 'Marketplace i katalog',
        html: `<p>Oferty na Taobao, Weidian i 1688 należą do sprzedawców. Nasze strony <a href="/pl/how-to-buy/#spreadsheet-guide">Spreadsheet</a> i linki do katalogu to poradniki—bez gwarancji dostępności ani autentyczności.</p>`,
      },
      {
        h2: 'Standardy redakcyjne',
        html: `<p>Dajemy jasne wskazówki o workflow LitBuy Spreadsheet. Rozbieżność z interfejsem LitBuy—pierwszeństwo ma LitBuy.</p>`,
      },
      {
        h2: 'Języki',
        html: `<p>Nawigacja, kategorie i poradniki huba są po <strong>angielsku, niemiecku, portugalsku, hiszpańsku, francusku, włosku i polsku</strong>. Listy produktów otwierają się po angielsku.</p>`,
      },
    ],
  },
};

export function getAboutPageCopy(locale: string): AboutPageCopy {
  const lc = locale as RouteLocale;
  return byLocale[lc] ?? byLocale.en;
}
