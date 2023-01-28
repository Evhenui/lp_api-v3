<template>
  <li class="catalog-item">
    <div v-if="category.children" class="catalog-item__wrapper">
      <div class="catalog-item__content">

        <div v-if="category.img" class="catalog-item__image" >
          <img :src="category.img" :alt="category.name[lang]" />
        </div>
        <span class="catalog-item__title">{{ category.name[lang] }}</span>
      </div>

      <div v-if="category.children" class="item__image-arrow">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 6L15 12L9 18" stroke="#F36C21" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>

    </div>

    <NuxtLink v-else class="catalog-item__wrapper" :to="category.slug" @click="activeLink">
      <span class="catalog-item__title">{{ category.name[lang] }}</span>
    </NuxtLink>

  </li>
</template>

<script setup>
import { useHeaderStore } from "~~/store/headerStore";

const header = useHeaderStore();
const menuItems = header.getModalMenu;
const activeMenu = header.activeModal;

const { urlLang } = useRoute().params;
const lang = urlLang ? urlLang : "ru";

defineProps({
  category: { type: Object, required: true },
});

function activeLink() {
  activeMenu(false);
}
</script>

<style lang="scss" scoped>
.catalog-item {
  padding: 8px 16px;

  &__wrapper {
    width: 100%;

    @include flex-container(row, space-between, center);
  }

  &__content {
    @include flex-container(row, flex-start, center);

    gap: 16px;
  }

  &__image {
    width: 24px;
    height: 24px;
  }

  &__image-arrow {
    width: 24px;
    height: 24px;
  }

  &__title {
    @include font(16, 22, 400);
    color: #2b2b2b;
    letter-spacing: 0.02em;
  }
}
</style>
