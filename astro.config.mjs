import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://lassesentreprenad.se',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});