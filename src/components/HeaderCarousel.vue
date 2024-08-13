<template>
  <Carousel wrapAround>
    <Slide v-for="slide in 2" :key="slide">
      <div class="carousel__item">
        <img class="carousel-img" v-if="slide === 1" src="../assets/header-img-01.jpg" alt="">
        <img class="carousel-img" v-if="slide === 2" src="../assets/header-img-02.jpg" alt="">
      </div>
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "HeaderCarousel",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
});
</script>

<style>
.carousel__item {
  min-height: 200px;
  width: 100%;
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel-img {
  width: 100%;
  height: 800px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>
