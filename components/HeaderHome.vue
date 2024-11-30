<template>
  <header
    class="header mx-4 md:mx-0 h-0 opacity-0 hidden md:block"
    :class="store.menuToggle ? 'top-0' : 'top-[-5rem]'"
  >
    <a href="/">
      <img
        src="../assets/svg/logo-header.svg"
        class="md:h-6 h-4 flex logo"
        alt="Legnowork Logo"
      />
    </a>
    <nav class="nav-items mt-2 gap-6 2xl:gap-24 hidden md:flex justify-center">
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
    <MenuSvg class="md:hidden block base-text text-style-3"></MenuSvg>
  </header>
  <div
    class="bg-c-3 h-[8vh] w-full px-4 fixed z-50 flex items-center justify-between md:hidden"
  >
    <a href="/">
      <img class="h-4" src="../assets/svg/logo-header.svg" alt="" />
    </a>
    <MenuSvg></MenuSvg>
  </div>
</template>

<script lang="ts" setup>
import { useMainStore } from "~/stores/myStore";
import { prodotti } from "../constants";
import TextUnderlineAnimated from "./TextUnderlineAnimated.vue";

const store = useMainStore();
</script>

<style scoped>
.header {
  padding: 0rem 0rem;
  display: flex;
  position: sticky;
  align-items: center;
  justify-content: space-between;
  align-items: flex-start;
  z-index: 1000;
}

@media screen and (min-width: 768px) {
  .header {
    animation: stickyNav linear forwards;
    @supports (animation-timeline: view()) {
      animation-timeline: view();
      animation-range-start: 170vh;
      animation-range-end: 210vh;
    }
  }

  .logo {
    display: var(--display, none);
  }
  .lang {
    display: var(--lang, block);
  }
}

@keyframes stickyNav {
  0%,
  100% {
    --display: block;
    --lang: none;
    --width: auto;
    mix-blend-mode: normal;
    padding: 2rem;
    height: 100%;
    opacity: 1;
  }

  100% {
    @apply bg-c-3;
    top: 0rem;
  }
}
</style>
