<template>
  <div>
    <NavBar />
    <HeaderCarousel />
    <AboutUs />
    <EstateInvestmentsVue />
    <PropertyManagement />
    <WhyUs />
    <NewBuildings />
    <CalculateMortgage />
    <ContactForm />
    <TheBlog />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import HeaderCarousel from "./components/HeaderCarousel.vue";
import AboutUs from "./components/AboutUs.vue";
import EstateInvestmentsVue from "./components/EstateInvestments.vue";
import PropertyManagement from "./components/PropertyManagement.vue";
import WhyUs from "./components/WhyUs.vue";
import NewBuildings from "./components/NewBuildings.vue";
import CalculateMortgage from "./components/CalculateMortgage.vue";
import ContactForm from "./components/ContactForm.vue";
import TheBlog from "./components/TheBlog.vue";
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    NavBar,
    HeaderCarousel,
    AboutUs,
    EstateInvestmentsVue,
    PropertyManagement,
    WhyUs,
    NewBuildings,
    CalculateMortgage,
    ContactForm,
    TheBlog,
    HelloWorld,
  },
};
</script>

<style></style>
