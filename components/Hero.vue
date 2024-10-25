<template>
  <div class="hero-container">
    <h1 class="text-serif-big pt-[25vh] text-center text-c-1">
      IL VOSTRO MATRIMONIO <br />DA SOGNO IN <br />VALLE D'AOSTA
    </h1>
    <MainButton
      :link="'#services'"
      class="mb-10 lg:mb-[15vh] min-w-[20vw] text-style-2"
      >SCOPRI I NOSTRI SERVIZI</MainButton
    >
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
}
</style>
