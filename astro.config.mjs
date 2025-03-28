// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import react from "@astrojs/react";

import netlify from "@astrojs/netlify";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://totaltech-consulting.com/",
  integrations: [mdx(), sitemap(), react(), partytown({ config: { forward: ['dataLayer.push'] } })],
  adapter: netlify(),
});