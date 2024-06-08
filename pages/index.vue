<template>
  <div>
    <IndexHeroSection />

    <section class="lg:flex border-t-8 border-accent">
      <div class="px-8 lg:px-16 py-16 lg:w-1/2 shrink-0 flex items-center">
        <p class="text-ds" v-motion-slide-visible-once-bottom :duration="600">
          Our production house is a welcoming space nestled in the temple town
          called Tripunithura, Kochi. Here we ideate and create stories. We work
          on scripts, project design, production, post production and
          distribution of films and music. Our team has some very good creative
          minds who are passionate about art and ambitious to turn your vision
          into a visual treat.
          <br /><br />
          We have a decade long experience in music production under the
          renowned Music Director Sreejith Edavana. His songs in Malayalam and
          Tamil have hit the charts several times and continue to do so. Cicada
          is our first full length feature film to be produced under the Theerna
          Films and Entertainment banner.
        </p>
      </div>
      <NuxtImg
        src="/images/studio.webp"
        class="lg:w-1/2 object-cover grayscale"
        loading="lazy"
        alt="Theerna Films & Entertainment"
      />
    </section>

    <IndexServicesSection />

    <section class="px-8 lg:px-16 py-16" id="team">
      <p class="text-ds mb-8 text-center text-sm">
        The minds behind the studio.
      </p>

      <h2
        class="text-4xl lg:text-6xl text-center mb-16 font-medium"
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
          alt="Vandana Menon"
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
          alt="Sreejith Edavana"
        />
        <div class="p-8 lg:py-16 text-base lg:text-right">
          <p class="mb-4">
            Hello, I'm <span class="font-medium">Sreejith</span>, co-founder,
            music director, and movie director at Theerna.
          </p>
          <p>
            I am a Music Director from the South and have composed and delivered
            hit singles in the Malayalam and Tamil film industries. An Oscar
            Contention nominee for Music Direction in KS 3D, I have worked
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

    <IndexArtistsSection />

    <!-- <section class="px-8 lg:px-16 py-16" id="testimonials">
      <h2 class="text-6xl text-center mb-16">
        Hear from our clients<span class="text-accent">.</span>
      </h2>
      <div class="flex flex-wrap">
        <div
          v-for="tCol of testimonials"
          class="w-full lg:w-1/4 lg:px-4 lg:space-y-8 lg:odd:pt-8"
        >
          <div v-for="tRow of tCol" class="bg-ls rounded-4xl p-8">
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
  </div>
</template>
