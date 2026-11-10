import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'
import seo from './seo.js'

export default defineConfig(({ mode, isSsrBuild }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react(), !isSsrBuild && seo({ siteUrl: env.SITE_URL || 'https://mignardises-salees.com' })],
    build: { copyPublicDir: !isSsrBuild },
  }
})
