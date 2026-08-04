// src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 1. KOLEKSI BLOG 
const blogCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().default('Faiq Hudzaifah'),
    tags: z.array(z.string()).optional(),
    readingTime: z.string().optional(),
  }),
});

// 2. KOLEKSI GALLERY 
const galleryCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/gallery" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      category: z.string(),
      date: z.coerce.date().optional(),
      description: z.string().optional(),
      price: z.number().nonnegative().default(0),
      size: z.enum(["wide", "tall", "square"]).optional(),
      featured: z.boolean().default(false),
      image: image(),
      draft: z.boolean().default(false),
    }),
});

// Koleksi Sertifikasi
const certificationsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/certifications" }),
  schema: z.object({
    program: z.string(),
    issuer: z.string(),
    date: z.string(),
    details: z.string(),
    link: z.string().optional(), 
    multipleLinks: z.array(
      z.object({
        label: z.string(),
        url: z.string()
      })
    ).optional(),
    order: z.number().default(0), 
  }),
});

const skillsCollection = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/skills" }),
  schema: z.object({
    hardSkills: z.array(z.string()),
    softSkills: z.array(z.string()),
  }),
});


export const collections = {
  blog: blogCollection,
  gallery: galleryCollection,
  certifications: certificationsCollection,
  skills: skillsCollection,
};