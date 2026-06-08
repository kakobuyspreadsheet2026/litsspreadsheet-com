type CategorySeoLane = {
  title: string;
  description: string;
};

const CATEGORY_SEO_EN: Record<string, CategorySeoLane> = {
  shoes: {
    title: 'LitBuy Spreadsheet Shoes — Sneakers & Footwear Picks',
    description: 'Browse LitBuy Spreadsheet shoes: sneakers, boots, and runners with paste-ready Taobao and Weidian links for LitBuy QC.',
  },
  't-shirts': {
    title: 'LitBuy Spreadsheet T-Shirts — Tees & Graphic Tops',
    description: 'LitBuy Spreadsheet t-shirt lane: graphic tees, blanks, and streetwear tops with sizing notes and LitBuy paste links.',
  },
  pants: {
    title: 'LitBuy Spreadsheet Pants — Cargos, Denim & Trousers',
    description: 'Find cargos, jeans, and joggers in the LitBuy Spreadsheet. Curated marketplace links ready to paste into LitBuy.',
  },
  accessories: {
    title: 'LitBuy Spreadsheet Accessories — Belts, Jewelry & More',
    description: 'LitBuy Spreadsheet accessories: belts, chains, socks, and everyday extras with verified listing URLs.',
  },
  bags: {
    title: 'LitBuy Spreadsheet Bags — Crossbody, Backpacks & Slings',
    description: 'Shop bags on the LitBuy Spreadsheet—slings, totes, and travel packs with QC-friendly listing links.',
  },
  electronics: {
    title: 'LitBuy Spreadsheet Electronics — Audio & Gadgets',
    description: 'LitBuy Spreadsheet electronics lane: earbuds, speakers, and tech accessories with paste-ready marketplace URLs.',
  },
  jackets: {
    title: 'LitBuy Spreadsheet Jackets — Outerwear & Shells',
    description: 'Browse puffers, windbreakers, and coats in the LitBuy Spreadsheet. Links sorted for LitBuy warehouse QC.',
  },
  hoodies: {
    title: 'LitBuy Spreadsheet Hoodies — Sweatshirts & Fleece',
    description: 'LitBuy Spreadsheet hoodies and sweaters: zip-ups, fleece, and heavyweight knits with curated seller links.',
  },
  headwear: {
    title: 'LitBuy Spreadsheet Headwear — Caps & Beanies',
    description: 'Caps, beanies, and hats from the LitBuy Spreadsheet. Quick-copy URLs for LitBuy ordering.',
  },
  jersey: {
    title: 'LitBuy Spreadsheet Jerseys — Sports Kits & Tops',
    description: 'Court jerseys and football kits in the LitBuy Spreadsheet. Listing links with print and patch QC notes.',
  },
  perfume: {
    title: 'LitBuy Spreadsheet Perfume — Fragrance & Beauty',
    description: 'Fragrance and beauty picks on the LitBuy Spreadsheet. Curated scent rows with LitBuy shipping tips.',
  },
  other: {
    title: 'LitBuy Spreadsheet Other — Lifestyle & Wardrobe Extras',
    description: 'Miscellaneous LitBuy Spreadsheet finds: underwear, home goods, and overflow wardrobe items.',
  },
};

const CATEGORY_SEO_DE: Record<string, CategorySeoLane> = {
  shoes: {
    title: 'LitBuy Spreadsheet Schuhe — Sneaker & Footwear',
    description: 'LitBuy Spreadsheet Schuhe: Sneaker, Boots und Runner mit paste-fertigen Taobao- und Weidian-Links für LitBuy QC.',
  },
  't-shirts': {
    title: 'LitBuy Spreadsheet T-Shirts — Tees & Grafik-Tops',
    description: 'LitBuy Spreadsheet T-Shirt-Spur: Grafik-Tees, Blanks und Streetwear mit Größenhinweisen und LitBuy-Links.',
  },
  pants: {
    title: 'LitBuy Spreadsheet Hosen — Cargos, Denim & Jogger',
    description: 'Cargos, Jeans und Jogger im LitBuy Spreadsheet. Kuratierte Marktplatz-Links zum Einfügen bei LitBuy.',
  },
  accessories: {
    title: 'LitBuy Spreadsheet Accessoires — Gürtel & Schmuck',
    description: 'LitBuy Spreadsheet Accessoires: Gürtel, Ketten, Socken und Alltags-Extras mit geprüften Listing-URLs.',
  },
  bags: {
    title: 'LitBuy Spreadsheet Taschen — Crossbody & Rucksäcke',
    description: 'Taschen im LitBuy Spreadsheet—Slings, Totes und Reiserucksäcke mit QC-freundlichen Links.',
  },
  electronics: {
    title: 'LitBuy Spreadsheet Elektronik — Audio & Gadgets',
    description: 'LitBuy Spreadsheet Elektronik: Earbuds, Lautsprecher und Tech-Zubehör mit paste-fertigen URLs.',
  },
  jackets: {
    title: 'LitBuy Spreadsheet Jacken — Outerwear & Shells',
    description: 'Daunenjacken, Windbreaker und Mäntel im LitBuy Spreadsheet. Links sortiert für LitBuy-Lager-QC.',
  },
  hoodies: {
    title: 'LitBuy Spreadsheet Hoodies — Sweatshirts & Fleece',
    description: 'LitBuy Spreadsheet Hoodies: Zip-ups, Fleece und schwere Strickware mit kuratierten Seller-Links.',
  },
  headwear: {
    title: 'LitBuy Spreadsheet Kopfbedeckung — Caps & Beanies',
    description: 'Caps, Beanies und Hüte aus dem LitBuy Spreadsheet. Schnell kopierbare URLs für LitBuy-Bestellungen.',
  },
  jersey: {
    title: 'LitBuy Spreadsheet Trikots — Sportkits & Tops',
    description: 'Sporttrikots und Fußballkits im LitBuy Spreadsheet. Listing-Links mit QC-Hinweisen zu Prints und Patches.',
  },
  perfume: {
    title: 'LitBuy Spreadsheet Parfum — Düfte & Beauty',
    description: 'Düfte und Beauty-Funde im LitBuy Spreadsheet. Kuratierte Duft-Zeilen mit LitBuy-Versandtipps.',
  },
  other: {
    title: 'LitBuy Spreadsheet Sonstiges — Lifestyle & Extras',
    description: 'Verschiedene LitBuy Spreadsheet-Funde: Unterwäsche, Home-Goods und weitere Wardrobe-Extras.',
  },
};

const CATEGORY_SEO_ES: Record<string, CategorySeoLane> = {
  shoes: {
    title: 'LitBuy Spreadsheet Zapatos — Sneakers y Calzado',
    description: 'Zapatos en LitBuy Spreadsheet: sneakers, botas y runners con enlaces Taobao y Weidian listos para LitBuy QC.',
  },
  't-shirts': {
    title: 'LitBuy Spreadsheet Camisetas — Tees y Tops Gráficos',
    description: 'Carril de camisetas LitBuy Spreadsheet: tees gráficas, básicas y streetwear con notas de talla y enlaces LitBuy.',
  },
  pants: {
    title: 'LitBuy Spreadsheet Pantalones — Cargos, Denim y Joggers',
    description: 'Cargos, jeans y joggers en LitBuy Spreadsheet. Enlaces curados listos para pegar en LitBuy.',
  },
  accessories: {
    title: 'LitBuy Spreadsheet Accesorios — Cinturones y Joyería',
    description: 'Accesorios LitBuy Spreadsheet: cinturones, cadenas, calcetines y extras con URLs verificadas.',
  },
  bags: {
    title: 'LitBuy Spreadsheet Bolsos — Crossbody y Mochilas',
    description: 'Bolsos en LitBuy Spreadsheet—slings, totes y mochilas de viaje con enlaces aptos para QC.',
  },
  electronics: {
    title: 'LitBuy Spreadsheet Electrónica — Audio y Gadgets',
    description: 'Electrónica LitBuy Spreadsheet: auriculares, altavoces y accesorios tech con URLs listas para pegar.',
  },
  jackets: {
    title: 'LitBuy Spreadsheet Chaquetas — Abrigos y Shells',
    description: 'Plumíferos, cortavientos y abrigos en LitBuy Spreadsheet. Enlaces ordenados para QC de almacén LitBuy.',
  },
  hoodies: {
    title: 'LitBuy Spreadsheet Sudaderas — Hoodies y Fleece',
    description: 'Sudaderas LitBuy Spreadsheet: zip-ups, fleece y knits pesados con enlaces de vendedores curados.',
  },
  headwear: {
    title: 'LitBuy Spreadsheet Gorras — Caps y Beanies',
    description: 'Gorras, beanies y sombreros del LitBuy Spreadsheet. URLs de copia rápida para pedidos LitBuy.',
  },
  jersey: {
    title: 'LitBuy Spreadsheet Jerseys — Kits Deportivos',
    description: 'Jerseys y equipaciones en LitBuy Spreadsheet. Enlaces con notas de QC para estampados y parches.',
  },
  perfume: {
    title: 'LitBuy Spreadsheet Perfume — Fragancias y Belleza',
    description: 'Fragancias y belleza en LitBuy Spreadsheet. Filas de aromas curadas con consejos de envío LitBuy.',
  },
  other: {
    title: 'LitBuy Spreadsheet Otros — Lifestyle y Extras',
    description: 'Hallazgos varios en LitBuy Spreadsheet: ropa interior, hogar y extras de armario.',
  },
};

const CATEGORY_SEO_FR: Record<string, CategorySeoLane> = {
  shoes: {
    title: 'LitBuy Spreadsheet Chaussures — Sneakers & Baskets',
    description: 'Chaussures LitBuy Spreadsheet : sneakers, bottes et runners avec liens Taobao/Weidian prêts pour le QC LitBuy.',
  },
  't-shirts': {
    title: 'LitBuy Spreadsheet T-Shirts — Tees & Tops Graphiques',
    description: 'Volet t-shirts LitBuy Spreadsheet : tees graphiques, basiques et streetwear avec notes de taille et liens LitBuy.',
  },
  pants: {
    title: 'LitBuy Spreadsheet Pantalons — Cargos, Denim & Joggers',
    description: 'Cargos, jeans et joggers dans LitBuy Spreadsheet. Liens marketplace curés à coller dans LitBuy.',
  },
  accessories: {
    title: 'LitBuy Spreadsheet Accessoires — Ceintures & Bijoux',
    description: 'Accessoires LitBuy Spreadsheet : ceintures, chaînes, chaussettes et extras avec URLs vérifiées.',
  },
  bags: {
    title: 'LitBuy Spreadsheet Sacs — Crossbody & Sacs à Dos',
    description: 'Sacs sur LitBuy Spreadsheet—slings, totes et sacs de voyage avec liens adaptés au QC.',
  },
  electronics: {
    title: 'LitBuy Spreadsheet Électronique — Audio & Gadgets',
    description: 'Électronique LitBuy Spreadsheet : écouteurs, enceintes et accessoires tech avec URLs prêtes à coller.',
  },
  jackets: {
    title: 'LitBuy Spreadsheet Vestes — Outerwear & Shells',
    description: 'Doudounes, coupe-vent et manteaux dans LitBuy Spreadsheet. Liens triés pour le QC entrepôt LitBuy.',
  },
  hoodies: {
    title: 'LitBuy Spreadsheet Hoodies — Sweats & Fleece',
    description: 'Hoodies LitBuy Spreadsheet : zip-ups, fleece et maille épaisse avec liens vendeurs curés.',
  },
  headwear: {
    title: 'LitBuy Spreadsheet Headwear — Casquettes & Bonnets',
    description: 'Casquettes, bonnets et chapeaux du LitBuy Spreadsheet. URLs à copier pour commander sur LitBuy.',
  },
  jersey: {
    title: 'LitBuy Spreadsheet Maillots — Kits Sportifs',
    description: 'Maillots et kits sportifs dans LitBuy Spreadsheet. Liens avec notes QC sur impressions et patchs.',
  },
  perfume: {
    title: 'LitBuy Spreadsheet Parfum — Fragrances & Beauté',
    description: 'Parfums et beauté sur LitBuy Spreadsheet. Lignes de senteurs curées avec conseils d’expédition LitBuy.',
  },
  other: {
    title: 'LitBuy Spreadsheet Divers — Lifestyle & Extras',
    description: 'Trouvailles diverses LitBuy Spreadsheet : sous-vêtements, maison et extras vestimentaires.',
  },
};

const CATEGORY_SEO_IT: Record<string, CategorySeoLane> = {
  shoes: {
    title: 'LitBuy Spreadsheet Scarpe — Sneaker e Calzature',
    description: 'Scarpe LitBuy Spreadsheet: sneaker, stivali e runner con link Taobao/Weidian pronti per QC LitBuy.',
  },
  't-shirts': {
    title: 'LitBuy Spreadsheet T-Shirt — Magliette e Top Grafici',
    description: 'Corsia t-shirt LitBuy Spreadsheet: magliette grafiche, basic e streetwear con note taglie e link LitBuy.',
  },
  pants: {
    title: 'LitBuy Spreadsheet Pantaloni — Cargo, Denim e Jogger',
    description: 'Cargo, jeans e jogger nel LitBuy Spreadsheet. Link marketplace curati da incollare su LitBuy.',
  },
  accessories: {
    title: 'LitBuy Spreadsheet Accessori — Cinture e Gioielli',
    description: 'Accessori LitBuy Spreadsheet: cinture, catene, calzini e extra con URL verificate.',
  },
  bags: {
    title: 'LitBuy Spreadsheet Borse — Crossbody e Zaini',
    description: 'Borse su LitBuy Spreadsheet—sling, tote e zaini da viaggio con link adatti al QC.',
  },
  electronics: {
    title: 'LitBuy Spreadsheet Elettronica — Audio e Gadget',
    description: 'Elettronica LitBuy Spreadsheet: auricolari, speaker e accessori tech con URL pronte all’incolla.',
  },
  jackets: {
    title: 'LitBuy Spreadsheet Giacche — Outerwear e Shell',
    description: 'Piumini, windbreaker e cappotti nel LitBuy Spreadsheet. Link ordinati per QC magazzino LitBuy.',
  },
  hoodies: {
    title: 'LitBuy Spreadsheet Felpe — Hoodie e Fleece',
    description: 'Felpe LitBuy Spreadsheet: zip-up, fleece e maglieria pesante con link venditori curati.',
  },
  headwear: {
    title: 'LitBuy Spreadsheet Headwear — Cappelli e Berretti',
    description: 'Cappellini, berretti e cappelli dal LitBuy Spreadsheet. URL rapide per ordini LitBuy.',
  },
  jersey: {
    title: 'LitBuy Spreadsheet Maglie — Kit Sportivi',
    description: 'Maglie e kit sportivi nel LitBuy Spreadsheet. Link con note QC su stampe e patch.',
  },
  perfume: {
    title: 'LitBuy Spreadsheet Profumi — Fragranze e Beauty',
    description: 'Profumi e beauty su LitBuy Spreadsheet. Righe di fragranze curate con consigli spedizione LitBuy.',
  },
  other: {
    title: 'LitBuy Spreadsheet Altro — Lifestyle ed Extra',
    description: 'Trovate varie LitBuy Spreadsheet: intimo, casa e extra guardaroba.',
  },
};

const CATEGORY_SEO_PL: Record<string, CategorySeoLane> = {
  shoes: {
    title: 'LitBuy Spreadsheet Buty — Sneakersy i Obuwie',
    description: 'Buty w LitBuy Spreadsheet: sneakersy, botki i biegowe z linkami Taobao/Weidian gotowymi do QC LitBuy.',
  },
  't-shirts': {
    title: 'LitBuy Spreadsheet Koszulki — T-shirty i Topy',
    description: 'Pas koszulek LitBuy Spreadsheet: graficzne, basic i streetwear z notatkami rozmiarów i linkami LitBuy.',
  },
  pants: {
    title: 'LitBuy Spreadsheet Spodnie — Cargo, Denim i Dresy',
    description: 'Cargo, jeansy i dresy w LitBuy Spreadsheet. Kuratorowane linki marketplace do wklejenia w LitBuy.',
  },
  accessories: {
    title: 'LitBuy Spreadsheet Akcesoria — Paski i Biżuteria',
    description: 'Akcesoria LitBuy Spreadsheet: paski, łańcuszki, skarpety i dodatki ze zweryfikowanymi URL.',
  },
  bags: {
    title: 'LitBuy Spreadsheet Torby — Crossbody i Plecaki',
    description: 'Torby w LitBuy Spreadsheet—slingi, toty i plecaki podróżne z linkami pod QC.',
  },
  electronics: {
    title: 'LitBuy Spreadsheet Elektronika — Audio i Gadżety',
    description: 'Elektronika LitBuy Spreadsheet: słuchawki, głośniki i gadżety tech z URL gotowymi do wklejenia.',
  },
  jackets: {
    title: 'LitBuy Spreadsheet Kurtki — Outerwear i Shell',
    description: 'Puchówki, wiatrówki i płaszcze w LitBuy Spreadsheet. Linki pod QC magazynu LitBuy.',
  },
  hoodies: {
    title: 'LitBuy Spreadsheet Bluzy — Hoodie i Fleece',
    description: 'Bluzy LitBuy Spreadsheet: zip-up, fleece i grube dzianiny z linkami sprzedawców.',
  },
  headwear: {
    title: 'LitBuy Spreadsheet Nakrycia — Czapki i Beanies',
    description: 'Czapki z daszkiem, beanies i kapelusze z LitBuy Spreadsheet. Szybkie URL do zamówień LitBuy.',
  },
  jersey: {
    title: 'LitBuy Spreadsheet Koszulki Sportowe — Stroje',
    description: 'Koszulki i stroje sportowe w LitBuy Spreadsheet. Linki z notatkami QC nadruków i naszywek.',
  },
  perfume: {
    title: 'LitBuy Spreadsheet Perfumy — Zapachy i Beauty',
    description: 'Perfumy i beauty w LitBuy Spreadsheet. Kuratorowane wiersze zapachów z poradami wysyłki LitBuy.',
  },
  other: {
    title: 'LitBuy Spreadsheet Inne — Lifestyle i Dodatki',
    description: 'Różne znaleziska LitBuy Spreadsheet: bielizna, dom i dodatki garderoby.',
  },
};

const CATEGORY_SEO_PT: Record<string, CategorySeoLane> = {
  shoes: {
    title: 'LitBuy Spreadsheet Sapatos — Tênis e Calçados',
    description: 'Sapatos no LitBuy Spreadsheet: tênis, botas e runners com links Taobao/Weidian prontos para QC LitBuy.',
  },
  't-shirts': {
    title: 'LitBuy Spreadsheet Camisetas — Tees e Tops Gráficos',
    description: 'Faixa de camisetas LitBuy Spreadsheet: tees gráficas, básicas e streetwear com notas de tamanho e links LitBuy.',
  },
  pants: {
    title: 'LitBuy Spreadsheet Calças — Cargos, Jeans e Joggers',
    description: 'Cargos, jeans e joggers no LitBuy Spreadsheet. Links curados prontos para colar no LitBuy.',
  },
  accessories: {
    title: 'LitBuy Spreadsheet Acessórios — Cintos e Joias',
    description: 'Acessórios LitBuy Spreadsheet: cintos, correntes, meias e extras com URLs verificadas.',
  },
  bags: {
    title: 'LitBuy Spreadsheet Bolsas — Crossbody e Mochilas',
    description: 'Bolsas no LitBuy Spreadsheet—slings, totes e mochilas de viagem com links para QC.',
  },
  electronics: {
    title: 'LitBuy Spreadsheet Eletrônicos — Áudio e Gadgets',
    description: 'Eletrônicos LitBuy Spreadsheet: fones, caixas de som e acessórios tech com URLs prontas para colar.',
  },
  jackets: {
    title: 'LitBuy Spreadsheet Jaquetas — Casacos e Shells',
    description: 'Puffer, corta-vento e casacos no LitBuy Spreadsheet. Links organizados para QC de armazém LitBuy.',
  },
  hoodies: {
    title: 'LitBuy Spreadsheet Moletons — Hoodies e Fleece',
    description: 'Moletons LitBuy Spreadsheet: zip-ups, fleece e malhas pesadas com links de vendedores curados.',
  },
  headwear: {
    title: 'LitBuy Spreadsheet Headwear — Bonés e Gorros',
    description: 'Bonés, gorros e chapéus do LitBuy Spreadsheet. URLs rápidas para pedidos no LitBuy.',
  },
  jersey: {
    title: 'LitBuy Spreadsheet Jerseys — Kits Esportivos',
    description: 'Jerseys e uniformes no LitBuy Spreadsheet. Links com notas de QC para estampas e patches.',
  },
  perfume: {
    title: 'LitBuy Spreadsheet Perfume — Fragrâncias e Beleza',
    description: 'Perfumes e beleza no LitBuy Spreadsheet. Linhas de fragrâncias curadas com dicas de envio LitBuy.',
  },
  other: {
    title: 'LitBuy Spreadsheet Outros — Lifestyle e Extras',
    description: 'Achados diversos LitBuy Spreadsheet: roupa íntima, casa e extras de guarda-roupa.',
  },
};

const LOCALE_MAP: Record<string, Record<string, CategorySeoLane>> = {
  de: CATEGORY_SEO_DE,
  es: CATEGORY_SEO_ES,
  fr: CATEGORY_SEO_FR,
  it: CATEGORY_SEO_IT,
  pl: CATEGORY_SEO_PL,
  pt: CATEGORY_SEO_PT,
};

export function getCategorySeoCopy(uiSlug: string, uiName: string, locale: string = 'en'): { title: string; description: string } {
  const map = LOCALE_MAP[locale] ?? CATEGORY_SEO_EN;
  const lane = map[uiSlug] ?? CATEGORY_SEO_EN[uiSlug];

  if (lane) return lane;

  const uiNameLower = uiName.toLowerCase();
  if (locale === 'de') {
    return {
      title: `LitBuy Spreadsheet ${uiName} — Kuratierte Picks 2026`,
      description: `LitBuy Spreadsheet ${uiNameLower}: kuratierte Marktplatz-Links zum Einfügen bei LitBuy mit QC-Hinweisen.`,
    };
  } else if (locale === 'es') {
    return {
      title: `LitBuy Spreadsheet ${uiName} — Selección 2026`,
      description: `LitBuy Spreadsheet ${uiNameLower}: enlaces curados listos para pegar en LitBuy con notas de QC.`,
    };
  } else if (locale === 'fr') {
    return {
      title: `LitBuy Spreadsheet ${uiName} — Sélection 2026`,
      description: `LitBuy Spreadsheet ${uiNameLower} : liens marketplace curés à coller dans LitBuy avec notes QC.`,
    };
  } else if (locale === 'it') {
    return {
      title: `LitBuy Spreadsheet ${uiName} — Selezione 2026`,
      description: `LitBuy Spreadsheet ${uiNameLower}: link marketplace curati da incollare su LitBuy con note QC.`,
    };
  } else if (locale === 'pl') {
    return {
      title: `LitBuy Spreadsheet ${uiName} — Wybór 2026`,
      description: `LitBuy Spreadsheet ${uiNameLower}: kuratorowane linki do wklejenia w LitBuy z notatkami QC.`,
    };
  } else if (locale === 'pt') {
    return {
      title: `LitBuy Spreadsheet ${uiName} — Seleção 2026`,
      description: `LitBuy Spreadsheet ${uiNameLower}: links curados prontos para colar no LitBuy com notas de QC.`,
    };
  }

  return {
    title: `LitBuy Spreadsheet ${uiName} — Curated Picks 2026`,
    description: `LitBuy Spreadsheet ${uiNameLower}: curated marketplace links ready to paste into LitBuy with QC notes.`,
  };
}
