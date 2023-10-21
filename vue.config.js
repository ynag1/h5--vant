const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            // 直接覆盖变量
            blue: '#16C2A3'
            // 'button-primary-background-color': '#FA6D1D'
            // 'button-primary-border-color': '#FA6D1D'
          }
        }
      }
    }
  }
})
