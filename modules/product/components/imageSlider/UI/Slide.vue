<template>
  <div 
    class="slide"
    :class="[
      {main: mainSlide},
      {preview: !mainSlide},
      {modal: modal}
    ]"
  >
    <div class="slide__image-wrapper">
      <img 
        class="slide__image" 
        :src="img"
        :alt="img"
      />
    </div>
  </div>
</template>

<script setup>
defineProps({
  img: { type: String, required: false },
  mainSlide: { type: Boolean, required: false },
  modal:{ type: Boolean, required: false },
});
</script>

<style lang="scss" scoped>
.slide {
  width: 65px;

  border-radius: 8px;
  border: 1px solid #c4c4c4;

  &.main {
    width: 491px;

    border: none;
    border-radius: 0;

    user-select: none;

    &.modal {
      width: 584px;

      @include bigMobile {
        width: 311px;
      }
    }

    @include mobile {
      width: 272px;
    }
  }

  &.preview {
    cursor: pointer;

    &.modal {
      padding: 2px;
    }
  }

  @include mobile {
    width: 41px;
  }

  &__image {
    width: 100%;
    
    margin: auto;
    
    pointer-events: none;
    user-select: none;
  }

  &.active {
    border-color: #f36c21;
  }
}
</style>