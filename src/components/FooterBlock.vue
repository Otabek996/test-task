<template>
  <footer class="footer">
    <div class="container footer__container">
      <div class="footer-header">
        <a class="footer-logo-link" href="#">
          <img class="footer-logo" src="../assets/logo.svg" alt="Logo" />
        </a>

        <ul class="footer-contact-links-menu">
          <a
            class="footer-contact-link"
            href="#"
            v-for="(icon, index) in socialNetworksIcons"
            :key="index"
          >
            <li class="footer-contact-link-item">
              <img :src="icon.icon" :alt="icon.alt" />
            </li>
          </a>
        </ul>
      </div>

      <div class="footer-body">
        <div class="footer-col">
          <h5 class="footer-title">Услуги</h5>

          <ul class="footer-menu">
            <a class="footer-link" href="#" v-for="(text, index) in services" :key="index">
              <li class="footer-item">{{ text }}</li>
            </a>
          </ul>
        </div>

        <div class="footer-col">
          <h5 class="footer-title">Недвижимость</h5>

          <ul class="footer-menu">
            <a class="footer-link" href="#" v-for="(text, index) in estate" :key="index">
              <li class="footer-item">{{ text }}</li>
            </a>
          </ul>
        </div>

        <div class="footer-col">
          <h5 class="footer-title">Компания</h5>

          <ul class="footer-menu">
            <a class="footer-link" href="#" v-for="(text, index) in company" :key="index">
              <li class="footer-item">{{ text }}</li>
            </a>
          </ul>
        </div>

        <div class="footer-col">
          <h5 class="footer-title">Другое</h5>

          <ul class="footer-menu">
            <a class="footer-link" href="#" v-for="(text, index) in others" :key="index">
              <li class="footer-item">{{ text }}</li>
            </a>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <div>
          <p>2024 © RMC De Luxe real estate LLC. Все права защищены</p>
        </div>

        <div>
          <img src="../assets/result-logo.svg" alt="Result logo" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import InstagramIcon from "../assets/instagram.svg";
import TelegramIcon from "../assets/telegram.svg";
import WhatsappIcon from "../assets/whatsapp.svg";
import FacebookIcon from "../assets/facebook.svg";

export default {
  name: "FooterBlock",

  data() {
    return {
      socialNetworksIcons: [
        { icon: InstagramIcon, alt: "Instagram Icon" },
        { icon: TelegramIcon, alt: "Telegram Icon" },
        { icon: WhatsappIcon, alt: "Whatsapp Icon" },
        { icon: FacebookIcon, alt: "Facebook Icon" },
      ],

      services: ["Купить", "Арендовать", "Продать", "Оценить"],

      estate: ["Квартиры", "Новостройки", "Дома и участки", "Коммерческая"],

      company: ["О нас", "Блог", "Контакты", "Связаться"],

      others: ["Ипотечный калькулятор", "Инвестиции в недвижимость в Дубае"],
    };
  },
};
</script>

<style scoped>
.footer {
  background-color: var(--grey-color);
}

.footer-header,
.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.footer-header {
  padding: 50px 0;
}

.footer-contact-links-menu {
  display: flex;
  align-items: center;
  gap: 20px;
}

.footer-body {
  display: flex;
  gap: 138px;
  border: 1px solid var(--stroke-color);
  border-right: none;
  border-left: none;
  padding: 50px 0;
}

.footer-title {
  font-size: var(--subtitle-24-size);
  line-height: var(--subtitle-24-line-height);
  font-weight: 500;
  color: var(--black-100-color);
  margin-bottom: 12px;
}

.footer-menu {
  max-width: 253px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.footer-link {
  font-size: var(--twenty-size);
  line-height: var(--twenty-line-height);
  font-weight: 400;
  color: var(--black-100-color);
  transition: color 0.1s linear;
}

.footer-link:hover {
  color: var(--beigie-100-color);
}

.footer-bottom {
  padding: 35px 0;
}

.footer-bottom p {
  font-size: var(--label-size);
  line-height: var(--label-line-height);
  font-weight: 400;
  color: var(--label-color);
}
</style>
