import { createI18n } from "vue-i18n";

const messages = {
  ru: {
    hello: "Привет!",
    companyName: "RMC DE LUXE",

    // Navbar
    navbarMenuOneDropdown: "Услуги",
    navbarDropdownMenuOne: "Купить",
    navbarDropdownMenuTwo: "Арендовать",
    navbarDropdownMenuThree: "Продать",
    navbarDropdownMenuFour: "Оценка недвижимости",
    navbarMenuTwo: "О нас",
    navbarMenuThree: "Блог",
    navbarMenuFour: "Контакты",
    searchInputPlaceholder: "Введите поисковый запрос...",

    // Header
    headerTitle: "Найдите идеальное место для жизни",
    headerSubtitle: "Откройте двери в новое будущее с нами",
    headerButton: "Подробнее",

    // About us
    aboutUsTitle: "О компании",
    aboutUsMenuTitleOne: "Аренда",
    aboutUsMenuSubtitleOneOne:
      "Широкий выбор объектов: Мы предлагаем разнообразные варианты аренды – от квартир и домов до коммерческих помещений, удовлетворяющие любые потребности.",
    aboutUsMenuSubtitleOneTwo:
      "Надежные арендаторы: Проведение тщательной проверки и отбора арендаторов для обеспечения стабильного дохода и минимизации рисков",
    aboutUsMenuTitleTwo: "Купля - продажа",
    aboutUsMenuSubtitleTwoOne:
      "Широкий выбор объектов: Мы предлагаем разнообразные варианты аренды – от квартир и домов до коммерческих помещений, удовлетворяющие любые потребности.",
    aboutUsMenuSubtitleTwoTwo:
      "Надежные арендаторы: Проведение тщательной проверки и отбора арендаторов для обеспечения стабильного дохода и минимизации рисков",
    aboutUsMenuTitleThree: "Управление",
    aboutUsMenuSubtitleThreeOne:
      "Широкий выбор объектов: Мы предлагаем разнообразные варианты аренды – от квартир и домов до коммерческих помещений, удовлетворяющие любые потребности.",
    aboutUsMenuSubtitleThreeTwo:
      "Надежные арендаторы: Проведение тщательной проверки и отбора арендаторов для обеспечения стабильного дохода и минимизации рисков",

    // Estate investment
    estateInvestmentTitle: "Инвестиции в недвижимость в Дубае",
    estateInvestmentDescriptionOne:
      "Недвижимость в Дубае предоставляет отличные возможности для получения стабильного дохода и увеличения капитала",
    estateInvestmentDescriptionTwo:
      "Полный цикл инвестиций: От анализа рынка и подбора объектов до управления инвестициями и их реализации.",
    estateInvestmentDescriptionThree:
      "Наши эксперты помогут вам на всех этапах инвестиционного процесса, обеспечивая высокое качество обслуживания и надежность.",
    estateInvestmentDescriptionFour:
      "Наши услуги включают управление вашей инвестиционной недвижимостью, обеспечивая её сохранность и стабильный доход. Мы берем на себя все аспекты управления, включая подбор и проверку арендаторов, техническое обслуживание, финансовую отчетность и юридическую поддержку.",
    estateInvestmentButton: "Подробнее",

    // Services
    servicesTitle: "Что входит в услугу управления недвижимостью",
    servicesOne: "Проверка арендаторов (кредитная история, рекомендации)",
    servicesTwo: "Подготовка и подписание договоров аренды",
    servicesThree: "Сбор арендной платы",
    servicesFour: "Обработка запросов и жалоб арендаторов",
    servicesFive: "Контроль соблюдения условий аренды",
    servicesSix: "Регулярное техническое обслуживание",
    servicesSeven: "Организация и проведение ремонтных работ",
    servicesEight: "Контроль за состоянием недвижимости",
    servicesNine: "Подбор надежных арендаторов",

    // Why us
    whyUsTitle: "Почему выбирают нас",
    whyUsBoxOneTitle: "Опыт и профессионализм",
    whyUsBoxOneDescription:
      "Наши специалисты имеют многолетний опыт в различных сферах недвижимости, что гарантирует высокое качество услуг",
    whyUsBoxTwoTitle: "Прозрачность и доверие",
    whyUsBoxTwoDescription:
      "Обеспечение полной прозрачности всех операций и предоставление отчетов. Работа основана на принципах честности и доверия, что подтверждается отзывами",
    whyUsBoxThreeTitle: "Высокий уровень обслуживания",
    whyUsBoxThreeDescription: "Мы всегда на связи, чтобы помочь вам в любое время",
    whyUsBoxFourTitle: "Индивидуальный подход",
    whyUsBoxFourDescription:
      "Мы разрабатываем персонализированные решения, учитывая уникальные потребности каждого клиента",
    whyUsBoxFiveTitle: "Комплексное обслуживание",
    whyUsBoxFiveDescription:
      "Полный спектр услуг, включающий аренду, куплю-продажу, управление и инвестиции в недвижимость.",

    // New buildings
    newBuildingsTitle: "Новостройки",
    newBuildingsOneTitle: "Safa One",
    newBuildingsOnePrice: "от $1 900 000",
    newBuildingsTwoTitle: "Safa Two",
    newBuildingsTwoPrice: "от $399 000",
    newBuildingsThreeTitle: "Peninsula Two",
    newBuildingsThreePrice: "от $245 000",
    newBuildingsFourTitle: "Marina Vista",
    newBuildingsFourPrice: "от $612 000",
    newBuildingsButton: "Смотреть все",

    // Calculate mortgage
    calculateMortgageTitle: "Рассчитайте ипотеку",
    calculateMortgageInputOneTitle: "Стоимость недвижимости (у.е.)",
    calculateMortgageInputOnePlaceholder: "Введите стоимость",
    calculateMortgageInputTwoTitle: "Первоначальный взнос (у.е.)",
    calculateMortgageInputTwoPlaceholder: "Введите размер взноса",
    calculateMortgageInputThreeTitle: "Срок в годах",
    calculateMortgageInputThreePlaceholder: "Введите срок",
    calculateMortgageInputFourTitle: "Ставка (%)",
    calculateMortgageInputFourPlaceholder: "Введите размер ставки",
    calculateMortgageResultOneTitle: "Ежемесячный платеж",
    calculateMortgageResultOne: "4 410 у.е.",
    calculateMortgageResultTwoTitle: "Сумма кредита",
    calculateMortgageResultTwo: "200 000 у.е.",
    calculateMortgageResultThreeTitle: "Процентная ставка",
    calculateMortgageResultThree: "24%",
    calculateMortgageResultFourTitle: "Дата последнего платежа",
    calculateMortgageResultFour: "28 июля 2034 г",
    calculateMortgageButton: "Рассчитать",

    // Contact form
    contactFormTitle: "Остались вопросы? Свяжитесь с нами",
    contactFormInputOnePlaceholder: "ФИО *",
    contactFormInputTwoPlaceholder: "Номер телефона *",
    contactFormInputThreePlaceholder: "E-mail",
    contactFormInputFourPlaceholder: "Ваш вопрос",
    contactFormButton: "Отправить",

    // Blog
    blogTitle: "Блог",
    blogOneTitle: "Тенденции и прогнозы рынка недвижимости на 2024 год",
    blogTwoTitle: "Лучшие районы для инвестиций в недвижимость",
    blogThreeTitle: "Топ-10 новых жилых комплексов",
    blogFullButton: "Подробнее",
    blogButton: "Все статьи",

    // Footer
    footerMenuOneTitle: "Услуги",
    footerMenuOneOne: "Купить",
    footerMenuOneTwo: "Арендовать",
    footerMenuOneThree: "Продать",
    footerMenuOneFour: "Оценить",
    footerMenuTwoTitle: "Недвижимость",
    footerMenuTwoOne: "Квартиры",
    footerMenuTwoTwo: "Новостройки",
    footerMenuTwoThree: "Дома и участки",
    footerMenuTwoFour: "Коммерческая",
    footerMenuThreeTitle: "Компания",
    footerMenuThreeOne: "О нас",
    footerMenuThreeTwo: "Блог",
    footerMenuThreeThree: "Контакты",
    footerMenuThreeFour: "Связаться",
    footerMenuFourTitle: "Другое",
    footerMenuFourOne: "Ипотечный калькулятор",
    footerMenuFourTwo: "Инвестиции в недвижимость в Дубае",
    footerRights: "Все права защищены",
  },
  uz: {
    hello: "Salom",
    companyName: "RMC DE LUXE",

    // Navbar
    navbarMenuOneDropdown: "",
    navbarDropdownMenuOne: "",
    navbarDropdownMenuTwo: "",
    navbarDropdownMenuThree: "",
    navbarDropdownMenuFour: "",
    navbarMenuTwo: "",
    navbarMenuThree: "",
    navbarMenuFour: "",
    searchInputPlaceholder: "",

    // Header
    headerTitle: "",
    headerSubtitle: "",
    headerButton: "",

    // About us
    aboutUsTitle: "",
    aboutUsMenuTitleOne: "",
    aboutUsMenuSubtitleOneOne: "",
    aboutUsMenuSubtitleOneTwo: "",
    aboutUsMenuTitleTwo: "",
    aboutUsMenuSubtitleTwoOne: "",
    aboutUsMenuSubtitleTwoTwo: "",
    aboutUsMenuTitleThree: "",
    aboutUsMenuSubtitleThreeOne: "",
    aboutUsMenuSubtitleThreeTwo: "",

    // Estate investment
    estateInvestmentTitle: "",
    estateInvestmentDescription: "",
    estateInvestmentButton: "",

    // Services
    servicesTitle: "",
    servicesOne: "",
    servicesTwo: "",
    servicesThree: "",
    servicesFour: "",
    servicesFive: "",
    servicesSix: "",
    servicesSeven: "",
    servicesEight: "",
    servicesNine: "",

    // Why us
    whyUsTitle: "",
    whyUsBoxOneTitle: "",
    whyUsBoxOneDescription: "",
    whyUsBoxTwoTitle: "",
    whyUsBoxTwoDescription: "",
    whyUsBoxThreeTitle: "",
    whyUsBoxThreeDescription: "",
    whyUsBoxFourTitle: "",
    whyUsBoxFourDescription: "",
    whyUsBoxFiveTitle: "",
    whyUsBoxFiveDescription: "",

    // New buildings
    newBuildingsTitle: "",
    newBuildingsOneTitle: "",
    newBuildingsOnePrice: "",
    newBuildingsTwoTitle: "",
    newBuildingsTwoPrice: "",
    newBuildingsThreeTitle: "",
    newBuildingsThreePrice: "",
    newBuildingsFourTitle: "",
    newBuildingsFourPrice: "",
    newBuildingsButton: "",

    // Calculate mortgage
    calculateMortgageTitle: "",
    calculateMortgageInputOneTitle: "",
    calculateMortgageInputOnePlaceholder: "",
    calculateMortgageInputTwoTitle: "",
    calculateMortgageInputTwoPlaceholder: "",
    calculateMortgageInputThreeTitle: "",
    calculateMortgageInputThreePlaceholder: "",
    calculateMortgageInputFourTitle: "",
    calculateMortgageInputFourPlaceholder: "",
    calculateMortgageResultOneTitle: "",
    calculateMortgageResultOne: "",
    calculateMortgageResultTwoTitle: "",
    calculateMortgageResultTwo: "",
    calculateMortgageResultThreeTitle: "",
    calculateMortgageResultThree: "",
    calculateMortgageResultFourTitle: "",
    calculateMortgageResultFour: "",
    calculateMortgageButton: "",

    // Contact form
    contactFormTitle: "",
    contactFormInputOnePlaceholder: "",
    contactFormInputTwoPlaceholder: "",
    contactFormInputThreePlaceholder: "",
    contactFormInputFourPlaceholder: "",
    contactFormButton: "",

    // Blog
    blogTitle: "",
    blogOneTitle: "",
    blogTwoTitle: "",
    blogThreeTitle: "",
    blogFullButton: "",
    blogButton: "",

    // Footer
    footerMenuOneTitle: "",
    footerMenuOneOne: "",
    footerMenuOneTwo: "",
    footerMenuOneThree: "",
    footerMenuOneFour: "",
    footerMenuTwoTitle: "",
    footerMenuTwoOne: "",
    footerMenuTwoTwo: "",
    footerMenuTwoThree: "",
    footerMenuTwoFour: "",
    footerMenuThreeTitle: "",
    footerMenuThreeOne: "",
    footerMenuThreeTwo: "",
    footerMenuThreeThree: "",
    footerMenuThreeFour: "",
    footerMenuFourTitle: "",
    footerMenuFourOne: "",
    footerMenuFourTwo: "",
    footerRights: "",
  },
  en: {
    hello: "Hello",
    companyName: "RMC DE LUXE",

    // Navbar
    navbarMenuOneDropdown: "",
    navbarDropdownMenuOne: "",
    navbarDropdownMenuTwo: "",
    navbarDropdownMenuThree: "",
    navbarDropdownMenuFour: "",
    navbarMenuTwo: "",
    navbarMenuThree: "",
    navbarMenuFour: "",
    searchInputPlaceholder: "",

    // Header
    headerTitle: "",
    headerSubtitle: "",
    headerButton: "",

    // About us
    aboutUsTitle: "",
    aboutUsMenuTitleOne: "",
    aboutUsMenuSubtitleOneOne: "",
    aboutUsMenuSubtitleOneTwo: "",
    aboutUsMenuTitleTwo: "",
    aboutUsMenuSubtitleTwoOne: "",
    aboutUsMenuSubtitleTwoTwo: "",
    aboutUsMenuTitleThree: "",
    aboutUsMenuSubtitleThreeOne: "",
    aboutUsMenuSubtitleThreeTwo: "",

    // Estate investment
    estateInvestmentTitle: "",
    estateInvestmentDescription: "",
    estateInvestmentButton: "",

    // Services
    servicesTitle: "",
    servicesOne: "",
    servicesTwo: "",
    servicesThree: "",
    servicesFour: "",
    servicesFive: "",
    servicesSix: "",
    servicesSeven: "",
    servicesEight: "",
    servicesNine: "",

    // Why us
    whyUsTitle: "",
    whyUsBoxOneTitle: "",
    whyUsBoxOneDescription: "",
    whyUsBoxTwoTitle: "",
    whyUsBoxTwoDescription: "",
    whyUsBoxThreeTitle: "",
    whyUsBoxThreeDescription: "",
    whyUsBoxFourTitle: "",
    whyUsBoxFourDescription: "",
    whyUsBoxFiveTitle: "",
    whyUsBoxFiveDescription: "",

    // New buildings
    newBuildingsTitle: "",
    newBuildingsOneTitle: "",
    newBuildingsOnePrice: "",
    newBuildingsTwoTitle: "",
    newBuildingsTwoPrice: "",
    newBuildingsThreeTitle: "",
    newBuildingsThreePrice: "",
    newBuildingsFourTitle: "",
    newBuildingsFourPrice: "",
    newBuildingsButton: "",

    // Calculate mortgage
    calculateMortgageTitle: "",
    calculateMortgageInputOneTitle: "",
    calculateMortgageInputOnePlaceholder: "",
    calculateMortgageInputTwoTitle: "",
    calculateMortgageInputTwoPlaceholder: "",
    calculateMortgageInputThreeTitle: "",
    calculateMortgageInputThreePlaceholder: "",
    calculateMortgageInputFourTitle: "",
    calculateMortgageInputFourPlaceholder: "",
    calculateMortgageResultOneTitle: "",
    calculateMortgageResultOne: "",
    calculateMortgageResultTwoTitle: "",
    calculateMortgageResultTwo: "",
    calculateMortgageResultThreeTitle: "",
    calculateMortgageResultThree: "",
    calculateMortgageResultFourTitle: "",
    calculateMortgageResultFour: "",
    calculateMortgageButton: "",

    // Contact form
    contactFormTitle: "",
    contactFormInputOnePlaceholder: "",
    contactFormInputTwoPlaceholder: "",
    contactFormInputThreePlaceholder: "",
    contactFormInputFourPlaceholder: "",
    contactFormButton: "",

    // Blog
    blogTitle: "",
    blogOneTitle: "",
    blogTwoTitle: "",
    blogThreeTitle: "",
    blogFullButton: "",
    blogButton: "",

    // Footer
    footerMenuOneTitle: "",
    footerMenuOneOne: "",
    footerMenuOneTwo: "",
    footerMenuOneThree: "",
    footerMenuOneFour: "",
    footerMenuTwoTitle: "",
    footerMenuTwoOne: "",
    footerMenuTwoTwo: "",
    footerMenuTwoThree: "",
    footerMenuTwoFour: "",
    footerMenuThreeTitle: "",
    footerMenuThreeOne: "",
    footerMenuThreeTwo: "",
    footerMenuThreeThree: "",
    footerMenuThreeFour: "",
    footerMenuFourTitle: "",
    footerMenuFourOne: "",
    footerMenuFourTwo: "",
    footerRights: "",
  },
};

const i18n = createI18n({
  locale: "ru",
  fallbackLocale: "uz",
  messages,
});

export default i18n;
