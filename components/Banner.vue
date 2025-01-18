<template>
  <transition name="bounce">
    <div
      v-if="!isClosed"
      :class="
        store.bannerToggle ? '' : 'translate-y-52 bottom-[-13rem] !important'
      "
      class="bshadow mx-4 md:mx-8 p-6 gap-6 flex flex-col transition-all duration-500 fixed bottom-0 w-fit z-[1000] bg-c-1 rounded-t-xl"
    >
      <p class="text-style-3 text-center leading-relaxed text-balance">
        INFORMIAMO CON PIACERE CHE È ATTIVA DAL 07/01 AL 30/03/2025 UNA
        PROMOZIONE CON EXTRA SCONTO DEL 10% SUGLI ORDINATIVI PER SOSTITUZIONE
        FINESTRE
      </p>
      <MainButton @click="closeBanner()" class="text-style-3 text-center"
        >OK</MainButton
      >
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { useMainStore } from "../stores/myStore";

const store = useMainStore();
const isClosed = ref(true);
let closeBanner;

onMounted(() => {
  if (sessionStorage.getItem("banner") !== "closed") {
    isClosed.value = false;
  }
  closeBanner = () => {
    store.toggleBanner();
    sessionStorage.setItem("banner", "closed");
  };
});
</script>

<style scoped>
.bshadow {
  -webkit-box-shadow: 0px 0px 4px 0px var(--color-2);
  box-shadow: 0px 0px 4px 0px var(--color-2);
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: translateY(13rem);
  }
  100% {
    transform: translateY(0rem);
  }
}
</style>
