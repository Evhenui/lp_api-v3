<template>
  <div class="type-card" :class="typeCard.type">
    <span class="type-card__title">{{ typeCard.name }}</span>
  </div>
</template>

<script setup>
defineProps({
  typeCard: { type: Object, required: true},
});
</script>

<style lang="scss" scoped>

.type-card {
  min-width: 86px;
  width: max-content;

  @include flex-container(row, center, center);
  
  border-radius: 6px;

  padding: 4px 8px;

  &.article {
    background-color: #009B3E;
  }

  &.review {
    background-color: #FFB305;
  }

  &.news {
    background-color: #7B61FF;
  }

  &__title {
    @include font(16, 22);
    color: white;
    letter-spacing: 0.02em;
  }
}

</style>