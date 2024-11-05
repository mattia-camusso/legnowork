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
  <div class="">
    <div
      :id="`accordion-text-${id}`"
      role="region"
      :aria-labelledby="`accordion-title-${id}`"
      class="grid overflow-hidden transition-all duration-300 ease-in-out"
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
    <div
      :id="`accordion-title-${id}`"
      class="flex items-center justify-center w-full text-left font-semibold"
      :aria-expanded="accordionOpen"
      :aria-controls="`accordion-text-${id}`"
    >
      <button
        @click.prevent="accordionOpen = !accordionOpen"
        class="bg-c-1 absolute w-16 md:w-24 h-16 md:h-24 rounded-full transition-all duration-200 ease-out"
        :class="{ 'rotate-180 ': accordionOpen }"
      >
        <img
          src="../assets/svg/accordion.svg"
          alt="instagram wedding planner valle d'aosta"
          class="relative m-auto rotate-180 h-4 md:h-8"
        />
      </button>
    </div>
  </div>
</template>
