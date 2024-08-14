<template>
  <section class="why-us">
    <div class="container why-us__container">
      <h2 class="why-us-title">Почему выбирают нас</h2>

      <div class="why-us-box">
        <div class="why-us-card" v-for="item in info" :key="item.id">
          <h4 class="why-us-card-title">{{ item.title }}</h4>
          <p class="why-us-card-text">{{ item.description }}</p>
          <img class="why-us-card-img" v-if="item.img != undefined" :src="item.img" alt="Decoration image" />
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
          title: "Опыт и профессионализм",
          description:
            "Наши специалисты имеют многолетний опыт в различных сферах недвижимости, что гарантирует высокое качество услуг",
        },
        {
          id: 2,
          img: imgOne,
        },
        {
          id: 3,
          title: "Прозрачность и доверие",
          description:
            "Обеспечение полной прозрачности всех операций и предоставление отчетов. Работа основана на принципах честности и доверия, что подтверждается отзывами",
        },
        {
          id: 4,
          img: imgTwo,
        },
        {
          id: 5,
          title: "Высокий уровень обслуживания",
          description: "Мы всегда на связи, чтобы помочь вам в любое время",
        },
        {
          id: 6,
          img: imgThree,
        },
        {
          id: 7,
          title: "Индивидуальный подход",
          description:
            "Мы разрабатываем персонализированные решения, учитывая уникальные потребности каждого клиента",
        },
        {
          id: 8,
          img: imgFour,
        },
        {
          id: 9,
          title: "Комплексное обслуживание",
          description:
            "Полный спектр услуг, включающий аренду, куплю-продажу, управление и инвестиции в недвижимость.",
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
