<template>
  <Menu></Menu>
  <Header></Header>
  <div class="mt-[12vh] md:mt-0"></div>
  <div class="m-12 mt-0 md:pt-32 pt-24">
    <h2 class="text-serif-big uppercase text-center md:text-left font-black">
      SHOWROOM
    </h2>
    <div class="flex lg:flex-row flex-col-reverse gap-12 mt-12">
      <img
        class="lg:w-1/2 object-cover aspect-[5/4]"
        :src="`/showroom/${currentImage}.jpg`"
        :alt="`Showroom LegnoWork`"
      />
      <p class="text-style-4 text-pretty leading-relaxed">
        Nella nostra sede troverete a diposizione un ampio show-room di 400
        metri quadrati dove potete visionare e toccare con mano i prodotti di
        Vostro interesse e ricevere tutte le informazioni tecniche e pratiche
        necessarie. Potete personalizzare i vostri desideri con le finiture, gli
        accessori e le colorazioni più attuali e moderne. Sarete seguiti dal
        nostro staff per qualsiasi chiarimento, progetto e desiderio che volete
        realizzare.
      </p>
    </div>
    <div class="flex flex-wrap justify-between md:justify-normal md:gap-8">
      <div
        @click="currentImage = img"
        v-for="img in 4"
        class="cursor-pointer relative border-2 border-transparent hover:border-c-4 transition-all md:mt-8 mt-8"
      >
        <img
          class="h-20 md:h-24 aspect-square object-cover"
          :src="`/showroom/${img}.jpg`"
        />
      </div>
    </div>
  </div>
  <div class="bg-c-3 h-24 w-full"></div>
  <Footer></Footer>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const currentImage = ref(1);
</script>

<style></style>
