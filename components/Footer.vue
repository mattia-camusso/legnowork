<template>
  <footer>
    <div class="flex justify-between m-12">
      <a href="/">
        <img class="h-24" src="../assets/svg/logo-footer.svg" alt="LegnoWork" />
      </a>
      <div class="flex gap-6">
        <img class="h-32" src="../assets/svg/albolegno.svg" alt="LegnoWork" />
        <img class="h-32" src="../assets/icon_finstral.png" alt="LegnoWork" />
      </div>
    </div>
    <div class="mx-12">
      <div class="flex items-center">
        <img
          class="h-4 rotate-90"
          src="../assets/svg/accordion.svg"
          alt="LegnoWork"
        />
        <p class="text-serif-1 font-bold">HOME</p>
      </div>
      <div></div>
    </div>
  </footer>
</template>

<script lang="ts" setup></script>

<style scoped>
footer {
  height: 70vh;
}

@media screen and (max-width: 640px) {
  footer {
    height: 70vh;
  }
}
</style>
