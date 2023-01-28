<template>
  <div class="price">
    <p class="price__total">{{ price.price }}</p>
    <p class="price__discount" v-if="price.discount">{{ price.discount }}</p>
  </div>
</template>

<script setup>
defineProps({
  price: { type: Object, required: true },
});
</script>

<style lang="scss" scoped>
.price {
  @include flex-container(row, flex-start, center);

  gap: 16px;

  &__total {
    @include font(24, 28, 500);
    color: #FF0000;
  }

  &__discount {
    @include font(16, 20, 400);
    color: #2B2B2B;
    text-decoration-line: line-through;
  }
}

</style>