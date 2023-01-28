<template>
  <div class="catalog-item" :class="[{ back: back }, { submenu: submenu }]">
    <div class="catalog-item__main-wrapper">
      <div class="catalog-item__wrapper">
        <div v-if="!submenu" class="catalog-item__image">
          <!-- <img v-if="!back" :src="`/_nuxt/public/icons/${img}`" :alt="title" />
          <img
            v-else
            class="catalog-item__image-back"
            src="/icons/return-catalog.svg"
            alt="back"
          /> -->
        </div>
        <span v-if="back" class="catalog-item__title">Назад</span>
        <span v-else class="catalog-item__title">{{ title }}</span>
      </div>
      <div class="catalog-item__image-arrow" v-if="arrow">
        <!-- <img src="/icons/nav-arrow-right.svg" alt="arrow" /> -->
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  back: { type: Boolean, required: false, default: false },
  img: { type: String, required: false },
  title: { type: String, required: false },
  arrow: { type: Boolean, required: false, default: false },
  submenu: { type: Boolean, required: false },
});
</script>

<style lang="scss">
.catalog-item {
  min-height: 48px;

  @include flex-container(column, center, flex-start);

  &.back {
    .catalog-item__main-wrapper {
      padding: 16px;
    }
  }

  &.submenu {
    .catalog-item__image {
      display: none;
    }
  }

  &__main-wrapper {
    width: 100%;

    @include flex-container(row, space-between, center);

    padding: 0 16px;

    gap: 4px;
  }

  &__wrapper {
    @include flex-container(row, flex-start, center);

    gap: 24px;
  }

  &__image {
    flex: 1 0 auto;
  }

  &__title {
    max-width: 270px;
    width: 100%;

    @include font(16, 22, 400);
    color: #2b2b2b;
    letter-spacing: 0.02em;
  }
}
</style>