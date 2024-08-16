<template>
  <section class="contact-form">
    <div class="container contact-form__container">
      <div class="contact-form-left">
        <h2 class="contact-form-title">{{ $t("contactFormTitle") }}</h2>

        <form action="#">
          <div class="inputs-box">
            <div v-for="(input, index) in inputs" :key="index">
              <input
                class="contact-input"
                :type="input.type"
                :placeholder="$t(input.placeholder)"
              />
            </div>
          </div>

          <MainButton :text="$t('contactFormButton')" type="submit" />
        </form>
      </div>

      <div class="contact-form-right">
        <img src="../assets/contact-form-img.png" alt="Building image" />
      </div>
    </div>
  </section>
</template>

<script>
import MainButton from "./MainButton.vue";

export default {
  name: "ContactForm",

  components: {
    MainButton,
  },

  data() {
    return {
      inputs: [
        {
          type: "text",
          placeholder: "contactFormInputOnePlaceholder",
        },
        {
          type: "text",
          placeholder: "contactFormInputTwoPlaceholder",
        },
        {
          type: "email",
          placeholder: "contactFormInputThreePlaceholder",
        },
        {
          type: "text",
          placeholder: "contactFormInputFourPlaceholder",
        },
      ],
    };
  },
};
</script>

<style scoped>
.contact-form__container {
  display: flex;
  align-items: center;
  gap: 170px;
  background-color: var(--blue-color);
  margin-top: 250px;
  margin-bottom: 250px;
  padding: 0;
}

.contact-form-left {
  padding: 60px 0 60px 60px;
}

.contact-form-title {
  font-size: var(--headline-2-size);
  line-height: var(--headline-2-line-height);
  font-weight: 500;
  color: var(--black-100-color);
}

.inputs-box {
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: 50px 0;
}

.contact-input {
  width: 100%;
  font-size: var(--link-btn-size);
  line-height: var(--link-btn-line-height);
  font-weight: 400;
  color: var(--black-100-color);
  border: none;
  border-bottom: 1px solid var(--black-20-color);
  padding: 12px 0;
  transition: 0.1s border-bottom linear;
  outline: none;
}

.contact-input:focus {
  border: none;
  border-bottom: 1px solid var(--beigie-100-color);
}
</style>
