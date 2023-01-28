<template>
  <button 
    class="button-regular"
    :disabled="disabled"
  > 
    <slot></slot>
  </button>
</template>

<script setup>
defineProps({
  disabled: { type: Boolean, required: false },
});
</script>

<style lang="scss" scoped>
  .button-regular {
    width: max-content;

    @include font(18, 24, 400);
    letter-spacing: 0.02em;
    color: white;

    border: 1px solid #F36C21;
    border-radius: 8px;

    background-color: #F36C21;

    padding: 8px 26px;

    transition: background-color .1s ease-in-out;

    &:hover {
      border-color: #FF5B00;
      background-color: #FF5B00;
    }

    &:active {
      border-color: #AC450B;
      background-color: #AC450B;
    }

    &:disabled {
      border-color: #8A8A8A;
      background-color: #8A8A8A;

      cursor: auto;
    }
  }
</style>