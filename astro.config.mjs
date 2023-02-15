import { defineConfig } from 'astro/config';
import storyblok from '@storyblok/astro';
import vercel from '@astrojs/vercel/serverless';
import mkcert from 'vite-plugin-mkcert';
import { loadEnv } from 'vite';
const env = loadEnv("", process.cwd(), 'STORYBLOK');

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [storyblok({
    accessToken: 'r9ie4IIkISoPVfCgX7Kx7Att',
    apiOptions: {},
    bridge: true,
    components: {
      about: 'storyblok/About',
      form: 'storyblok/Form',
      hero: 'storyblok/Hero',
      page: 'storyblok/Page',
    },
    useCustomApi: false
  })],
  vite: {
    server: {
      https: true
    },
    plugins: [mkcert()]
  }
});