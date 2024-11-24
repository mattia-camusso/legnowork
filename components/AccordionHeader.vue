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
  <div>
    <h2>
      <button
        :id="`accordion-title-${id}`"
        class="flex items-center justify-between text-left font-semibold"
        @click.prevent="accordionOpen = !accordionOpen"
        :aria-expanded="accordionOpen"
        :aria-controls="`accordion-text-${id}`"
      >
        <span class="text-c-1 text-style-3 flex items-start">
          <img src="../assets/svg/accordion-white.svg"  :class="{ 'rotate-90': accordionOpen }" class="mx-2 h-3 transition-all duration-300 ease-in-out"></img>          
          <TextUnderlineAnimated extraStyle="text-style-2" color="1">
            PRODOTTI
          </TextUnderlineAnimated>    
          </span
        >
      </button>
    </h2>
    <div
      :id="`accordion-text-${id}`"
      role="region"
      :aria-labelledby="`accordion-title-${id}`"
      class="grid text-sm overflow-hidden transition-all duration-300 ease-in-out"
      :class="
        accordionOpen
          ? 'grid-rows-[1fr] opacity-100'
          : 'grid-rows-[0fr] opacity-0'
      "
    >
      <div class="overflow-hidden">
          <slot />
      </div>
    </div>
  </div>
</template>
