<template>
  <div>
    <NavBar />
    <HeaderCarousel />
    <AboutUs />
    <EstateInvestmentsVue />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import HeaderCarousel from "./components/HeaderCarousel.vue";
import AboutUs from "./components/AboutUs.vue";
import EstateInvestmentsVue from "./components/EstateInvestments.vue";
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    NavBar,
    HeaderCarousel,
    AboutUs,
    EstateInvestmentsVue,
    HelloWorld,
  },
};
</script>

<style></style>
