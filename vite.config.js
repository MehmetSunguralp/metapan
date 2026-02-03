import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./",
  server: {
    proxy: {
      '/api/pdf-proxy': {
        target: 'https://www.tedd.com.tr',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/pdf-proxy/, ''),
        configure: (proxy, _options) => {
          proxy.on('proxyReq', (proxyReq, req, _res) => {
            proxyReq.setHeader('Origin', 'https://www.tedd.com.tr');
          });
        },
      },
    },
  },
})
