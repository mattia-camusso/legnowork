<template>
  <div>
    <div
      id="services"
      class="section section1 flex flex-col w-full justify-start items-center"
    >
      <h3 class="text-serif-big sm:pt-16 pt-8 lg:pt-[8vh] w-[90vw] text-center">
        TUTTO IL NECESSARIO PER RENDERE IL VOSTRO GIORNO SPECIALE VERAMENTE
        <span class="text-c-4"> INDIMENTICABILE </span>
      </h3>
      <div class="services-cont px-4 sm:mt-[5vh] lg:mt-[15vh] pt-8">
        <MainButton
          :link="`services/${service.id}`"
          class="bg-opacity-65 md:bg-opacity-100"
          v-for="service in services"
        >
          <h6 class="text-style-2 p-0">
            {{ service.shortTitle.toUpperCase() }}
          </h6>
        </MainButton>
      </div>
    </div>
    <div
      id="chi-sono"
      class="section section2 flex justify-evenly items-center"
    >
      <Card
        title="CHI SONO"
        description="Benvenuti! Sono Alessia, wedding planner appassionata e orgogliosamente formata presso la prestigiosa Enzo Miccio Academy. Vivo e lavoro nella meravigliosa Valle d'Aosta, una terra che amo profondamente e che ha fatto da sfondo anche al giorno più importante della mia vita: il mio matrimonio.
La Valle d'Aosta, con i suoi paesaggi mozzafiato, castelli incantati e atmosfere romantiche, è il luogo perfetto per celebrare il vostro amore, e il mio obiettivo è trasformare i vostri sogni in realtà. Con creatività, cura dei dettagli e una grande passione per l'eleganza, sarò al vostro fianco per rendere indimenticabile ogni momento del vostro giorno speciale.
Lasciatevi ispirare dalla magia della Valle d'Aosta, e insieme creeremo un matrimonio su misura, che rispecchi la vostra storia e personalità."
        :color="1"
        aspect
      ></Card>
      <img
        src="../assets/chi-sono.png"
        alt="chi sono wedding planner aosta"
        class="w-[45vw] lg:block hidden"
      />
    </div>
    <div class="section section3 flex flex-col w-full justify-end items-center">
      <h3 class="text-serif-big pt-16 text-center text-c-1 mb-[15vh]">
        IN LOCATION SUGGESTIVE TRA LE MONTAGNE DELLA
        <span class="text-c-3"> VALLE D'AOSTA </span>
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
  @apply lg:px-4;
  @apply px-2;
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
  background-image: url("assets/section2.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
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
    background-image: url("assets/chi-sono-mobile.png");
    background-size: cover;
  }
  .section4 {
    background-size: cover;
    background-image: url("assets/locations-mobile.png");
  }
}
</style>
