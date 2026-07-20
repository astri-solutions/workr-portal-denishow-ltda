// scripts/site.config.js
// Gerado pelo Workr Lite CMS — não editar manualmente.
export const siteConfig = {

  company: {
    name:        "Denishow LTDA",
    nameShort:   "Denishow LTDA",
    description: 'Relações com Investidores — Denishow LTDA.',
    logoOriginal: '/assets/logotipo/logotipo-original.webp',
    logoNegative: '/assets/logotipo/logotipo-negative.webp',
    logoContrast: '/assets/logotipo/logotipo-negative.webp',
    favicon:      '/favicon.png',
  },

  colors: {
    primary:   "#1B4EF5",
    secondary: "#3874FF",
    tertiary:  "#F4CEFF",
  },

  fonts: {
    display: "montserrat",
    body:    "inter",
  },

  ticker: {
    type:      "iframe",
    iframeUrl: "",
    items: [],
  },

  nav: [
    { id: "central-resultados", label: "Resultados", href: "/central-resultados.html", children: [] },
    { id: "docs-cvm", label: "Documentos CVM", href: "/documentos-cvm.html", children: [] },
    { id: "fale-ri", label: "Fale com RI", href: "/fale-com-ri.html", children: [] },
    { id: "mailing", label: "Mailing", href: "/mailing.html", children: [] },
    { id: "ezw9wbf", label: "Página de teste", href: "/n4ft0ix.html", children: [] },
  ],

  empresas: [
    { id: 'principal', label: "Denishow LTDA", short: 'DL' },
  ],

  supabase: {
    url:      "https://mmhuwlpsgnvoxyuofliq.supabase.co",
    anonKey:  "sb_publishable_BBSPbQc2kZngiK45ecfXaA_X4NANiGj",
    portalId: "42a7f151-3450-41b2-9a91-16247973f4e0",
  },

  header: { variant: 'tabmenu' },

  seo: {
    title:             "Denishow LTDA - Relações com Investidores",
    description:       "",
    googleAnalyticsId: "",
    clarityId:         "",
  },

  contact: {
    email: "",
  },

  languages: ["pt-BR","en","es"],

  restrictedNav: [],

  footer: {
    variant:   'simple',
    address:   "",
    email:     "",
    phone:     "",
    hours:     "",
    copyright: "©Copyright Denishow LTDA 2026",
    social: { linkedin: "#", instagram: "#", facebook: "#" },
    legalLinks: [
      { label: "Termos e Condições", href: "/termos-e-condicoes.html" },
      { label: "Política de Privacidade", href: "/politica-de-privacidade.html" },
      { label: "Definições de Cookies", href: "/definicao-de-cookies.html" }
    ],
    legalText: "As informações contidas neste site são de caráter meramente informativo e não constituem oferta de valores mobiliários.",
  },

};
