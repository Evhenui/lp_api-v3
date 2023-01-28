<template>
  <div class="cooperation-slider">
    <div
      class="cooperation-slider__arrow-left"
      :class="{ disable: currentSlide <= 0 }"
      @click="prevSlide"
    >
    <SliderButton :directionRight="false" />
    </div>
    <div class="cooperation-slider__w" ref="slideWrap">
      <div
        class="cooperation-slider__cont"
        ref="slideList"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        :style="{
          '--translate-x': translateListX + 'px',
          '--gap': gapLength + 'px',
        }"
      >
        <a 
          href="#"
          class="cooperation-slider__item"
          v-for="(item, index) in sliderData"
          :key="index"
          ref="slideListItem"
        >
          <img :src="`/img/${item.img}.svg`" :alt="item.img" class="cooperation-slider__img">
        </a>
      </div>
    </div>
    <div
      class="cooperation-slider__arrow-right"
      :class="{ disable: slideMaxCount === currentSlide }"
      @click="nextSlide"
    >
    <SliderButton :directionRight="true" />
    </div>
  </div>
</template>

<script setup>
import SliderButton from '~~/modules/home/components/cooperationSlider/SliderButton.vue';

const sliderData = [
  {
    id: 1,
    img: 'mainCooperationAtbIcon',
  },
  {
    id: 2,
    img: 'mainCooperationMoyoIcon',
  },
  {
    id: 3,
    img: 'mainCooperationPromIcon',
  },
  {
    id: 4,
    img: 'mainCooperationFIcon',
  },
  {
    id: 5,
    img: 'mainCooperationSilpoIcon',
  },
  {
    id: 6,
    img: 'mainCooperationRozetkaIcon',
  },
  {
    id: 7,
    img: 'mainCooperationPromIcon',
  },
  {
    id: 8,
    img: 'mainCooperationRozetkaIcon',
  },
  {
    id: 9,
    img: 'mainCooperationSilpoIcon',
  },
];

const slideWrap = ref(null);
const slideListItem = ref(null);
const slideList = ref(null);

const currentSlide = ref(0);
const gapLength = ref(0);
const translateListX = ref(0);
const slideMaxCount = ref(0);
const startX = ref(0);
const endX = ref(0);

const slideCount = sliderData.length;

const step = () => 100 / slideCount;

function translateX() {
  const slideItemRect = slideListItem.value[currentSlide.value].getBoundingClientRect();

  return -slideItemRect.width * currentSlide.value - gapLength.value * currentSlide.value;
};

function calcItemsLength() {
  const slideWrapRect = slideWrap.value.getBoundingClientRect();
  const slideItemRect = slideListItem.value[currentSlide.value].getBoundingClientRect();

  let slideItemsCount = Math.floor(slideWrapRect.width / slideItemRect.width);

  if (slideItemsCount >= slideCount) slideItemsCount = slideCount;

  gapLength.value = (slideWrapRect.width - slideItemsCount * slideItemRect.width) / (slideItemsCount - 1);

  const slideMaxWidth = (slideCount - slideItemsCount) * slideItemRect.width + gapLength.value * (slideCount - slideItemsCount);

  slideMaxCount.value = slideCount - slideItemsCount;

  if (-slideMaxWidth >= translateX()) {
    translateListX.value = -slideMaxWidth;
    currentSlide.value = slideMaxCount.value;
  } else translateListX.value = -slideItemRect.width * currentSlide.value - gapLength.value * currentSlide.value;
};

function nextSlide() {
  if (currentSlide.value + 1 >= slideCount) currentSlide.value = slideCount;
  else currentSlide.value += 1;

  calcItemsLength();
};

function prevSlide() {
  if (currentSlide.value - 1 < 0) currentSlide.value = 0;
  else currentSlide.value -= 1;

  calcItemsLength();
};

 function handleTouchStart(e) {
  startX.value = e.touches[0].clientX;
  endX.value = 0;
}

function handleTouchMove(e) {
  endX.value = e.touches[0].clientX;
}

function handleTouchEnd() {
  const slideItemRect = slideListItem.value[currentSlide.value].getBoundingClientRect();
  const slideWrapRect = slideWrap.value.getBoundingClientRect();

  const mobMaxWidth = slideCount * slideItemRect.width;

  const mobGapStr = getComputedStyle(slideList.value).getPropertyValue( '--mob-gap');
  const mobGap = parseFloat(mobGapStr);

  const mobWidthToShow = mobMaxWidth + mobGap * (slideCount - 1) - slideWrapRect.width;

  if (endX.value > 0 && endX.value < startX.value) translateListX.value -= slideWrapRect.width / 1.2;
  else if (endX.value > 0 && endX.value > startX.value)
    translateListX.value += slideWrapRect.width / 1.2;

  if (translateListX.value >= 0) translateListX.value = 0;
  else if (translateListX.value <= -mobWidthToShow) {
    translateListX.value = -mobWidthToShow;
  }
}

function onResize() {
  calcItemsLength();
}

onMounted(() => {
  onResize();
  window.addEventListener('resize', onResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', onResize);
});
</script>

<style lang="scss" scoped>
.cooperation-slider {
  @extend %width-main;

  @include flex-container(row, space-between, center);
  gap: 56px;

  &__arrow-left {
    min-width: 48px;
    height: 48px;

    @include flex-container(row, center, center);

    border-radius: 50%;

    cursor: pointer;
    transition: 0.5s ease;

    @include mobile {
      display: none;
    }

    &.disable {
      pointer-events: none;
      opacity: 0.2;
    }
  }

  &__w {
    width: 1290px;
    overflow: hidden;
    overscroll-behavior: contain;
  }

  &__cont {
    --translate-x: 0;
    --gap: 0;
    --mob-gap: 8px;

    @include flex-container;
    gap: var(--gap);

    transform: translateX(var(--translate-x));
    transition: 0.3s ease-in-out;

    @include mobile {
      gap: var(--mob-gap);
      transition: 0.35s cubic-bezier(0.08, 0.66, 0.22, 1.06);
    }
  }

  &__item {
    min-width: 201px;

    @include mobile {
      min-width: 150px;
    }
  }

  &__img {
    height: 100%;
    object-fit: contain;
  }

  &__arrow-right {
    min-width: 48px;
    height: 48px;

    @include flex-container(row, center, center);

    border-radius: 50%;

    cursor: pointer;
    transition: 0.3s ease-in-out;

    @include mobile {
      display: none;
    }

    &.disable {
      pointer-events: none;
      opacity: 0.2;
    }
  }

}
</style>
