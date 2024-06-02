<template>
  <div>
    <section class="relative bg-dp text-lp" id="hero">
      <video
        src="/videos/hero.mp4"
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
                <h1 class="text-4xl lg:text-8xl my-8">
                  Film <br /><span class="text-accent">making</span>
                </h1>
              </swiper-slide>
              <swiper-slide>
                <h1 class="text-4xl lg:text-8xl my-8">
                  Post production <br /><span class="text-accent">works</span>
                </h1>
              </swiper-slide>
              <swiper-slide>
                <h1 class="text-4xl lg:text-8xl my-8">
                  Project <br /><span class="text-accent">designing</span>
                </h1>
              </swiper-slide>
              <swiper-slide>
                <h1 class="text-4xl lg:text-8xl my-8">
                  Music <br /><span class="text-accent">production</span>
                </h1>
              </swiper-slide>
              <swiper-slide>
                <h1 class="text-4xl lg:text-8xl my-8">
                  Studio <br /><span class="text-accent">recording</span>
                </h1>
              </swiper-slide>
              <swiper-slide>
                <h1 class="text-4xl lg:text-8xl my-8">
                  <span class="text-accent">Mixing</span> & <br /><span
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

    <section class="lg:flex border-t-8 border-accent">
      <div class="px-8 lg:px-16 py-16 lg:w-1/2 shrink-0 flex items-center">
        <p class="text-ds" v-motion-slide-visible-once-bottom :duration="600">
          Our production house is a welcoming space nestled in the temple town
          of Tripunithura, Kochi. Here, we work on scripts, project design,
          production, post-production, and distribution of films and music. We
          have a team of highly creative minds who are passionate about art and
          ambitious to turn their vision into a visual kaleidoscope.
          <br /><br />
          With a decade of experience in music production under our music
          director, Sreejith Edavana, we have delivered hit singles in both
          Malayalam and Tamil. Our movie, Cicada, is the first full-length
          feature film produced under the Theerna Films and Entertainment
          banner.
        </p>
      </div>
      <NuxtImg
        src="/images/studio.webp"
        class="lg:w-1/2 object-cover"
        loading="lazy"
      />
    </section>

    <section class="bg-dp text-lp px-8 lg:px-16 py-16" id="services">
      <p class="text-ds mb-8 text-center text-sm">Our expertise</p>
      <h2
        class="text-6xl text-center mb-16 font-medium"
        v-motion-slide-visible-once-bottom
        :duration="600"
      >
        What we <span class="text-accent">do</span>
      </h2>
      <div class="lg:flex max-w-6xl mx-auto mb-16">
        <div
          class="bg-lp text-dp lg:w-1/2 rounded-3xl p-8 lg:p-16"
          v-motion
          :initial="{ x: 128 }"
          :visible-once="{ x: 0 }"
          :duration="600"
        >
          <h2 class="text-4xl mb-8 font-medium">Movie production</h2>
          <ul class="divide-y divide-br">
            <li class="flex items-center py-2">
              <span class="text-4xl w-16 font-medium">1</span>Film making
            </li>
            <li class="flex items-center py-2">
              <span class="text-4xl w-16 font-medium">2</span>Project designing
            </li>
            <li class="flex items-center py-2">
              <span class="text-4xl w-16 font-medium">3</span>-
            </li>
            <li class="flex items-center py-2">
              <span class="text-4xl w-16 font-medium">4</span>-
            </li>
          </ul>
        </div>
        <div
          class="bg-accent rounded-3xl p-8 lg:w-1/2 flex items-center justify-center"
          v-motion
          :initial="{ x: -128 }"
          :visible-once="{ x: 0 }"
          :duration="600"
        >
          <FilmIcon />
        </div>
      </div>
      <div class="lg:flex flex-row-reverse max-w-6xl mx-auto">
        <div
          class="bg-lp text-dp lg:w-1/2 rounded-3xl p-8 lg:p-16"
          v-motion
          :initial="{ x: -128 }"
          :visible-once="{ x: 0 }"
          :duration="600"
        >
          <h2 class="text-4xl mb-8 font-medium">Music production</h2>
          <ul class="divide-y divide-br">
            <li class="flex items-center py-2">
              <span class="text-4xl w-16 font-medium">1</span>Studio recording
            </li>
            <li class="flex items-center py-2">
              <span class="text-4xl w-16 font-medium">2</span>-
            </li>
            <li class="flex items-center py-2">
              <span class="text-4xl w-16 font-medium">3</span>-
            </li>
            <li class="flex items-center py-2">
              <span class="text-4xl w-16 font-medium">4</span>-
            </li>
          </ul>
        </div>
        <div
          class="bg-accent rounded-3xl p-8 lg:w-1/2 flex items-center justify-center"
          v-motion
          :initial="{ x: 128 }"
          :visible-once="{ x: 0 }"
          :duration="600"
        >
          <MusicIcon />
        </div>
      </div>
    </section>

    <section class="px-8 lg:px-16 py-16" id="team">
      <p class="text-ds mb-8 text-center text-sm">
        The minds behind the studio
      </p>

      <h2
        class="text-6xl text-center mb-16 font-medium"
        v-motion-slide-visible-once-bottom
        :duration="600"
      >
        Who <span class="text-accent">we</span> are
      </h2>

      <div
        class="lg:flex items-center max-w-6xl mx-auto rounded-full overflow-hidden bg-ls mb-16 pb-16 lg:pb-0"
        v-motion-fade-visible-once
        :duration="600"
      >
        <NuxtImg
          src="/images/vandana.webp"
          class="w-full lg:w-1/3 aspect-square object-cover rounded-full border-8 border-ls shrink-0"
          loading="lazy"
        />
        <div class="p-8 lg:py-16 text-base">
          <p class="mb-4">
            Hi, I'm <span class="font-medium">Vandana</span>, co-founder and
            manager of project design and operations at Theerna.
          </p>
          <p>
            I have been in the corporate world for over two decades. Starting in
            marketing for well-known brands like Pepe Jeans London, Times
            Internet Limited, Airtel, and Google, I transitioned into client
            servicing and talent casting for FMCG brands. My entrepreneurial
            spirit led me to co-found a dance academy and a photography studio
            in Bangalore, showcasing my passion for creative ventures outside
            the corporate realm. As a lover of all forms of art, it was natural
            for me to venture into the film world through Theerna Films and
            Entertainment, a production house in Kochi.
          </p>
        </div>
      </div>

      <div
        class="lg:flex items-center lg:flex-row-reverse max-w-6xl mx-auto rounded-full overflow-hidden bg-ls pb-16 lg:pb-0"
        v-motion-fade-visible-once
        :duration="600"
      >
        <NuxtImg
          src="/images/sreejith.webp"
          class="w-full lg:w-1/3 aspect-square object-cover rounded-full border-8 border-ls shrink-0"
          loading="lazy"
        />
        <div class="p-8 lg:py-16 text-base lg:text-right">
          <p class="mb-4">
            Hello, I'm <span class="font-medium">Sreejith</span>, co-founder,
            music director, and movie director at Theerna.
          </p>
          <p>
            I am a well-known Music Director from the South and have composed
            and delivered hit singles in the Malayalam and Tamil industries. An
            Oscar Contention nominee for Music Direction in KS 3D, I have worked
            extensively on movies, independent music albums, and ad jingles. I
            turned film director with my first movie, Cicada, which is in the
            four South Indian languages. My short film, "Bride of Dance," won me
            the best director award at the Kodaikanal International Film
            Festival. I have composed and directed many music videos that are
            trending across all digital platforms. My notable works include
            "Kaadal En Kaviye," "Tharam Padapichu Koodaram," "Nenjodu Chertu,"
            and many more that have been dubbed into other South Indian
            languages.
          </p>
        </div>
      </div>
    </section>

    <!-- <section class="px-8 lg:px-16 py-16" id="testimonials">
      <h2 class="text-6xl text-center mb-16">
        Hear from our clients<span class="text-accent">.</span>
      </h2>
      <div class="flex flex-wrap">
        <div
          v-for="tCol of testimonials"
          class="w-full lg:w-1/4 lg:px-4 lg:space-y-8 lg:odd:pt-8"
        >
          <div v-for="tRow of tCol" class="bg-ls rounded-3xl p-8">
            <NuxtImg
              src=""
              class="w-16 h-16 object-cover rounded-full mb-8"
              loading="lazy"
              format="webp"
            />
            <p class="mb-8">"{{ tRow.text }}"</p>
            <p class="text-ds">{{ tRow.name }}</p>
          </div>
        </div>
      </div>
    </section> -->

    <section class="px-8 lg:px-16 py-16 bg-accent text-dp" id="contact">
      <p class="text-ls mb-8 text-center text-sm">
        Got a question? Call or drop us a message.
      </p>
      <h2
        class="text-6xl text-center mb-16 font-medium"
        v-motion-slide-visible-once-bottom
        :duration="600"
      >
        Book your session <span class="text-lp">now</span>
      </h2>
      <div class="lg:flex lg:space-x-8 items-center justify-center">
        <NuxtLink href="tel:+919884663868">
          <Button variant="light"
            ><PhoneCallIcon /> <span class="ml-4">+91 9884663868</span></Button
          >
        </NuxtLink>
        <div class="text-ds text-center py-4">or</div>
        <NuxtLink href="tel:+919866002286">
          <Button variant="light"
            ><PhoneCallIcon /> <span class="ml-4">+91 9866002286</span></Button
          ></NuxtLink
        >
      </div>
      <div
        class="mt-16 border-t border-br pt-16 flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-8 text-sm"
      >
        <div class="flex items-center space-x-4">
          <span>Follow us on :</span>
          <NuxtLink
            href="https://www.youtube.com/channel/UCrab6Eo8mefSkJXYRFnvqwg"
            target="_blank"
          >
            <YoutubeIcon size="32" />
          </NuxtLink>
        </div>

        <span class="grow"></span>

        <span class="text-ds text-center"
          >© 2024 Theerna Films & Entertainment</span
        >

        <NuxtLink target="_blank"> Privacy Policy </NuxtLink>

        <NuxtLink target="_blank"> Terms & Conditions </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
</script>
