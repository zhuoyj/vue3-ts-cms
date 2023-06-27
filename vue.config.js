// const IconsResolver = require('unplugin-icons/resolver')
const path = require('path')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
const Icons = require('unplugin-icons/webpack')
const IconsResolver = require('unplugin-icons/resolver')
module.exports = {
  outputDir: './build',
  // publicPath: '/', // 改变相对路径，能使本地的包可以在本地访问资源，但是上到服务器中的包不要开启此配置
  // 直接通过CLI提供给我们的选项来配置
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://152.136.185.210:5000',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        views: '@/views',
        components: '@/components'
      }
    },
    plugins: [
      AutoImport({
        resolvers: [
          ElementPlusResolver() // 自动导入图标组件
          // IconsResolver({
          //   prefix: 'Icon'
          // })
          ,
          // Auto import icon components
        // 自动导入图标组件
        IconsResolver({
          prefix: 'Icon',
        }),
        ],
      }),
      Components({
        resolvers: [
          // Auto register icon components
        // 自动注册图标组件
        IconsResolver({
          enabledCollections: ['ep'],
        }),
          // 自动注册图标组件
          // IconsResolver({
          //   enabledCollections: ['ep']
          // }),
          ElementPlusResolver()
        ],
      }),
      Icons({
        autoInstall: true,
      }),
    ]
  }
  // 通过configureWebpack修改webpack的配置
  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     '@': path.resolve(__dirname, 'src'),
  //     views: '@/views'
  //   }
  // },
  // 通过chainWebpack修改webpack的配置
  // chainWebpack: (config) => {
  //   config.resolve.alias
  //     .set('@', path.resolve(__dirname, 'src'))
  //     .set('views', '@/views')
  //     .set('components', '@/components')
  //     .set('plugin', [
  //       AutoImport({
  //         resolvers: [ElementPlusResolver()]
  //       }),
  //       Components({
  //         resolvers: [ElementPlusResolver()]
  //       })
  //     ])
  // }
}
