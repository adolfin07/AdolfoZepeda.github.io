// @ts-check


import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
const LIVE_URL = "https://github.com/adolfin07/AdolfoZepeda.github.io"

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  site: "https://github.com/adolfin07",
  base: "AdolfoZv"
});

