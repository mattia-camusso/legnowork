<template>
  <div class="hero-container">
    <div>
      <img
        class="h-[12vh] md:h-[40vh] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
        src="../assets/svg/logo.svg"
        alt="LegnoWork"
      />
    </div>
    <h1 class="text-serif-1 text-center px-4 text-c-1 mb-[10vh]">
      Dal 1994 prodotti di qualità senza compromessi e posa in opera
      qualificata.
    </h1>
  </div>
</template>

<script lang="ts" setup></script>

<style>
.hero-container {
  height: 100svh;
  width: 100vw;
  background-image: url("../assets/default-prodotti.png");
  background-size: cover;
  background-repeat: no-repeat;

  background-position: 90% center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-image: fill 1 linear-gradient(var(--overlay-dark), var(--overlay-dark));
}
</style>
