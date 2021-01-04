import { NuxtConfig } from '@nuxt/types'

const NAME = 'Jakub Meysner'
const AUTHOR = NAME
const DESCRIPTION = 'Web developer'

const config: NuxtConfig = {
  target: 'static',
  modern: 'client',
  head: {
    title: NAME,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: DESCRIPTION }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  css: ['@fontsource/inter/variable-full.css', '@/assets/styles/global.css'],
  plugins: [],
  components: true,
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/fontawesome'
  ],
  modules: ['@nuxtjs/pwa', '@nuxt/content', '@nuxtjs/robots'],
  build: {},
  content: {
    liveEdit: false,
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-atom-dark.css'
      }
    }
  },
  pwa: {
    // @ts-ignore
    meta: {
      name: NAME,
      author: AUTHOR,
      description: DESCRIPTION,
      theme_color: '#171717',
      appleStatusBarStyle: 'black-translucent'
    },
    // @ts-ignore
    manifest: {
      name: NAME,
      short_name: NAME,
      description: DESCRIPTION,
      start_url: '/',
      background_color: '#171717'
    }
  },
  fontawesome: {
    icons: {
      solid: ['faEnvelope'],
      brands: ['faGithub', 'faTwitter', 'faLinkedinIn']
    }
  }
}

export default config
