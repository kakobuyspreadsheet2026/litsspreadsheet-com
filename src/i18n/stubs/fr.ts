import type { HomeStubContent } from '../types';
import { pillsFor } from './categoryPaths';

export const frHome: HomeStubContent = {
  title: 'LitBuy Spreadsheet 2026 — Liens, Catégories et Guide QC',
  description:
    'Hub LitBuy Spreadsheet sur litsspreadsheet.com : trouvailles Taobao, Weidian et 1688 par catégorie, collez les liens dans LitBuy et lisez les conseils QC avant l’expédition.',
  keywords:
    'litbuy spreadsheet, litbuy spreadsheet 2026, litbuy spreadsheet links, litbuy spreadsheet taobao, litbuy spreadsheet qc, litbuy spreadsheet guide',
  webPageName: 'LitBuy Spreadsheet 2026 · litsspreadsheet.com',
  webPageKeywords: [
    'litbuy spreadsheet hub',
    'litbuy spreadsheet catégories',
    'litbuy spreadsheet litrepstar',
    'litbuy paste link workflow',
    'litbuy warehouse qc',
  ],
  hero: {
    h1: 'LitBuy Spreadsheet Hub',
    kicker: 'litbuy spreadsheet · Taobao · Weidian · 1688',
    body:
      'litsspreadsheet.com est votre point d’entrée LitBuy Spreadsheet : choisissez une catégorie, ouvrez les annonces sur Litrepstar, copiez l’URL produit et finalisez le checkout sur LitBuy avec QC entrepôt avant l’expédition internationale.',
    ctaBrowse: 'Ouvrir le catalogue LitBuy Spreadsheet →',
    ctaLogin: 'Se connecter sur LitBuy →',
    heroPlaneAlt: 'LitBuy Spreadsheet hero · litsspreadsheet.com',
    searchAria: 'Rechercher le catalogue LitBuy Spreadsheet',
    searchPlaceholder: 'Rechercher styles, marques ou mots-clés…',
    searchByImage: 'Recherche par image',
    searchSubmit: 'Rechercher',
    searchByImageAria: 'La recherche par image ouvre le catalogue dans un nouvel onglet',
  },
  categoriesAria: 'Raccourcis catégorie LitBuy Spreadsheet',
  exploreTitle: 'Catégories LitBuy Spreadsheet',
  redditAria: 'Communauté LitBuy sur Reddit (ouvre dans un nouvel onglet)',
  redditSnooAlt: 'Reddit — communauté LitBuy Spreadsheet',
  guideH2: 'Comment fonctionne le workflow LitBuy Spreadsheet',
  guideIntro:
    'Quatre questions que tout nouvel utilisateur LitBuy Spreadsheet se pose. Dépliez une ligne pour une réponse rapide ou ouvrez How to buy pour des captures paste-link.',
  sections: [
    {
      h3: 'Qu’est-ce que le LitBuy Spreadsheet ?',
      paragraphs: [
        'Le LitBuy Spreadsheet est un index curaté de liens produits Taobao, Weidian et 1688 conçu pour les acheteurs LitBuy. Les lignes incluent photos, indications de prix et notes vendeur pour coller une URL stable dans LitBuy plutôt que de chercher à l’aveugle sur les marketplaces chinois.',
        'litsspreadsheet.com est la couche guide : nous cartographions les catégories, liens vers le catalogue live sur Litrepstar et vous envoyons vers LitBuy pour paiement, photos QC et export colis.',
      ],
    },
    {
      h3: 'Comment acheter depuis une ligne du spreadsheet ?',
      paragraphs: [
        'Ouvrez une annonce, copiez l’URL marketplace, collez-la dans LitBuy, confirmez taille et couleur, puis payez le prix domestique du vendeur.',
        'Quand l’article arrive à l’entrepôt LitBuy, consultez les photos QC dans votre compte. Validez, échangez ou retournez avant toute expédition à l’étranger.',
      ],
    },
    {
      h3: 'Pourquoi associer spreadsheet et LitBuy ?',
      paragraphs: [
        'Les vendeurs chinois expédient rarement à l’international seuls. LitBuy achète localement, stocke en sécurité, photographie pour QC et peut regrouper plusieurs commandes en un seul colis sortant.',
        'Utilisez litsspreadsheet.com pour découvrir des liens, puis laissez LitBuy gérer achat, inspection et expédition au même endroit.',
      ],
    },
    {
      h3: 'Que faire si un lien spreadsheet ne fonctionne plus ?',
      paragraphs: [
        'Les annonces changent vite. Si une ligne renvoie une 404, choisissez un autre article dans la même catégorie sur Litrepstar ou revenez à la grille d’accueil.',
        'Si LitBuy ne peut pas acheter après votre paiement, l’agent rembourse sur votre solde pour coller un lien de remplacement.',
      ],
    },
  ],
  ctaHeading: 'Commencer à parcourir le LitBuy Spreadsheet',
  ctaIntro: 'Ouvrez le catalogue live sur',
  ctaIntroSuffix: ' — découvrez les liens ici, collez et payez sur LitBuy.',
  ctaFooterNote: 'Revérifiez toujours QC, politiques vendeur et devis d’expédition sur LitBuy avant d’exporter un colis.',
  sheetLinkLabel: 'LitBuy Spreadsheet sur Litrepstar',
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
    disclaimerLabel: 'Avertissement :',
    disclaimerHtml:
      'litsspreadsheet.com est un guide indépendant <strong>LitBuy Spreadsheet</strong> — raccourcis catégorie, conseils paste et contexte QC uniquement. Checkout et photos entrepôt se font sur <a href="https://www.litbuy.com/" target="_blank" rel="noopener noreferrer">LitBuy</a> et le <a href="https://litrepstar.com/en" target="_blank" rel="noopener noreferrer">catalogue Litrepstar</a>. Nous ne traitons ni paiements ni colis.',
    copyrightLine:
      '© 2026 litsspreadsheet.com · Hub SEO LitBuy Spreadsheet — pas le site checkout LitBuy.',
  },
  categoryPage: {
    titleTemplate: 'LitBuy Spreadsheet {uiName} 2026 — Picks Curatés',
    descriptionTemplate:
      'Parcourez LitBuy Spreadsheet {uiNameLower} pour 2026 : picks éditoriaux avec liens vers annonces Litrepstar prêtes à coller dans LitBuy.',
    introTemplate:
      'Voie éditoriale {uiNameLower} pour acheteurs LitBuy Spreadsheet. Les cartes ouvrent Litrepstar dans un nouvel onglet — collez l’URL dans LitBuy quand vous êtes prêt à acheter.',
    homeHubBackLink: '← Accueil LitBuy Spreadsheet',
    introToggleLabel: 'À propos de cette catégorie',
    externalBtnTemplate: 'Parcourir {uiName} sur Litrepstar →',
    noProducts: 'Pas encore de picks dans cette voie — essayez une autre catégorie LitBuy Spreadsheet.',
  },
};
