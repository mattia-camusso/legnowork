<template>
  <nav class="header z-40" :class="store.menuToggle ? 'fixed' : 'absolute'">
    <div
      class="flex justify-between items-center my-6 lg:my-[5vh] px-4 lg:px-8 lg:h-[10vh]"
    >
      <div>
        <div class="block md:hidden h-8 aspect-square"></div>
        <div class="hidden lg:flex collapse gap-6 items-end nav-items">
          <h4 class="text-c-1 text-style-2">Servizi</h4>
          <h4 class="text-c-1 text-style-2">Locations</h4>
          <h4 class="text-c-1 text-style-2">Chi Sono</h4>
        </div>
      </div>
      <a href="/">
        <img
          class="h-16 sm:h-20 lg:h-[10vh]"
          src="../assets/svg/logo.svg"
          alt="Alessia Matti Wedding Planner"
        />
      </a>
      <div class="hidden lg:flex gap-6 items-end nav-items">
        <a href="/#services" class="nav-item cursor-pointer">
          <h4 class="text-c-1 text-style-2">Servizi</h4>
        </a>
        <a href="/locations" class="nav-item cursor-pointer">
          <h4 class="text-c-1 text-style-2">Locations</h4>
        </a>
        <a href="/#chi-sono" class="nav-item cursor-pointer">
          <h4 class="text-c-1 text-style-2">Chi Sono</h4>
        </a>
      </div>
      <div class="lg:hidden flex items-center">
        <MenuSvg></MenuSvg>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { useMainStore } from "../stores/myStore";

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
