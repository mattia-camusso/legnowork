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
    <div class="mx-12 flex justify-between">
      <div class="flex flex-col justify-between gap-12">
        <a href="/" class="flex items-center">
          <img
            class="h-6"
            src="../assets/svg/accordion-small.svg"
            alt="LegnoWork"
          />
          <p class="item text-serif-1 font-bold ml-2">HOME</p>
        </a>
        <a href="/prodotti" class="flex items-center">
          <img
            class="h-6"
            src="../assets/svg/accordion-small.svg"
            alt="LegnoWork"
          />
          <p class="item text-serif-1 font-bold ml-2">PRODOTTI</p>
        </a>
        <a href="/contatti" class="flex items-center">
          <img
            class="h-6"
            src="../assets/svg/accordion-small.svg"
            alt="LegnoWork"
          />
          <p class="item text-serif-1 font-bold ml-2">CONTATTI</p>
        </a>
      </div>
      <div class="flex flex-col gap-6 mt-12">
        <div>
          <p class="text-style-3 text-right w-3/4 ml-auto">
            Via Calabria, 15 - 20054 Redecesio di Segrate (MI)
          </p>
        </div>
        <div><p class="text-style-3 text-right">Tel. +39 02 2137228</p></div>
        <div><p class="text-style-3 text-right">Tel. +39 02 26920202</p></div>
        <div><p class="text-style-3 text-right">Cell. +39 351 8036828</p></div>
      </div>
    </div>
    <div class="flex flex-col-reverse h-[20vh] w-full items-center">
      <h6 class="text-style-1 font-light mb-6">
        © 2016 Legnowork srl | Porte e Finestre | P.IVA 11360870155
      </h6>
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

.item {
  cursor: pointer;
  @apply text-c-2;
  width: fit-content;
  display: block;
  text-decoration: none;
  transition: all 400ms var(--cubic-bezier);
}

.item::after {
  content: "";
  display: block;
  width: 0%;
  margin-top: 4px;
  height: 3px;
  @apply bg-c-3;
}

.item:not(:hover) {
  transition: all 800ms ease;
}

.item:hover {
  @apply text-c-3;
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
