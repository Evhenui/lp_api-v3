<template>
  <button @click.prevent class="button-serach">Найти</button>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.button-serach {
  width: max-content;

  @include font(16, 19, 400);
  color: white;

  background-color: #f36c21;
  border-radius: 6px;

  padding: 8px 16px;

  transition: background-color 0.1s ease-in-out;

  &:hover {
    background-color: #ff5b00;
  }

  &:active {
    background-color: #ac450b;
  }

  &:disabled {
    cursor: auto;

    background-color: #8a8a8a;
  }
}
</style>
      