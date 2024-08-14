<template>
  <section class="management">
    <div class="container management__container">
      <h2 class="management-title">
        Что входит в услугу <br />
        управления недвижимостью
      </h2>

      <div class="services">
        <table>
          <tbody class="tbody-one">
            <tr v-for="service in servicesOne" :key="service.id">
              <td>
                <img
                  class="service-icon"
                  src="../assets/services-check-icon.svg"
                  alt="Checked icon"
                />
              </td>
              <td>{{ service.name }}</td>
            </tr>
          </tbody>

          <tbody class="tbody-two">
            <tr v-for="service in servicesTwo" :key="service.id">
              <td>
                <img
                  class="service-icon"
                  src="../assets/services-check-icon.svg"
                  alt="Checked icon"
                />
              </td>
              <td>{{ service.name }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PropertyManagement",

  data() {
    return {
      servicesOne: [
        {
          id: 1,
          name: "Проверка арендаторов (кредитная история, рекомендации)",
        },
        {
          id: 2,
          name: "Подготовка и подписание договоров аренды",
        },
        {
          id: 3,
          name: "Сбор арендной платы",
        },
        {
          id: 4,
          name: "Обработка запросов и жалоб арендаторов",
        },
        {
          id: 5,
          name: "Контроль соблюдения условий аренды",
        },
      ],
      servicesTwo: [
        {
          id: 6,
          name: "Регулярное техническое обслуживание",
        },
        {
          id: 7,
          name: "Организация и проведение ремонтных работ",
        },
        {
          id: 8,
          name: "Контроль за состоянием недвижимости",
        },
        {
          id: 9,
          name: "Подбор надежных арендаторов",
        },
      ],
    };
  },
};
</script>

<style scoped>
.management__container {
  color: var(--black-100-color);
  padding: 250px 0;
}

.management-title {
  font-size: var(--headline-2-size);
  line-height: var(--headline-2-line-height);
  font-weight: 500;
}

.services {
  margin-top: 50px;
}

table {
  display: flex;
}

tr {
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: var(--accent-size);
  line-height: var(--accent-line-height);
  font-weight: 400;
  padding: 40px 35px 40px 0;
}

.tbody-one tr {
  border-top: 1px solid var(--stroke-color);
}

.tbody-one tr:last-child {
  border-right: 1px solid var(--stroke-color);
}

.tbody-two tr {
  border-top: 1px solid var(--stroke-color);
  border-left: 1px solid var(--stroke-color);
  padding-left: 20px;
}

.tbody-two tr:last-child {
  border-bottom: 1px solid var(--stroke-color);
}

.service-icon {
  width: 30px;
  height: 30px;
}
</style>
