import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwind from "@astrojs/tailwind";

import partytown from "@astrojs/partytown";

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: cloudflare(),
  image: {
    service: {
      entrypoint: 'astro/service/cloudflare',
      config: {},
    },
  },
  integrations: [tailwind(), partytown(), react()]
});