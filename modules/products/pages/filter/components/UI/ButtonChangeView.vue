<template>
  <button class="change-card" @click="active = !active">
    <div class="change-card__image">
      <svg
        v-if="active"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.666 8L26.666 8"
          stroke="#F36C21"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M5.33398 8.01333L5.34732 7.99852"
          stroke="#F36C21"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M5.33398 16.0133L5.34732 15.9985"
          stroke="#F36C21"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M5.33398 24.0133L5.34732 23.9985"
          stroke="#F36C21"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M10.666 16L26.666 16"
          stroke="#F36C21"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M10.666 24L26.666 24"
          stroke="#F36C21"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <svg
        v-else
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.666 27.4003V19.267C18.666 18.9356 18.9346 18.667 19.266 18.667H27.3993C27.7307 18.667 27.9993 18.9356 27.9993 19.267V27.4003C27.9993 27.7317 27.7307 28.0003 27.3994 28.0003H19.266C18.9346 28.0003 18.666 27.7317 18.666 27.4003Z"
          stroke="#F36C21"
          stroke-width="1.5"
        />
        <path
          d="M4 27.4003V19.267C4 18.9356 4.26863 18.667 4.6 18.667H12.7333C13.0647 18.667 13.3333 18.9356 13.3333 19.267V27.4003C13.3333 27.7317 13.0647 28.0003 12.7333 28.0003H4.6C4.26863 28.0003 4 27.7317 4 27.4003Z"
          stroke="#F36C21"
          stroke-width="1.5"
        />
        <path
          d="M18.666 12.7333V4.6C18.666 4.26863 18.9346 4 19.266 4H27.3993C27.7307 4 27.9993 4.26863 27.9993 4.6V12.7333C27.9993 13.0647 27.7307 13.3333 27.3994 13.3333H19.266C18.9346 13.3333 18.666 13.0647 18.666 12.7333Z"
          stroke="#F36C21"
          stroke-width="1.5"
        />
        <path
          d="M4 12.7333V4.6C4 4.26863 4.26863 4 4.6 4H12.7333C13.0647 4 13.3333 4.26863 13.3333 4.6V12.7333C13.3333 13.0647 13.0647 13.3333 12.7333 13.3333H4.6C4.26863 13.3333 4 13.0647 4 12.7333Z"
          stroke="#F36C21"
          stroke-width="1.5"
        />
      </svg>
    </div>
  </button>
</template>

<script setup>
const active = ref(false);
</script>

<style lang="scss" scoped>
.change-card {
  &__image {
    font-size: 0;
  }
}
</style>