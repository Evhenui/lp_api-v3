<template>
  <div class="nav-item-price">
    <div 
      @click="activeFilter" 
      class="nav-item-price__header" 
    >
      <h1 class="nav-item-price__title">Цена</h1>
      <div class="nav-item-price__arrow">
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
      class="nav-item-price__body"
    >
    <div class="price-control">
    <div class="price-control__counters">
      <div class="price-control__inputs">
        <label class="price-control__min-price">
          <input
            type="text"
            maxlength="5"
            name="min-price"
            v-model="minPrice"
            class="price-control__number"
          />
        </label>
        <span class="price-control__line"></span>
        <label class="price-control__max-price">
          <input
            type="text"
            maxlength="5"
            name="max-price"
            v-model="maxPrice"
            class="price-control__number"
          />
        </label>
      </div>
      <ButtonRegular class="price-control__button">OK</ButtonRegular>
    </div>

    <div class="price-control__range-slider">
      <div class="price-control__progress"></div>
      <input
        type="range"
        :min="`${criteria.priceRange.min}`"
        :max="`${criteria.priceRange.max}`"
        step="1"
        v-model.number="minPrice"
        @change="setRangeSlider"
      />
      <input
        type="range"
        :min="`${criteria.priceRange.min}`"
        :max="`${criteria.priceRange.max}`"
        step="1"
        v-model.number="maxPrice"
        @change="setRangeSlider"
      />
    </div>
  </div>

    </div>
  </div>
</template>
    
<script setup>
import ButtonRegular from "~/modules/shared/components/buttons/ButtonRegular.vue";
import { useCriteriaStore } from '~~/store/criteriaStore';

const criteriaStore = useCriteriaStore();
const criteria = criteriaStore.getCriteria;

const minPrice = ref(0);
const maxPrice = ref(0);
const temp = ref(0);
const positionLeft = ref(0);
const positionRight = ref(0);

const filterBody = ref(null);

const initialHeight = ref(0);
const heightContent = ref('0');
const showFilters = ref(false);
const showFilter = ref(false);

function getInitialValues() {
  minPrice.value = criteria.priceRange.min;
  maxPrice.value = criteria.priceRange.max;
}

function setRangeSlider() {
  if (minPrice.value > maxPrice.value) {
    temp.value = maxPrice.value;
    maxPrice.value = minPrice.value;
    minPrice.value = temp.value;
  }
}

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

watch(minPrice,(val)=> {
  positionLeft.value = `${(val - criteria.priceRange.min) / (criteria.priceRange.max - criteria.priceRange.min) * 100}%`;
})

watch(maxPrice,(val)=> {
  positionRight.value = `${100 - (val - criteria.priceRange.min) / (criteria.priceRange.max - criteria.priceRange.min) * 100}%`;
})

onMounted(() => {
  getInitialValues();
  getInitialHeight();
})

</script>
    
<style lang="scss" scoped>
.price-control {
  @include flex-container(column, flex-start);

  gap: 26px;
  padding: 0 8px;

  &__counters {
    @include flex-container(row, space-between);

    gap: 8px;
  }

  &__inputs {
    @include flex-container(row, flex-start, center);

    gap: 8px;
  }

  &__min-price,
  &__max-price {
    width: max-content;

    border: 1px solid #8a8a8a;
    border-radius: 4px;

    padding: 6px 8px;
  }

  &__number {
    width: 45px;

    @include font(12, 18, 400);
    letter-spacing: 0.02em;
    color: #2b2b2b;
  }

  &__line {
    width: 12px;
    height: 1px;

    background-color: #2b2b2b;
  }

  &__button {
    @include font(12, 15, 400);
    letter-spacing: 0.02em;

      @include bigMobile {
        width: 50%;
      }

      @include mobile {
        width: 100%;
      }
  }

  &__range-slider {
    width: 100%;

    position: relative;
  }

  &__range-slider svg,
  &__range-slider input[type="range"] {
    position: absolute;
    left: -2px;
    bottom: 0;
  }

  &__progress {
    height: 3px;

    position: absolute;
    top: -5px;
    left: v-bind(positionLeft);
    right: v-bind(positionRight);
    z-index: 2;

    border-radius: 5px;

    background-color: #f36c21;
  }

  input[type="range"]::-webkit-slider-thumb {
    position: relative;
    top: 2px;
    z-index: 2;

    margin-top: -7px;
  }

  input[type="range"] {
    width: 100%;

    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  input[type="range"]::-webkit-slider-runnable-track {
    height: 3px;

    border-radius: 5px;

    background-color: #d1d1d1;
  }

  input[type="range"]::-webkit-slider-thumb {
    width: 16px;
    height: 16px;

    border-radius: 50%;

    background-color: #f36c21;

    margin-top: -8px;

    cursor: pointer;

    -webkit-appearance: none;
  }
}

.nav-item-price {
  border-bottom: 1px solid #d1d1d1;

  padding: 16px 0;

  &__header {
    @include flex-container(row, space-between, center);

    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    padding: 0 8px;

    cursor: pointer;

    transition: margin-bottom 0.2s ease-in-out;

    &.active {
      margin-bottom: 16px;

      .nav-item-price__arrow {
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
  }
}
</style>
            