<template>
  <div
    class="bg-dp/75 text-lp py-4 lg:px-16 fixed z-50 w-full lg:flex items-center"
  >
    <NuxtImg
      src="/images/logo.svg"
      class="w-12 lg:w-16 mx-auto lg:ml-0 cursor-pointer"
      @click="goToSection('hero')"
      alt="Theerna Films & Entertainment"
    />
    <div
      class="flex lg:space-x-16 text-ls justify-between text-sm lg:text-xl mt-4 lg:mt-0 pt-4 lg:pt-0 border-t lg:border-none border-ds"
    >
      <NuxtLink
        href="/projects"
        class="w-1/3 lg:w-auto text-center transtion hover:text-accent cursor-pointer"
      >
        Projects
      </NuxtLink>
      <span
        @click="goToSection('services')"
        class="w-1/3 lg:w-auto text-center transtion hover:text-accent cursor-pointer"
      >
        Services
      </span>
      <span
        @click="goToSection('team')"
        class="w-1/3 lg:w-auto text-center transtion hover:text-accent cursor-pointer"
      >
        Team
      </span>
      <span
        @click="goToSection('contact')"
        class="w-1/3 lg:w-auto text-center lg:text-accent cursor-pointer hidden lg:inline"
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
const goToSection = (section: string) => {
  const route = useRoute();
  if (route.name === "index") {
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: "smooth" });
  } else {
    navigateTo("/#" + section);
  }
};
</script>
