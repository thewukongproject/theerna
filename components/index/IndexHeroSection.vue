<template>
  <section class="relative bg-dp text-lp" id="hero">
    <video
      src="../../public/videos/hero.mp4"
      autoplay
      muted
      loop
      class="grayscale opacity-50 w-full h-screen object-cover"
    />
    <div class="absolute top-0 h-full w-full z-10">
      <div
        class="px-8 lg:px-16 h-full flex flex-col justify-center items-start"
      >
        <div class="w-full relative font-medium">
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
          >
            <swiper-slide>
              <h1 class="text-5xl lg:text-8xl mb-8">
                <br />Film <br /><span class="text-accent">making</span>
              </h1>
            </swiper-slide>
            <swiper-slide>
              <h1 class="text-5xl lg:text-8xl mb-8">
                Post <br />production <br /><span class="text-accent"
                  >works</span
                >
              </h1>
            </swiper-slide>
            <swiper-slide>
              <h1 class="text-5xl lg:text-8xl mb-8">
                <br />Project <br /><span class="text-accent">designing</span>
              </h1>
            </swiper-slide>
            <swiper-slide>
              <h1 class="text-5xl lg:text-8xl mb-8">
                <br />Music <br /><span class="text-accent">production</span>
              </h1>
            </swiper-slide>
            <swiper-slide>
              <h1 class="text-5xl lg:text-8xl mb-8">
                <br />Studio <br /><span class="text-accent">recording</span>
              </h1>
            </swiper-slide>
            <swiper-slide>
              <h1 class="text-5xl lg:text-8xl mb-8">
                <br /><span class="text-accent">Mixing</span> & <br /><span
                  class="text-accent"
                  >mastering</span
                >
              </h1>
            </swiper-slide>
          </swiper>
        </div>

        <p class="mb-8">
          We ideate, create, and bring stories to life for everyone to enjoy.
        </p>
        <NuxtLink href="/#contact">
          <Button variant="accent">Get in touch</Button>
        </NuxtLink>
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
</script>
