import { defineNuxtConfig } from "nuxt"

export default defineNuxtConfig({
  meta: {
    title: "teyvat-lore",
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico",
      },
    ],
  },

  modules: ["@vueuse/nuxt", "@unocss/nuxt", "@pinia/nuxt"],

  autoImports: {
    dirs: ["composables", "store"],
  },

  experimental: {
    reactivityTransform: true,
  },

  vueuse: {
    ssrHandlers: true,
  },

  unocss: {
    uno: true,
    attributify: true,
    preflight: true,
    icons: {
      scale: 1.2,
    },
    shortcuts: [
      [
        "btn",
        "px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50",
      ],
    ],
  },
})
