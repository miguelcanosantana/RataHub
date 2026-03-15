import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

// Collections
const items = defineCollection({
  loader: glob({ base: './src/content/items', pattern: '**/*.{md,mdx}' }),

  schema: z.object({

    //Campos del .md
    name: z.string(),
    rating: z.number().min(1).max(5).optional(),
    shortDesc: z.string(),
    image: z.string(),
    link: z.url(),
  }),
});

// Export collections to register them
export const collections = { items };