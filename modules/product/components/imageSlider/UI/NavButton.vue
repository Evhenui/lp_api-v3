<template>
    <button class="button-nav" :class="{next: buttonNext}">
      <svg class="button-nav__arrow" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M30 12L18 24L30 36" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
</template>

<script setup>
defineProps({
  buttonNext: { type: Boolean, required: false },
});
</script>

<style lang="scss" scoped>
.button-nav {
  @include flex-container(column, center, center);

  background-color: #E9E9E9;

  border-radius: 8px;

  &.next {
    .button-nav__arrow {
      transform: rotateZ(180deg);
    }
  }

  &:active {
    background-color: #8A8A8A;
  }
}
</style>