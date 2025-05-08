import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        'yet-another-react-lightbox',
        'yet-another-react-lightbox/plugins/captions',
        'yet-another-react-lightbox/plugins/zoom'
      ]
    }
  }
});
