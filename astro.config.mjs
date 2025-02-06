import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwind from "@astrojs/tailwind";
import react from '@astrojs/react';

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  adapter: cloudflare(),
  integrations: [tailwind(), partytown(), react()]
});