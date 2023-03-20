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
      accessToken: env.STORYBLOK_TOKEN,
      apiOptions: {},
      bridge: true,
      components: {
        about: 'storyblok/About',
        aboutPage: 'storyblok/AboutPage',
        allShows: 'storyblok/AllShows',
        form: 'storyblok/Form',
        nextShow: 'storyblok/NextShow',
        page: 'storyblok/Page',
        previousShows: 'storyblok/PreviousShows',
        row_of_2: 'storyblok/RowOf2',
        showPage: 'storyblok/ShowPage',
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