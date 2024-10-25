<template>
  <h2 class="text-serif-big mb-12 mx-8">GALLERIA VEICOLI DISPONIBILI</h2>
  <div
    class="h-[80vh] lg:h-[100vh] mb-12 md:mb-24 w-full bg p-8 flex flex-col justify-between"
    :class="`bg-car-${currentCar.id}`"
  >
    <div>
      <h2 class="text-c-1 text-serif-big">{{ currentCar.name }}</h2>
      <h4 class="text-c-1 text-style-1">
        {{ currentCar.subtitle }}
      </h4>
    </div>
    <p
      class="md:mb-24 text-c-1 text-style-4 leading-relaxed md:w-2/3 self-end text-pretty text-center md:text-right"
    >
      {{ currentCar.description }}
    </p>
    <div class="flex items-center gap-8 md:hidden">
      <img
        @click="activePrev()"
        class="cursor-pointer h-6"
        src="../assets/svg/prev-white.svg"
      />
      <h3
        class="text-serif-1 text-c-1 font-medium w-64 text-center text-animate"
      >
        {{ currentCar.name }}
      </h3>
      <img
        @click="activeSucc()"
        class="cursor-pointer h-6"
        src="../assets/svg/succ-white.svg"
      />
    </div>
    <div class="hidden md:flex md:flex-wrap gap-4">
      <h4
        class="text-c-1 text-style-3 cursor-pointer"
        v-for="(car, i) in cars"
        @click="setCurrent(i)"
      >
        {{ car.name }}
      </h4>
    </div>
  </div>
</template>

<script lang="js" setup>
import { ref } from "vue";
import { cars } from "../constants";

const currentCar = ref({});

currentCar.value = cars[0];

const setCurrent = (i) => {
  currentCar.value = cars[i];
};

const activeSucc = () => {
  if (currentCar.value.id === cars.length){
    setCurrent(0);
  } else {
    setCurrent(currentCar.value.id);
}
}

const activePrev = () => {
  if(currentCar.value.id === 1){
    setCurrent(cars.length - 1);
  } else {
    setCurrent(currentCar.value.id - 2);
  }
}
</script>

<style scoped>
.bg {
  border-image: fill 1
    linear-gradient(
      var(--color-2-transparent-not),
      var(--color-2-transparent-not)
    );
  overflow: clip;
  background-position: center;
}

.bg-car-1 {
  background-image: url("../assets/cars/car1.jpg");
  background-size: cover;
}
.bg-car-2 {
  background-image: url("../assets/cars/car2.jpg");
  background-size: cover;
}
.bg-car-3 {
  background-image: url("../assets/cars/car3.jpg");
  background-size: cover;
}
.bg-car-4 {
  background-image: url("../assets/cars/car4.jpg");
  background-size: cover;
}
.bg-car-5 {
  background-image: url("../assets/cars/car5.jpg");
  background-size: cover;
}
.bg-car-6 {
  background-image: url("../assets/cars/car6.jpg");
  background-size: cover;
}
.bg-car-7 {
  background-image: url("../assets/cars/car7.jpg");
  background-size: cover;
}
</style>
