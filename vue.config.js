// vue.config.js
module.exports = {
    devServer: {
        proxy: 'http://localhost:3000',
        disableHostCheck: true,
    }
  }