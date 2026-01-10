// @ts-check

import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  image: {
    // Example: allow processing all images from Hygraph
    remotePatterns: [{
      protocol: 'https',
      hostname: '**.graphassets.com',
    }],
  },

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: netlify(),
});