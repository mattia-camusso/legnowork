<template>
  <Menu></Menu>
  <Header></Header>
  <div class="flex items-center justify-center md:pt-32 pt-24">
    <h3 class="text-serif-big font-black text-center md:text-left">CONTATTI</h3>
  </div>
  <div class="flex flex-col mx-8 my-12">
    <div
      class="flex flex-col md:flex-row items-center justify-evenly gap-6 md:gap-0"
    >
      <div class="flex items-center gap-4">
        <a
          href="mailto:info@legnowork.com?subject=Info Legnowork"
          class="text-balance my-2 flex items-end"
          target="_blank"
        >
          <img class="h-6 lg:h-8 mr-2" src="../assets/svg/email.svg" alt="" />
          <TextUnderlineAnimated
            extraStyle="text-style-3 font-medium"
            color="2"
          >
            <p>info@legnowork.com</p>
          </TextUnderlineAnimated>
        </a>
      </div>
      <div class="flex items-center gap-4">
        <a
          href="tel:39022137228"
          target="_blank"
          class="text-balance my-2 flex items-end"
        >
          <img class="h-6 lg:h-8 mr-2" src="../assets/svg/phone.svg" alt="" />
          <TextUnderlineAnimated
            extraStyle="text-style-3 font-medium"
            color="2"
          >
            <p class="text-style-3">+39 02 2137228</p>
          </TextUnderlineAnimated>
        </a>
      </div>
      <div class="flex items-center gap-4">
        <a
          href="tel:390226920202"
          target="_blank"
          class="text-balance my-2 flex items-end"
        >
          <img class="h-6 lg:h-8 mr-2" src="../assets/svg/phone.svg" alt="" />
          <TextUnderlineAnimated
            extraStyle="text-style-3 font-medium"
            color="2"
          >
            <p class="text-style-3">+39 02 26920202</p>
          </TextUnderlineAnimated>
        </a>
      </div>
      <div class="flex items-center gap-4">
        <a
          href="https://wa.me/393517835552"
          target="_blank"
          class="text-balance my-2 flex items-end"
        >
          <img
            class="h-6 lg:h-8 mr-2"
            src="../assets/svg/whatsapp.svg"
            alt=""
          />
          <TextUnderlineAnimated
            extraStyle="text-style-3 font-medium"
            color="2"
          >
            <p class="text-style-3">+39 351 8036828</p>
          </TextUnderlineAnimated>
        </a>
      </div>
    </div>
  </div>
  <div class="h-[50vh] md:h-[80vh] md:m-12 m-6">
    <iframe
      src="https://storage.googleapis.com/maps-solutions-2ccpdr55l2/locator-plus/mmm2/locator-plus.html"
      width="100%"
      height="100%"
      style="border: 0; background-color: transparent"
      loading="lazy"
    >
    </iframe>
  </div>

  <div
    class="bg-c-3 py-12 px-8 flex flex-col md:flex-row w-full items-center gap-6 md:gap-0 justify-evenly"
  >
    <div><h6 class="font-black text-c-1 text-serif-big">ORARI</h6></div>
    <div class="flex items-center gap-4">
      <img class="h-8" src="../assets/svg/time1.svg" alt="" />
      <p class="text-style-3 text-center leading-relaxed text-c-1">
        Dal lunedì al venerdì 8.30-12.30 e 14.30-18.30
      </p>
    </div>
    <div class="flex items-center gap-4">
      <img class="h-8" src="../assets/svg/time2.svg" alt="" />
      <p class="text-style-3 text-c-1">Sabato 9:00-12:30</p>
    </div>
  </div>
  <Footer></Footer>
</template>

<script lang="ts" setup>
import TextUnderlineAnimated from "../components/TextUnderlineAnimated.vue";
</script>

<style scoped>
#locations-panel-list {
  display: hidden !important;
}
</style>
