const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: 'localhost',
    //   port: 3000,   //修改项目默认端口
    open: true
  },
  lintOnSave: false // 关闭eslint检查
})
