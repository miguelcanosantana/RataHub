import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

// Collections
const recommendedItems = defineCollection({
  loader: glob({ base: './src/content/recommendedItems', pattern: '**/*.{md,mdx}' }),

  schema: z.object({

    //Campos del .md
    name: z.string(),
    link: z.url(),
    rating: z.number().min(1).max(5),
    shortDesc: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
  }),
});

// Export collections to register them
export const collections = { recommendedItems };