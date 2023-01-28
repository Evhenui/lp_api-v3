<template>
  <a href="#" class="menu-item">
    <div class="menu-item__image">
      <slot name="image"></slot>
    </div>
    <div class="menu-item__titles">
      <slot name="title"></slot>
    </div>
  </a>
</template>

<script setup></script>

<style lang="scss">
.menu-item {
  @include flex-container(row, flex-start, center);

  gap: 32px;
  padding-block: 16px;

  &:hover .menu-item__titles > span {
    color: var(--color-primary-base);
  }

  &__image {
    font-size: 0;
  }

  &__titles {
    @include flex-container(column, flex-start, center);
  }
}
</style>
