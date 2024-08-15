<template>
  <section class="new-buildings">
    <div class="container new-buildings__container">
      <h2 class="new-buildings-title">Новостройки</h2>

      <div class="new-buildings-slider">
        <Carousel :itemsToShow="2.7" :wrapAround="true">
          <Slide v-for="(slider, index) in images" :key="index">
            <div class="carousel__item">
              <img class="carousel-img" :src="slider.img" alt="Building image" />

              <div class="carousel-content">
                <div class="carousel-content-header">
                  <img src="../assets/liked-slider-icon.svg" alt="Like slider" />
                </div>

                <div class="carousel-content-body">
                  <h3 class="carousel-content-title">{{ slider.title }}</h3>
                  <p class="carousel-content-price">{{ slider.price }}</p>
                </div>
              </div>
            </div>
          </Slide>

          <template #addons>
            <Navigation />
          </template>
        </Carousel>
      </div>

      <MainButtonVue class="new-building-button" text="Смотреть все" />
    </div>
  </section>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

import MainButtonVue from "./MainButton.vue";

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
    MainButtonVue,
  },

  data() {
    return {
      images: [
        { img: imgOne, title: "Safa One", price: "от $1 900 000" },
        { img: imgTwo, title: "Safa Two", price: "от $399 000" },
        { img: imgThree, title: "Peninsula Two", price: "от $245 000" },
        { img: imgFour, title: "Marina Vista", price: "от $612 000" },
      ],
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

.carousel-content {
  width: 467px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 24px;
}

.carousel-content-header {
  text-align: end;
}

.carousel-content-body {
  text-align: start;
  color: var(--white-color);
}

.carousel-content-title {
  font-size: var(--headline-3-size);
  line-height: var(--headline-3-line-height);
  font-weight: 600;
}

.carousel-content-price {
  font-size: var(--twenty-size);
  line-height: var(--twenty-line-height);
  font-weight: 500;
}

.carousel-img {
  width: 467px;
  height: 600px;
}

.new-building-button {
  display: block;
  margin: 0 auto;
}
</style>

<style>
.new-buildings-slider .carousel__prev,
.new-buildings-slider .carousel__next {
  color: var(--black-100-color);
  border-color: var(--black-100-color);
  top: -93px;
}

.new-buildings-slider .carousel__prev {
  left: 1181px;
}
</style>
