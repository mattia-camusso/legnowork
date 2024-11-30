<template>
  <Menu></Menu>
  <Header></Header>
  <div class="mt-[12vh] md:mt-0"></div>
  <div class="flex flex-col md:flex-row m-12 md:h-[90vh]">
    <div
      class="md:w-[45vw] flex flex-col items-center justify-between gap-6 md:gap-0 md:h-full"
    >
      <h3 class="text-serif-big font-black text-center md:text-left">
        CONTATTI
      </h3>
      <div class="flex items-center gap-4">
        <img class="h-6 lg:h-8" src="../assets/svg/whatsapp.svg" alt="" />
        <p class="text-style-3">+39 351 8036828</p>
      </div>
      <div class="flex items-center gap-4">
        <img class="h-6 lg:h-8" src="../assets/svg/email.svg" alt="" />
        <p class="text-style-3">info@legnowork.com</p>
      </div>
      <div class="flex items-center gap-4">
        <img class="h-6 lg:h-8" src="../assets/svg/phone.svg" alt="" />
        <p class="text-style-3">+39 351 8036828</p>
      </div>
      <div class="flex items-center gap-4">
        <img class="h-6 lg:h-8" src="../assets/svg/phone.svg" alt="" />
        <p class="text-style-3">+39 351 8036828</p>
      </div>
      <div>
        <a
          target="_blank"
          href="https://www.google.com/maps/dir/45.7529579,7.6456718/legnowork/@45.4057361,7.1287917,8z/data=!3m2!4b1!5s0x4786c62c68b92fff:0xccac69fff1a80b41!4m9!4m8!1m1!4e1!1m5!1m1!1s0x4786c62c6b852203:0x9290206c67d8c580!2m2!1d9.2771865!2d45.4858992?entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D"
        >
          <img
            src="../assets/map.png"
            class="border-2 border-transparent hover:border-c-4 transition-all rounded-3xl"
            alt=""
          />
        </a>
      </div>
    </div>
    <div
      class="md:w-[45vw] mt-12 md:mt-0 h-full flex flex-col justify-between gap-6 md:gap-0"
    >
      <h3 class="text-serif-big font-black text-center md:text-left">
        SHOWROOM
      </h3>
      <p class="text-pretty leading-relaxed xl:leading-snug text-style-3">
        Presso la nostra sede sono a disposizione della clientela due show-room
        dove troverete e toccherete con mano i prodotti che abbiamo selezionato
        nelle più recenti tipologie, finiture e personalizzazioni.
      </p>
      <img class="px-2" src="../assets/showroom.png" alt="" />
    </div>
  </div>
  <div
    class="bg-c-3 py-12 flex flex-col md:flex-row w-full items-center gap-6 md:gap-0 justify-evenly"
  >
    <div><h6 class="font-black text-c-1 text-serif-big">ORARI</h6></div>
    <div class="flex items-center gap-4">
      <img class="h-8" src="../assets/svg/time1.svg" alt="" />
      <p class="text-style-3 text-c-1">
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

<script lang="ts" setup></script>

<style></style>
