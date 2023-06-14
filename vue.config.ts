import {defineConfig} from '@vue/cli-service'

module .exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config =>  {
    const tsRule = config.module.rule('ts')
    tsRule.uses.clear()

    tsRule
      .test(/\.ts$/)
      .use('esbuild-loader')
      .loader('esbuild-loader')
      .options({
        loader: 'ts',
        target: 'esnext',
        tsconfigRaw: require('./tsconfig.json'),
      })
  },
  devServer: {
    open: true,
    historyApiFallback: true,
    port: 8090,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        pathRewrite: { '/api': ''},
      }
    }
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "~@/assets/scss/variables.scss";'
      }
    }
  }
})