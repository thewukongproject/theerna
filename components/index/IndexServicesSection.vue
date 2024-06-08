<template>
  <section class="bg-dp text-lp px-8 lg:px-16 py-16 lg:pb-32" id="services">
    <p class="text-ds mb-8 text-center text-sm">Our expertise!</p>
    <h2
      class="text-4xl lg:text-6xl text-center mb-16 font-medium"
      v-motion-slide-visible-once-bottom
      :duration="600"
    >
      What we <span class="text-accent">do</span>
    </h2>
    <div class="lg:flex max-w-6xl mx-auto mb-16">
      <div
        class="bg-lp text-dp lg:w-1/2 rounded-4xl p-8 lg:p-16 flex flex-col justify-center"
        v-motion
        :initial="isDesktop ? { x: 128 } : {}"
        :visible-once="{ x: 0 }"
        :duration="600"
      >
        <h2 class="text-2xl lg:text-4xl mb-8 font-medium">Movie production</h2>
        <ul class="divide-y divide-br">
          <li
            v-for="(service, index) of services.movie"
            class="flex items-center py-2 transition"
            :class="index === activeSlideIndex.movie ? 'text-accent' : ''"
          >
            <span class="text-2xl lg:text-4xl w-8 lg:w-16 font-medium">{{
              index + 1
            }}</span
            >{{ service.title }}
          </li>
        </ul>
      </div>
      <div
        class="bg-accent rounded-4xl lg:w-1/2 overflow-hidden"
        v-motion
        :initial="isDesktop ? { x: -128 } : {}"
        :visible-once="{ x: 0 }"
        :duration="600"
      >
        <swiper
          :slides-per-view="1"
          :allow-touch-move="false"
          :speed="1200"
          loop
          :modules="[Autoplay, EffectFade]"
          :autoplay="{
            delay: 1500,
          }"
          effect="fade"
          :fadeEffect="{
            crossFade: true,
          }"
          @slide-change="(s) => onSlideChange('movie', s)"
        >
          <swiper-slide
            v-for="service of services.movie"
            class="w-full h-full relative"
          >
            <NuxtImg
              :src="'/images/index/' + service.image + '.jpg'"
              class="w-full aspect-square object-contain"
              loading="lazy"
              format="webp"
              :alt="service.title"
            />
            <NuxtLink
              :href="service.link"
              target="_blank"
              v-if="service.link"
              class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <Button variant="light">
                <span class="mr-4">Know more</span> <ExternalLinkIcon />
              </Button>
            </NuxtLink>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <div class="lg:flex flex-row-reverse max-w-6xl mx-auto">
      <div
        class="bg-lp text-dp lg:w-1/2 rounded-4xl p-8 lg:p-16 flex flex-col justify-center"
        v-motion
        :initial="isDesktop ? { x: -128 } : {}"
        :visible-once="{ x: 0 }"
        :duration="600"
      >
        <h2 class="text-2xl lg:text-4xl mb-8 font-medium">Music production</h2>
        <ul class="divide-y divide-br">
          <li
            v-for="(service, index) of services.music"
            class="flex items-center py-2 transition"
            :class="index === activeSlideIndex.music ? 'text-accent' : ''"
          >
            <span class="text-2xl lg:text-4xl w-8 lg:w-16 font-medium">{{
              index + 1
            }}</span
            >{{ service.title }}
          </li>
        </ul>
      </div>
      <div
        class="bg-accent rounded-4xl lg:w-1/2 overflow-hidden"
        v-motion
        :initial="isDesktop ? { x: 128 } : {}"
        :visible-once="{ x: 0 }"
        :duration="600"
      >
        <swiper
          :slides-per-view="1"
          :allow-touch-move="false"
          :speed="1200"
          loop
          :modules="[Autoplay, EffectFade]"
          :autoplay="{
            delay: 1500,
          }"
          effect="fade"
          :fadeEffect="{
            crossFade: true,
          }"
          @slide-change="(s) => onSlideChange('music', s)"
        >
          <swiper-slide
            v-for="service of services.music"
            class="w-full h-full relative"
          >
            <NuxtImg
              :src="'/images/index/' + service.image + '.jpg'"
              class="w-full aspect-square object-contain"
              loading="lazy"
              format="webp"
              :alt="service.title"
            />
            <NuxtLink
              :href="service.link"
              target="_blank"
              v-if="service.link"
              class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <Button variant="light">
                <span class="mr-4">Know more</span> <ExternalLinkIcon />
              </Button>
            </NuxtLink>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

const { isDesktop } = useDevice();

// List of services
const services = {
  movie: [
    {
      title: "Feature & short films",
      image: "feature-short-films",
      link: "https://www.youtube.com/watch?v=vGHgFc9V2VU",
    },
    {
      title: "Documentaries & Ads",
      image: "documentaries-ads",
      link: "https://www.youtube.com/watch?v=gqNJ4eiN_TQ",
    },
    {
      title: "Project designing",
      image: "project-designing",
    },
    {
      title: "Post production works",
      image: "post-production-works",
      link: "https://www.youtube.com/watch?v=vGHgFc9V2VU",
    },
  ],
  music: [
    {
      title: "Music composing",
      image: "music-composing",
      link: "https://www.youtube.com/watch?v=J67n0lYHROM",
    },
    {
      title: "RR works",
      image: "rr-works",
      link: "https://www.youtube.com/watch?v=iQNVj0pj62Q&t=11s",
    },
    {
      title: "Mixing & mastering",
      image: "mixing-mastering",
      link: "https://www.youtube.com/watch?v=ZK4uGLpkAKk",
    },
    {
      title: "Dubbing & voice over",
      image: "dubbing-voice-over",
      link: "https://www.youtube.com/watch?v=HYRvYCggLNU",
    },
  ],
};

// Active slide index
const activeSlideIndex = ref({
  movie: 0,
  music: 0,
});

const onSlideChange = (category: string, swiper: any) => {
  if (category === "movie") {
    activeSlideIndex.value.movie = swiper.realIndex;
  } else {
    activeSlideIndex.value.music = swiper.realIndex;
  }
};
</script>
