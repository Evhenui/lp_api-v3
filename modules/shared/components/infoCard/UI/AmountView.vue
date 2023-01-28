<template>
 <div class="amount-view" :class="{large: large}">
  <div class="amount-view__image">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path class="amount-view__image-state" d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path class="amount-view__image-state" d="M21 12C19.1114 14.991 15.7183 18 12 18C8.2817 18 4.88856 14.991 3 12C5.29855 9.15825 7.99163 6 12 6C16.0084 6 18.7015 9.1582 21 12Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
  <span class="amount-view__number">
    {{ amountView }}
  </span>
 </div>
</template>

<script setup>
defineProps({
  amountView: { type: String, required: true},
  large: { type: Boolean, required: false},
});
</script>

<style lang="scss" scoped>
.amount-view {
  @include flex-container(row, flex-start, center);

  gap: 16px;

  &.large {
    .amount-view__number {
      @include font(20, 24, 600);
      color: #747474;
    }

    .amount-view__image-state {
      stroke: #747474;
    }
  }

  &__image {
    font-size: 0;
  }

  &__number {
    @include font(16, 22);
    letter-spacing: 0.02em;
    color: #393D38;
  }
}

</style>