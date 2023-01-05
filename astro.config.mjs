import { defineConfig } from "astro/config";
import houston from "./houston.json";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import alpinejs from "@astrojs/alpinejs";
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: "https://jaular-cisco.vercel.app",
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    mdx(),
    alpinejs(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
  ],
  markdown: {
    shikiConfig: {
      theme: {
        name: "Houston",
        type: "dark",
        settings: houston.tokenColors,
      },
      langs: [],
    },
  },
});

// https://docs.astro.build/en/guides/markdown-content/#syntax-highlighting
// https://connordowson.dev/blog/add-a-custom-syntax-highlighting-theme-in-astro