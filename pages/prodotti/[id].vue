<template>
  <Header></Header>
  <div class="m-12">
    <h2 class="text-serif-big uppercase text-center md:text-left font-black">
      {{ currentProduct.name }}
    </h2>
    <div class="flex lg:flex-row flex-col-reverse gap-12 mt-12">
      <img
        class="lg:w-1/2 object-cover"
        :src="`/img/${currentProduct.id}/1.png`"
        :alt="`${currentProduct.name} LegnoWork`"
      />
      <p class="text-style-4 text-pretty leading-relaxed">
        {{ currentProduct.description }}
      </p>
    </div>
  </div>
  <AccordionSmall title="faq.title" id="`faqs-${index}`">
    <div class="services-cont mx-auto my-6 md:mx-12 mt-12">
      <div v-for="prodotto in prodotti">
        <a
          v-if="prodotto.id != currentProduct.id"
          :href="prodotto.id"
          class="item cursor-pointer"
        >
          <h4 class="text-style-4 uppercase text-c-1">
            {{ prodotto.name }}
          </h4>
        </a>
      </div>
    </div>
  </AccordionSmall>
  <Footer></Footer>
</template>

<script setup>
import Header from "../../components/Header.vue";
import { prodotti } from "../constants";
import { useRoute } from "vue-router";

definePageMeta({
  middleware: ["prodotti"],
});

const route = useRoute();

const currentProduct = ref("");

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
