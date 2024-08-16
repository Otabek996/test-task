<template>
  <section class="navbar">
    <!-- Modal -->
    <div
      class="modal fade search-modal-window"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body">
            <div class="input-container">
              <input
                class="modal-search-input"
                type="text"
                :placeholder="$t('searchInputPlaceholder')"
              />

              <button type="button">
                <img src="../assets/active-search-icon.svg" alt="Search icon" />
              </button>
            </div>

            <button
              type="button"
              class="close-search-modal-button"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <img src="../assets/x-close-icon.svg" alt="Close modal" />
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="container navbar__container">
      <div class="navbar-left">
        <a class="navbar-logo-link" href="#">
          <img class="navbar-logo" src="../assets/logo.svg" alt="Logo" />
        </a>
      </div>

      <div class="navbar-middle">
        <ul class="navbar-menu">
          <li class="navbar-item">
            <div class="dropdown">
              <button
                class="navbar-link dropdown-button"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span class="navbar-dropdown-button-text">{{ $t("navbarMenuOneDropdown") }}</span>
                <img src="../assets/arrow-bottom.svg" alt="Arrow bottom" />
              </button>
              <ul
                class="dropdown-menu dropdown-menu-services"
                aria-labelledby="dropdownMenuButton1"
              >
                <li class="dropdown-item">
                  <a class="dropdown-link" href="#">{{ $t("navbarDropdownMenuOne") }}</a>
                </li>
                <li class="dropdown-item">
                  <a class="dropdown-link" href="#">{{ $t("navbarDropdownMenuTwo") }}</a>
                </li>
                <li class="dropdown-item">
                  <a class="dropdown-link" href="#">{{ $t("navbarDropdownMenuThree") }}</a>
                </li>
                <li class="dropdown-item">
                  <a class="dropdown-link" href="#">{{ $t("navbarDropdownMenuFour") }}</a>
                </li>
              </ul>
            </div>
          </li>
          <li class="navbar-item">
            <a class="navbar-link" href="#">{{ $t("navbarMenuTwo") }}</a>
          </li>
          <li class="navbar-item">
            <a class="navbar-link" href="#">{{ $t("navbarMenuThree") }}</a>
          </li>
          <li class="navbar-item">
            <a class="navbar-link" href="#">{{ $t("navbarMenuFour") }}</a>
          </li>
        </ul>
      </div>

      <div class="navbar-right">
        <button
          class="navbar-icons-button search-button"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <img src="../assets/search-icon.svg" alt="Search icon" />
        </button>

        <button class="navbar-icons-button fav-button" type="button">
          <img src="../assets/heard-icon.svg" alt="" />
        </button>

        <button class="navbar-icons-button phone-button" type="button">
          <img src="../assets/phone-icon.svg" alt="Phone icon" />
        </button>

        <div class="dropdown dropdown-language">
          <button
            type="navbar-icons-button button-dropdown-language"
            id="dropdownMenuButton2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span class="current-language">Ru</span>
            <img src="../assets/arrow-bottom.svg" alt="Arrow down" />
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
            <li class="dropdown-item">
              <a class="dropdown-link" href="#">Ru</a>
            </li>
            <li class="dropdown-item">
              <a class="dropdown-link" href="#">Uz</a>
            </li>
            <li class="dropdown-item">
              <a class="dropdown-link" href="#">En</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
.navbar {
  padding: 20px;
}

.navbar-menu {
  display: flex;
  align-items: center;
  gap: 60px;
}

.navbar-item,
.navbar-link {
  font-size: var(--active-tab-size);
  line-height: var(--active-tab-line-height);
  font-weight: 400;
  color: var(--black-100-color);
  transition: color 0.1s linear;
}

.navbar-link:hover {
  color: var(--beigie-100-color);
}

.navbar-dropdown-button-text {
  margin-right: 10px;
}

.dropdown-menu {
  margin: 0;
  padding: 0;
  border-radius: 0;
}

.dropdown-menu-services {
  width: 300px;
}

.dropdown-item {
  border-bottom: 1px solid var(--stroke-color);
  padding: 10px 16px;
}

.dropdown-item:hover {
  background-color: #fcf7f4;
}

.dropdown-item:hover .dropdown-link {
  color: var(--beigie-100-color);
}

.dropdown-link {
  font-size: var(--body-18-size);
  line-height: var(--body-18-line-height);
  font-weight: 400;
  color: var(--black-100-color);
}

.navbar-right {
  display: flex;
  align-items: center;
  gap: 12px;
}

.navbar-icons-button {
  width: 50px;
  height: 50px;
  border: 1px solid var(--stroke-color);
  border-radius: 50%;
  transition: border-color 0.1s linear;
  padding: 13px;
}

.navbar-icons-button:hover {
  border-color: var(--beigie-100-color);
}

.navbar-icons-button img {
  display: flex;
  margin: 0 auto;
}

.phone-button {
  background-color: var(--black-100-color);
}

.dropdown-language {
  width: 80px;
  height: 50px;
  display: flex;
  justify-content: space-around;
  border: 1px solid var(--stroke-color);
  border-radius: 100px;
  align-content: center;
  padding: 10px 16px;
  transition: border-color 0.1s linear;
}

.dropdown-language:hover {
  border-color: var(--beigie-100-color);
}

.current-language {
  margin-right: 5px;
}

.show {
  padding: 0;
}

.modal-content,
.modal-body,
.modal-search-input {
  border-radius: 100px;
}

.modal-content {
  border: none;
  background: transparent;
}

.modal-body {
  display: flex;
  align-items: center;
  gap: 16px;
}

.input-container {
  width: 466px;
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 100px;
  background: var(--white-color);
  padding: 10px 24px;
}

.modal-search-input {
  font-size: var(--body-18-size);
  line-height: var(--body-18-line-height);
  font-weight: 400;
  color: var(--label-color);
  width: 100%;
  border: none;
  outline: none;
  background: var(--white-color);
  padding: 5px;
}

.modal-search-input:focus {
  border: none;
}
</style>
