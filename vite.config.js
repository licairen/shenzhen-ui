/*
 * @Autor: 李建鹏
 * @Date: 2022-08-17 00:05:33
 * @LastEditTime: 2022-08-17 00:11:12
 * @Description: 初始化配置
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src') // 设置 `@` 指向 `src` 目录
    }
  },
  base: './', // 设置打包路径
  server: {
    port: 3000, // 设置服务启动端口号
    open: false, // 设置服务启动时是否自动打开浏览器
    cors: true, // 允许跨域

    // 设置代理，根据我们项目实际情况配置
    proxy: {
      '/api': {
        target: 'http://xxxxxxx:xxxx/',//遇到/api的接口会将路径指向target
        changeOrigin: true,
        secure: false,
        // 这里是追加链接,比如接口里包含了 /api,就需要这样配置.
        //rewrite: (path) => path.replace('/api/', '/'),
      }
    }
  }
})
