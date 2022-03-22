module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/styles/index.scss";`
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/portfolio/last-fm/'
    : '/'
}
