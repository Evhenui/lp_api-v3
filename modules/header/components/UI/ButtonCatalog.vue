<template>
  <button class="button-catalog" @click.prevent="showCatalog" ref="button">
    <div class="button-catalog__image">
      <svg
        width="21"
        height="21"
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.83813 2.41602H1V9.25414H7.83813V2.41602Z"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M18.5838 13.1616H11.7456V19.9998H18.5838V13.1616Z"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M7.83813 13.1616H1V19.9998H7.83813V13.1616Z"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M15.1634 0.999676L10.3281 5.83496L15.1634 10.6702L19.9987 5.83496L15.1634 0.999676Z"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <span class="button-catalog__title"
      >Каталог товаров<!--<NuxtLink to="/catalog">Каталог товаров</NuxtLink>--></span
    >
  </button>
</template>

<script setup>
import { useHeaderStore } from '~~/store/headerStore';

const header = useHeaderStore();
const modalCatalog = header.modalCatalog;
const activeCatalog = header.activeCatalog;

const button = ref(null);

const emits = defineEmits(['buttonCatalog']);

function showCatalog() {
  if (modalCatalog.active) {
    activeCatalog(false);
  } else {
    activeCatalog(true);
  }
}

onMounted(() => {
  emits('buttonCatalog', button.value);
});
</script>

<style lang="scss" scoped>
.button-catalog {
  width: max-content;

  @include flex-container(row, flex-start, center);

  background-color: #f36c21;
  border-radius: 6px;

  padding: 8px;
  gap: 8px;

  &__image {
    font-size: 0;
  }

  &__title {
    @include font(16, 19, 700);
    color: white;
    white-space: nowrap;
  }
}
</style>
