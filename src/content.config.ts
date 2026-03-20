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
    image: z.string(),
    links: z.array(z.object({
      url: z.string().url(),
      label: z.string(),
    })).default([]).optional(),
    description: z.string().optional(),
    pros: z.array(z.string()).default([]).optional(),
    cons: z.array(z.string()).default([]).optional(),
  }),
});

// Export collections to register them
export const collections = { items };