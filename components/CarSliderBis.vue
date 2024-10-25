<template>
  <h2 class="text-serif-big mb-12 mx-8">GALLERIA VEICOLI DISPONIBILI</h2>
  <div
    class="overflow-hidden box-border relative h-[80vh] w-[100vw] lg:h-[100vh]"
  >
    <article
      v-for="car in cars"
      class="absolute h-full left-0 top-0 bg p-8 flex flex-col justify-between"
      :class="[
        `bg-car-${car.id} `,
        car.id === currentCar.id ? currentCar.status : car.status,
      ]"
    >
      <div>
        <h2 class="text-c-1 text-center md:text-left text-serif-big">
          {{ car.name }}
        </h2>
        <h4 class="text-c-1 text-center md:text-left text-style-1">
          {{ car.subtitle }}
        </h4>
      </div>
      <p
        class="md:mb-24 text-c-1 text-style-4 leading-relaxed md:w-2/3 self-end text-pretty text-center md:text-right"
      >
        {{ car.description }}
      </p>
      <div></div>
    </article>
    <div class="absolute bottom-0 w-full">
      <div
        class="flex items-center justify-between w-2/3 md:w-4/5 mx-auto mb-12"
      >
        <img
          @click="activePrev()"
          class="cursor-pointer h-6 md:h-16 hover:scale-110 transition-all"
          src="../assets/svg/prev-white.svg"
        />
        <h3
          class="text-serif-big text-c-1 font-medium text-center text-animate"
        >
          {{ currentCar.id }}/{{ cars.length }}
        </h3>
        <img
          @click="activeSucc()"
          class="cursor-pointer h-6 md:h-16 hover:scale-110 transition-all"
          src="../assets/svg/succ-white.svg"
        />
      </div>
    </div>
  </div>
</template>

<script lang="js" setup>
import { cars } from "../constants";

const currentCar = ref({});
const nextCar = ref({});

currentCar.value = cars[0];
nextCar.value = cars[0];

const activeSucc = () => {
  nextCar.value = nextCar.value.id <= cars.length - 1 ? cars[nextCar.value.id] : cars[0];

  currentCar.value.status = 'before';
  nextCar.value.status = 'becoming-active-from-after';

  setTimeout(() => {
    nextCar.value.status = 'active';
    currentCar.value = nextCar.value;
  });
}


const activePrev = () => {
  nextCar.value = nextCar.value.id <= 1 ? cars[cars.length - 1] : cars[currentCar.value.id-2];

  currentCar.value.status = 'after';
  nextCar.value.status = 'becoming-active-from-before';

  setTimeout(() => {
    nextCar.value.status = 'active';
    currentCar.value = nextCar.value;
  });
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

article {
  transition: all 400ms ease;
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

.inactive {
  transform: translateX(-100%);
  transition: none;
}

.active {
  transform: translate(0);
}

.before {
  transform: translateX(-100%);
}

.after {
  transform: translateX(100%);
}

.becoming-active-from-before {
  transform: translateX(-90%);
  transition: none;
}

.becoming-active-from-after {
  transform: translateX(90%);
  transition: none;
}
</style>
