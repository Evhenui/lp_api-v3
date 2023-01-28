<template>
  <li @mouseenter="visible = true" @mouseleave="visible = false">
    <NuxtLink class="item" :to="category.slug" @click="inactiveCatalog">
      <div class="item__wrapper">
        <div class="item__image" v-if="category.img">
          <!-- <SvgIconRemote
          v-if="category.img"
          :url="category.img"
          width="28px"
          height="28px"
        /> -->
          <img :src="category.img" :alt="category.name[lang]" />
        </div>
        <span class="item__title">{{ category.name[lang] }}</span>
      </div>
      <div v-if="category.children" class="item__image-arrow">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 6L15 12L9 18"
            stroke="#F36C21"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </NuxtLink>

    <template v-if="category.children">
      <ul class="item__new-list" v-show="visible">
        <ModalCatalogItem
          v-for="item in category.children"
          :key="item.id"
          :category="item"
          :parentId="item.id"
        />
      </ul>
    </template>
  </li>
</template>

<script setup>
import SvgIconRemote from "~/modules/shared/components/svg/SvgIconRemote.vue";
import { useHeaderStore } from "~~/store/headerStore";

const header = useHeaderStore();
const menuItems = header.getModalMenu;
const activeCatalog = header.activeCatalog;

function inactiveCatalog() {
  activeCatalog(false);
}

const { urlLang } = useRoute().params;
const { category } = defineProps(["category"]);
const visible = ref(false);

const lang = urlLang ? urlLang : "ru";
</script>

<style lang="scss" scoped>
.item {
  @include flex-container(row, space-between, center);

  padding: 8px 16px;

  cursor: pointer;

  transition: background-color 0.1s ease-in-out;

  &:hover {
    background-color: #efefef;
  }

  &__new-list {
    max-width: 334px;
    width: 100%;
    height: 100%;

    position: absolute;
    left: 100%;
    top: 0px;

    background-color: white;
    box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.25);
  }

  &__wrapper {
    @include flex-container(row, flex-start, center);

    gap: 16px;
  }

  &__image {
    width: 28px;
    height: 28px;
  }

  &__image-arrow {
    width: 24px;
    height: 24px;
  }

  &__title {
    @include font(14, 22, 400);
    color: #2b2b2b;
    letter-spacing: 0.02em;
  }
}
</style>
