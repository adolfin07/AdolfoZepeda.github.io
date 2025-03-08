
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
const LIVE_URL = "https://github.com/adolfin07/AdolfoZepeda.github.io"

// https://astro.build/config
export default defineConfig({
  site: "https://adolfozepeda.github.io", // Reemplaza con tu URL correcta
  vite: {
    plugins: [tailwindcss()]
  }
});



