<template>
  <section class="px-8 lg:px-16 py-16 bg-accent text-dp" id="contact">
    <p class="text-ls mb-8 text-center text-sm">
      Got a question? Call or drop us a message.
    </p>
    <h2
      class="text-4xl lg:text-6xl text-center mb-16 font-medium"
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
</template>
