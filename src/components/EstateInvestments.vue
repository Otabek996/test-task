<template>
  <section class="investments">
    <div class="container investments__container">
      <div class="investments-info">
        <h2 class="investments-title">Инвестиции в недвижимость в Дубае</h2>

        <p class="investments-description">
          <span>
            Недвижимость в Дубае предоставляет отличные возможности для получения стабильного дохода
            и увеличения капитала. <br />
          </span>

          <span>
            Полный цикл инвестиций: От анализа рынка и подбора объектов до управления инвестициями и
            их реализации. <br />
          </span>

          <span
            >Наши эксперты помогут вам на всех этапах инвестиционного процесса, обеспечивая высокое
            качество обслуживания и надежность. <br
          /></span>

          <span
            >Наши услуги включают управление вашей инвестиционной недвижимостью, обеспечивая её
            сохранность и стабильный доход. Мы берем на себя все аспекты управления, включая подбор
            и проверку арендаторов, техническое обслуживание, финансовую отчетность и юридическую
            поддержку. <br
          /></span>
        </p>

        <button class="investments-button" type="button">Подробнее</button>
      </div>

      <div class="investments-pictures">
        <img class="investments-img-one" src="../assets/investments-img-01.png" alt="Building" />
        <img class="investments-img-two" src="../assets/investments-img-02.png" alt="Building" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "EstateInvestments",
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

.investments-button {
  font-size: var(--btn-size);
  line-height: var(--btn-line-height);
  font-weight: 600;
  color: var(--white-color);
  background-color: var(--beigie-100-color);
  padding: 12px 65px;
  transition: 0.1s linear;
}

.investments-button:hover {
  background-color: var(--beigie-70-color);
}

.investments-button:focus {
  background-color: var(--beigie-120-color);
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
