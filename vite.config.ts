import { defineConfig, type Plugin } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import { renderHead } from './scripts/seo-head.mjs';

/** Troca <!--seo-head--> pelo bloco de SEO da home (dev e build). As outras rotas são geradas no postbuild. */
const seoHead = (): Plugin => ({
  name: 'seo-head',
  transformIndexHtml: html => html.replace('<!--seo-head-->', renderHead('/', 'pt')),
});

export default defineConfig({
  plugins: [react(), seoHead()],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
  build: {
    target: 'ES2020',
    reportCompressedSize: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router'],
          'vendor-lucide': ['lucide-react'],
        },
      },
    },
  },
});
