<template>
  <section class="calculate-mortgage">
    <div class="container calculate-mortgage__container">
      <h2 class="calculate-mortgage-title">Рассчитайте ипотеку</h2>

      <div class="form-container">
        <form class="form" action="#">
          <div class="form-box">
            <div class="form-inputs">
              <div class="form-input-box" v-for="(input, index) in inputs" :key="index">
                <label class="form-label" :for="input.id">{{ input.labelText }}</label>
                <input
                  v-model="input.model"
                  :type="input.type"
                  :id="input.id"
                  class="form-input"
                  :placeholder="input.placeholder"
                />
              </div>
            </div>

            <div class="form-infos">
              <div class="form-info" v-for="(info, index) in formData" :key="index">
                <p class="form-info-title">{{ info.title }}</p>
                <p class="form-info-text">{{ info.text }}</p>
                <p class="form-info-text">{{ monthlyPayment }}</p>
                <p class="form-info-text">{{ loanAmount }}</p>
                <p class="form-info-text">{{ ratePercent }}</p>
                <p class="form-info-text">{{ lastPaymentDate }}</p>
              </div>
            </div>
          </div>

          <MainButton text="Рассчитать" type="button" @click="calculateMortgage" />
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";

import MainButton from "./MainButton.vue";

export default {
  name: "CalculateMortgage",

  components: {
    MainButton,
  },

  data() {
    return {
      inputs: [
        {
          id: "cost-of-real-estate",
          type: "number",
          placeholder: "Введите стоимость",
          model: "costInputValue",
          labelText: "Стоимость недвижимости (у.е.)",
        },
        {
          id: "initial-contribution",
          type: "number",
          placeholder: "Введите размер взноса",
          model: "initialPaymentInputValue",
          labelText: "Первоначальный взнос (у.е.)",
        },
        {
          id: "term-in-years",
          type: "number",
          placeholder: "Введите срок",
          model: "termYearsInputValue",
          labelText: "Срок в годах",
        },
        {
          id: "bid-amount",
          type: "number",
          placeholder: "Введите размер ставки",
          model: "ratePercentInputValue",
          labelText: "Ставка (%)",
        },
      ],
      formData: [
        { title: "Ежемесячный платеж", text: "4 410 у.е." },
        { title: "Сумма кредита", text: "200 000 у.е." },
        { title: "Процентная ставка", text: "24%" },
        { title: "Дата последнего платежа", text: "28 июля 2034 г" },
      ],
    };
  },

  methods: {
    calculateMortgage() {
      const costInputValue = ref("");
      const initialPaymentInputValue = ref("");
      const termYearsInputValue = ref("");
      const ratePercentInputValue = ref("");

      console.log(costInputValue.value, initialPaymentInputValue.value, termYearsInputValue.value, ratePercentInputValue.value);

      const loanAmount = costInputValue.value - initialPaymentInputValue.value;
      const rate = ratePercentInputValue.value / 100 / 12;
      const numberOfPayments = termYearsInputValue.value * 12;

      const monthlyPayment = (loanAmount * rate) / (1 - Math.pow(1 + rate, -numberOfPayments));

      const today = new Date();
      const lastPaymentDate = new Date(today.setMonth(today.getMonth() + numberOfPayments));

      const lastPaymentDay = lastPaymentDate.getDate();
      const lastPaymentMonth = lastPaymentDate.toLocaleString("default", { month: "long" });
      const lastPaymentYear = lastPaymentDate.getFullYear();

      // console.log(monthlyPayment, loanAmount, ratePercentInputValue.value, `${lastPaymentDay} ${lastPaymentMonth} ${lastPaymentYear}`);

      return {
        monthlyPayment: monthlyPayment,
        loanAmount: loanAmount,
        ratePercent: ratePercentInputValue.value,
        lastPaymentDate: `${lastPaymentDay} ${lastPaymentMonth} ${lastPaymentYear}`,
      };
    },
  },
};
</script>

<style scoped>
.calculate-mortgage-title {
  font-size: var(--headline-2-size);
  line-height: var(--headline-2-line-height);
  font-weight: 500;
  color: var(--black-100-color);
}

.form-container {
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  padding: 40px;
  margin-top: 40px;
}

.form-box {
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
}

.form-inputs {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 30px;
  grid-column-gap: 40px;
  border-right: 1px solid var(--stroke-color);
  padding-right: 50px;
}

.form-input-box {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-label {
  font-size: var(--label-size);
  line-height: var(--label-line-height);
  font-weight: 400;
  color: var(--black-60-color);
  transition: color 0.1s linear;
}

.form-input-box:focus-within .form-label {
  color: var(--beigie-100-color);
}

.form-input {
  width: 310px;
  height: 50px;
  font-size: var(--body-18-size);
  line-height: var(--body-18-line-height);
  font-weight: 400;
  color: var(--label-color);
  border: 1px solid var(--stroke-color);
  transition: border-color 0.1s linear;
  padding: 12px 16px;
  outline: none;
}

.form-input:focus {
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  border-color: var(--beigie-100-color);
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}

.form-infos {
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 40px;
  grid-column-gap: 30px;
  padding-left: 50px;
}

.form-info-title {
  font-size: var(--body-18-size);
  line-height: var(--body-18-line-height);
  font-weight: 400;
  color: var(--label-color);
}

.form-info-text {
  font-size: var(--subtitle-25-size);
  line-height: var(--subtitle-25-line-height);
  font-weight: 500;
  color: var(--black-100-color);
}
</style>
