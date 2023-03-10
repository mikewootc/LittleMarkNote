import { builtinModules } from 'module';
import legacy from '@vitejs/plugin-legacy'

export default {
  root: __dirname,         // 指向主进程目录
  build: {
    outDir: 'dist/',
    lib: {
      entry: 'server/server.ts',   // Electron 目前只支持 CommonJs 格式
      formats: ['cjs'],
      fileName: () => '[name].cjs',
    },
    rollupOptions: {
      external: [          // 告诉 Rollup 不要打包内建 API
        'electron',
        ...builtinModules,
      ],
    },
    plugins: [
      legacy({
        targets: ['defaults', 'not IE 11']
      })
    ]
    //emptyOutDir: false,
  },
}




//import { fileURLToPath, URL } from 'node:url'
//
//import { defineConfig } from 'vite'
//import vue from '@vitejs/plugin-vue'
//import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
//
//// https://vitejs.dev/config/
//export default defineConfig({
//  plugins: [
//    vue({
//      template: { transformAssetUrls }
//    }),
//
//    quasar({
//      sassVariables: 'src/quasar-variables.sass'
//    }),
//  ],
//  resolve: {
//    alias: {
//      '@': fileURLToPath(new URL('./src', import.meta.url))
//    }
//  }
//})
