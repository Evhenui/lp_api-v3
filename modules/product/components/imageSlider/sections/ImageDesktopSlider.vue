<template>
  <div class="card-slider">
    <div class="card-slider__wrapper">
      <div class="card-slider__suggestions">
        <Suggestions :status="sliderValues.suggestions"/>
      </div>
      <Pagination :items="sliderValues.itemsImage" />
      
      <MobileImageSlides
        :items="sliderValues.itemsImage" 
        @showModal="showModal"
      />
    </div>
  </div>
</template>

<script setup>
import Suggestions from "~~/modules/shared/components/nameplate/Suggestions.vue";
import Pagination from "~~/modules/product/components/imageSlider/UI/Pagination.vue";
import MobileImageSlides from "~~/modules/product/components/imageSlider/UI/MobileImageSlides.vue";

defineProps({
  sliderValues: { type: Object, required: true },
});

const emits = defineEmits(["showModal"]);

function showModal(state) {
  emits('showModal', state)
} 
</script>

<style lang="scss" scoped>
.card-slider {
  max-width: 590px;
  width: 100%;

  background-color: white;

  box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);
  border-radius: 8px;

  @include bigMobile {
    /* max-width: 343px; */
    max-width: 100%;
  }

  &__wrapper {
    position: relative;

    @include flex-container(row, space-between);

    padding: 16px 8px;
    gap: 8px;

    @include bigMobile {
      @include flex-container(row, center);
    }
  }

  &__suggestions {
    @include flex-container(column, space-between, flex-start);

    position: absolute;
    right: 16px;
    top: 16px;
    z-index: 90;

    gap: 4px;
  }
}
</style>