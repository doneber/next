// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@pinia/nuxt',
    'nuxt-gtag',
  ],
  gtag: {
    id: 'G-SBTKZF9H3B'
  },
  content: {
    highlight: {
      theme: 'dark-plus',
      // theme: 'github-dark'
    },
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
