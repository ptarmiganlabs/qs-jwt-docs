import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "QS-JWT",
  description: "Easily create Qlik Sense JWTs",
  base: "/qs-jwt-docs/",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/introduction" },
      { text: "Commands", link: "/guide/commands" },
      { text: "Examples", link: "/guide/examples" },
    ],

    sidebar: [
      {
        text: "Getting Started",
        items: [
          { text: "Introduction", link: "/guide/introduction" },
          { text: "Installation", link: "/guide/installation" },
          { text: "Concepts", link: "/guide/concepts" },
        ],
      },
      {
        text: "Commands",
        items: [
          { text: "Commands Overview", link: "/guide/commands" },
          { text: "create-qseow", link: "/guide/create-qseow" },
          { text: "create-qscloud", link: "/guide/create-qscloud" },
        ],
      },
      {
        text: "Examples",
        items: [
          { text: "QSEoW Examples", link: "/guide/qseow-examples" },
          { text: "QS Cloud Examples", link: "/guide/qscloud-examples" },
          { text: "API Usage", link: "/guide/api-usage" },
        ],
      },
      {
        text: "Advanced",
        items: [
          { text: "Security Rules", link: "/guide/security-rules" },
          { text: "Logging", link: "/guide/logging" },
          { text: "Security & Disclosure", link: "/guide/security" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/ptarmiganlabs/qs-jwt" },
    ],

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2025 Ptarmigan Labs",
    },

    search: {
      provider: "local",
    },

    editLink: {
      pattern:
        "https://github.com/ptarmiganlabs/qs-jwt-docs/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },
  },
});
