<template>
  <div class="bg-c-3 h-[12vh] flex items-center justify-center">
    <a href="/">
      <img class="h-8 md:h-10" src="../assets/svg/logo-header.svg" alt="" />
    </a>
  </div>
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
