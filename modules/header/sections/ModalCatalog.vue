<template>
  <section class="catalog" :class="{ active: menuItems.active }" ref="modal">
    <div class="catalog__wrapper">
      <ul class="catalog__main-list" ref="content">
        <li class="catalog__main-category">
          <NuxtLink
            class="catalog__item-wrapper"
            :to="{ name: 'catalog' }"
            @click="inactiveCatalog"
          >
            <div class="catalog__image">
              <SvgIconLocal name="grid-add" width="28px" height="28px" />
            </div>
            <span class="catalog__category-title">Каталог категорий</span>
          </NuxtLink>
        </li>
        <ModalCatalogItem
          v-for="item in categories"
          :key="item.id"
          :category="item"
          :parentId="item.id"
        />
      </ul>
    </div>
  </section>
</template>

<script setup>
import { useHeaderStore } from "~~/store/headerStore";
import SvgIconLocal from "~/modules/shared/components/svg/SvgIconLocal.vue";
import { useCategoriesStore } from "~~/store/categoriesStore";
import ModalCatalogItem from "./ModalCatalogItem.vue";

const categoriesStore = useCategoriesStore();

const categories = categoriesStore.getHeaderCategories;

const header = useHeaderStore();
const menuItems = header.getModalCatalog;
const activeCatalog = header.activeCatalog;

const counterMenu = ref(0);
const currentIndex = ref(null);
const currentIndexSubmenu = ref(null);

const modal = ref(null);
const content = ref(null);

let { nullState } = toRefs(props);

const props = defineProps({
  nullState: { type: Boolean, required: false },
});

const emits = defineEmits(["catalogModal", "heightContent"]);

watch(nullState, (currentState) => {
  if (currentState) {
    counterMenu.value = 0;
  }
});

function inactiveCatalog() {
  activeCatalog(false);
}

function resizeCatalog() {
  if (window.innerWidth < 1024) {
    activeCatalog(false);
  }
}

function sendEmits() {
  emits("catalogModal", modal.value);
  emits("heightContent", content.value.scrollHeight);
}

onMounted(() => {
  sendEmits();

  window.addEventListener("resize", resizeCatalog);
});
</script>

<style lang="scss" scoped>
.catalog {
  display: flex;

  opacity: 0;
  visibility: hidden;

  transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;

  &.active {
    opacity: 1;
    visibility: visible;

    @include bigMobile {
      display: none;
    }

    .catalog__blur {
      visibility: visible;
      opacity: 1;
    }
  }

  &__wrapper {
    position: relative;
    display: flex;
  }

  &__main-list {
    max-width: 334px;
    width: 100%;

    @include flex-container(column, flex-start);

    background-color: white;

    overflow: auto;

    &::-webkit-scrollbar {
      width: 0;
    }
  }

  &__main-category {
    @include flex-container(row, space-between, center);

    padding: 8px 16px;

    cursor: pointer;

    transition: background-color 0.1s ease-in-out;

    &:hover {
      background-color: #efefef;
    }
  }

  &__item-wrapper {
    width: 100%;

    @include flex-container(row, flex-start, center);

    gap: 16px;
  }

  &__category-title {
    max-width: 270px;
    width: 100%;

    @include font(14, 22, 400);
    color: var(--color-primary-base);
    letter-spacing: 0.02em;
  }
}
</style>
