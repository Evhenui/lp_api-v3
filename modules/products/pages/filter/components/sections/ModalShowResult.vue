<template>
  <div class="show-result" :class="{active: active}">
    <button class="show-result__cancel">Отмена</button>
    <button class="show-result__show">Показать товары</button>
  </div>
</template>

<script setup>
const props = defineProps({
 active: { type: Boolean, required: false}
});
</script>

<style lang="scss" scoped>
.show-result {
  width: 100%;

  display: none;

  position: sticky;
  bottom: 0;
  z-index: 500;

  background-color: white;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.2);

  padding: 16px 8px;

  @include bigMobile {
    &.active {
      @include flex-container(row, center, center);

      gap: 16px;
    }
  }

  &__cancel {
    width: max-content;

    @include font(18, 24, 400);
    letter-spacing: 0.02em;
    color: #F36C21;

    border: 1px solid #F36C21;
    border-radius: 8px;

    padding: 8px 26px;
  }

  &__show {
    width: max-content;

    @include font(18, 24, 400);
    letter-spacing: 0.02em;
    color: white;

    border: 1px solid #F36C21;
    border-radius: 8px;
    
    background-color: #F36C21;

    padding: 8px 26px;
  }
}
</style>
