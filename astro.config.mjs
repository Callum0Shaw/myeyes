import { defineConfig } from 'astro/config';
import storyblok from '@storyblok/astro';
import { loadEnv } from 'vite';

const env = loadEnv("", process.cwd(), 'STORYBLOK');

export default defineConfig({
  integrations: [
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      apiOptions: {},
      bridge: true,
      components: {
        about: 'storyblok/About',
        page: 'storyblok/Page'
      },
      useCustomApi: false,
    })
  ],
});