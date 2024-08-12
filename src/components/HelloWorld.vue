<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ $t("hello") }}</h2>

    <button v-for="entry in languages" :key="entry.id" @click="changeLocale(entry.language)" type="button">
      {{ entry.title }}
    </button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },

  data() {
    return {
      languages: [
        { id: 0, language: "ru", title: "Russian" },
        { id: 1, language: "uz", title: "Uzbek" },
        { id: 2, language: "en", title: "English" },
      ],
    };
  },

  methods: {
    changeLocale(locale) {
      this.$i18n.locale = locale;
    },
  },
};
</script>

<style scoped>
button {
  padding: 15px;
  border: 1px solid green;
  font-size: 18px;
  margin: 15px;
}
</style>
