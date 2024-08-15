<template>
  <button class="main-button" :type="type">{{ text }}</button>
</template>

<script>
export default {
  name: "MainButton",

  props: {
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: false,
    },
  },
};
</script>

<style scoped>
.main-button {
  font-size: var(--btn-size);
  line-height: var(--btn-line-height);
  font-weight: 600;
  color: var(--white-color);
  background-color: var(--beigie-100-color);
  padding: 12px 65px;
  transition: 0.1s linear;
}

.main-button:hover {
  background-color: var(--beigie-70-color);
}

.main-button:focus {
  background-color: var(--beigie-120-color);
}
</style>
