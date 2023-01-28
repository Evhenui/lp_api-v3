<template>
  <aside class="navigation" :class="{ active: activeFilters }">
    <div class="navigation__wrapper">
      <NavOffers :values="filterOffers" />
      <FilterPriceControl />
      <NavItems 
        v-for="(item, index) in criteria.specifications" 
        :key="index" 
        :values="item"  
      />
    </div>
  </aside>
</template>

<script setup>
import NavOffers from "~/modules/products/pages/filter/components/sections/NavOffers.vue";
import FilterPriceControl from "~/modules/products/pages/filter/components/UI/FilterPriceControl.vue";
import NavItems from "~/modules/products/pages/filter/components/sections/NavItems.vue";
import { useCriteriaStore } from '~~/store/criteriaStore';

const criteriaStore = useCriteriaStore();

const criteria = criteriaStore.getCriteria;

const props = defineProps({
  activeFilters: { type: Boolean, required: false },
});

const filterPower = ref(null);

const filterOffers = ["Акции", "Новинки", "Топ продаж"];

</script>

<style lang="scss" scoped>
.navigation {
  flex: 0 0 256px;

  border: 1px solid #e9e9e9;
  border-radius: 8px;

  background-color: white;

  padding: 16px 0;

  @include bigMobile {
    border: none;
    background-color: unset;

    padding: 0 16px;
  }

  &__wrapper {
    width: 100%;

    background-color: white;

    @include bigMobile {
      border: 1px solid #e9e9e9;
      border-radius: 8px;

      padding: 16px 0;
    }
  }

  @include bigMobile {
    width: 100%;

    display: none;

    &.active {
      display: block;
    }
  }
}
</style>
          