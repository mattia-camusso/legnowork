<template>
  <header class="p-8 md:flex items-strart hidden justify-between bg-c-3">
    <a href="/">
      <img
        src="../assets/svg/logo-header.svg"
        class="md:h-6 h-4 flex"
        alt="Legnowork Logo"
      />
    </a>
    <nav class="nav-items mt-2 gap-6 2xl:gap-24 flex justify-center">
      <!--       <a href="/prodotti/porte" class="">
        <span class="!flex items-center item base-text text-style-3">
          <img
            class="h-4 pr-2"
            src="../assets/svg/accordion-white.svg"
            alt="LegnoWork"
          />
          <p>PRODOTTI</p>
        </span>
      </a> -->

      <a href="/#chi-siamo">
        <TextUnderlineAnimated extraStyle="text-style-2" color="1">
          CHI SIAMO
        </TextUnderlineAnimated>
      </a>
      <a href="/contatti">
        <TextUnderlineAnimated extraStyle="text-style-2" color="1">
          CONTATTI
        </TextUnderlineAnimated>
      </a>
      <a href="/showroom">
        <TextUnderlineAnimated extraStyle="text-style-2" color="1">
          SHOWROOM
        </TextUnderlineAnimated>
      </a>
      <AccordionHeader title="faq.title" id="`faqs-${index}`">
        <div class="flex flex-col gap-4 mt-6 ml-6">
          <div v-for="prodotto in prodotti">
            <a :href="`/prodotti/${prodotto.id}`">
              <TextUnderlineAnimated extraStyle="uppercase" color="1">
                {{ prodotto.name }}
              </TextUnderlineAnimated>
            </a>
          </div>
        </div>
      </AccordionHeader>
    </nav>
  </header>
  <div
    class="bg-c-3 h-[8vh] w-full px-4 z-50 fixed top-0 flex items-center justify-between md:hidden"
  >
    <a href="/">
      <img class="h-4" src="../assets/svg/logo-header.svg" alt="" />
    </a>
    <MenuSvg></MenuSvg>
  </div>
</template>

<script lang="ts" setup>
import { useMainStore } from "../stores/myStore";
import { prodotti } from "../constants";

const store = useMainStore();
</script>

<style scoped>
.menu-text {
  font-size: 2rem;
}

.header {
  top: 0;
  width: 100%;
}
</style>
