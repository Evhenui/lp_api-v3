<template>
  <article class="main-slider">
    <div class="main-slider__wrapper">
      <div class="main-slider__slider">
        <div
          class="main-slider__slides"
          ref="sliderWidth"
          @touchstart="handleTouchStart"
          @touchmove="handleTouchMove"
          @touchend="handleTouchEnd"
        >
          <div
            class="main-slider__slide"
            v-for="(item, index) in items"
            :key="index"
          >
            <div class="main-slider__slide-wrapper">
              <div class="main-slider__main-info">
                <a href="#" class="main-slider__title">{{ item.title }}</a>

                <div class="main-slider__image">
                  <img :src="item.image" alt="product name" />
                </div>

                <p class="main-slider__subtitle">{{ item.content }}</p>

                <a href="#" class="main-slider__details">
                  {{item.buttonText}}</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="main-slider__pagination">
        <ul class="main-slider__nav">
          <li
            class="main-slider__nav-item"
            :class="{active: index === counter}"
            v-for="(slide, index) in items"
            :key="index"
            @click="activePagination(index)"
          />
        </ul>
      </div>

      <div class="main-slider__buttons">
        <PaginationBtnArrow @click="prevSlide" :directionRight="false" />

        <PaginationBtnArrow :directionRight="true" @click="nextSlide" />
      </div>
    </div>
  </article>
</template>

<script setup>
import PaginationBtnArrow from "~~/modules/shared/components/buttons/PaginationBtnArrow.vue";

const props = defineProps({
  items: { type: Array, required: true},
});

const sliderWidth = ref(null);
const bgColor = ref("black");
const borderColor = ref('black');

const counter = ref(0);
const sliderLength = ref(0);
const slideWidth = ref(0);
const translateX = ref(0);
const translateXVar = ref("");

const activeTouches = ref(false);
const mobileTranslateX = ref(0);
const startPosition = ref(0);
const difference = ref(0);
const interval = ref(-1);

function getSliderValues() {
  sliderLength.value = props.items.length;
  slideWidth.value = sliderWidth.value.scrollWidth / sliderLength.value;
  bgColor.value = props.items[0].backgroundColor;
  borderColor.value = props.items[0].imgBorderColor;

  actualTransition();
}

function actualTransition() {
  translateX.value = slideWidth.value * counter.value;
  translateXVar.value = `-${translateX.value}px`;
}

function prevSlide() {
  if (counter.value > 0) {
    counter.value--;
    translateX.value = slideWidth.value * counter.value;
  } else {
    counter.value = sliderLength.value - 1;
    translateX.value = counter.value * slideWidth.value;
  }

  bgColor.value = props.items[counter.value].backgroundColor;
  borderColor.value = props.items[counter.value].imgBorderColor;
  translateXVar.value = `-${translateX.value}px`;
}

function nextSlide() {
  if (counter.value < sliderLength.value - 1) {
    counter.value++;
    translateX.value = slideWidth.value * counter.value;
  } else {
    counter.value = 0;
    translateX.value = 0;
  }

  bgColor.value = props.items[counter.value].backgroundColor;
  borderColor.value = props.items[counter.value].imgBorderColor;
  translateXVar.value = `-${translateX.value}px`;
}

function activePagination(index) {
  counter.value = index;
  translateX.value = slideWidth.value * counter.value;
  translateXVar.value = `-${translateX.value}px`;
}

function handleTouchStart(event) {
  if (window.innerWidth < 1024) {
    activeTouches.value = true;
    mobileTranslateX.value = event.touches[0].clientX;
    startPosition.value = event.touches[0].clientX;
  }
}

function handleTouchMove(event) {
  if (window.innerWidth < 1024) {
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
}

function handleTouchEnd() {
  if (window.innerWidth < 1024) {
    activeTouches.value = false;
  }
}

function endInerval(interval) {
  clearInterval(interval)
}

watch(counter, () => {
  endInerval(interval.value)
  interval.value = setInterval(nextSlide, 5000);
})

onMounted(() => {
  getSliderValues();

  window.addEventListener("resize", getSliderValues);
});

onUnmounted(() => {
  window.removeEventListener("resize", getSliderValues);
});
</script>

<style lang="scss" scoped>
.main-slider {
  background-color: v-bind(bgColor);

  padding: 0 16px;

  transition: background-color 0.4s ease-in-out;

  @include bigMobile {
    padding: 0 16px;
  }

  &__wrapper {
    @extend %width-main;
    min-height: 460px;

    position: relative;

    @include flex-container(column, center, center);

    margin: auto;
    padding: 24px 0;

    overflow: hidden;

    @include bigMobile {
      padding-top: 32px;
      gap: 48px;
    }
  }

  &__slider {
    @extend %width-main;
  }

  &__slides {
    @include flex-container(row, flex-start, center);

    transform: translateX(v-bind(translateXVar));

    transition: transform 0.5s ease-in-out;
  }

  &__slide {
    flex: 0 0 100%;

    padding: 0 64px;

    @include bigMobile {
      padding: 0;
    }
  }

  &__slide-wrapper {
    max-width: 1130px;
    width: 100%;

    position: relative;

    margin: auto;
  }

  &__main-info {
    max-width: 590px;
    width: 100%;

    @include flex-container(column, flex-start, flex-start);

    gap: 16px;

    @include smallestScreen {
      max-width: 380px;
    }

    @include bigMobile {
      max-width: 100%;

      @include flex-container(column, center, center);

      gap: 24px;
    }
  }

  &__title {
    @include font(36, 43, 700);
    color: white;

    @include bigMobile {
      @include font(24, 34, 700);
      letter-spacing: 0.02em;
      text-align: center;
    }
  }

  &__image {
    max-width: 404px;
    width: 100%;
    height: 404px;

    position: absolute;
    top: 50%;
    right: 0;

    @include flex-container(column, center, center);

    transform: translateY(-50%);

    padding: 16px;

    @include bigMobile {
      max-width: 219px;
      height: auto;

      position: static;

      @include flex-container(column, center, center);

      transform: translateY(0);

      padding: 0;
    }

    &::before {
      content: '';
      
      position: absolute;
      @include setAbs();
      z-index: -2;

      border: 1px solid v-bind(borderColor);

      transition: border-color .3s ease-in-out;
      @include bigMobile {
        display: none;
      }
    }

    &::after {
      content: '';
      width: 100%;
      height: 100%;

      position: absolute;
      left: 50%;
      top: 50%;
      z-index: -1;
    
      background-color: v-bind(bgColor);

      transition: background-color .5s ease-in-out;    
      transform: translate(-50%, -50%) rotate(45deg);

      @include bigMobile {
        display: none;
      }
    }
  }

  &__subtitle {
    @include font(16, 22, 400);
    color: white;
    letter-spacing: 0.02em;
  }

  &__details {
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

  &__pagination {
    position: absolute;
    bottom: 16px;

    @include bigMobile {
      position: static;
    }
  }

  &__nav {
    @include flex-container(row, flex-start, center);

    gap: 16px;
  }

  &__nav-item {
    width: 20px;
    height: 20px;

    background-color: white;
    border-radius: 50%;

    cursor: pointer;

    transition: background-color 0.2s ease-in-out;

    &.active {
      background-color: #f36c21;
    }

    @include bigMobile {
      width: 12px;
      height: 12px;
    }
  }

  &__buttons {
    width: 100%;

    @include flex-container(row, space-between, center);

    position: absolute;
    top: 50%;
    z-index: 80;

    transform: translateY(-50%);

    @include bigMobile {
      display: none;
    }
  }
}
</style>