<template>
  <div>
    <div v-if="category?.children?.length">
      <Catalog :categories="category.children" />
    </div>
    <div v-else>
      <h3>You are here: {{ breadCrumbs }}</h3>

      <CatalogFilter 
        :products="products"
        :categorySlug="category.slug"
        v-if="products?.length"
      />

      <div v-else>Товары не найдены...</div>
    </div>
  </div>
</template>

<script setup>
import { useCategoriesStore } from "~~/store/categoriesStore";
import { useCriteriaStore } from "~~/store/criteriaStore";
import Catalog from "~/modules/catalog/components/Catalog.vue";
import { getFullPath } from "~/utils/breadCrumbs";
import CatalogFilter from "~~/modules/products/pages/filter/components/CatalogFilter.vue"

const { urlLang, categorySlug, productSlug } = useRoute().params;

const lang = urlLang ? urlLang : "ru";

const slug = categorySlug || productSlug;

//Try breadcrumb logic
const breadCrumbs = getFullPath(slug).reduce(
  (accumulator, currentValue) =>
    accumulator ? accumulator + " | " + currentValue[lang] : currentValue[lang],
  ""
);
//Try breadcrumb logic

const categoryStore = useCategoriesStore();
const category = categoryStore.getCategoryBySlug(slug);

const { data: products } = await useFetch(
  `/api/products?pageSize=25&pageNum=1&categoryId=${category.id}`
);

const criteriaStore = useCriteriaStore();
await criteriaStore.fetch({ categoryId: category.id });

const criteria = criteriaStore.getCriteria;
</script>

<style lang="scss" scoped>
.filters {
  @extend %padding-wrp;
  @extend %width-main;

  @include flex-container(column, flex-start);

  gap: 24px;
  margin: auto;

  &__body {
    @include flex-container(row, flex-start, flex-start);

    gap: 8px;
  }

  &__catalog {
    @include flex-container(row, flex-start);
    flex-wrap: wrap;

    gap: 8px;
  }

  &__catalog-card {
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
}
</style>
