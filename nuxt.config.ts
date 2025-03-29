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
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  css: [
    "bootstrap/dist/css/bootstrap.css",
    "@/assets/css/animate.min.css",
    "@/assets/css/style.css",
    "@/assets/css/responsive.css",
    "@/assets/css/notifications.css",
  ],
  build: {
    transpile: ["@fortawesome/vue-fontawesome"],
  },
  modules: ["@bootstrap-vue-next/nuxt"],
  devtools: { enabled: true },
  compatibilityDate: "2025-03-29",
});
