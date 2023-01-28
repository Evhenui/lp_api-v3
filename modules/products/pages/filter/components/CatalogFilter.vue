<template>
  <section class="filter" :class="{ active: openFilters }">
    <div class="filter__wrapper">
      <CatalogFilterSettings
        @getChangeView="getChangeView"
        @getShowFilters="getShowFilters"
      />
      <section class="filter__body">
        <NavigationBar :activeFilters="openFilters" />
        <ProductsCatalog
          class="filter__catalog-list"
          :changeView="changeViewCard" 
          :products="products"
          :categorySlug="categorySlug" 
        />
        <ModalShowResult :active="openFilters" />
      </section>
    </div>
  </section>
</template>

<script setup>
import CatalogFilterSettings from "~/modules/products/pages/filter/components/CatalogFilterSettings.vue";
import NavigationBar from "~/modules/products/pages/filter/components/sections/NavigationBar.vue";
import ProductsCatalog from "~/modules/products/pages/filter/components/ProductsCatalog.vue";
import ModalShowResult from "~/modules/products/pages/filter/components/sections/ModalShowResult.vue";

const props = defineProps({
  products: { type: Object, required: true },
  categorySlug: { type: String, required: false },
});

const activeFilters = ref(false);
const heightFilters = ref(0);
const mobileFilters = ref(false);

const openFilters = ref(false);
const changeViewCard = ref(false);

function getChangeView(value) {
  changeViewCard.value = value;
}

function getShowFilters(value) {
  openFilters.value = value;
}
</script>

<style lang="scss" scoped>
.filter {
  @extend %padding-wrp;

  &.active {
    @include bigMobile {
      .filter__catalog-list {
        @include bigMobile {
          display: none;
        }
      }

      .filter__wrapper {
        @include bigMobile {
          padding: 0;
        }
      }

      .filter__body {
        @include bigMobile {
          gap: 36px;
        }
      }
    }
  }

  @include bigMobile {
    padding: 0;
  }

  &__wrapper {
    @extend %width-main;

    @include flex-container(column, flex-start, flex-start);

    margin: 0 auto;
    padding-bottom: 136px;
    gap: 24px;
  }

  &__body {
    width: 100%;

    @include flex-container(row, flex-start, flex-start);

    gap: 8px;

    @include bigMobile {
      @include flex-container(column, flex-start, flex-start);
    }
  }

  &__catalog-list {
    width: 100%;
  }
}
</style>
