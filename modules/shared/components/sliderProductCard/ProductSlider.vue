<template>
  <section class="slider" ref="slider">
    <p class="slider__title">{{ title }}</p>
    <div class="slider__wrapper">
      <div
        class="slider__items"
        ref="items"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
      >
        <SliderCard
          class="slider__item"
          v-for="(item, index) in cards"
          :key="index"
          :product="item"
        />
      </div>
      <div class="slider__pagination">
        <PaginationBtnArrow
          @click="prevSlide"
          class="slider__prev"
          :directionRight="false"
          :disabled="counter === 0 ? true : false"
        />

        <PaginationBtnArrow
          class="slider__next"
          :directionRight="true"
          @click="nextSlide"
          :disabled="buttonDisabled"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import PaginationBtnArrow from "~~/modules/shared/components/buttons/PaginationBtnArrow.vue";
import SliderCard from "~~/modules/shared/components/slideCard/SlideCard.vue";

defineProps({
  cards: { type: Array, required: true },
  title: { type: String, required: true },
});

const items = ref(null);
const slider = ref(null);

const slideWidth = ref(0);
const spaceSlides = ref(0);
const distance = ref(0);
const translateX = ref(0);
const counter = ref(0);
const translateXVar = ref(0);
const buttonDisabled = ref(false);

const mobileTranslateX = ref(0);
const difference = ref(0);
const activeTouches = ref(0);
const startPosition = ref(0);

function getSizeSlide() {
  slideWidth.value = items.value.children[0].offsetWidth;
  spaceSlides.value = parseInt(getComputedStyle(items.value).gap);
}

function nextSlide() {
  const sliderWidth = items.value.scrollWidth;
  const sliderWindow = slider.value.offsetWidth;
  const slidesLength = items.value.children.length;
  const maxStep = Math.round(slidesLength - sliderWindow / slideWidth.value);
  distance.value =
    sliderWidth - sliderWindow - (translateX.value + slideWidth.value);

  if (distance.value >= 0 && counter.value < maxStep - 1) {
    counter.value++;
    translateX.value = (slideWidth.value + spaceSlides.value) * counter.value;
    translateXVar.value = `-${translateX.value}px`;
  } else {
    translateX.value = sliderWidth + spaceSlides.value - sliderWindow;
    counter.value = maxStep;
    translateXVar.value = `-${translateX.value}px`;
  }

  buttonDisabled.value = counter.value < maxStep ? false : true;
}

function prevSlide() {
  const sliderWidth = items.value.scrollWidth;
  const sliderWindow = slider.value.offsetWidth;
  const startingPosition = 0;
  const slidesLength = items.value.children.length;
  const maxStep = Math.round(slidesLength - sliderWindow / slideWidth.value);
  distance.value =
    sliderWidth - sliderWindow - (translateX.value - slideWidth.value);

  if (distance.value <= sliderWidth - sliderWindow) {
    counter.value--;
    translateX.value = (slideWidth.value + spaceSlides.value) * counter.value;
    translateXVar.value = `-${translateX.value}px`;
  } else {
    translateX.value = startingPosition;
    distance.value = sliderWidth - sliderWindow;
    translateXVar.value = `-${translateX.value}px`;
  }

  buttonDisabled.value = counter.value < maxStep ? false : true;
}

function handleTouchStart(event) {
  activeTouches.value = true;
  mobileTranslateX.value = event.touches[0].clientX;
  startPosition.value = event.touches[0].clientX;
}

function handleTouchMove(event) {
  const positionMove = event.touches[0].clientX;
  const diff = positionMove - mobileTranslateX.value;
  const fingerSpace = 30;

  if (
    startPosition.value - positionMove < fingerSpace &&
    startPosition.value - positionMove > -fingerSpace
  ) {
    return false;
  } else {
    if (activeTouches.value) {
      if (!mobileTranslateX.value) return false;

      difference.value = diff;
      difference.value > 0 ? prevSlide() : nextSlide();

      mobileTranslateX.value = null;
    }
  }
}

function handleTouchEnd() {
  activeTouches.value = false;
}

onMounted(() => {
  getSizeSlide();
  window.addEventListener("resize", getSizeSlide);
  window.addEventListener("resize", prevSlide);
});
</script>

<style lang="scss" scoped>
.slider {
  width: 100%;

  padding-bottom: 12px;

  overflow: hidden;

  &__title {
    @include font(25, 35, 700);
    letter-spacing: 0.02em;
    color: #363636;

    margin-bottom: 24px;

    @include bigMobile {
      @include font(20, 28, 400);
      text-align: center;
    }
  }

  &__wrapper {
    @include flex-container(column, flex-start);

    position: relative;

    gap: 48px;

    @include bigMobile {
      gap: 16px;
    }
  }

  &__pagination {
    width: 100%;

    @include flex-container(row, space-between, center);

    position: absolute;
    top: 50%;
    z-index: 80;

    transform: translateY(-50%);

    @include bigMobile {
      @include flex-container(row, center, center);

      position: static;

      gap: 68px;

      transform: translateY(0);
    }
  }

  &__items {
    width: 100%;

    @include flex-container(row, flex-start);

    gap: 8px;

    transition: transform 0.3s ease-in-out;
    transform: translateX(v-bind(translateXVar));
  }

  &__item {
    flex: 0 0 282px;

    @include bigMobile {
      flex: 0 0 164px;
    }
  }
}
</style>
