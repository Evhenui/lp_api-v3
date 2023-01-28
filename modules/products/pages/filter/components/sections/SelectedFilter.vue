<template>
  <section class="selected-filters">
    <h3 class="selected-filters__title">Выбранные фильтры:</h3>
    <ul class="selected-filters__filters">
      <FilterItem 
        v-for="(item, index) in items"
        :key="index"
      >{{ item.name }}
      </FilterItem>
    </ul>
  </section>
</template>
    
<script setup>
import FilterItem from "~/modules/products/pages/filter/components/UI/FilterItem.vue"

const props = defineProps({
  items: { type: Array, required: true}
});

const selected = ref(null);

</script>
    
<style lang="scss" scoped>
.selected-filters {
  @include flex-container(column, center, left);

  gap: 16px;

  @include bigMobile {
    gap: 24px;
  }

  &__title {
    @include font(16, 22, 400);
    letter-spacing: 0.02em;
    color: #2b2b2b;

    @include bigMobile {
      display: none;
    }
  }

  &__mobile-title {
    display: none;

    @include bigMobile {
      width: 100%;

      display: flex;
    }
  }

  &__button-filter {
    display: none;

    @include bigMobile {
      display: flex;
    }
  }

  &__filters {
    @include flex-container(row, flex-start, center);
    flex-wrap: wrap;

    gap: 16px;

    @include bigMobile {
    }
  }
  
}
</style>
        