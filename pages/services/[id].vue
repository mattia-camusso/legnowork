<template>
  <div class="service-main" :class="`bg-${currentService.id}`">
    <div
      class="md:ml-[10%] mx-4 sm:mx-[5vw] md:w-2/5 h-full flex flex-col md:items-end items-center justify-center gap-4 sm:gap-12"
    >
      <h2 class="text-c-1 text-wrap text-center md:text-right text-serif-big">
        {{ currentService.title }}
      </h2>
      <h3
        class="text-c-1 text-wrap text-center md:text-right text-style-1 font-medium"
      >
        {{ currentService.subtitle }}
      </h3>
      <p
        class="text-c-1 text-pretty leading-relaxed text-center md:text-right text-style-3 mt-12 sm:mt-24"
      >
        {{ currentService.description }}
      </p>
    </div>
  </div>
  <div v-if="currentService.type === 'long'">
    <div
      class="mt-12 md:mt-24 flex flex-col gap-4 2xl:gap-12 md:flex-row justify-between"
    >
      <img
        class="md:w-[48vw]"
        :src="`/img/${currentService.id}1.png`"
        :alt="`Alessia Matti Wedding Planner ${currentService.paragraph[3].title}`"
      />
      <Card
        big
        wide
        transparent
        :title="currentService.paragraph[2].title"
        :description="currentService.paragraph[2].description"
      ></Card>
    </div>
    <div
      class="mt-12 md:mt-24 flex flex-col-reverse gap-4 2xl:gap-12 md:flex-row justify-between"
    >
      <Card
        big
        wide
        transparent
        :title="currentService.paragraph[3].title"
        :description="currentService.paragraph[3].description"
      ></Card>
      <img
        class="md:w-[48vw]"
        :src="`/img/${currentService.id}2.png`"
        :alt="`Alessia Matti Wedding Planner ${currentService.paragraph[3].title}`"
      />
    </div>
  </div>
  <div
    :class="currentService.type !== 'long' ? 'mt-8' : 'md:my-24'"
    class="flex justify-between"
  >
    <div
      class="flex md:flex-col flex-col-reverse items-end justify-between md:mr-8"
    >
      <img
        class="w-full"
        :src="`/img/${currentService.id}3.png`"
        :alt="`Alessia Matti Wedding Planner ${currentService.subtitle2}`"
      />
      <h3
        class="md:w-4/5 w-full mb-8 md:mb-0 text-pretty text-c-2 mx-auto md:mx-8 text-center md:text-right text-serif-big"
      >
        {{ currentService.subtitle2 }}
      </h3>
    </div>
    <img
      :src="`/img/${currentService.id}4.png`"
      class="hidden md:block w-[50vw]"
      :alt="`Alessia Matti Wedding Planner ${currentService.subtitle2}`"
    />
  </div>
  <div class="mt-12 mb-6 md:mt-24">
    <Card
      wide
      transparent
      :title="currentService.paragraph[0].title"
      :description="currentService.paragraph[0].description"
    ></Card>
    <p
      v-if="currentService.type === 'auto'"
      class="text-style-2 mx-8 pb-8 md:pb-0"
    >
      *disponibili esclusivamente per eventi a Cervinia
    </p>
    <img
      :src="`/img/${currentService.id}4.png`"
      class="md:hidden block w-full"
      :alt="`Alessia Matti Wedding Planner ${currentService.subtitle2}`"
    />
    <Card
      wide
      transparent
      :title="currentService.paragraph[1].title"
      :description="currentService.paragraph[1].description"
    ></Card>
  </div>
  <CarSliderBis v-if="currentService.type === 'auto'" class="my-12 md:my-24">
  </CarSliderBis>
  <div class="text-center md:text-left text-pretty my-12 md:my-24 mx-8">
    <h2 class="text-serif-1 mb-8">SCOPRI TUTTI GLI ALTRI SERVIZI</h2>
    <div
      class="flex flex-wrap justify-center md:justify-start nav-items gap-6 md:gap-8"
    >
      <a
        :href="`/services/${other.id}`"
        class="nav-item text-c-2 after:bg-c-2"
        v-for="other in otherServices"
      >
        <h5 class="text-style-3 text-c-2">
          {{ other.title }}
        </h5>
      </a>
    </div>
  </div>
</template>

<script setup>
import { services } from "../constants";
import { useRoute } from "vue-router";

definePageMeta({
  middleware: ["service"],
  layout: "home",
});

const route = useRoute();

const currentService = ref("");

currentService.value = services.find(
  (element) => element.id === route.params.id
);

const otherServices = ref("");

otherServices.value = services.filter(
  (element) => element.id !== route.params.id
);
</script>

<style scoped>
.service-main {
  height: 130vh;
  border-image: fill 1
    linear-gradient(var(--color-2-transparent), var(--color-2-transparent));
}

@media screen and (max-width: 640px) {
  .service-main {
    height: 90vh;
  }
}

.bg-partecipazioni {
  background-image: url("../../assets/services/partecipazioni.png");
  background-size: cover;
  background-position: center 90%;
}

.bg-noleggio-auto {
  background-image: url("../../assets/services/noleggio-auto.png");
  background-size: cover;
}
.bg-make-up {
  background-image: url("../../assets/services/make-up.png");
  background-size: cover;
}
.bg-foto {
  background-image: url("../../assets/services/foto.png");
  background-size: cover;
}
.bg-flower-design {
  background-image: url("../../assets/services/flower-design.png");
  background-size: cover;
}
.bg-catering {
  background-image: url("../../assets/services/catering.png");
  background-size: cover;
}
.bg-musica {
  background-image: url("../../assets/services/musica.png");
  background-size: cover;
}
.bg-wedding-gift {
  background-image: url("../../assets/services/wedding-gift.png");
  background-size: cover;
}
</style>
import { ref } from "vue";import { ref } from "vue";import { ref } from
"vue";import { ref } from "vue";import { ref } from "vue";import { ref } from
"vue";
