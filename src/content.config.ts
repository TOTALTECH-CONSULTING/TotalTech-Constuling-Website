import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    author: z.string(),
    abstract: z.string(),
  }),
});

const testimonials = defineCollection({
  loader: glob({ base: "./src/content/testimonials", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    name: z.string(),
    position: z.string(),
    quote: z.string(),
    image: z.string(),
  }),
});


const resources = defineCollection({
  loader: glob({ base: "./src/content/resources", pattern: "**/*.json" }),
  schema: z.object({
    id: z.number(),
    category: z.string(),
    secondarytitle: z.string(),
    items: z.array(
      z.object({
        description: z.string(),
        logo: z.string(),
      })
    ),
  }),
});


const faqs = defineCollection({
  loader: glob({ base: "./src/content/faqs", pattern: "**/*.json" }),
  schema: z.object({
    title: z.string(),
    questions: z.array(
      z.object({
        question: z.string(),
        answer: z.string(),
      })
    ),
  }),
});

export const collections = { blog , testimonials, resources, faqs };
