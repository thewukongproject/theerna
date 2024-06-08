<template>
  <section class="bg-dp text-lp py-16 lg:pb-32" id="services">
    <p class="text-ds mb-8 text-center text-sm">
      Artists who've worked with us.
    </p>
    <h2
      class="text-4xl lg:text-6xl text-center mb-16 font-medium"
      v-motion-slide-visible-once-bottom
      :duration="600"
    >
      <span class="text-accent">Voices</span> behind our compositions
    </h2>
    <div class="w-full">
      <swiper
        :slides-per-view="2"
        :speed="1200"
        loop
        :modules="[Autoplay]"
        :autoplay="{
          delay: 1500,
        }"
        :breakpoints="{
          '480': {
            slidesPerView: 5,
          },
        }"
      >
        <swiper-slide v-for="artist of artists" class="px-4">
          <NuxtImg
            :src="'/images/index/' + artist + '.jpg'"
            class="w-full aspect-square object-cover rounded-4xl grayscale transition-all hover:grayscale-0"
            loading="lazy"
            format="webp"
            :alt="artist"
          />
          <h3 class="text-center mt-4 text-ds">{{ artist }}</h3>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const artists = [
  "Aishwarya Rangarajan",
  "Benny Dayal",
  "Chinmayi Sripada",
  "Gana Bala",
  "Haricharan",
  "Hariharan",
  "Kapil Kapilan",
  "KS Harisankar",
  "Madhu Balakrishnan",
  "Nikhita Gandhi",
  "Ouseppachan",
  "Sahithi Chaganti",
  "Saindhavi",
  "Shaan",
  "Sid Sriram",
  "Sithara",
  "Shweta Mohan",
  "Sujatha Mohan",
  "Vijay Prakash",
  "Vijay Yesudas",
  "Vineeth Sreenivasan",
];
</script>
