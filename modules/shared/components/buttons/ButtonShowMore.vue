<template>
  <button class="button-more" :disabled="disabled">
    <div class="button-more__icon">
      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.3883 13.5C21.6645 18.3113 17.513 22 12.5 22C6.97715 22 2.5 17.5228 2.5 12C2.5 6.47715 6.97715 2 12.5 2C16.6006 2 20.1248 4.46819 21.6679 8" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M17.5 8H21.9C22.2314 8 22.5 7.73137 22.5 7.4V3" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <span class="button-more__title">Показать ещё</span>
  </button>
</template>

<script setup>
defineProps({
  disabled: { type: Boolean, required: false},
})
</script>

<style lang="scss" scoped>
.button-more {
  width: max-content;

  @include flex-container(row, center, center);

  background-color: white;

  border: 1px solid #D1D1D1;
  border-radius: 36px;

  padding: 8px 38px;
  gap: 16px;

  transition: box-shadow .2s ease-in-out;
  transition: background-color .1s ease-in-out;

  &:hover {
    border-color: white;
    box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);
  }

  &:active {
    border-color: white;
    background-color: #F3F3F3;
    box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  }

  &:disabled {
    background-color: #F3F3F3;
    border-color: #F3F3F3;

    cursor: auto;

    &:hover {
      
      box-shadow: 0 0 0 rgba(0, 0, 0, 0);
    }

    .button-more__icon {
      svg > path {
        stroke: #8A8A8A;
      }
    }

    .button-more__title {
      color: #8A8A8A;
    }
  }

  &__icon {
    font-size: 0;
  }

  &__title {
    @include font(20, 28, 400);
    letter-spacing: 0.02em;
    color: #2b2b2b;
  }
}
</style>
      