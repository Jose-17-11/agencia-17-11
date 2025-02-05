import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwind from "@astrojs/tailwind";

import partytown from "@astrojs/partytown";

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: cloudflare(),
  vite: {
    build: {
      minify: false,
    },
  },
  integrations: [tailwind(), partytown(), react()]
});