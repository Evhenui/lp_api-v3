<template>
  <div class="nav-item">
    <div 
      @click="activeFilter" 
      class="nav-item__header" 
    >
      <h1 class="nav-item__title">{{ values.name[lang] }}</h1>
      <div class="nav-item__arrow">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 9.125L12 14.875L18 9.125"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
    <div
      ref="filterBody"
      class="nav-item__body"
    >
      <CheckBox
        class="nav-item__checkbox"
        v-for="(item, index) in values.options"
        :key="index"
        >{{ item.value[lang] }}
      </CheckBox>
      <ShowAll @click="showAll" v-if="values.options.length > 6" />
    </div>
  </div>
</template>

<script setup>
import FilterPriceControl from "~/modules/products/pages/filter/components/UI/FilterPriceControl.vue";
import CheckBox from "~/modules/shared/components/inputs/CheckBox.vue";
import ShowAll from "~/modules/shared/components/buttons/ShowAll.vue";

const { urlLang } = useRoute().params;
const lang = urlLang ? urlLang : "ru";

const props = defineProps({
  values: { type: Object, required: true },
});

const checkboxes = reactive({
  suggestions: {
    stock: false,
    novelty: false,
    topSales: false,
  },
  priceControl: {
    difference: "",
  },
  power: {
    item1: false,
    item2: false,
    item3: false,
    item4: false,
    item5: false,
  },
  networkConnection: {
    item1: false,
    item2: false,
  },
  upsConnection: {
    item1: false,
    item2: false,
  },
});

const filterBody = ref(null);

const initialHeight = ref(0);
const heightContent = ref('0');
const showFilters = ref(false);
const showFilter = ref(false);

function activeFilter(event) {
  showFilters.value = !showFilters.value;
  const bodySection = event.currentTarget.nextElementSibling;

  event.currentTarget.classList.toggle("active");

  if (event.currentTarget.classList.contains("active")) {
    heightContent.value = `${bodySection.scrollHeight}px`;
  } else {
    heightContent.value = `${0}px`;
  }
}

function getInitialHeight() {
  initialHeight.value = filterBody.value.scrollHeight;
}

function showAll() {
  showFilter.value = !showFilter.value;
  filterBody.value.classList.toggle("active");

  heightContent.value = showFilter.value? `${filterBody.value.scrollHeight}px` : `${initialHeight.value}px`;
}

onMounted(() => {
  getInitialHeight();
});
</script>

<style lang="scss" scoped>
.nav-item {
  border-bottom: 1px solid #d1d1d1;

  padding: 16px 0;

  &:last-child {
    border: none;

    padding-bottom: 0;
  }

  &__header {
    @include flex-container(row, space-between, center);

    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    padding: 0 8px;

    cursor: pointer;

    transition: margin-bottom 0.2s ease-in-out;

    &.active {
      margin-bottom: 8px;

      .nav-item__arrow {
        transform: rotateZ(180deg);
      }
    }
  }

  &__title {
    @include font(16, 22, 400);
    color: #2b2b2b;
    letter-spacing: 0.02em;
  }

  &__arrow {
    font-size: 0;

    flex: 0 0 auto;

    transition: transform 0.2s ease-in-out;
  }

  &__body {
    height: v-bind(heightContent);

    transition: height 0.2s ease-in-out;

    overflow: hidden;

    &.active {
      .nav-item__checkbox:nth-child(n + 6) {
        display: block;
      }
    }
    .nav-item__checkbox {
      &:nth-child(n + 6) {
        display: none;
      }
    }
  }
}
</style>