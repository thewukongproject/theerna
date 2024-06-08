<template>
  <div
    class="bg-dp/75 text-lp py-4 px-16 fixed z-50 w-full lg:flex items-center"
  >
    <NuxtImg
      src="/images/logo.svg"
      class="w-12 lg:w-16 mx-auto lg:ml-0 cursor-pointer"
      @click="scrollToSection('hero')"
      alt="Theerna Films & Entertainment"
    />
    <div class="hidden lg:flex space-x-16 text-ls justify-between text-xl">
      <span
        @click="scrollToSection('services')"
        class="transtion hover:text-accent cursor-pointer"
      >
        Services
      </span>
      <span
        @click="scrollToSection('team')"
        class="transtion hover:text-accent cursor-pointer"
      >
        Team
      </span>
      <span
        @click="scrollToSection('contact')"
        class="text-accent cursor-pointer"
      >
        Get in touch
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
//
// Scroll into a section
//
const scrollToSection = (section: string) => {
  const element = document.getElementById(section);
  element?.scrollIntoView({ behavior: "smooth" });
};
</script>
