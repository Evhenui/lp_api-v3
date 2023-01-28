<template>
  <div class="slider-main" :class="{ modal: modal }">
    <div
      class="slider-main__wrapper"
      :class="{ moving: moving }"
      ref="sliderMain"
      :style="[{ '--translateX': -translateX + 'px' }]"
      @touchstart="handleTouchStart($event)"
      @touchmove="handleTouchMove($event)"
      @touchend="handleTouchEnd"
      @mousedown="mouseDown($event)"
      @mousemove="mouseMove($event)"
      @mouseup="mouseUp"
    >
      <Slide
        ref="slides"
        v-for="(item, index) in items"
        :key="index"
        :img="item.image"
        :mainSlide="true"
        :modal="modal"
      />
    </div>
  </div>
</template>

<script setup>
import Slide from "~~/modules/product/components/imageSlider/UI/Slide.vue";
import { useSliderCardStore } from "~~/store/sliderCard";

defineProps({
  items: { type: Array, required: true },
  modal: { type: Boolean, required: false },
});

const emits = defineEmits(["showModal"]);

const slider = useSliderCardStore();
const counterSlider = slider.getCounter;
const sliderLength = slider.getLength;
const changeCounter = slider.changeCounter;

const positionLeft = ref(0);
const translateX = ref(0);
const difference = ref(0);
const sizeSlide = ref(0);
const moving = ref(false);
const activeTouches = ref(false);
const startPosition = ref(0);

const slides = ref(null);
const sliderMain = ref(null);

function getSizeSlide() {
  sizeSlide.value = sliderMain.value.children[0].offsetHeight;
}

function resizeSlider() {
  getSizeSlide();
  translateX.value = 0;
  changeCounter("null");
}

function getStartPosition(position) {
  positionLeft.value = position;
  moving.value = true;
}

function getMovePosition(position) {
  const positionMove = position;
  const diff = positionMove - positionLeft.value;
  const fingerSpace = 30;

  if (
    startPosition.value - position < fingerSpace &&
    startPosition.value - position > -fingerSpace
  ) {
    return false;
  } else {
    if (!positionLeft.value) return false;

    difference.value = diff;

    if (difference.value > 0) {
      if (counterSlider.counter !== 0) {
        changeCounter("remove");
      }
    } else {
      if (counterSlider.counter !== sliderLength.length) {
        changeCounter("add");
      }
    }
    positionLeft.value = null;
  }
}

function handleTouchStart(event) {
  activeTouches.value = true;
  getStartPosition(event.touches[0].clientX);
  startPosition.value = event.touches[0].clientX;
}

function handleTouchMove(event) {
  if (activeTouches.value) {
    getMovePosition(event.touches[0].clientX);
  }
}

function handleTouchEnd() {
  activeTouches.value = false;
}

function mouseDown(event) {
  activeTouches.value = true;
  getStartPosition(event.pageX);
  startPosition.value = event.pageX;
}

function mouseMove(event) {
  if (activeTouches.value) {
    getMovePosition(event.pageX);
  }
}

function mouseUp(event) {
  activeTouches.value = false;
  moving.value = false;
  if (event.pageX - startPosition.value === 0) {
    emits("showModal", true);
  }
}

watch(
  counterSlider,
  (current) => (translateX.value = sizeSlide.value * current.counter)
);

onMounted(() => {
  getSizeSlide();
  window.addEventListener("resize", resizeSlider);
});

onUnmounted(() => {
  window.removeEventListener("resize", resizeSlider);
});
</script>

<style lang="scss" scoped>
.slider-main {
  width: 491px;

  position: relative;

  overflow: hidden;

  &.modal {
    width: 584px;

    @include bigMobile {
      width: 311px;
    }
  }

  @include mobile {
    width: 272px;
  }

  &__wrapper {
    width: max-content;

    @include flex-container(row, flex-start, center);

    overflow: hidden;

    transition: transform 0.3s ease-in-out;

    --translateX: 0;
    transform: translateX(var(--translateX));

    cursor: grab;

    &.moving {
      cursor: grabbing;
    }
  }
}
</style>