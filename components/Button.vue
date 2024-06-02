<template>
  <div :class="className">
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  variant: string;
}>();

const className = computed(() => {
  let className =
    "px-8 py-4 rounded-2xl cursor-pointer flex items-center justify-center";
  if (props.variant === "accent") {
    className += " bg-accent text-lp transition hover:bg-dp";
  } else if (props.variant === "light") {
    className += " bg-lp text-dp transition hover:bg-accent hover:text-lp";
  } else {
    className += " bg-dp text-lp transition hover:bg-accent hover:text-lp";
  }
  return className;
});
</script>
