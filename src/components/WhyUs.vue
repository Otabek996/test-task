<template>
  <section class="why-us">
    <div class="container why-us__container">
      <h2 class="why-us-title">{{ $t("whyUsTitle") }}</h2>

      <div class="why-us-box">
        <div class="why-us-card" v-for="item in info" :key="item.id">
          <h4 class="why-us-card-title" v-if="!Boolean(item.img)">{{ $t(item.title) }}</h4>
          <p class="why-us-card-text" v-if="!Boolean(item.img)">{{ $t(item.description) }}</p>
          <img
            class="why-us-card-img"
            v-if="Boolean(item.img)"
            :src="item.img"
            alt="Decoration image"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import imgOne from "../assets/why-us-img-01.png";
import imgTwo from "../assets/why-us-img-02.png";
import imgThree from "../assets/why-us-img-03.png";
import imgFour from "../assets/why-us-img-04.png";

export default {
  name: "WhyUs",

  data() {
    return {
      info: [
        {
          id: 1,
          title: "whyUsBoxOneTitle",
          description: "whyUsBoxOneDescription",
        },
        {
          id: 2,
          img: imgOne,
        },
        {
          id: 3,
          title: "whyUsBoxTwoTitle",
          description: "whyUsBoxTwoDescription",
        },
        {
          id: 4,
          img: imgTwo,
        },
        {
          id: 5,
          title: "whyUsBoxThreeTitle",
          description: "whyUsBoxThreeDescription",
        },
        {
          id: 6,
          img: imgThree,
        },
        {
          id: 7,
          title: "whyUsBoxFourTitle",
          description: "whyUsBoxFourDescription",
        },
        {
          id: 8,
          img: imgFour,
        },
        {
          id: 9,
          title: "whyUsBoxFiveTitle",
          description: "whyUsBoxFiveDescription",
        },
      ],
    };
  },
};
</script>

<style scoped>
.why-us__container {
  color: var(--black-100-color);
}

.why-us-title {
  font-size: var(--headline-2-size);
  line-height: var(--headline-2-line-height);
  font-weight: 500;
}

.why-us-box {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  margin-top: 40px;
}

.why-us-card {
  border: 1px solid var(--stroke-color);
}

.why-us-card:nth-child(odd) {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  padding: 0 30px;
}

.why-us-card-title {
  font-size: var(--headline-4-size);
  line-height: var(--headline-4-line-height);
  font-weight: 500;
}

.why-us-card-text {
  font-size: var(--twenty-size);
  line-height: var(--twenty-line-height);
  font-weight: 500;
}

.why-us-card-img {
  width: 100%;
}
</style>
