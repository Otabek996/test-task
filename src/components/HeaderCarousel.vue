<template>
  <section class="header">
    <Carousel wrapAround ref="carousel">
      <Slide v-for="slide in 2" :key="slide">
        <div class="carousel__item">
          <img class="carousel-img" v-if="slide === 1" src="../assets/header-img-01.jpg" alt="" />
          <img class="carousel-img" v-if="slide === 2" src="../assets/header-img-02.jpg" alt="" />
        </div>
      </Slide>
    </Carousel>

    <div class="carousel-content">
      <div class="container carousel-content-container">
        <div class="carousel-content-box">
          <h1 class="header-title">
            {{ $t("headerTitle") }}
          </h1>
          <p class="header-text">{{ $t("headerSubtitle") }}</p>
          <MainButton class="carousel-content-button" type="button" :text="$t('headerButton')" />
        </div>

        <div class="carousel-buttons-box">
          <button class="carousel-arrow" @click="prev">
            <img src="../assets/carousel-arrow-left.svg" alt="Carousel arrow left" />
          </button>

          <button class="carousel-arrow" @click="next">
            <img src="../assets/carousel-arrow-right.svg" alt="Carousel arrow right" />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

import MainButton from "./MainButton.vue";

export default defineComponent({
  name: "HeaderCarousel",
  components: {
    Carousel,
    Slide,
    MainButton,
  },

  data: () => ({
    currentSlide: 0,
  }),

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

<style>
.header {
  position: relative;
}

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
  object-fit: cover;
}

.carousel-buttons-box {
  display: flex;
  align-items: center;
  gap: 8px;
}

.carousel-arrow {
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1.5px solid var(--white-color);
  border-radius: 50%;
  padding: 18px 17px;
}

.carousel-content {
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
}

.carousel-content-box {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.carousel-content-container {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 70px 0;
}

.header-title {
  font-size: var(--headline-1-size);
  line-height: var(--headline-1-line-height);
  font-weight: 500;
  color: var(--white-color);
}

.header-text {
  font-size: var(--twenty-size);
  line-height: var(--twenty-line-height);
  font-weight: 400;
  color: var(--white-color);
}

.carousel-content-button {
  width: 223px;
  margin-top: 20px;
}
</style>
