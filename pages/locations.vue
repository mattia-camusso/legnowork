<template>
  <div
    class="location-container flex transition-all"
    :class="`location${active}`"
  >
    <div
      class="lg:w-2/5 w-full lg:bg-c-3 lg:opacity-65 flex flex-col justify-center items-center lg:justify-start md:pt-[10vh] gap-12"
    >
      <h2 class="text-style-4 hidden lg:block text-balance mx-auto w-3/4">
        Le location più suggestive in Valle D'Aosta
      </h2>
      <Card
        class="mx-auto"
        :title="locations[active].title"
        :description="locations[active].description"
        :color="1"
      ></Card>
    </div>
    <div></div>
  </div>
  <div
    class="absolute bottom-6 w-full flex justify-center bg-c-1 opacity-70 backdrop-blur-md py-4"
  >
    <div class="flex items-center justify-between w-2/3 md:hidden">
      <img
        @click="activePrev()"
        class="cursor-pointer h-6"
        src="../assets/svg/prev.svg"
      />
      <h3 class="text-serif-1 text-c-2 font-semibold text-center text-animate">
        {{ locations[active].id }}/{{ locations.length }}
      </h3>
      <img
        @click="activeSucc()"
        class="cursor-pointer h-6"
        src="../assets/svg/succ.svg"
      />
    </div>
    <div
      class="hidden backdrop-blur-lg w-[90%] md:w-fit bg-c-1 bg-opacity-70 rounded-lg px-4 md:px-12 py-4 md:flex gap-6 md:gap-12"
    >
      <h3
        @click="active = index"
        class="text-serif-1 font-medium text-center cursor-pointer selector-animation"
        :class="index === active ? 'text-c-4 ' : 'opacity-70'"
        v-for="(location, index) in locations"
      >
        {{ location.title }}
      </h3>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "locations",
});
const locations = [
  {
    id: "1",
    title: "CERVINIA",
    description:
      "Cervinia incanta con il suo fascino alpino e la sua atmosfera romantica. Le coppie possono scambiarsi voti sotto il cielo blu brillante e davanti alle maestose cime del Cervino, creando ricordi indimenticabili",
  },
  {
    id: "2",
    title: "COURMAYEUR",
    description:
      "Courmayeur offre uno scenario mozzafiato per matrimoni da favola. Avvolti dalle imponenti vette del Monte Bianco, in un ambiente alpino senza pari, da cerimonie intime in chiese di montagna a sontuose feste in lussuosi chalet.",
  },
  {
    id: "3",
    title: "GRESSONEY",
    description:
      "Gressoney cattura l'essenza della magia montana per matrimoni incantevoli. Le sue pittoresche chiese, i rifugi di montagna e i panorami mozzafiato offrono uno sfondo unico e suggestivo per un giorno così speciale.",
  },
  {
    id: "4",
    title: "CHAMPOLUC",
    description:
      "Champoluc offre una cornice idilliaca per matrimoni rustici ed eleganti. Con i suoi caratteristici chalet di legno e paesaggi montani incantevoli, è il luogo perfetto per una celebrazione intima e autentica.",
  },
];

const active = ref(0);

const activePrev = () => {
  active.value = active.value === 0 ? 3 : active.value - 1;
};

const activeSucc = () => {
  active.value = active.value === 3 ? 0 : active.value + 1;
};
</script>

<style>
.location-container {
  height: 100svh;
  width: 100vw;
  border-image: fill 1
    linear-gradient(var(--color-2-transparent), var(--color-2-transparent));
}

.selector-animation {
  transition: all 0.4s cubic-bezier(var(--cubic-bezier));
}

.location0 {
  background-image: url("../assets/locations/cervinia.png");
  background-position: 100% center;
  background-size: cover;
}
.location1 {
  background-image: url("../assets/locations/courmayeur.png");
  background-position: 90% center;
  background-size: cover;
}
.location2 {
  background-image: url("../assets/locations/gressoney.png");
  background-position: 80% center;
  background-size: cover;
}
.location3 {
  background-image: url("../assets/locations/champoluc.png");
  background-position: 70% center;
  background-size: cover;
}

.text-animate {
  transition: all cubic-bezier(--cubic-bezier);
}
</style>
