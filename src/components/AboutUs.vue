<template>
  <section class="about-us">
    <div class="container about-us__container">
      <div class="about-us-info">
        <div>
          <h2 class="about-us-title">
            {{ $t("aboutUsTitle") }} <br />
            <span>{{ $t("companyName") }}</span>
          </h2>
        </div>

        <div>
          <v-card class="about-us-cards">
            <v-tabs
              class="about-us-cards-titles"
              v-model="tab"
              bg-color="white"
              slider-color="#e1af93"
              color="#e1af93"
              :items="tabs"
            >
              <template v-slot:tab="{ item }">
                <v-tab
                  v-if="item.value === 'tab-1' || item.value === 'tab-3'"
                  class="about-us-cards-title text-none p-0"
                  :text="$t(item.title)"
                  :value="item.value"
                ></v-tab>
                <v-tab
                  v-if="item.value === 'tab-2'"
                  class="about-us-cards-title text-none mx-auto p-0"
                  :text="$t(item.title)"
                  :value="item.value"
                ></v-tab>
              </template>

              <template v-slot:item="{ item }">
                <v-tabs-window-item class="about-us-cards-text" :value="item.value">
                  {{ $t(item.subtitleOne) }}
                  <br />
                  <br />
                  {{ $t(item.subtitleTwo) }}
                </v-tabs-window-item>
              </template>
            </v-tabs>
          </v-card>
        </div>
      </div>

      <div class="about-us-slider">
        <Carousel wrapAround>
          <Slide v-for="slide in 2" :key="slide">
            <div class="carousel__item">
              <img
                class="carousel-img"
                v-if="slide === 1"
                src="../assets/about-us-img-01.jpg"
                alt=""
              />
              <img
                class="carousel-img"
                v-if="slide === 2"
                src="../assets/about-us-img-01.jpg"
                alt=""
              />
            </div>
          </Slide>

          <template #addons>
            <Navigation />
          </template>
        </Carousel>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "AboutUs",

  components: {
    Carousel,
    Slide,
    Navigation,
  },

  data: () => ({
    tab: "tab-1",
    tabs: [
      {
        title: "aboutUsMenuTitleOne",
        subtitleOne: "aboutUsMenuSubtitleOneOne",
        subtitleTwo: "aboutUsMenuSubtitleOneTwo",
        value: "tab-1",
      },
      {
        title: "aboutUsMenuTitleTwo",
        subtitleOne: "aboutUsMenuSubtitleTwoOne",
        subtitleTwo: "aboutUsMenuSubtitleTwoTwo",
        value: "tab-2",
      },
      {
        title: "aboutUsMenuTitleThree",
        subtitleOne: "aboutUsMenuSubtitleThreeOne",
        subtitleTwo: "aboutUsMenuSubtitleThreeTwo",
        value: "tab-3",
      },
    ],
  }),
});
</script>

<style scoped>
.about-us__container {
  padding: 250px 0;
}

.about-us-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
}

.about-us-title {
  font-size: var(--headline-2-size);
  line-height: var(--headline-2-line-height);
  font-weight: 500;
  color: var(--black-100-color);
}

.about-us-title span {
  color: var(--beigie-100-color);
}

.about-us-cards {
  width: 710px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  box-shadow: none;
}

.about-us-cards-title {
  font-size: var(--twenty-size);
  line-height: var(--twenty-line-height);
  font-weight: 400;
  color: var(--black-60-color);
}

.about-us-cards-text {
  font-size: var(--twenty-size);
  line-height: var(--twenty-line-height);
  font-weight: 400;
  color: var(--black-100-color);
  padding: 0;
}

.carousel__item {
  width: 100%;
  height: 579px;
}

.carousel-img {
  width: 100%;
}
</style>

<style>
.carousel__prev,
.carousel__next {
  /* box-sizing: content-box; */
  border: 1.5px solid white;
  border-radius: 50%;
  color: white;
  padding: 17px;
  margin: 0;
  transition: 0.1s linear;
}

.about-us-slider .carousel__prev,
.about-us-slider .carousel__next {
  top: 63px;
}

.about-us-slider .carousel__prev {
  left: 30px;
}

.about-us-slider .carousel__next {
  left: 105px;
}

@media screen and (max-width: 1200px) {
  .about-us-info {
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;
  }

  .about-us-info div {
    width: 100%;
  }

  .about-us-cards {
    width: 100% !important;
  }
}
</style>
