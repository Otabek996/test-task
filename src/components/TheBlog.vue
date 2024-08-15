<template>
  <section class="the-blog">
    <div class="container the-blog__container">
      <h2 class="the-blog-title">Блог</h2>

      <div class="the-blog-box">
        <div class="blog" v-for="(blog, index) in blogs" :key="index">
          <a class="blog-img-link" href="#" alt="Blog image link">
            <div class="blog-img-link-box">
              <img class="blog-img" :src="blog.img" alt="Blog image" />

              <div class="blog-elements">
                <div>
                  <p class="blog-data">{{ blog.data }}</p>
                </div>
                <div class="blog-views-box">
                  <img class="eye-icon" src="../assets/eye-icon.svg" alt="Eye icon" />
                  <p class="blog-views">{{ blog.views }}</p>
                </div>
              </div>
            </div>
          </a>

          <div class="blog-content">
            <p class="blog-title">{{ blog.text }}</p>

            <a class="more-info-link" href="#">
              <span>Подробнее</span>
              <img src="../assets/array-right.svg" alt="Array right" />
            </a>
          </div>
        </div>
      </div>

      <MainButton class="all-blogs-button" text="Все статьи" type="button" />
    </div>
  </section>
</template>

<script>
import MainButton from "./MainButton.vue";

import blogImgOne from "../assets/the-blog-img-01.jpg";
import blogImgTwo from "../assets/the-blog-img-02.jpg";
import blogImgThree from "../assets/the-blog-img-03.jpg";

export default {
  name: "TheBlog",

  components: {
    MainButton,
  },

  data() {
    return {
      blogs: [
        {
          img: blogImgOne,
          data: "31.07.2024",
          views: 899,
          text: "Тенденции и прогнозы рынка недвижимости на 2024 год",
        },
        {
          img: blogImgTwo,
          data: "31.07.2024",
          views: 899,
          text: "Лучшие районы для инвестиций в недвижимость",
        },
        {
          img: blogImgThree,
          data: "31.07.2024",
          views: 899,
          text: "Топ-10 новых жилых комплексов",
        },
      ],
    };
  },
};
</script>

<style scoped>
.the-blog__container {
  padding-bottom: 250px;
}

.the-blog-title {
  font-size: var(--headline-2-size);
  line-height: var(--headline-2-line-height);
  font-weight: 500;
  color: var(--black-100-color);
}

.the-blog-box {
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 30px 0 60px 0;
}

.blog {
  width: 466px;
  height: 426px;
  overflow: hidden;
}

.blog:hover .blog-img {
  transform: scale(1.1);
}

.blog-img-link-box {
  position: relative;
  overflow: hidden;
}

.blog-img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  transition: transform 0.2s linear;
}

.blog-elements {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: var(--twenty-size);
  line-height: var(--twenty-line-height);
  font-weight: 500;
  color: var(--white-color);
  position: absolute;
  bottom: 0;
  padding: 15px;
}

.blog-views-box {
  display: flex;
  align-items: center;
  gap: 7px;
}

.blog-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
}

.blog-title {
  font-size: var(--subtitle-24-size);
  line-height: var(--subtitle-24-line-height);
  font-weight: 500;
  color: var(--black-100-color);
  margin-top: 20px;
}

.more-info-link {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: var(--twenty-size);
  line-height: var(--twenty-line-height);
  font-weight: 600;
  color: var(--beigie-100-color);
}

.all-blogs-button {
  display: block;
  margin: 0 auto;
}
</style>
