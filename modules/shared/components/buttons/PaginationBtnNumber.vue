<template>
  <button class="pagination-button">
    <span class="pagination-button__number">
      <slot></slot>
    </span>
  </button>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.pagination-button {
  width: 48px;
  height: 48px;

  @include flex-container(column, center, center);

  border-radius: 50%;

  background-color: white;
  border: 1px solid #D1D1D1;

  transition: box-shadow .1s ease-in-out;

  @include bigMobile {
    width: 36px;
    height: 36px;
  }

  &:hover {
    border-color: white;
    box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);
  }

  &:active {
    background-color: #F3F3F3;
    box-shadow: none;
  }

  &.active {
    border-color: #F3F3F3;
    background-color: #F3F3F3;

    &:hover {
      border-color: #F3F3F3;
      background-color: #F3F3F3;
      box-shadow: none;
    }
  }

  &__number {
    @include font(20, 30, 600);
    color: #2B2B2B;
    text-transform: uppercase;
  }
}

</style>