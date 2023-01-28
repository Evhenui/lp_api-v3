<template>
  <div class="content__block">
    <div class="content__title-w" @click="dropDownProd">
      <h4 class="content__title">
        {{ title }}
      </h4>
      <div class="content__title-mob-arrow">
        <img
          class="content__title-mob-arrow-img"
          src="@/assets/icons/nav-arrow-down.svg"
          alt=""
          :class="{ active: isActive }"
        />
      </div>
    </div>
    <div
      class="content__block-list-w"
      :class="{ active: isActive }"
      :style="{ '--list-height': listHeight + 'px' }"
    >
      <ul class="content__block-list" :class="{ thin: thin }" ref="listOfItem">
        <li
          class="content__block-list-item"
          v-for="item of list"
          :key="item.id"
          ref="ProdItem"
        >
        <NuxtLink :to="{ name: item.link }" class="content__block-list-link">{{ _T(item.title) }}</NuxtLink>
          <!-- <a class="content__block-list-link" href="#">{{ _T(item.title) }}</a> -->
        </li>
      </ul>
    </div>
    <slot></slot>
  </div>
</template>

<script setup>
const { title, list, thin } = defineProps(['title', 'list', 'thin']);
const listOfItem = ref(null);

let isActive = ref(false);
let listHeight = ref(0);

const dropDownProd = () => {
  if (window.innerWidth <= 680) {
    if (listHeight.value === 0) {
      listHeight.value = listOfItem.value.scrollHeight;
    } else listHeight.value = 0;

    isActive.value = !isActive.value;
  }
};
</script>

<style lang="scss" scoped>
.content {
  &__block {
    @include flex-container(column, stretch);
    gap: 24px;

    @include mobile {
      border-bottom: 1px solid var(--color-primary-base);
    }
  }

  &__title-w {
    @include flex-container(row, space-between, center);
  }

  &__title {
    position: relative;
    @include font(20, 30, 600);
    text-transform: uppercase;
    color: var(--color-primary-base);
  }

  &__title-mob-arrow {
    display: none;

    @include mobile {
      display: block;
    }
  }

  &__title-mob-arrow-img {
    transition: transform 0.5s ease;

    &.active {
      transform: rotate(180deg);
    }
  }

  &__block-list-w {
    --list-gap: 8px;
    --list-height: 0;

    max-width: 416px;
    width: 100%;

    @include flex-container(row, flex-start);
    gap: var(--list-gap);
    flex-wrap: wrap;

    overflow: hidden;

    transition: height 0.5s ease;

    @include bigMobile {
      flex-direction: column;
    }

    @include mobile {
      max-width: none;
      height: var(--list-height);
    }

    &.active {
      @include mobile {
        height: var(--list-height);
      }
    }
  }

  &__block-list {
    max-width: 416px;
    width: 100%;

    @include flex-container(row, flex-start);
    gap: 8px;
    flex-wrap: wrap;

    overflow: hidden;

    &.thin {
      max-height: 200px;

      @include mobile {
        max-height: none;
      }
    }

    @include mobile {
      max-height: none;
      max-width: none;

      flex-direction: column;
      flex-wrap: nowrap;

      padding-bottom: 16px;

      overflow: visible;
    }
  }

  &__block-list-item {
    width: 100%;
    max-width: 200px;

    @include mobile {
      max-width: none;
    }
  }

  &__block-list-link {
    width: 100%;
    max-width: 200px;

    @include font;
    letter-spacing: 0.02em;
    color: white;

    transition: 0.2s ease-in-out;

    @include mobile {
      max-width: none;
    }

    &:hover {
      color: var(--color-primary-dark);
    }
  }
}
</style>
