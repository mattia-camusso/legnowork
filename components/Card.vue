<template>
  <div
    :class="[
      props.color == 1 ? 'border-c-4 border-2' : '',
      props.transparent === true ? 'card-transparent' : 'card-overlay',
      props.aspect === true ? 'lg:aspect-[5/4]' : '',
      props.wide && !props.big ? 'items-start' : 'items-center',
      props.wide === true
        ? 'w-full'
        : 'lg:w-[36vw] md:w-[75vw] sm:w-[80vw] w-[90vw]',
    ]"
    class="flex flex-col lg:backdrop-blur-md backdrop-blur-lg p-4"
  >
    <h4
      class="text-pretty"
      :class="[
        props.color == 1 ? 'text-c-4' : 'text-c-2',
        props.wide && !props.big ? 'text-serif-1' : 'text-serif-big',
      ]"
    >
      {{ props.title }}
    </h4>
    <div
      :class="props.color == 1 ? 'bg-c-4' : 'bg-c-2'"
      class="w-full h-[2px] mt-4 mb-8"
    ></div>
    <p class="text-style-3 text-c-2">
      {{ props.description }}
    </p>
    <a v-if="cta" :href="`/${url}`" class="absolute top-[95%]">
      <button
        :class="
          props.color == 1
            ? 'border-2 border-c-4 text-c-4 after:bg-c-4'
            : ' text-c-2 after:bg-c-2'
        "
        class="text-style-3 py-2 lg:py-[1vh] px-8 bg-c-1 font-medium z-30 relative after:-z-20 after:absolute after:h-1 after:w-1 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 hover:text-c-1"
      >
        {{ cta }}
      </button>
    </a>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  title: String,
  description: String,
  cta: String,
  url: String,
  transparent: Boolean,
  aspect: Boolean,
  color: Number,
  big: Boolean,
  wide: Boolean,
});
</script>

<style>
@media screen and (max-width: 1024px) {
  .card-overlay {
    border-image: fill 1
      linear-gradient(var(--color-1-transparent), var(--color-1-transparent));
  }
}

@media screen and (max-width: 670px) {
  .card-transparent {
    border-image: fill 1
      linear-gradient(
        var(--color-1-transparenter),
        var(--color-1-transparenter)
      );
  }
}
</style>
