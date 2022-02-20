export default {
  target: "static",
  head: {
    title: "Jakub Meysner",
    titleTemplate: "%s - Jakub Meysner",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  css: ["@fontsource/inter/latin.css"],
  plugins: [],
  components: true,
  buildModules: [
    "@nuxt/typescript-build",
    "@nuxtjs/stylelint-module",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/fontawesome",
  ],
  modules: ["@nuxtjs/pwa", "@nuxt/content"],
  pwa: {
    meta: {
      appleStatusBarStyle: "default",
      name: "Jakub Meysner",
      theme_color: "#18181b",
    },
    manifest: {
      name: "Jakub Meysner",
      short_name: "Jakub Meysner",
      start_url: "/",
      background_color: "#18181b",
      lang: "en",
    },
  },
  content: {
    liveEdit: false,
  },
  build: {},
  fontawesome: {
    icons: {
      solid: ["faBars", "faGlobe"],
      brands: ["faGithub", "faLinkedin", "faTwitter"],
    },
  },
}
