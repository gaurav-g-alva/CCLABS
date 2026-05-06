import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://gaurav-g-alva.github.io',
  //base: '/',
  output: 'static',
  integrations: [mdx(), sitemap()],
});
