import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  mode: 'production',
  build: {
    outDir: 'dist/api',
    lib: {
      entry: path.resolve(__dirname, 'src/package/api.tsx'),
      formats: ['umd'],
      name: 'FeedbackWidgetAPI',
      fileName: (format) => `index.js`,
    },
    rollupOptions: {},
  },
})
