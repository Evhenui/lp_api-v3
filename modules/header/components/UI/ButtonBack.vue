<template>
  <button class="button-back">
    <div  class="button-back__image">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 12H8M8 12L11.5 15.5M8 12L11.5 8.5" stroke="#F36C21" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#F36C21" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <span class="button-back__title">Назад</span>
  </button>
</template>

<script setup>
defineProps({

});
</script>

<style lang="scss" scoped>
.button-back {
  width: 100%;
  min-height: 48px;

  @include flex-container(row, flex-start, center);

  border-bottom: 1px solid #d1d1d1;

  gap: 24px;
  padding: 0 16px;

  &__image {
    font-size: 0;
  }

  &__title {
    @include font(16, 22, 400);
    color: #2b2b2b;
    letter-spacing: 0.02em;
  }
}
</style>