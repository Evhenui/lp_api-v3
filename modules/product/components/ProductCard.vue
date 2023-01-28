<template>
  <div class="card-product" ref="productWrapper">
    <div class="card-product__w">
      <div class="card-product__container">
        <div class="card-title">
          <h1 class="card-title__text">
            <span class="card-title__text-bold">Название продукта</span>
            <span class="card-title__text-normal"></span> 1.4кВт АКБ mGel 100 Ah
          </h1>
          <div class="card-title__code">
            <!-- <Rating 
              :reviews="'12'" 
              :points="'3'"
              class="card-product__rating mobile"
            />  -->
            <div class="card-title__code-wrapper">
              <span class="card-title__code-text">Код:</span>
              <span class="card-title__code-number">{{ card.code }}</span>
            </div>
          </div>
        </div>
        <!-- <Rating 
          :reviews="'12'" 
          :points="'3'"
          class="card-product__rating"
        />  -->
      </div>
    </div>

    <div class="card-product__navigation" ref="navigation">
      <CardProductNav
        @navChange="calcCurrNav"
        :CurrentNav="currentNav"
        ref="productNavList"
      />
    </div>

    <div class="card-product__w">
      <div class="card-product__container">
        <CardAboutProduct
          :class="{ active: currentNav === ProductNav }"
          :items="sliderValues"
          @getPriceEl="getPriceEl"
        />
      </div>
    </div>

    <div class="card-product__w">
      <div class="card-product__container">
        <div class="spec" ref="spec">
          <div class="spec__w">
            <ProductSlider
              :title="'С этим товаром покупают'"
              class="slider"
              :class="{ active: currentNav === ProductNav }"
              :cards="cardItems"
            />

            <CardProductDescription
              class="description"
              :class="[
                { active: currentNav === ProductNav },
                { active: currentNav === 2 },
              ]"
              id="description"
            >
              <h3 class="spec__title">
                Описание
                <span class="spec__article">Название продукта</span>
              </h3>
            </CardProductDescription>

            <CardProductCharacteristics
              :class="[
                { active: currentNav === ProductNav },
                { active: currentNav === 2 },
              ]"
            >
              <h3 class="spec__title">
                Характеристики
                <span class="spec__article">Название продукта</span>
              </h3>
            </CardProductCharacteristics>

            <CardProductInstruction
              :class="[
                { active: currentNav === ProductNav },
                { active: currentNav === 4 },
              ]"
            >
              <h3 class="spec__title">
                Загрузки
                <span class="spec__article">Название продукта</span>
              </h3>
            </CardProductInstruction>

            <CardProductVideo :class="{ active: currentNav === 3 }">
              <h3 class="spec__title">
                Видео
                <span class="spec__article">Название продукта</span>
              </h3>
            </CardProductVideo>
          </div>
          <div class="aside" ref="aside">
            <CardProductAside :code="card.code" :navHeight="navHeight" />
          </div>
        </div>
        <Transition name="price-fade">
          <div class="mobile-price" v-if="isVisibility">
            <div class="mobile-price__money-sale">
              <p class="mobile-price__money-sale-old">3500 грн</p>
              <p class="mobile-price__money-sale-new">3113 грн</p>
            </div>
            <ButtonBuy :state="'buy'" />
          </div>
        </Transition>
      </div>
      <ProductSlider
        class="slider long"
        :title="'Просмотренные товары'"
        :cards="cardItems"
      />
    </div>
  </div>
</template>

<script setup>
import CardAboutProduct from "~~/modules/product/components/productTabs/CardAboutProduct.vue";
import CardProductAside from "~~/modules/product/components/productTabs/CardProductAside.vue";
import CardProductCharacteristics from "~~/modules/product/components/productTabs/CardProductCharacteristics.vue";
import CardProductDescription from "~~/modules/product/components/productTabs/CardProductDescription.vue";
import CardProductInstruction from "~~/modules/product/components/productTabs/CardProductInstruction.vue";
import CardProductNav from "~~/modules/product/components/productTabs/CardProductNav.vue";
import CardProductVideo from "~~/modules/product/components/productTabs/CardProductVideo.vue";
// import Rating from "~~/components/common/sections/Rating.vue";
import ButtonBuy from "~~/modules/shared/components/buttons/ButtonBuy.vue";
import ProductSlider from "~~/modules/shared/components/sliderProductCard/ProductSlider.vue";
import { useHeaderStore } from "~~/store/headerStore";

const headerStore = useHeaderStore();
const heightHeader = headerStore.height;

const productWrapper = ref(null);
const productNavList = ref(null);
const navigation = ref(null);
const aside = ref(null);
const spec = ref(null);
const priceSection = ref(null);

const currentNav = ref(1);
const isMobile = ref(false);
const isVisibility = ref(false);
const navHeight = ref(0);
const ProductNav = ref(1);
const sliderSize = ref(0);
const positionAside = ref(0);
const headerHeight = ref("");

const positionAsideTest = ref('')

const card = {
  code: "0000001",
  slug: {
    ru: "akkumulyator",
    uk: "akumulyator",
  },
  name: {
    ru: "Аккумулятор",
    uk: "Акумулятор",
  },
  description: {
    ru: "<p>Электрический аккумулятор</p>",
    uk: "<p>Електричний акумулятор</p>",
  },
  status: "inStock",
  labels: ["novelty"],
  prices: [
    {
      type: "current",
      money: {
        amount: 33.77,
        currency: "UAH",
      },
    },
  ],
  manufacturer: {
    slug: "logicpower",
    name: "LogicPower",
  },
  specifications: [
    {
      id: 1,
      name: {
        ru: "Тип корпуса",
        uk: "Тип корпусу",
      },
      option: {
        id: 2,
        value: {
          ru: "цилиндрический",
          uk: "циліндричний",
        },
      },
    },
  ],
  categories: [
    {
      name: {
        ru: "Сетевое оборудование",
        uk: "Мережеве обладнання",
      },
    },
  ],
  images: [
    {
      locales: ["ru"],
      url: "https://example.com/image.jpg",
      thumbnails: [
        {
          url: "https://example.com/image_tile.jpg",
          type: "tile",
        },
      ],
    },
  ],
  attachments: [
    {
      group: "Инструкция",
      files: [
        {
          locales: ["ru"],
          name: {
            ru: "Инструкция пользователя",
            uk: "Інструкція користувача",
          },
          url: "https://logicfox.info/manuals/LP/UPS/2415/2415_2416_4324_4325_(LP_650_850VA-PS-6PS)_manual_ua.pdf",
          meta: {
            type: "application/pdf",
            size: 1846538,
          },
        },
      ],
    },
  ],
};

const cardItems = [
  {
    suggestions: ["novelty", "top-sales"],
    image: "",
    rating: {
      points: "4",
      reviews: "125",
    },
    statusValues: {
      buttonStatus: "in-stock",
      delivery: true,
      credit: true,
    },
    name:
      "Акумулятор гелевий LPN-GL 12V - 200 Ah (JAPAN) GL 12V - 200 Ah (JAPAN)",
    code: "56983",
    prices: {
      button: "buy",
      price: {
        discount: "",
        total: "500 ₴",
      },
    },
    inactive: false,
  },
  {
    suggestions: ["novelty"],
    image: "",
    rating: {
      points: "4",
      reviews: "125",
    },
    statusValues: {
      buttonStatus: "in-stock",
      delivery: true,
      credit: true,
    },
    name:
      "Акумулятор гелевий LPN-GL 12V - 200 Ah (JAPAN) GL 12V - 200 Ah (JAPAN)",
    code: "56983",
    prices: {
      button: "buy",
      price: {
        discount: "",
        total: "500 ₴",
      },
    },
    inactive: true,
  },
  {
    suggestions: ["novelty"],
    image: "",
    rating: {
      points: "4",
      reviews: "125",
    },
    statusValues: {
      buttonStatus: "in-stock",
      delivery: true,
      credit: true,
    },
    name:
      "Акумулятор гелевий LPN-GL 12V - 200 Ah (JAPAN) GL 12V - 200 Ah (JAPAN)",
    code: "56983",
    prices: {
      button: "buy",
      price: {
        discount: "",
        total: "500 ₴",
      },
    },
    inactive: false,
  },
  {
    suggestions: ["novelty"],
    image: "",
    rating: {
      points: "4",
      reviews: "125",
    },
    statusValues: {
      buttonStatus: "in-stock",
      delivery: true,
      credit: true,
    },
    name:
      "Акумулятор гелевий LPN-GL 12V - 200 Ah (JAPAN) GL 12V - 200 Ah (JAPAN)",
    code: "56983",
    prices: {
      button: "buy",
      price: {
        discount: "",
        total: "500 ₴",
      },
    },
    inactive: false,
  },
  {
    suggestions: ["novelty"],
    image: "",
    rating: {
      points: "4",
      reviews: "125",
    },
    statusValues: {
      buttonStatus: "in-stock",
      delivery: true,
      credit: true,
    },
    name:
      "Акумулятор гелевий LPN-GL 12V - 200 Ah (JAPAN) GL 12V - 200 Ah (JAPAN)",
    code: "56983",
    prices: {
      button: "buy",
      price: {
        discount: "",
        total: "500 ₴",
      },
    },
    inactive: false,
  },
  {
    suggestions: ["novelty"],
    image: "",
    rating: {
      points: "4",
      reviews: "125",
    },
    statusValues: {
      buttonStatus: "in-stock",
      delivery: true,
      credit: true,
    },
    name:
      "Акумулятор гелевий LPN-GL 12V - 200 Ah (JAPAN) GL 12V - 200 Ah (JAPAN)",
    code: "56983",
    prices: {
      button: "buy",
      price: {
        discount: "",
        total: "500 ₴",
      },
    },
    inactive: false,
  },
  {
    suggestions: ["novelty"],
    image: "",
    rating: {
      points: "4",
      reviews: "125",
    },
    statusValues: {
      buttonStatus: "in-stock",
      delivery: true,
      credit: true,
    },
    name:
      "Акумулятор гелевий LPN-GL 12V - 200 Ah (JAPAN) GL 12V - 200 Ah (JAPAN)",
    code: "56983",
    prices: {
      button: "buy",
      price: {
        discount: "",
        total: "500 ₴",
      },
    },
    inactive: false,
  },
  {
    suggestions: ["novelty"],
    image: "",
    rating: {
      points: "4",
      reviews: "125",
    },
    statusValues: {
      buttonStatus: "in-stock",
      delivery: true,
      credit: true,
    },
    name:
      "Акумулятор гелевий LPN-GL 12V - 200 Ah (JAPAN) GL 12V - 200 Ah (JAPAN)",
    code: "56983",
    prices: {
      button: "buy",
      price: {
        discount: "",
        total: "500 ₴",
      },
    },
    inactive: false,
  },
  {
    suggestions: ["novelty"],
    image: "",
    rating: {
      points: "4",
      reviews: "125",
    },
    statusValues: {
      buttonStatus: "in-stock",
      delivery: true,
      credit: true,
    },
    name:
      "Акумулятор гелевий LPN-GL 12V - 200 Ah (JAPAN) GL 12V - 200 Ah (JAPAN)",
    code: "56983",
    prices: {
      button: "buy",
      price: {
        discount: "",
        total: "500 ₴",
      },
    },
    inactive: false,
  },
  {
    suggestions: ["novelty"],
    image: "",
    rating: {
      points: "4",
      reviews: "125",
    },
    statusValues: {
      buttonStatus: "in-stock",
      delivery: true,
      credit: true,
    },
    name:
      "Акумулятор гелевий LPN-GL 12V - 200 Ah (JAPAN) GL 12V - 200 Ah (JAPAN)",
    code: "56983",
    prices: {
      button: "buy",
      price: {
        discount: "",
        total: "500 ₴",
      },
    },
    inactive: false,
  },
  {
    suggestions: ["novelty"],
    image: "",
    rating: {
      points: "4",
      reviews: "125",
    },
    statusValues: {
      buttonStatus: "in-stock",
      delivery: true,
      credit: true,
    },
    name:
      "Акумулятор гелевий LPN-GL 12V - 200 Ah (JAPAN) GL 12V - 200 Ah (JAPAN)",
    code: "56983",
    prices: {
      button: "buy",
      price: {
        discount: "",
        total: "500 ₴",
      },
    },
    inactive: false,
  },
  {
    suggestions: ["novelty"],
    image: "",
    rating: {
      points: "4",
      reviews: "125",
    },
    statusValues: {
      buttonStatus: "in-stock",
      delivery: true,
      credit: true,
    },
    name:
      "Акумулятор гелевий LPN-GL 12V - 200 Ah (JAPAN) GL 12V - 200 Ah (JAPAN)",
    code: "56983",
    prices: {
      button: "buy",
      price: {
        discount: "",
        total: "500 ₴",
      },
    },
    inactive: false,
  },
];

const sliderValues = {
  itemsImage: [
    { image: "https://logicpower.ua/storage/1920648/3170_1.png" },
    { image: "https://logicpower.ua/storage/1920648/3170_1.png" },
    { image: "https://logicpower.ua/storage/1920648/3170_1.png" },
    { image: "https://logicpower.ua/storage/1920648/3170_1.png" },
    { image: "https://logicpower.ua/storage/1920648/3170_1.png" },
    { image: "https://logicpower.ua/storage/1920648/3170_1.png" },
    { image: "https://logicpower.ua/storage/1920648/3170_1.png" },
    { image: "https://logicpower.ua/storage/1920648/3170_1.png" },
    { image: "https://logicpower.ua/storage/1920648/3170_1.png" },
    { image: "https://logicpower.ua/storage/1920648/3170_1.png" },
    { image: "https://logicpower.ua/storage/1920648/3170_1.png" },
    { image: "https://logicpower.ua/storage/1920648/3170_1.png" },
  ],
  suggestions: ["top-sales"],
  price: {
    price: "2 625 ₴",
    discount: "3 500 ₴",
  },
};

function calcCurrNav(idx) {
  currentNav.value = idx;
}

function calcNavHeight() {
  navHeight.value = navigation.value.getBoundingClientRect().height;
}

function getPriceEl(el) {
  priceSection.value = el;
}

function calcBlockPriceVisibility() {
  if (window.innerWidth < 1024) {
    const callback = function (entries) {
      if (entries[0].isIntersecting) {
        isVisibility.value = false;
      } else {
        isVisibility.value = true;
      }
    };

    const observer = new IntersectionObserver(callback);
    observer.observe(priceSection.value);
  }
}

function calsIsMobile() {
  const mobWidth = getComputedStyle(productWrapper.value).getPropertyValue("--mobile-width");
  isMobile.value = window.innerWidth <= parseInt(mobWidth);
}

let timeOut = 0;

function onResize() {
  clearTimeout(timeOut);

  timeOut = setTimeout(() => {
    calsIsMobile();
    calcBlockPriceVisibility();
    calcNavHeight();
    getWidthSlider();
  }, 250);
}

function getWidthSlider() {
  if(window.innerWidth > 1024) {
    const gap = parseInt(getComputedStyle(spec.value, null).getPropertyValue("gap"));
    const mainPadding = 
    parseInt(getComputedStyle(productWrapper.value, null).getPropertyValue("--local-pad")) * 2;
    const widthAside = aside.value.offsetWidth;
    const space = widthAside + mainPadding + gap;

    if (window.innerWidth < 1470) {
      sliderSize.value = window.innerWidth - space + "px";
    } else {
      sliderSize.value = "1076px";
    }
  }
}

function getTopAside() {
  const space = 8;
  if (window.innerWidth > 1024) {
    positionAside.value = 
    parseInt(headerHeight.value) + navigation.value.getBoundingClientRect().height + space + "px";
  }
}

function getSizeHeader(size) {
  headerHeight.value = `${size}px`;
}

watch(heightHeader, (val) => {
  positionAsideTest.value = val.header
});

onMounted(() => {
  getTopAside();
  onResize();
  window.addEventListener("resize", onResize);
  window.addEventListener("scroll", calcBlockPriceVisibility);
});

onUnmounted(() => {
  window.removeEventListener("resize", onResize);
  window.removeEventListener("scroll", calcBlockPriceVisibility);
});
</script>

<style lang="scss" scoped>
.card-product {
  --mobile-width: #{$mobile-big-width};
  --local-pad: 16px;

  position: relative;

  @include flex-container(column, flex-start);
  align-items: center;
  gap: 16px;

  padding-bottom: 80px;

  &__navigation {
    width: 100%;
    position: sticky;
    top: v-bind(headerHeight);
    z-index: 100;
    background-color: #f7f9fa;

    @include mobile {
      top: 56px;
    }
  }

  &__rating {
    @include flex-container(row, flex-start);

    padding: 0;
    gap: 8px;

    @include mobile {
      display: none;
    }

    &.mobile {
      display: none;

      @include mobile {
        display: flex;
      }
    }
  }

  &__w {
    width: 100%;

    @include flex-container(column, flex-start);
    align-items: center;

    padding: 0 16px;
  }

  &__container {
    @extend %width-main;

    @include flex-container(column, flex-start);
    gap: 16px;

    margin-bottom: 16px;
  }
}

.card-title {
  width: 100%;

  @include flex-container(row, space-between, flex-start);
  flex-wrap: wrap;
  gap: 16px;

  padding-top: 16px;

  &__text {
    @include font(36, 42);

    @include bigMobile {
      @include font(24, 28);
    }
  }

  &__text-bold {
    font-weight: 500;

    @include bigMobile {
      display: block;
    }
  }

  &__code {
    @include mobile {
      width: 100%;

      @include flex-container(row, space-between, center);
    }
  }

  &__code-wrapper {
    @include flex-container(row, center, center);
    gap: 8px;

    @include font(36, 47, 600);

    @include bigMobile {
      @include font(24, 28);

      gap: 4px;
    }
  }

  &__code-text {
    color: #2b2b2b;

    @include mobile {
      @include font(16, 19, 400);
      color: #8a8a8a;
    }
  }

  &__code-number {
    @include mobile {
      @include font(16, 19, 400);
    }
  }
}

.description {
  scroll-margin-top: 160px;
}

.spec {
  width: 100%;

  @include flex-container(row, space-between, flex-start);
  gap: 16px;

  &__w {
    width: 100%;

    @include flex-container(column, flex-start);
    gap: 16px;
  }

  &__title {
    @include font(18, 22, 700);

    @include bigMobile {
      font-weight: 500;
    }
  }

  &__article {
    font-weight: 400;
  }
}

.mobile-price {
  width: 100%;

  display: none;
  flex-wrap: wrap;
  gap: 8px;

  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100;

  box-shadow: 0px 3px 11px rgb(0 0 0 / 10%);
  background-color: white;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  padding: 16px 8px;

  @include bigMobile {
    @include flex-container(row, space-between, center);
  }

  & .buy {
    max-width: 160px;
  }

  &__money-sale {
    @include flex-container(row-reverse, flex-end, center);
    gap: 16px;
  }

  &__money-sale-old {
    @include font;
    text-decoration: line-through;
  }

  &__money-sale-new {
    @include font(24, 28, 500);
    color: red;
  }

  &__money-regular {
    @include font(24, 28, 500);
  }
}

.slider {
  max-width: v-bind(sliderSize);

  display: none;

  &.long {
    max-width: 1440px;

    display: block;
  }

  &.active {
    display: block;
  }

  @include bigMobile {
    max-width: 100%;
  }
}

.aside {
  /* --top-aside: 0; */
  position: sticky;
  /*  top: calc(16px + var(--height-header) + var(--top-aside)); */
  top: calc(16px + v-bind(positionAsideTest));

  @include bigMobile {
    display: none;
  }
}

.price-fade-enter-active,
.price-fade-leave-active {
  transition: opacity 0.3s ease;
}

.price-fade-enter-from,
.price-fade-leave-to {
  opacity: 0;
}
</style>
