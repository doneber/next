// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@pinia/nuxt',
  ],
  content: {
    highlight: {
      theme: 'dark-plus',
      // theme: 'github-dark'
    }
  }
})
