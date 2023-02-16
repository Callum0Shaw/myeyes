import { defineConfig } from 'astro/config';
import storyblok from '@storyblok/astro';
import vercel from '@astrojs/vercel/serverless';
import image from '@astrojs/image';
import mkcert from 'vite-plugin-mkcert';
import { loadEnv } from 'vite';
const env = loadEnv("", process.cwd(), 'STORYBLOK');

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [
    image(),
    storyblok({
      accessToken: 'r9ie4IIkISoPVfCgX7Kx7Att',
      apiOptions: {},
      bridge: true,
      components: {
        about: 'storyblok/About',
        form: 'storyblok/Form',
        header: 'storyblok/Header',
        hero: 'storyblok/Hero',
        page: 'storyblok/Page',
        row_of_2: 'storyblok/RowOf2',
        row_of_3: 'storyblok/RowOf3',
        screening: 'storyblok/Screening',
        things: 'storyblok/Things'
      },
      useCustomApi: false
    })
  ],
  vite: {
    server: {
      https: true
    },
    plugins: [mkcert()]
  }
});