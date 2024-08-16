<template>
  <section class="new-buildings">
    <div class="container new-buildings__container">
      <div class="new-buildings-header">
        <h2 class="new-buildings-title">{{ $t("newBuildingsTitle") }}</h2>

        <div class="carousel-buttons-box">
          <button class="carousel-arrow" @click="prev">
            <img src="../assets/new-buildings-arrow-left.svg" alt="Carousel arrow left" />
          </button>

          <button class="carousel-arrow" @click="next">
            <img src="../assets/new-buildings-arrow-right.svg" alt="Carousel arrow right" />
          </button>
        </div>
      </div>

      <div class="new-buildings-slider">
        <Carousel :itemsToShow="2.7" :wrapAround="true" ref="carousel">
          <Slide v-for="(slider, index) in images" :key="index">
            <div class="carousel__item">
              <img class="carousel-img" :src="slider.img" alt="Building image" />

              <div class="carousel-content">
                <div class="carousel-content-header">
                  <img src="../assets/liked-slider-icon.svg" alt="Like slider" />
                </div>

                <div class="carousel-content-body">
                  <h3 class="carousel-content-title">{{ $t(slider.title) }}</h3>
                  <p class="carousel-content-price">{{ $t(slider.price) }}</p>
                </div>
              </div>
            </div>
          </Slide>
        </Carousel>
      </div>

      <MainButtonVue class="new-building-button" :text="$t('newBuildingsButton')" />
    </div>
  </section>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Slide } from "vue3-carousel";

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
    MainButtonVue,
  },

  data() {
    return {
      images: [
        { img: imgOne, title: "newBuildingsOneTitle", price: "newBuildingsOnePrice" },
        { img: imgTwo, title: "newBuildingsTwoTitle", price: "newBuildingsTwoPrice" },
        { img: imgThree, title: "newBuildingsThreeTitle", price: "newBuildingsThreePrice" },
        { img: imgFour, title: "newBuildingsFourTitle", price: "newBuildingsFourPrice" },
      ],
    };
  },

  methods: {
    next() {
      this.$refs.carousel.next();
    },
    prev() {
      this.$refs.carousel.prev();
    },
  },
});
</script>

<style scoped>
.new-buildings__container {
  padding: 230px 0;
}

.new-buildings-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.carousel-arrow {
  border: 1.5px solid var(--black-100-color);
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

<style>
.new-buildings-slider .carousel__viewport {
  overflow: visible;
}
</style>
