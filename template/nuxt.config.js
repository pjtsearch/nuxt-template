const nodeExternals = require('webpack-node-externals');
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-demo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js Muse-UI project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  plugins: [
    '~plugins/muse-ui'
  ],
  modules:[
    [
      'nuxt-mq',
      {
        // Default breakpoint for SSR
        defaultBreakpoint: 'mobile',
        breakpoints: {
          mobile: 950,
          tablet: 960,
          laptop: 1250,
          desktop: Infinity,
        }
      }
    ],
    'nuxt-express-module'
  ],
  /*
  ** Build configuration
  */
  build: {
    babel: {
      plugins: [
        ['import', {
          libraryName: 'muse-ui',
          libraryDirectory: 'lib',
          camel2DashComponentName: false
        }]
      ]
    },
    vendor: [
      '~/plugins/muse-ui.js'
    ],
    extractCSS: true,
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient, isServer }) {
      if (isDev && isClient) {
//         config.module.rules.push({
//           enforce: 'pre',
//           test: /\.(js|vue)$/,
//           loader: 'eslint-loader',
//           exclude: /(node_modules)/
//         })
      }
      if (isServer) {
        config.externals = [nodeExternals({ whitelist: [/^muse-ui/] })];
      }
    }
  }
}
