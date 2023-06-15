export default defineNuxtConfig({
  srcDir: "src",

  app: {
    head: {
      htmlAttrs: {
        lang: "es",
      },
      meta: [{ "http-equiv": "X-UA-Compatible", content: "IE=edge" }],
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "@/assets/img/logo/favicon.ico",
        },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap",
        },
      ],
      title: "GuitarLa - Project",
    },
  },

  css: ["@/assets/css/style.css"],

  appConfig: {
    nuxtIcon: {
      size: "1.5em",
    },
  },

  modules: ["nuxt-icon"],
});
