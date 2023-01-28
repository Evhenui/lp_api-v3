<template>
  <button 
    class="pagination-arrow" 
    :class="{'direction-right' : directionRight}"
    :disabled="disabled"
  >
    <div class="pagination-arrow__image">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path class="pagination-arrow__image-state" d="M15 6L9 12L15 18" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
  </button>
</template>

<script setup>
defineProps({
  directionRight: { type: Boolean, required: false},
  disabled: { type: Boolean, required: false},
});
</script>

<style lang="scss" scoped>
.pagination-arrow {
  width: 48px;
  height: 48px;

  @include flex-container(column, center, center);

  border-radius: 50%;
  border: 1px solid #D1D1D1;

  background-color: white;

  transition: box-shadow .1s ease-in-out;

  @include bigMobile {
    width: 36px;
    height: 36px;
  }

  &:hover {
    box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);
  }

  &:active {
    background-color: #F3F3F3;
    box-shadow: none;
  }

  &:disabled {
    border-color: #F3F3F3;

    background-color: #F3F3F3;

    cursor: auto;

    &:hover {
      box-shadow: none;
    }

    .pagination-arrow__image-state {
      stroke: #8A8A8A;
    }
  }

  &.direction-right {
    .pagination-arrow__image {
      transform: rotateZ(180deg);
    }
  }

  @include bigMobile { 
    width: 36px;
    height: 36px;
  }

  &__image {
    font-size: 0;
  }
}
</style>