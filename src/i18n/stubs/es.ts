import type { HomeStubContent } from '../types';
import { pillsFor } from './categoryPaths';

export const esHome: HomeStubContent = {
  title: 'LitBuy Spreadsheet 2026 — Enlaces, Categorías y Guía QC',
  description:
    'Hub LitBuy Spreadsheet en litsspreadsheet.com: hallazgos Taobao, Weidian y 1688 por categoría, pega enlaces en LitBuy y lee consejos QC antes de enviar.',
  keywords:
    'litbuy spreadsheet, litbuy spreadsheet 2026, litbuy spreadsheet links, litbuy spreadsheet taobao, litbuy spreadsheet qc, litbuy spreadsheet guide',
  webPageName: 'LitBuy Spreadsheet 2026 · litsspreadsheet.com',
  webPageKeywords: [
    'litbuy spreadsheet hub',
    'litbuy spreadsheet categorias',
    'litbuy spreadsheet litrepstar',
    'litbuy paste link workflow',
    'litbuy warehouse qc',
  ],
  hero: {
    h1: 'LitBuy Spreadsheet Hub',
    kicker: 'litbuy spreadsheet · Taobao · Weidian · 1688',
    body:
      'litsspreadsheet.com es tu punto de partida del LitBuy Spreadsheet: elige una categoría, abre listados en Litrepstar, copia la URL del producto y completa el checkout en LitBuy con QC en almacén antes del envío internacional.',
    ctaBrowse: 'Abrir catálogo LitBuy Spreadsheet →',
    ctaLogin: 'Iniciar sesión en LitBuy →',
    heroPlaneAlt: 'LitBuy Spreadsheet hero · litsspreadsheet.com',
    searchAria: 'Buscar catálogo LitBuy Spreadsheet',
    searchPlaceholder: 'Buscar estilos, marcas o palabras clave…',
    searchByImage: 'Buscar por imagen',
    searchSubmit: 'Buscar',
    searchByImageAria: 'La búsqueda por imagen abre el catálogo en una pestaña nueva',
  },
  categoriesAria: 'Accesos directos de categoría LitBuy Spreadsheet',
  exploreTitle: 'Categorías LitBuy Spreadsheet',
  redditAria: 'Comunidad LitBuy en Reddit (abre en pestaña nueva)',
  redditSnooAlt: 'Reddit — comunidad LitBuy Spreadsheet',
  guideH2: 'Cómo funciona el flujo LitBuy Spreadsheet',
  guideIntro:
    'Cuatro preguntas que todo usuario nuevo del LitBuy Spreadsheet se hace. Expande una fila para una respuesta rápida o abre How to buy para capturas del paste-link.',
  sections: [
    {
      h3: '¿Qué es el LitBuy Spreadsheet?',
      paragraphs: [
        'El LitBuy Spreadsheet es un índice curado de enlaces de productos Taobao, Weidian y 1688 pensado para compradores LitBuy. Las filas incluyen fotos, pistas de precio y notas del vendedor para pegar una URL estable en LitBuy en lugar de buscar a ciegas en marketplaces chinos.',
        'litsspreadsheet.com es la capa guía: mapeamos categorías, enlazamos al catálogo en vivo en Litrepstar y te enviamos a LitBuy para pago, fotos QC y exportación de paquetes.',
      ],
    },
    {
      h3: '¿Cómo compro desde una fila del spreadsheet?',
      paragraphs: [
        'Abre un listado, copia la URL del marketplace, pégala en LitBuy, confirma talla y color y paga el precio doméstico del vendedor.',
        'Cuando el artículo llega al almacén LitBuy, revisa las fotos QC en tu cuenta. Aprueba, cambia o devuelve antes de que salga al extranjero.',
      ],
    },
    {
      h3: '¿Por qué combinar spreadsheet con LitBuy?',
      paragraphs: [
        'Los vendedores chinos rara vez envían internacionalmente por su cuenta. LitBuy compra localmente, almacena con seguridad, fotografía para QC y puede consolidar varios pedidos en un solo paquete de salida.',
        'Usa litsspreadsheet.com para descubrir enlaces y deja que LitBuy gestione compra, inspección y envío en un solo lugar.',
      ],
    },
    {
      h3: '¿Qué pasa si un enlace del spreadsheet deja de funcionar?',
      paragraphs: [
        'Los listados cambian rápido. Si una fila da 404, elige otro artículo en la misma categoría en Litrepstar o vuelve a la cuadrícula de la página principal.',
        'Si LitBuy no puede comprar tras tu pago, el agente reembolsa a tu saldo para que pegues un enlace de reemplazo.',
      ],
    },
  ],
  ctaHeading: 'Empezar a explorar el LitBuy Spreadsheet',
  ctaIntro: 'Abre el catálogo en vivo en',
  ctaIntroSuffix: ' — descubre enlaces aquí, pega y paga en LitBuy.',
  ctaFooterNote: 'Vuelve a comprobar QC, políticas del vendedor y tarifas de envío en LitBuy antes de exportar un paquete.',
  sheetLinkLabel: 'LitBuy Spreadsheet en Litrepstar',
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
    disclaimerLabel: 'Aviso legal:',
    disclaimerHtml:
      'litsspreadsheet.com es una guía independiente del <strong>LitBuy Spreadsheet</strong> — solo accesos de categoría, consejos de paste y contexto QC. El checkout y las fotos de almacén ocurren en <a href="https://www.litbuy.com/" target="_blank" rel="noopener noreferrer">LitBuy</a> y el <a href="https://litrepstar.com/en" target="_blank" rel="noopener noreferrer">catálogo Litrepstar</a>. No procesamos pagos ni paquetes.',
    copyrightLine:
      '© 2026 litsspreadsheet.com · Hub SEO LitBuy Spreadsheet — no es el sitio de checkout LitBuy.',
  },
  categoryPage: {
    titleTemplate: 'LitBuy Spreadsheet {uiName} 2026 — Picks Curados',
    descriptionTemplate:
      'Explora LitBuy Spreadsheet {uiNameLower} para 2026: picks editoriales con enlaces a listados Litrepstar listos para pegar en LitBuy.',
    introTemplate:
      'Carril editorial de {uiNameLower} para compradores LitBuy Spreadsheet. Las tarjetas abren Litrepstar en una pestaña nueva — pega la URL en LitBuy cuando estés listo para comprar.',
    homeHubBackLink: '← Inicio LitBuy Spreadsheet',
    introToggleLabel: 'Sobre esta categoría',
    externalBtnTemplate: 'Explorar {uiName} en Litrepstar →',
    noProducts: 'Aún no hay picks en este carril — prueba otra categoría LitBuy Spreadsheet.',
  },
};
