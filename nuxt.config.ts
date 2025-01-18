// https://nuxt.com/docs/api/configuration/nuxt-config
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
        { hid: "description", name: "description", content: "" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
      script: [
        { src: "https://code.jquery.com/jquery-3.3.1.min.js" },
        { src: "https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js" },
      ],
    },
  },
  css: [
    "~/assets/css/animate.min.css",
    "~/assets/css/style.css",
    "~/assets/css/responsive.css",
    "~/assets/css/notifications.css",
    "bootstrap/dist/css/bootstrap.min.css",
  ],
  plugins: ["~/plugins/fontawesome.js"],
  build: {
    transpile: ["@fortawesome/vue-fontawesome"],
  },
  modules: ["@bootstrap-vue-next/nuxt"],
  devtools: { enabled: true },
  compatibilityDate: "2024-07-16",
});
