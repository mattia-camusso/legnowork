<script setup lang="ts">
import { ref, onMounted } from "vue";

const accordionOpen = ref<boolean>(false);

const props = defineProps<{
  title: string;
  id: string;
  active?: boolean;
}>();

onMounted(() => {
  accordionOpen.value = props.active;
});
</script>

<template>
  <div class="py-6 bg-c-3">
    <h2>
      <button
        :id="`accordion-title-${id}`"
        class="flex items-center justify-between w-full text-left font-semibold py-2"
        @click.prevent="accordionOpen = !accordionOpen"
        :aria-expanded="accordionOpen"
        :aria-controls="`accordion-text-${id}`"
      >
        <span class="text-c-1 font-bold text-serif-1 flex items-center pl-12 gap-2">
          <img src="../assets/svg/accordion-white.svg" :class="{ 'rotate-90': accordionOpen }" class="h-6 transition-all duration-300 ease-in-out"></img>
          ALTRI PRODOTTI</span
        >
      </button>
    </h2>
    <div
      :id="`accordion-text-${id}`"
      role="region"
      :aria-labelledby="`accordion-title-${id}`"
      class="grid text-sm text-slate-600 overflow-hidden transition-all duration-300 ease-in-out"
      :class="
        accordionOpen
          ? 'grid-rows-[1fr] opacity-100'
          : 'grid-rows-[0fr] opacity-0'
      "
    >
      <div class="overflow-hidden">
        <p class="pb-3">
          <slot />
        </p>
      </div>
    </div>
  </div>
</template>
