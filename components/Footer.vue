<template>
  <footer>
    <h3
      class="footer-container text-balance text-serif-1 text-center pt-4 sm:py-2 lg:py-[2vh]"
    >
      PARLIAMONE DAVANTI A UN CAFFÈ
    </h3>
    <div class="footer-container sm:mt-8">
      <h3 class="text-serif-1 text-center py-4 sm:py-8 lg:py-[2vh]">
        CONTATTAMI
      </h3>
      <div class="bg-c-2 w-3/4 md:w-1/2 h-[2px] bg-center mb-8 mx-auto"></div>
      <div class="flex flex-col items-center mb-8 gap-4 lg:gap-8">
        <p class="text-style-4 text-balance font-light flex items-center">
          <img
            src="../assets/svg/whatsapp.svg"
            class="lg:h-8 h-6 mr-4 hidden sm:block"
            alt="telefono wedding planner valle d'aosta"
          />
          Telefono - +39 333 343 4334
        </p>
        <p class="text-style-4 text-balance my-2 font-light flex items-center">
          <img
            src="../assets/svg/email.svg"
            class="lg:h-7 h-5 mr-4 hidden sm:block"
            alt="email wedding planner valle d'aosta"
          />Email - ale.matti@gmail.com
        </p>
        <p class="text-style-4 text-balance font-light flex items-center">
          <img
            src="../assets/svg/instagram2.svg"
            class="lg:h-8 h-6 mr-4 hidden sm:block"
            alt="instagram wedding planner valle d'aosta"
          />
          Instagram - @alemattiweddingplanner
        </p>
      </div>
      <p class="text-center w-5/6 sm:w-3/5 mb-4 sm:mb-8 mx-auto text-style-2">
        © 2024 by AlessiaMatti Wedding Planner | Wedding Planner Valle D'Aosta |
        Via Vattelapesca 1, 10025 Aosta | P.IVA 00006900420<br />
        <a href="https://mcwdesign.it" class="hover:text-c-4"
          >Sito Web a cura di MCW Design</a
        >
      </p>
    </div>
  </footer>
</template>

<script lang="ts" setup></script>

<style scoped>
footer {
  height: 100vh;
  background-image: url("../assets/footer.png");
  background-position: 90% center;
  background-size: cover;
  display: grid;
  place-items: center;
  place-content: center;
}

@media screen and (max-width: 640px) {
  footer {
    height: 70vh;
  }
}

.footer-container {
  width: 55vw;
  @apply bg-c-1;
  box-shadow: -5px 5px 0px 1px var(--color-3);
}

@media screen and (max-width: 1024px) {
  .footer-container {
    width: 70vw;
  }
}
@media screen and (max-width: 640px) {
  .footer-container {
    width: 90vw;
    box-shadow: none;
    margin-bottom: -2px;
  }
}
</style>
