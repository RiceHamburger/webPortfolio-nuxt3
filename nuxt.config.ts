import path from "path";
export default defineNuxtConfig({
  app: {
    head: {
      title: "NO-DATA",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "stylesheet", href: "/css/bootstrap.css" },
        { rel: "stylesheet", href: "/css/style.css" },
        { rel: "stylesheet", href: "/css/animate.min.css" },
        { rel: "stylesheet", href: "/css/responsive.css" },
      ],
    },
  },
  css: ["@fortawesome/fontawesome-svg-core/styles.css"],
  build: {
    transpile: ["@fortawesome/vue-fontawesome"],
  },
  modules: ["@bootstrap-vue-next/nuxt", "@nuxtjs/i18n", "@pinia/nuxt"],
  i18n: {
    strategy: "prefix",
    locales: [
      { code: "zh-tw", file: "tw.json" },
      { code: "en", file: "en.json" },
      { code: "ja", file: "jp.json" },
    ],
    defaultLocale: "ja",
    lazy: true,
    langDir: path.resolve("./locales"),
  },
  devtools: { enabled: true },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
  compatibilityDate: "2025-04-14",
});
