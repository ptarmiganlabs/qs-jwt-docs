import { joinURL, withoutTrailingSlash } from "ufo";
import { defineConfig } from "vitepress";

// Generated at build time by scripts/fetch-qsjwt-version.mjs
import { version as qsJwtVersion } from "./version.js";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "QS-JWT",
  description: "Easily create Qlik Sense JWTs",
  base: "/",
  lang: "en-US",
  cleanUrls: true,
  sitemap: {
    hostname: "https://qs-jwt.ptarmiganlabs.com",
  },

  head: [
    // ["link", { rel: "icon", href: "/favicon.ico" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:title", content: "QS-JWT Documentation" }],
    [
      "meta",
      {
        property: "og:description",
        content: "Easily create Qlik Sense JWTs",
      },
    ],
    ["meta", { property: "og:site_name", content: "QS-JWT" }],

    [
      "script",
      {
        defer: "",
        "data-domain": "qs-jwt.ptarmiganlabs.com",
        src: "https://plausible.io/js/script.file-downloads.outbound-links.js",
      },
    ],
    [
      "script",
      {},
      `window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }`,
    ],
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/introduction" },
      { text: "Commands", link: "/guide/commands" },
      { text: "Examples", link: "/guide/examples" },
      {
        text: qsJwtVersion,
        items: [
          {
            text: "Downloads",
            link: "https://github.com/ptarmiganlabs/qs-jwt/releases",
          },
          {
            text: "Changelog",
            link: "https://github.com/ptarmiganlabs/qs-jwt/blob/main/CHANGELOG.md",
          },
          {
            text: "GitHub",
            link: "https://github.com/ptarmiganlabs/qs-jwt",
          },
        ],
      },
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

    lastUpdated: {
      text: "Updated at",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },
  },

  transformPageData: (pageData, { siteConfig }) => {
    // Initialize the `head` frontmatter if it doesn't exist.
    pageData.frontmatter.head ??= [];

    // Create canonical URL
    pageData.frontmatter.head.push([
      "link",
      {
        rel: "canonical",
        href: joinURL(
          "https://qs-jwt.ptarmiganlabs.com",
          withoutTrailingSlash(pageData.filePath.replace(/(index)?\.md$/, ""))
        ),
      },
    ]);

    pageData.frontmatter.head.push([
      "meta",
      {
        property: "og:url",
        content: joinURL(
          "https://qs-jwt.ptarmiganlabs.com",
          withoutTrailingSlash(pageData.filePath.replace(/(index)?\.md$/, ""))
        ),
      },
    ]);

    // Add basic meta tags to the frontmatter.
    pageData.frontmatter.head.push(
      [
        "meta",
        {
          property: "og:title",
          content:
            pageData.frontmatter.title ||
            pageData.title ||
            siteConfig.site.title,
        },
      ],
      [
        "meta",
        {
          name: "twitter:title",
          content:
            pageData.frontmatter.title ||
            pageData.title ||
            siteConfig.site.title,
        },
      ],
      [
        "meta",
        {
          property: "og:description",
          content:
            pageData.frontmatter.description ||
            pageData.description ||
            siteConfig.site.description,
        },
      ],
      [
        "meta",
        {
          name: "twitter:description",
          content:
            pageData.frontmatter.description ||
            pageData.description ||
            siteConfig.site.description,
        },
      ]
    );
  },
});
