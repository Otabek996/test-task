<template>
  <section class="new-buildings">
    <div class="container new-buildings__container">
      <h2 class="new-buildings-title">Новостройки</h2>

      <div class="new-buildings-slider">
        <Carousel :itemsToShow="2.7" :wrapAround="true">
          <Slide v-for="(img, index) in images" :key="index">
            <div class="carousel__item">
              <img class="carousel-img" :src="img.img" alt="Building image" />
            </div>
          </Slide>

          <template #addons>
            <Navigation />
          </template>
        </Carousel>
      </div>

      <button type="button">Смотреть все</button>
    </div>
  </section>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

import imgOne from "../assets/new-buildings-img-01.png";
import imgTwo from "../assets/new-buildings-img-02.png";
import imgThree from "../assets/new-buildings-img-03.png";
import imgFour from "../assets/new-buildings-img-04.png";

export default defineComponent({
  name: "NewBuildings",
  components: {
    Carousel,
    Slide,
    Navigation,
  },

  data() {
    return {
      images: [{ img: imgOne }, { img: imgTwo }, { img: imgThree }, { img: imgFour }],
    };
  },
});
</script>

<style scoped>
.new-buildings__container {
  padding: 230px 0;
}

.new-buildings-title {
  font-size: var(--headline-2-size);
  line-height: var(--headline-2-line-height);
  font-weight: 500;
}

.new-buildings-slider {
  margin: 60px 0;
}

.carousel__slide {
  opacity: 0.8;
}

.carousel-img {
  width: 467px;
  height: 600px;
}

.new-buildings-slider .carousel__prev,
.new-buildings-slider .carousel__next {
}
</style>
