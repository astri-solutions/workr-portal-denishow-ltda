// scripts/site.config.js
// Gerado pelo Workr Lite CMS — não editar manualmente.
export const siteConfig = {

  company: {
    name:        "Denishow LTDA",
    nameShort:   "Denishow LTDA",
    description: 'Relações com Investidores — Denishow LTDA.',
    logoOriginal: '/assets/logotipo/logotipo-original.svg',
    logoNegative: '/assets/logotipo/logotipo-negative.svg',
    logoContrast: '/assets/logotipo/logotipo-negative.svg',
    favicon:      '/favicon.png',
  },

  colors: {
    primary:   "#f5af1b",
    secondary: "#ff5538",
    tertiary:  "#F4CEFF",
  },

  fonts: {
    display: "montserrat",
    body:    "inter",
  },

  ticker: {
    type:      "iframe",
    iframeUrl: "",
    items: [
      { symbol: 'WRLT3', price: 'R$ 00,00', change: '0,00%', direction: 'up' }
    ],
  },

  nav: [
    { id: "central-resultados", label: "Resultados", href: "/central-resultados.html", children: [] },
    { id: "docs-cvm", label: "Documentos CVM", href: "/documentos-cvm.html", pageType: "lista", children: [] },
    { id: "fale-ri", label: "Fale com RI", href: "/fale-com-ri.html", children: [] },
    { id: "mailing", label: "Mailing", href: "/mailing.html", children: [] },
    { id: "ezw9wbf", label: "Página de teste", href: "/n4ft0ix.html", children: [] },
  ],

  empresas: [
    { id: "principal-1784572788840", label: "Denishow LTDA", short: "DL" }
  ],

  header: { variant: 'tabmenu' },

  languages: ["pt-BR"],

  topbar: {
    ri: { label: "Relações com Investidores", url: "/" },
    institucional: { label: "Institucional", url: "#" },
    showTicker: true,
  },

  restrictedNav: [],

  footer: {
    variant: 'simple',
    email: "",
    content: {"pt-BR":{"address":"","phone":"","hours":"","copyright":"©Copyright Denishow LTDA 2026","disclaimer":"As informações contidas neste site são de caráter meramente informativo e não constituem oferta de valores mobiliários."}},
    social: { linkedin: "#", instagram: "#", facebook: "#" },
    legalLinks: [
      { label: "Termos e Condições", href: "/termos-e-condicoes.html" },
      { label: "Política de Privacidade", href: "/politica-de-privacidade.html" },
      { label: "Definições de Cookies", href: "/definicao-de-cookies.html" }
    ],
  },

  splash: {
    enabled: false,
    size: 'md',
    titulo: '',
    texto: '',
    conteudo: '',
    legenda: '',
    buttons: [],
  },

  cookies: {
    enabled: true,
    layout: 'full',
    theme: 'light',
    title: 'Utilizamos cookies',
    description: 'Usamos cookies para melhorar sua experiência.',
    acceptLabel: 'Aceitar todos',
    rejectLabel: 'Rejeitar',
    showReject: true,
    showCustomize: false,
  },

  errorPages: [],

  banner: [],

  supabase: {
    url:      "https://mmhuwlpsgnvoxyuofliq.supabase.co",
    anonKey:  "sb_publishable_BBSPbQc2kZngiK45ecfXaA_X4NANiGj",
    portalId: "42a7f151-3450-41b2-9a91-16247973f4e0",
  },

};
