<template>
  <div class="bg-c-3 py-12">
    <div class="w-full flex flex-col items-center justify-center">
      <h3 class="text-c-1 uppercase text-serif-big font-black">Partners</h3>
      <p
        class="font-light text-c-1 text-style-4 p-24 text-center leading-relaxed"
      >
        Lavoriamo fianco a fianco con partner selezionati e leader del settore,
        garantendo solamente i prodotti della miglior qualità.
      </p>
    </div>
    <section class="scroller">
      <div class="marquee marquee--fit-content">
        <ul class="marquee__content">
          <li v-for="el in elems">
            <img class="img" :src="`/clients/${el}.png`" alt="cliente" />
          </li>
        </ul>

        <ul aria-hidden="true" class="marquee__content">
          <li v-for="el in elems">
            <img class="img" :src="`/clients/${el}.png`" alt="cliente" />
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script lang="js" setup>

const elems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,13,14,15,16];
</script>

<style scoped>
.img {
  padding: 0 2rem;
  width: 250px;
  object-fit: contain;
}

@media screen and (max-width: 768px) {
  .img {
    width: 170px;
  }
}

.scroller {
  max-width: 100%;
  overflow: hidden;
  mask: linear-gradient(90deg, transparent, white 10%, white 90%, transparent);
  -webkit-mask: linear-gradient(
    90deg,
    transparent,
    white 10%,
    white 90%,
    transparent
  );
}

/* Marquee styles */
.marquee {
  --gap: 1rem;
  position: relative;
  display: flex;
  overflow: hidden;
  user-select: none;
  gap: var(--gap);
}

.marquee__content {
  flex-shrink: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: var(--gap);
  animation: scroll 20s linear infinite;
  -webkit-animation: scroll 20s linear infinite;
}

@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-100% - var(--gap)));
  }
}
@-webkit-keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-100% - var(--gap)));
  }
}

/* Pause animation when reduced-motion is set */
@media (prefers-reduced-motion: reduce) {
  .marquee__content {
    animation-play-state: paused !important;
  }
}

/* Attempt to size parent based on content. Keep in mind that the parent width is equal to both content containers that stretch to fill the parent. */
.marquee--fit-content {
  max-width: fit-content;
}

/* Other page demo styles */
.marquee__content > * {
  flex: 0 0 auto;
}
</style>
