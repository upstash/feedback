import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/package/index.tsx'),
      name: 'FeedbackWidget',
      fileName: (format) => `feedback-widget.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
    },
  },
  plugins: [react()],
})
