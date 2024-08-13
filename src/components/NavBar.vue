<template>
  <b-navbar toggleable="lg">
    <b-navbar-brand href="#">
      <img src="../assets/logo.svg" alt="RMC DE LUXE real estate">
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item-dropdown text="Услуги" right>
          <b-dropdown-item href="#">Купить</b-dropdown-item>
          <b-dropdown-item href="#">Арендовать</b-dropdown-item>
          <b-dropdown-item href="#">Продать</b-dropdown-item>
          <b-dropdown-item href="#">Оценка недвижимости</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item href="#">О нас</b-nav-item>

        <b-nav-item href="#">Блог</b-nav-item>

        <b-nav-item href="#">Контакты</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav>
        <b-nav-form>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>

        <b-nav-item-dropdown text="Ru" right>
          <b-dropdown-item href="#">Ru</b-dropdown-item>
          <b-dropdown-item href="#">Uz</b-dropdown-item>
          <b-dropdown-item href="#">En</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped></style>
