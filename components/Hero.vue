<template>
  <div class="hero-container">
    <a href="/">
      <img
        class="h-[12vh] md:h-[40vh] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
        src="../assets/svg/logo.svg"
        alt="LegnoWork"
      />
    </a>
    <h1 class="text-serif-1 p-4 text-center text-c-1 absolute bottom-8">
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
  background-image: url("../assets/hero.png");
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
