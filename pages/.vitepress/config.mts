import { defineConfig } from "vitepress";
import { genFeed } from './rss.ts';
import RssIcon from './RSSFeed.vue';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "en-US",
  title: "Gabs' Blog",
  description:
    "This is my blog, where I post about my projects, and other things I find interesting.",

  lastUpdated: true,
  cleanUrls: true,

  themeConfig: {
    author: "Gabriel Cozma/Gabs",
    colorScheme: {
      accent: "#f17755",
    },
    nav: {
      links: [
        { text: "Website", link: "https://gabs.eu.org" },
      ],
      git: "https://github.com/GabsEdits/blog",
      rss: "/feed.rss",
    },
    footer: {
      copyright: true,
      poweredBy: true,

      madeby: {
        show: true,
        name: "Gabs",
        link: "https://gxbs.me",
      },
    },
  },

  markdown: {
    container: {
      warningLabel: "⚠ Warning",
      tipLabel: "Tip",
      dangerLabel: "⚠ Danger",
      infoLabel: "Info",
    },
  },
  head: [
    ["meta", { name: "author", content: "Gabriel Cozma/Gabs" }],
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["link", { rel: "icon", type:"image/png", sizes: "32x32", href: "/favicon-32x32.png" }],
    ["link", { rel: "icon", type:"image/png", sizes: "16x16", href: "/favicon-16x16.png" }],
    ["link", { rel: "apple-touch-icon", type: "image/png", sizes: "180x180", href: "/apple-touch-icon.png" }],
    ["link", { rel: "manifest", href: "/site.webmanifest" }],
    ["meta", { name: "theme-color", content: "#f17755" }],
    ["meta", { name: "og:type", content: "website" }],
    ["meta", { name: "og:locale", content: "en" }],
    ["meta", { name: "og:site_name", content: "Gabs' Blog" }],
    ["meta", { name: "twitter:title", content: "Aplós Template" }],
    [
      "meta",
      {
        name: "twitter:description",
        content:
          "This is my blog, where I post about my projects, and other things I find interesting",
      },
    ],
    ["meta", { name: "twitter:url", content: "https://blog.gxbs.me" }],
  ],
  sitemap: {
    hostname: "https://blog.gabs.eu.org",
  },
  buildEnd: genFeed,
});
