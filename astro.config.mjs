import { defineConfig } from 'astro/config';
import storyblok from '@storyblok/astro';
import vercel from '@astrojs/vercel/serverless';
import image from '@astrojs/image';
import mkcert from 'vite-plugin-mkcert';
import { loadEnv } from 'vite';
const env = loadEnv("", process.cwd(), 'STORYBLOK');


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
        aboutPage: 'storyblok/AboutPage',
        allShows: 'storyblok/AllShows',
        allThings: 'storyblok/AllThings',
        form: 'storyblok/Form',
        highlightedThings: 'storyblok/HighlightedThings',
        nextShow: 'storyblok/NextShow',
        page: 'storyblok/Page',
        previousShows: 'storyblok/PreviousShows',
        row_of_2: 'storyblok/RowOf2',
        showPage: 'storyblok/ShowPage',
        thingPage: 'storyblok/ThingPage',
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