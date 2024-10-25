<template>
  <a :href="props.link">
    <button
      :class="width ? width : 'w-full'"
      class="animation place-content-center bg-c-1 px-8 py-3 lg:py-[2vh]"
    >
      <slot />
    </button>
  </a>
</template>

<script lang="ts" setup>
const props = defineProps({
  width: String,
  link: String,
});
</script>

<style>
.animation {
  transform: translate(0, 0);
  transition: all 0.4s ease;
  box-shadow: -5px 5px 0px 1px var(--color-3);
}
@media screen and (max-width: 640px) {
  .animation {
    box-shadow: none;
  }
}

.animation:hover {
  transform: translateY(-4px);
  box-shadow: 0px 0px 0px 1px var(--color-3);
  background-color: var(--color-3);
}
</style>
