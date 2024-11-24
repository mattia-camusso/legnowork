<template>
  <Menu></Menu>
  <Header></Header>
  <div class="mt-[12vh] md:mt-0"></div>
  <div class="m-12">
    <h2 class="text-serif-big uppercase text-center md:text-left font-black">
      {{ currentProduct.name }}
    </h2>
    <div class="flex lg:flex-row flex-col-reverse gap-12 mt-12">
      <img
        class="lg:w-1/2 object-cover aspect-[5/4]"
        :src="`/img/${currentProduct.id}/${currentImage}.png`"
        :alt="`${currentProduct.name} LegnoWork`"
      />
      <p class="text-style-4 text-pretty leading-relaxed">
        {{ currentProduct.description }}
      </p>
    </div>
    <div
      class="flex flex-wrap justify-between md:justify-normal md:gap-8 md:mt-8 mt-4"
    >
      <div
        @click="currentImage = img"
        v-for="img in currentProduct.length"
        class="relative border-2 border-transparent hover:border-c-4 transition-all"
      >
        <img
          class="h-20 md:h-24 aspect-square object-cover"
          :src="`/img/${currentProduct.id}/${img}.png`"
          :alt="`${currentProduct.name} ${img} Legnowork`"
        />
        <div v-if="img != currentImage" class="over-light h-full"></div>
      </div>
    </div>
  </div>
  <AccordionSmall title="faq.title" id="`faqs-${index}`">
    <div class="services-cont mx-auto my-6 md:mx-12 mt-12">
      <div v-for="prodotto in prodFiltrati">
        <a :href="prodotto.id" class="cursor-pointer">
          <TextUnderlineAnimated extraStyle="text-style-4 uppercase" color="1">
            {{ prodotto.name }}
          </TextUnderlineAnimated>
        </a>
      </div>
    </div>
  </AccordionSmall>
  <Footer></Footer>
</template>

<script setup>
import Header from "../../components/Header.vue";
import TextUnderlineAnimated from "../../components/TextUnderlineAnimated.vue";
import { prodotti } from "../constants";
import { useRoute } from "vue-router";

definePageMeta({
  middleware: ["prodotti"],
});
import { ref, onMounted } from "vue";
let prodFiltrati;

const route = useRoute();

onMounted(() => {
  prodFiltrati = prodotti.filter((p) => p.id != route.params.id);
});

const currentProduct = ref("");
const currentImage = ref(1);

currentProduct.value = prodotti.find(
  (element) => element.id === route.params.id
);

const otherProducts = ref("");

otherProducts.value = prodotti.filter(
  (element) => element.id !== route.params.id
);
</script>

<style>
.services-cont {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20vw, 1fr));
  row-gap: 6vh;
  column-gap: 4vw;
  width: 95vw;
}

.services-cont > * {
  min-width: 20vw;
  width: 100%;
}

.over-light {
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute; /* Sit on top of the page content */
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
  cursor: pointer;
}

@media screen and (max-width: 1024px) {
  .services-cont {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    row-gap: 5vh;
    column-gap: 5vw;
    width: 95vw;
  }

  .services-cont > * {
    width: 100%;
  }
}

@media screen and (max-width: 667px) {
  .services-cont {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(40vw, 1fr));
    row-gap: 3vh;
    justify-items: center;
    width: 90vw;
  }

  .services-cont > * {
  }
}

.item {
  cursor: pointer;
  @apply text-c-1;
  width: fit-content;
  display: block;
  text-decoration: none;
  transition: all 400ms var(--cubic-bezier);
}

.item::after {
  content: "";
  display: block;
  width: 0%;
  margin-top: 1rem;
  height: 3px;
  @apply bg-c-1;
}

.item:not(:hover) {
  transition: all 800ms ease;
}

.item:hover {
  @apply text-c-1;
  transition: all 800ms ease;
}

.item:hover::after {
  width: 100%;
  transition: width 800ms var(--cubic-bezier);
}

.item:not(:hover)::after {
  width: 0%;
  transition: width 800ms var(--cubic-bezier);
}
</style>
