<template>
  <button
    @click="activeModal"
    class="button-burger"
    :class="{ active: menuItems.active }"
  >
    <svg
      class="button-burger__close-image"
      width="24"
      height="19"
      viewBox="0 0 24 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 17.5C0 16.9477 0.447715 16.5 1 16.5H23C23.5523 16.5 24 16.9477 24 17.5C24 18.0523 23.5523 18.5 23 18.5H1C0.447715 18.5 0 18.0523 0 17.5Z"
        fill="white"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 9.5C0 8.94772 0.447715 8.5 1 8.5H23C23.5523 8.5 24 8.94772 24 9.5C24 10.0523 23.5523 10.5 23 10.5H1C0.447715 10.5 0 10.0523 0 9.5Z"
        fill="white"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 1.5C0 0.947715 0.447715 0.5 1 0.5H23C23.5523 0.5 24 0.947715 24 1.5C24 2.05228 23.5523 2.5 23 2.5H1C0.447715 2.5 0 2.05228 0 1.5Z"
        fill="white"
      />
    </svg>
    <svg
      class="button-burger__open-image"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.00972 22.9902L15.9999 16M22.9901 9.00981L15.9999 16M15.9999 16L9.00972 9.00981M15.9999 16L22.9901 22.9902"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </button>
</template>

<script setup>
import { useHeaderStore } from '~~/store/headerStore';

const header = useHeaderStore();
const menuItems = header.getModalMenu;
const activeCatalog = header.activeCatalog;
const activeMenu = header.activeModal;

const active = ref(false);

function activeModal() {
  activeMenu(true);
  activeCatalog(false);
  document.body.style.overflow = 'hidden';
}
</script>

<style lang="scss" scoped>
.button-burger {
  width: 40px;
  height: 40px;

  @include flex-container(column, center, center);
  flex: 0 0 auto;

  border: 1px solid #8a8a8a;
  border-radius: 6px;

  @include bigMobile {
    border: none;
  }

  &.active {
    .button-burger__open-image {
      display: block;
    }

    .button-burger__close-image {
      display: none;
    }
  }

  &__open-image {
    display: none;
  }
}
</style>
