<template>
  <section class="px-8 lg:px-16 py-16 bg-accent text-dp" id="contact">
    <h2
      class="text-4xl lg:text-6xl text-center mb-16 font-medium"
      v-motion-slide-visible-once-bottom
      :duration="600"
    >
      Got a question? <span class="text-lp">Call us</span>
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
          href="https://www.instagram.com/theerna_films/"
          target="_blank"
        >
          <InstagramIcon />
        </NuxtLink>
        <NuxtLink
          href="https://www.facebook.com/profile.php?id=61561638449676"
          target="_blank"
        >
          <FacebookIcon />
        </NuxtLink>
        <NuxtLink
          href="https://www.youtube.com/@theernaentertaintment"
          target="_blank"
        >
          <YoutubeIcon />
        </NuxtLink>
        <NuxtLink
          href="https://www.linkedin.com/company/theerna-films/"
          target="_blank"
        >
          <LinkedinIcon />
        </NuxtLink>
      </div>

      <span class="grow"></span>

      <span class="text-ds text-center"
        >© 2024 Theerna Films & Entertainment</span
      >

      <NuxtLink target="_blank" href="/legal/privacy-policy">
        Privacy Policy
      </NuxtLink>

      <NuxtLink target="_blank" href="/legal/terms-conditions">
        Terms & Conditions
      </NuxtLink>
    </div>
  </section>
</template>
