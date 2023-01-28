<template>

  <header class="card-header">
    <div class="card-header__wrapper">
      <div class="card-header__suggestions">
        <Suggestions 
          v-if="inactive" 
          :status="status" 
        />
      </div>
      <HeaderActions />
    </div>
  </header>
</template>

<script setup>
import Suggestions from '~~/modules/shared/components/nameplate/Suggestions.vue';
import HeaderActions from '~~/modules/shared/components/slideCard/HeaderActions.vue';

const { inactive, status } = defineProps(['inactive', 'status']);

const typeAvailability = {
  novelty: 'novelty',
  stock: 'stock',
  sales: 'top-sales',
};
</script>

<style lang="scss" scoped>
.card-header {
  &__wrapper {
    @include flex-container(row, space-between, flex-start);

    padding: 0 16px;

    @include bigMobile {
      padding: 0 8px;
    }
  }

  &__suggestions {
    @include flex-container(column, flex-start, flex-start);

    gap: 4px;
  }
}
</style>
