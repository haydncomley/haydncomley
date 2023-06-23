import { defineConfig } from 'astro/config';
import astroI18next from 'astro-i18next';
import astroSingleFile from 'astro-single-file';

// https://astro.build/config
export default defineConfig({
  integrations: [
    astroI18next(),
    astroSingleFile(),
  ],
});
