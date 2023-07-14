import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'A True Companion',
      social: {
        github: 'https://github.com/karledenstal/create-a-follower',
      },
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Welcome', link: '/guides/getting-started/' },
            { label: 'Pre-requisites', link: '/guides/prerequisites/' },
            { label: 'Creation Kit', link: '/guides/creation-kit/' },
            { label: 'Developer experience', link: '/guides/dev-ex/' },
          ],
        },
        {
          label: 'Basics',
          items: [],
        },
        {
          label: 'Framework',
          items: [],
        },
        {
          label: 'Dialogue',
          items: [],
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' },
        },
      ],
    }),
  ],

  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: { service: { entrypoint: 'astro/assets/services/sharp' } },
});
