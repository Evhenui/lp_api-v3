<template>
  <section class="catalog-list">
    <div class="catalog-list__wrapper">
      <div
        class="catalog-list__items"
        ref="cardWrapperEl"
      >
        <SliderCard
          class="catalog-list__item"
          :class="{'only-one': amountCards === 1}"
          v-for="product in products"
          :key="product.id"
          :product="product"
          :changeView="changeView"
        />
      </div>
      <nav class="catalog-list__navigation">
        <ButtonShowMore :disabled="maxInitialCards > amountCards" />
        <div class="catalog-list__pagination">
          <PaginationBtnArrow :disabled="activePage === 0"/>
          <div class="catalog-list__pages">
            <PaginationBtnNumber 
              v-for="(item, index) in amountPages"
              :key="index"
              :class="{active: activePage === index}"
              >{{ index + 1 }}</PaginationBtnNumber>
          </div>
          <PaginationBtnArrow 
            :directionRight="true" 
            :disabled="amountPages === 1 || amountPages === activePage"
          />
        </div>
      </nav>
    </div>
    <FooterDescription />
  </section>
</template>

<script setup>
import SliderCard from '~~/modules/shared/components/slideCard/SlideCard.vue';
import ButtonShowMore from "~/modules/shared/components/buttons/ButtonShowMore.vue";
import PaginationBtnArrow from "~~/modules/shared/components/buttons/PaginationBtnArrow.vue";
import PaginationBtnNumber from "~~/modules/shared/components/buttons/PaginationBtnNumber.vue";
import FooterDescription from '~~/modules/shared/components/footerDescription/FooterDescription.vue';

const props = defineProps({
  changeView: { type: Boolean, required: false},
  products: { type: Object, required: false},
});

const cardWrapperEl = ref(null);
const amountCards = ref(0);
const amountPages = ref(0);
const activePage = ref(0);

const maxInitialCards = 16;

const cardItemsNovelties = [
  {
    suggestions: ["novelty"],
    image: "product-card",
    rating: {
      points: "4",
      reviews: "125",
    },
    statusValues: {
      buttonStatus: "in-stock",
      delivery: true,
      credit: true,
    },
    nameProduct:
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
    image: "product-card",
    rating: {
      points: "4",
      reviews: "125",
    },
    statusValues: {
      buttonStatus: "in-stock",
      delivery: true,
      credit: true,
    },
    nameProduct:
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
    image: "product-card",
    rating: {
      points: "4",
      reviews: "125",
    },
    statusValues: {
      buttonStatus: "in-stock",
      delivery: true,
      credit: true,
    },
    nameProduct:
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
    image: "product-card",
    rating: {
      points: "4",
      reviews: "125",
    },
    statusValues: {
      buttonStatus: "in-stock",
      delivery: true,
      credit: true,
    },
    nameProduct:
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
    image: "product-card",
    rating: {
      points: "4",
      reviews: "125",
    },
    statusValues: {
      buttonStatus: "in-stock",
      delivery: true,
      credit: true,
    },
    nameProduct:
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
    image: "product-card",
    rating: {
      points: "4",
      reviews: "125",
    },
    statusValues: {
      buttonStatus: "in-stock",
      delivery: true,
      credit: true,
    },
    nameProduct:
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
    image: "product-card",
    rating: {
      points: "4",
      reviews: "125",
    },
    statusValues: {
      buttonStatus: "in-stock",
      delivery: true,
      credit: true,
    },
    nameProduct:
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
    image: "product-card",
    rating: {
      points: "4",
      reviews: "125",
    },
    statusValues: {
      buttonStatus: "in-stock",
      delivery: true,
      credit: true,
    },
    nameProduct:
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
    image: "product-card",
    rating: {
      points: "4",
      reviews: "125",
    },
    statusValues: {
      buttonStatus: "in-stock",
      delivery: true,
      credit: true,
    },
    nameProduct:
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
    image: "product-card",
    rating: {
      points: "4",
      reviews: "125",
    },
    statusValues: {
      buttonStatus: "in-stock",
      delivery: true,
      credit: true,
    },
    nameProduct:
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
    image: "product-card",
    rating: {
      points: "4",
      reviews: "125",
    },
    statusValues: {
      buttonStatus: "in-stock",
      delivery: true,
      credit: true,
    },
    nameProduct:
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
    image: "product-card",
    rating: {
      points: "4",
      reviews: "125",
    },
    statusValues: {
      buttonStatus: "in-stock",
      delivery: true,
      credit: true,
    },
    nameProduct:
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

const paginationValues = ['1', '...', '50'];

function getCardsParam() {
  amountCards.value = cardWrapperEl.value.children.length;
  amountPages.value = Math.ceil(amountCards.value / maxInitialCards);
}

onMounted(()=> {
  getCardsParam();
})
</script>

<style lang="scss" scoped>
.catalog-list {
  &__wrapper {
    @include flex-container(column, flex-start);

    gap: 64px;
    margin-bottom: 64px;

    @include bigMobile {
      padding: 0 16px;
    }
  }

  &__items {
    @include flex-container(row, flex-start);
    flex-wrap: wrap;

    gap: 8px;
  }

  &__item {
    --gap: 8px;
    width: 100%;

    flex: 0 0 auto;

    @include set-item-count-in-row(4);

    @include smallestScreen {
      @include set-item-count-in-row(3);
    }

    @include bigMobile {
      @include set-item-count-in-row(4);
    }

    @include mobile {
      @include set-item-count-in-row(2);
    }

    &.only-one {
      width: 282px;

      &.horizontal {
        width: 350px;
      }

      @include smallestScreen {
        width: 282px;
      }

      @include bigMobile {
        width: 252px;
      }

      @include mobile {
        width: 252px;
      }
    }
  }

  &__navigation {
    @include flex-container(column, center, center);

    gap: 32px;
  }

  &__pagination {
    @include flex-container(row, center, center);

    gap: 26px;
  }

  &__pages {
    @include flex-container(row, center, center);

    gap: 26px;
  }
}
</style>
          