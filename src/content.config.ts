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
  loader: glob({ pattern: '**/*.md', base: './src/content/gallery' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      category: z.string(),
      date: z.coerce.date().optional(),
      description: z.string().optional(),
      price: z.number().nonnegative().default(0),
      size: z.enum(['wide', 'tall', 'square']).optional(),
      featured: z.boolean().default(false),
      image: image(),
      draft: z.boolean().default(false),
    }),
});

// 3. KOLEKSI SERTIFIKASI
// - Sertifikat tunggal: isi `link` (opsional).
// - Program dengan banyak kursus: isi `courses` (total jam dihitung otomatis).
const certificationsCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/certifications' }),
  schema: z.object({
    program: z.string(),
    issuer: z.string(),
    date: z.string(),
    details: z.string(),
    link: z.string().optional(),
    courses: z
      .array(
        z.object({
          name: z.string(),
          track: z.string().optional(), // mis. "Deep Learning"
          credential: z.string(), // nomor sertifikat; dipakai untuk link verifikasi DTS
          date: z.string(),
          url: z.string().optional(), // PDF sertifikat
        })
      )
      .optional(),
    order: z.number().default(0), // kecil = tampil lebih atas
  }),
});

// 4. KOLEKSI SKILLS
const skillsCollection = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/skills' }),
  schema: z.object({
    hardSkills: z.array(z.string()),
    softSkills: z.array(z.string()),
  }),
});

// 5. KOLEKSI PENGALAMAN (project, program, kerja, organisasi)
const experienceCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experience' }),
  schema: z.object({
    role: z.string(),
    org: z.string(),
    period: z.string(),
    type: z.enum(['project', 'program', 'work', 'organization']).default('project'),
    summary: z.string(),
    highlights: z.array(z.string()).optional(),
    stack: z.array(z.string()).default([]),
    link: z.string().optional(),
    // Bukti: repo, demo, notebook, situs live, dll. URL diawali # = anchor di halaman yang sama.
    proof: z.array(z.object({ label: z.string(), url: z.string() })).default([]),
    order: z.number().default(0), // kecil = tampil lebih atas
  }),
});

export const collections = {
  blog: blogCollection,
  gallery: galleryCollection,
  certifications: certificationsCollection,
  skills: skillsCollection,
  experience: experienceCollection,
};
