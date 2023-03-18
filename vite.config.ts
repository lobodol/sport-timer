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

  return {
    // vite config
    define: {
      __APP_ENV__: env.APP_ENV,
    },
    base: '/',
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
        devOptions: {
          enabled: true
        },
        manifest: {
          start_url: env.NODE_ENV === 'development' ? 'https://sport-timer.docker.localhost' : 'https://lobodol.github.io',
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
