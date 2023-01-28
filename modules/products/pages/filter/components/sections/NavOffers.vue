<template>
  <div class="nav-item-title">
    <div class="nav-item-title__body">
      <CheckBox
        v-for="(item, index) in values"
        :key="index"
        >{{ item }}
      </CheckBox>
    </div>
  </div>
</template>

<script setup>
import CheckBox from "~/modules/shared/components/inputs/CheckBox.vue";

const props = defineProps({
  values: { type: Array, required: true },
});
</script>

<style lang="scss" scoped>
.nav-item-title {
  border-bottom: 1px solid #d1d1d1;

  padding: 0 0 16px 0;

  &__header {
    @include flex-container(row, space-between, center);

    padding: 0 8px;

    cursor: pointer;

    transition: margin-bottom 0.2s ease-in-out;
  }

  &__title {
    @include font(16, 22, 400);
    color: #2b2b2b;
    letter-spacing: 0.02em;
  }

  &__body {
    height: 100%;

    transition: height 0.2s ease-in-out;

    overflow: hidden;
  }
}
</style>