// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: "Theerna Films & Entertainment",
      meta: [
        {
          name: "description",
          content:
            "We ideate, create, and bring stories to life for everyone to enjoy.",
        },
        {
          name: "keywords",
          content:
            "Theerna Films and Entertainment, Music Studio, Movie Studio, Recording Studio, Film Production, Music Production, Video Production, Audio Recording, Sound Studio, Studio Services, Music and Film Studio, Music Recording Services, Film Editing Services, Audio Mixing and Mastering, Music Composition, Sound Design, Video Editing, Post-Production Services, Voice Over Recording, Studio Rental, Music Production Services, Kochi Music Studio, Kochi Movie Studio, Recording Studio in Kochi, Film Production in Kochi, Audio Recording in Kochi, Music Production for Bands, Film Scoring Services, Music Production for Artists, Soundtrack Production, Commercial Video Production, Music Studio for Singers, Documentary Production, Promotional Video Services, Corporate Video Production, Affordable Music Recording Studio, Professional Audio Mixing Services, High-Quality Film Production, Custom Music Composition, Expert Sound Design Services, Full-Service Recording Studio, Music and Movie Studio Near Me, Top-Rated Music Studio, Vandana Menon, Sreejith Edavana",
        },
        { name: "og:title", content: "Theerna Films & Entertainment" },
        {
          name: "og:description",
          content:
            "We ideate, create, and bring stories to life for everyone to enjoy.",
        },
        { name: "og:type", content: "website" },
        { name: "og:url", content: "https://theernafilms.in" },
        { name: "twitter:title", content: "Theerna Films & Entertainment" },
        {
          name: "twitter:description",
          content:
            "We ideate, create, and bring stories to life for everyone to enjoy.",
        },
        { name: "twitter:url", content: "https://theernafilms.in" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    },
  },
  css: ["~/assets/css/main.css"],
  modules: [
    "@nuxt/fonts",
    "@nuxt/image",
    "@nuxtjs/device",
    "@nuxtjs/tailwindcss",
    "nuxt-feather-icons",
    "@vueuse/motion/nuxt",
  ],
});
