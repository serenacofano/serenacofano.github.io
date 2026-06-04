import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const publications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    venue: z.string(),
    venueFull: z.string(),
    location: z.string(),
    date: z.date(),
    authors: z.array(z.string()),
    pdf: z.string().optional(),
    slides: z.string().optional(),
    code: z.string().optional(),
    doi: z.string().optional(),
  }),
});

export const collections = { publications };
