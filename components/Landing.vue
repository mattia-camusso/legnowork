<template>
  <div>
    <div
      id="services"
      class="section section1 flex flex-col w-full justify-start items-center"
    >
      <h3 class="text-serif-big sm:pt-16 pt-8 lg:pt-[8vh] w-[90vw] text-center">
        VENITE A SCOPRIRE I NOSTRI
        <span class="font-black"> SERVIZI </span>
      </h3>
      <div class="flex justify-between w-full">
        <div class="gap-[4.2rem] flex flex-col mx-12 mt-16">
          <div class="flex after-line">
            <img
              src="../assets/svg/icon1.svg"
              class="h-14 mr-8 hidden sm:block"
              alt="instagram wedding planner valle d'aosta"
            />
            <p class="text-style-4">
              Assistenza post-vendita e manutenzione programmata
            </p>
          </div>
          <div class="flex after-line">
            <img
              src="../assets/svg/icon2.svg"
              class="h-14 mr-8 hidden sm:block"
              alt="instagram wedding planner valle d'aosta"
            />
            <p class="text-style-4">
              Sopralluoghi e consulenza tecnica professionale
            </p>
          </div>
          <div class="flex after-line">
            <img
              src="../assets/svg/icon3.svg"
              class="h-14 mr-8 hidden sm:block"
              alt="instagram wedding planner valle d'aosta"
            />
            <p class="text-style-4">
              Posa in opera qualificata legno-legno e casa clima
            </p>
          </div>
          <div class="flex after-line">
            <img
              src="../assets/svg/icon4.svg"
              class="h-14 mr-8 hidden sm:block"
              alt="instagram wedding planner valle d'aosta"
            />
            <p class="text-style-4">
              Finanziamenti personalizzati anche a tasso zero
            </p>
          </div>
        </div>
        <div class="mt-8">
          <img src="../assets/landing1.png" alt="legnowork" />
        </div>
      </div>
    </div>
    <div
      id="chi-sono"
      class="section section2 flex flex-col items-center justify-between"
    >
      <div
        class="flex flex-col items-center p-10 mt-[20vh] h-full card-container"
      >
        <p class="font-bold text-center text-style-4 mb-10">
          DETRAZIONI DEL 50% SULLA SPESA PER SOSTITUZIONE INFISSI
        </p>
        <p class="font-light text-center text-style-4">
          SOLO FINO AL 31/12/2024
        </p>
      </div>
      <img
        src="../assets/svg/INSTALLAZIONI.svg"
        class="w-full mb-[-5px]"
        alt="instagram wedding planner valle d'aosta"
      />
    </div>
    <div class="blue-container">
      <h3 class="text-center font-bold text-style-1 mb-12">
        OLTRE TRENT’ANNI DI ESPERIENZA QUALIFICATA
      </h3>
      <p class="text-center font-light leading-relaxed text-style-3">
        La nostra azienda vanta una solida esperienza trentennale nel campo
        delle installazioni di serramenti. Ogni intervento è realizzato con
        competenza e precisione, grazie a un team interno di professionisti
        altamente qualificati. Il nostro personale, formato con costante
        aggiornamento, si distingue per la capacità di operare in ogni contesto,
        rispettando sia gli ambienti che le persone. Questa lunga tradizione ci
        permette di garantire installazioni a regola d’arte, frutto di una
        dedizione che si è affinata nel tempo.
      </p>
    </div>
    <div class="section section3 flex flex-col w-full">
      <h3 class="text-serif-big pt-12 text-center text-c-2">
        I NOSTRI
        <span class="font-black"> PRODOTTI </span>
      </h3>
    </div>
    <div class="section section4 flex justify-evenly items-center">
      <img
        src="../assets/locations.png"
        alt="locations wedding planner aosta"
        class="w-[50vw] lg:block hidden"
      />
      <Card
        title="LOCATIONS"
        description="La Valle d'Aosta è il territorio ideale per coronare il sogno di un matrimonio esclusivo e magico. 
Lavorando come wedding planner in Valle d'Aosta conosco molto bene il panorama completo di ville, castelli e palazzi storici per aiutarvi a scegliere tra le migliori location, dove organizzare il vostro matrimonio da sogno."
        :color="1"
        cta="SCOPRI LOCATIONS"
        url="locations"
        aspect
      ></Card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { services } from "../constants";
</script>

<style scoped>
.section {
  max-height: 120vh;
  min-height: 110vh;
  width: 100vw;
}

.services-cont {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20vw, 1fr));
  row-gap: 10vh;
  column-gap: 4vw;
  width: 95vw;
}

.services-cont > * {
  min-width: 20vw;
  width: 100%;
}

@media screen and (max-width: 1024px) {
  .services-cont {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    row-gap: 5vh;
    column-gap: 5vw;
    width: 95vw;
  }

  .services-cont > * {
    width: 100%;
  }
}

@media screen and (max-width: 667px) {
  .services-cont {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(65vw, 1fr));
    row-gap: 3vh;
    justify-items: center;
    width: 70vw;
  }

  .services-cont > * {
  }
}

.section1 {
  background-image: url("assets/section1.png");
  background-position: center 99%;
  background-size: cover;
  background-repeat: no-repeat;
}
.section2 {
  background-image: url("assets/landing2.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-image: fill 1
    linear-gradient(var(--overlay-light), var(--overlay-light));
}
.section3 {
  background-image: url("assets/section3.png");
  background-position: center 99%;
  background-size: cover;
  background-repeat: no-repeat;
}
.section4 {
  background-image: url("assets/section4.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

@media screen and (max-width: 1024px) {
  .section2 {
    background-image: url("assets/landing2.png");
    background-size: cover;
  }
  .section4 {
    background-size: cover;
    background-image: url("assets/locations-mobile.png");
  }
}

.after-line {
  position: relative;
  text-decoration: none;
}
.after-line::after {
  content: "";
  width: 100%;
  height: 3px;
  bottom: -2rem;
  /* background-color: var(--c-title-underline-color); */
  background: var(--color-2);
  position: absolute;
}

.card-container {
  width: 75vw;
  @apply bg-c-1;
  box-shadow: 0px 4px 4px 0px var(--color-2);
}

.blue-container {
  width: 100vw;
  padding: 5rem;
  @apply text-c-1;
  border-image: fill 1
    linear-gradient(
      to bottom,
      rgba(49, 52, 133, 1) 0%,
      rgb(49, 52, 133, 0.65) 100%
    );
  background-image: url("../assets/landing3.png");
}
</style>
