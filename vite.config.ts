import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueI18n from '@intlify/vite-plugin-vue-i18n'
import path from 'path'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '')

  console.log(mode, env.NODE_ENV)

  return {
    // vite config
    define: {
      __APP_ENV__: env.APP_ENV,
    },
    base: '/sport-timer/',
    server: {
      host: '0.0.0.0',
      hmr: {
        clientPort: 443,
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    plugins: [
      vue(),
      VitePWA({
        mode: 'development',
        registerType: 'autoUpdate',
        includeAssets: 'favicon.ico',
        devOptions: {
          enabled: true
        },
        manifest: {
          start_url: env.NODE_ENV === 'production' ? 'https://lobodol.github.io/sport-timer/' : 'https://sport-timer.docker.localhost/sport-timer/',
          scope: '/sport-timer/',
          icons: [
            {
              src: "android-chrome-192x192.png",
              sizes: "192x192",
              type: "image/png",
            },
            {
              src: "android-chrome-512x512.png",
              sizes: "512x512",
              type: "image/png",
            },
          ]
        },
      }),
      vueI18n({
        defaultSFCLang: 'yml',
        // if you want to use Vue I18n Legacy API, you need to set `compositionOnly: false`
        // compositionOnly: false,
        include: path.resolve(__dirname, './src/lang/**'),
      }),
    ],
  }
})
