<template>
  <div ref="foo" class="search">
    <form action="" class="search__form">
      <div class="search__image">
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.375 17.0625C13.5171 17.0625 16.875 13.7046 16.875 9.5625C16.875 5.42036 13.5171 2.0625 9.375 2.0625C5.23286 2.0625 1.875 5.42036 1.875 9.5625C1.875 13.7046 5.23286 17.0625 9.375 17.0625Z"
            stroke="#5C5C5C"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M18.75 18.9375L14.6719 14.8594"
            stroke="#5C5C5C"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <input
        type="text"
        class="search__input"
        placeholder="Поиск товаров"
        v-model="inputValue.value"
        @focus="showResult = true"
        @blur="showResult = false"
      />
      <ButtonSearch class="search__button" />
    </form>
    <!--  <div
      class="search__result"
      :class="{ search: inputValue.value.length }"
      v-if="showResult"
    >
      <div class="search__category">
        <h1 class="search__title">Категории</h1>
        <ul class="search__menu-list">
          <li
            class="search__menu-item"
            v-for="(item, index) in category"
            :key="index"
          >
            <div class="search__folder">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 11V4.6C2 4.26863 2.26863 4 2.6 4H8.77805C8.92127 4 9.05977 4.05124 9.16852 4.14445L12.3315 6.85555C12.4402 6.94876 12.5787 7 12.722 7H21.4C21.7314 7 22 7.26863 22 7.6V11M2 11V19.4C2 19.7314 2.26863 20 2.6 20H21.4C21.7314 20 22 19.7314 22 19.4V11M2 11H22"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <a href="#" class="search__subtitle">{{ item }}</a>
          </li>
        </ul>
      </div>
      <div class="search__popular-goods">
        <h1 class="search__title">Полулярные товары</h1>
        <ul class="search__selected-list">
          <li
            class="search__selected-item"
            v-for="(item, index) in popularItems"
            :key="index"
          >
            <div class="search__image-item">
              <img src="/img/item-result-search.png" alt="item name" />
            </div>
            <div class="search__selected-info">
              <h2 class="search__subtitle">{{ item.itemName }}</h2>
              <p class="search__code">{{ item.code }}</p>
              <h3 class="search__price">{{ item.price }}</h3>
            </div>
          </li>
        </ul>
      </div>
      <div class="search__result-goods">
        <h1 class="search__title">По Вашему запросу</h1>
        <ul class="search__selected-list">
          <li
            class="search__selected-item"
            v-for="(item, index) in resultItems"
            :key="index"
          >
            <div class="search__image-item">
              <img src="/img/item-result-search.png" alt="item name" />
            </div>
            <div class="search__selected-info">
              <h2 class="search__subtitle">{{ item.itemName }}</h2>
              <p class="search__code">{{ item.code }}</p>
              <h3 class="search__price">{{ item.price }}</h3>
            </div>
          </li>
        </ul>
      </div>
    </div> -->
  </div>
</template>

<script setup>
import ButtonSearch from './ButtonSearch.vue';
import { useHeaderStore } from '~~/store/headerStore';

defineProps(['value']);

const header = useHeaderStore();
const resultSearch = header.getResult;
const category = resultSearch.categoryMenu;
const resultItems = resultSearch.resultItems;
const popularItems = resultSearch.popularItems;
const inputValue = header.getInputSerach;

const showResult = ref(false);
let activeEnter = ref(false);
</script>

<style lang="scss" scoped>
.search {
  max-width: 700px;
  width: 100%;

  position: relative;

  &__form {
    position: relative;

    @include flex-container(row, center, center);
  }

  &__image {
    position: absolute;
    left: 8px;

    font-size: 0;
  }

  &__input {
    width: 100%;

    @include font(16, 22, 400);
    color: #8a8a8a;
    letter-spacing: 0.02em;

    background-color: white;

    border-radius: 6px;

    padding: 8px 80px 8px 40px;

    @include bigMobile {
      padding: 8px 8px 8px 40px;
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;

      margin: 0;
    }

    &::placeholder {
      @include font(16, 22, 400);
      color: black;

      @include bigMobile {
        @include font(16, 19, 400);
      }
    }

    &:focus {
      color: rgba(0, 0, 0, 0.87);
    }
  }

  &__button {
    height: 100%;

    position: absolute;
    right: 0;

    @include bigMobile {
      display: none;
    }
  }

  &__result {
    width: 100%;

    position: absolute;

    top: 51px;

    @include flex-container(row, flex-start);

    background-color: white;

    border-radius: 0px 0px 8px 8px;

    &.search {
      .search__popular-goods {
        display: none;
      }

      .search__result-goods {
        display: block;
      }
    }
  }

  &__category {
    max-width: 300px;
    width: 100%;

    border-right: 1px solid #d1d1d1;

    padding: 16px;
  }

  &__title {
    @include font(16, 22, 600);
    letter-spacing: 0.02em;
    color: #2b2b2b;

    margin-bottom: 24px;
  }

  &__menu-list {
    @include flex-container(column, flex-start);

    gap: 16px;
  }

  &__menu-item {
    @include flex-container(row, flex-start, center);

    gap: 8px;
  }

  &__folder {
    font-size: 0;
  }

  &__subtitle {
    @include font(16, 22, 400);
    letter-spacing: 0.02em;
    color: #2b2b2b;
  }

  &__popular-goods,
  &__result-goods {
    padding: 16px 8px 0 8px;
  }

  &__selected-list {
  }

  &__selected-item {
    @include flex-container(row, flex-start);

    border-bottom: 1px solid #d1d1d1;

    gap: 8px;
    padding-bottom: 8px;

    &:last-child {
      border: none;
    }
  }

  &__image-item {
    max-width: 60px;
    width: 100%;
  }

  &__selected-info {
    @include flex-container(column, flex-start);

    gap: 4px;
  }

  &__code {
    @include font(12, 16, 400);
    letter-spacing: 0.02em;
    color: #2b2b2b;
  }

  &__price {
    @include font(16, 22, 600);
    letter-spacing: 0.02em;
    color: #f36c21;
  }

  &__result-goods {
    display: none;
  }
}
</style>
