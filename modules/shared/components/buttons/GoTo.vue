<template>
  <a href="#" class="go-to">
    <slot></slot>
  </a>
</template>

<script setup></script>

<style lang="scss" scoped>
.go-to {
  position: relative;

  @include font(18, 24);
  letter-spacing: 0.02em;
  color: #f36c21;

  @include bigMobile {
    @include font(16, 24);
    align-self: flex-start;
  }

  &:after {
    content: "";

    width: 0;
    height: 1px;

    position: absolute;
    left: 0;
    bottom: 0;

    background-color: #f36c21;

    transition: width 0.2s ease-in-out;
  }

  &:hover {
    &:after {
      width: 100%;
    }
  }
}
</style>
