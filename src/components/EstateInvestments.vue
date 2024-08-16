<template>
  <section class="investments">
    <div class="container investments__container">
      <div class="investments-info">
        <h2 class="investments-title">{{ $t("estateInvestmentTitle") }}</h2>

        <p class="investments-description">
          <span> {{ $t("estateInvestmentDescriptionOne") }} <br /> </span>

          <span> {{ $t("estateInvestmentDescriptionTwo") }} <br /> </span>

          <span> {{ $t("estateInvestmentDescriptionThree") }} <br /></span>

          <span> {{ $t("estateInvestmentDescriptionFour") }} <br /></span>
        </p>

        <MainButton :text="$t('estateInvestmentButton')" />
      </div>

      <div class="investments-pictures">
        <img class="investments-img-one" src="../assets/investments-img-01.png" alt="Building" />
        <img class="investments-img-two" src="../assets/investments-img-02.png" alt="Building" />
      </div>
    </div>
  </section>
</template>

<script>
import MainButton from "./MainButton.vue";

export default {
  name: "EstateInvestments",

  components: {
    MainButton,
  },
};
</script>

<style scoped>
.investments {
  background-color: var(--blue-color);
}

.investments__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 142px;
  padding: 80px 0 163px 0;
}

.investments-info {
  color: var(--black-100-color);
}

.investments-title {
  font-size: var(--headline-2-size);
  line-height: var(--headline-2-line-height);
  font-weight: 500;
}

.investments-description {
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: var(--twenty-size);
  line-height: var(--twenty-line-height);
  font-weight: 400;
  margin: 50px 0 40px 0;
}

.investments-pictures {
  position: relative;
}

.investments-img-two {
  position: absolute;
  bottom: -83px;
  left: -83px;
}
</style>
