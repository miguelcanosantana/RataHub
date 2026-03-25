import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Collections
const items = defineCollection({
  loader: glob({ base: './src/content/items', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) => z.object({

    name: z.string(),
    rating: z.number().min(1).max(5).optional(),
    image: image(), 

    links: z.array(z.object({
      url: z.url(),
      label: z.string(),
    })).default([]).optional(),
    
    description: z.string().optional(),
    pros: z.array(z.string()).default([]).optional(),
    cons: z.array(z.string()).default([]).optional(),
  }),
});

// Export collections to register them
export const collections = { items };