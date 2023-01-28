<template>
  <div class="slider-about" ref="sliderWidth">
    <div class="slider" ref="sliderWindow">
      <div class="slider__arrows">
        <div class="slider__arrow-left" @click="prevSlide">
          <svg
            width="14"
            height="22"
            viewBox="0 0 14 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 3L3 11L11 19"
              stroke="white"
              stroke-width="5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="slider__arrow-right" @click="nextSlide">
          <svg
            width="14"
            height="22"
            viewBox="0 0 14 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 3L11 11L3 19"
              stroke="white"
              stroke-width="5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <ul
        class="slider__list"
        :style="{ '--list-translateX': translateX + 'px' }"
        ref="slideList"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
      >
        <AboutUsSliderItem
          v-for="(slide_, index) of sliderData"
          :key="index"
          :class="{ active: index === currentSlide }"
          :style="{ '--item-width': slideWidth + 'px' }"
          :aboutCard="slide_"
          :isMobile="isMobile"
          ref="slide"
        />
      </ul>
    </div>
    <div class="pagination">
      <div
        class="pagination__line"
        :style="{ '--line-width': lineMobWidth + 'px' }"
        ref="paginationLine"
      ></div>
      <div
        class="pagination__line-colored"
        :style="{ '--width-line': lineWidth + 'px' }"
      ></div>
      <div
        class="pagination__item"
        v-for="(slide, index) of sliderData"
        :key="index"
        ref="paginationItem"
      >
        <div class="pagination__title-w">
          <span
            class="pagination__title"
            :class="{
              active: index === currentSlide,
            }"
            >{{ slide.title }}
          </span>
          <div class="pagination__dot-w">
            <div
              class="pagination__dot"
              :class="{
                active: index === currentSlide,
                colored: paginationColoredDot(index),
              }"
              @click="goToSlide(index)"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AboutUsSliderItem from '~~/modules/home/components/aboutUsSlider/AboutUsSliderItem.vue';

const slide = ref(null);
const slideList = ref(null);
const sliderWindow = ref(null);
const paginationLine = ref(null);
const paginationItem = ref(null);
const sliderWidth = ref(null);

const sliderData = [
  {
    img: 'mainAboutUsImg',
    title: '2007',
    text: '@Brand registration',
  },
  {
    img: 'mainAboutUsImg',
    title: '2008',
    text: '@Company reaches UAH 1 million',
  },
  {
    img: 'mainAboutUsImg',
    title: '2009',
    text: '@Company wins tenders',
  },
  {
    img: 'mainAboutUsImg',
    title: '2010-2011',
    text: '@Revolution in energy independence',
  },
  {
    img: 'mainAboutUsImg',
    title: '2012-2013',
    text: '@Brand actively developing alternative energy',
  },
  {
    img: 'mainAboutUsImg',
    title: '2014',
    text: '@LP commodity items in TOP sales',
  },
  {
    img: 'mainAboutUsImg',
    title: '2015-2016',
    text: '@Company received certificate ISO 9001',
  },
  {
    img: 'mainAboutUsImg',
    title: '2017-2018',
    text: '@Brand in Vybir roku',
  },
  {
    img: 'mainAboutUsImg',
    title: '2019-2021',
    text: '@Company wins tender again',
  },
  {
    img: 'mainAboutUsImg',
    title: '2022',
    text: '@LP develop and test new types of equipment',
  },
];

const currentSlide = ref(0);
const translateX = ref(0);
const lineWidth = ref(0);
const slideWidth = ref(0);
const startX = ref(0);
const endX = ref(0);
const lineMobWidth = ref(0);
const isMobile = ref(false);

const slideCount = sliderData.length;

function paginationColoredLineWidth() {
  const paginationItemRect = paginationItem.value[currentSlide.value].getBoundingClientRect();
  const lineIndent = paginationItemRect.width / 2;

  lineWidth.value = paginationItemRect.width * currentSlide.value + lineIndent;
};

const paginationLineMobWidthCalc = () => {
  const paginationItemRect = paginationItem.value[currentSlide.value].getBoundingClientRect();

  lineMobWidth.value = paginationItemRect.width * slideCount;
};

const paginationColoredDot = (index) => index <= currentSlide.value;

function adaptiveSliderWidth() {
  const sliderWindowRect = sliderWindow.value.getBoundingClientRect();

  slideWidth.value = (sliderWindowRect.width / 100) * 78;
};

function translateXWidthTimeOut() {
  setTimeout(() => {
    const slideRect = slideList.value.children[currentSlide.value].getBoundingClientRect();
    const slideListRect = slideList.value.scrollWidth;
    const sliderWindowRect = sliderWindow.value.getBoundingClientRect();

    if (window.innerWidth <= 1024) {
      translateX.value = currentSlide.value * (-slideRect.width - (slideListRect - slideRect.width * slideCount) / (slideCount - 1));
    } else {
      translateX.value = currentSlide.value * (-slideRect.width - (slideListRect - slideRect.width * slideCount) / (slideCount - 1)) + (sliderWindowRect.width - slideRect.width) / 2;
    }
  }, 700);
};

function translateXWidth() {
  const slideRect = slideList.value.children[currentSlide.value].getBoundingClientRect();
  const slideListRect = slideList.value.scrollWidth;
  const sliderWindowRect = sliderWindow.value.getBoundingClientRect(); 

  if (window.innerWidth <= 1024) {
    translateX.value = currentSlide.value * (-slideRect.width - (slideListRect - slideRect.width * slideCount) / (slideCount - 1));
  } else {
    translateX.value = currentSlide.value * (-slideRect.width - (slideListRect - slideRect.width * slideCount) / (slideCount - 1)) + (sliderWindowRect.width - slideRect.width) / 2;
  }
};

function calcIsMobile() {
  const mobWidth = getComputedStyle(sliderWidth.value).getPropertyValue( '--mobile-width');

  isMobile.value = window.innerWidth <= parseInt(mobWidth);
};

function nextSlide() {
  if (currentSlide.value + 1 >= slideCount) currentSlide.value = 0;
  else currentSlide.value += 1;

  translateXWidth();
  paginationColoredLineWidth();
};

function prevSlide() {
  if (currentSlide.value - 1 < 0) currentSlide.value = slideCount - 1;
  else currentSlide.value -= 1;

  translateXWidth();
  paginationColoredLineWidth();
};

function goToSlide(index) {
  currentSlide.value = index;

  translateXWidth();
  paginationColoredLineWidth();
};

function handleTouchStart(e) {
  startX.value = e.touches[0].clientX;
  endX.value = 0;
}

function handleTouchMove(e) {
  endX.value = e.touches[0].clientX;
}

function handleTouchEnd() {
  const diffX = endX.value - startX.value;

  if (endX.value > 0 && endX.value < startX.value && diffX < -50) {
    if (currentSlide.value + 1 >= slideCount) {
      currentSlide.value = slideCount - 1;
    } else {
      currentSlide.value += 1;
    }
  } else if (endX.value > startX.value && diffX > 50) {
    if (currentSlide.value - 1 < 0) currentSlide.value = 0;
    else {
      currentSlide.value -= 1;
    }
  }

  translateXWidth();
  paginationColoredLineWidth();
}

function onResize() {
  adaptiveSliderWidth();
  translateXWidthTimeOut();
  paginationColoredLineWidth();
  paginationLineMobWidthCalc();
  calcIsMobile();
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
.slider-about {
  --mobile-width: #{$mobile-big-width};

  width: 100%;
  height: 836px;

  @include flex-container(column, center, center);
  gap: 48px;

  background-color: #d8d8d8;

  padding: 48px 16px;

  @include bigMobile {
    height: auto;

    gap: 24px;

    padding: 16px;
  }
}

.slider {
  width: 100%;
  max-width: 1920px;
  height: 620px;

  display: flex;

  position: relative;

  overflow: hidden;

  @include bigMobile {
    height: auto;
  }

  &__arrows {
    width: 100%;

    position: absolute;
    @include setAbs;

    @include flex-container(row, space-between, center);

    padding: 0 62px;

    z-index: 3;

    @include bigMobile {
      display: none;
    }
  }

  &__arrow-left {
    width: 48px;
    height: 48px;

    @include flex-container(row, center, center);

    border-radius: 50%;

    background-color: #F36C21;
    box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);

    cursor: pointer;
    transition: 0.2s ease;

    &:hover {
      background-color: #AC450B;
    }
  }

  &__arrow-right {
    width: 48px;
    height: 48px;

    @include flex-container(row, center, center);

    border-radius: 50%;

    background-color: #F36C21;
    box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);

    cursor: pointer;
    transition: 0.2s ease;

    &:hover {
      background-color: #AC450B;
    }
  }

  &__list {
    --list-translateX: 0;
    width: 100%;

    position: relative;

    @include flex-container;
    align-items: center;
    gap: 48px;

    transform: translateX(var(--list-translateX));
    transition: 0.7s cubic-bezier(0.18, 0.17, 0.74, 0.76);
  }
}

.pagination {
  @extend %width-main;

  position: relative;

  @include flex-container(row, space-between, center);

  @include bigMobile {
    max-width: none;

    padding-bottom: 16px;

    &::-webkit-scrollbar {
      width: 0;
      height: 4px;
    }

    &::-webkit-scrollbar-track {
      background-color: #8a8a8a;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #F36C21;
    }

    overflow-y: scroll;
  }

  &__item {
    width: 100%;
    min-height: 75px;
    max-height: 75px;

    position: relative;

    @include flex-container(row, space-between);

    @include bigMobile {
      min-height: 54px;
      max-height: 54px;

      min-width: 114px;
    }
  }

  &__line {
    --line-width: 0;
    height: 4px;
    width: 100%;

    position: absolute;
    bottom: 13px;
    left: 0;

    background-color: #a0a0a0;
    border-radius: 2px;

    transition: 0.7s ease;
    z-index: 5;

    @include bigMobile {
      width: var(--line-width);
      bottom: 22px;
    }
  }

  &__line-colored {
    --width-line: 0;

    height: 4px;
    width: var(--width-line);

    position: absolute;
    bottom: 13px;
    left: 0;

    background-color: #6D6D6D;
    border-radius: 2px;

    transition: 0.7s ease;
    z-index: 6;

    @include bigMobile {
      bottom: 22px;
    }
  }

  &__title-w {
    width: 100%;

    position: relative;

    @include flex-container(column, space-between, center);
    gap: 8px;

    z-index: 7;
  }

  &__title {
    @include font(24, 34);
    color: #a0a0a0;
    white-space: nowrap;

    overflow: auto;

    transition: 0.7s ease;

    @include bigMobile {
      @include font(18, 24);
    }

    &.active {
      @include font(24, 34, 700);
      color: #0E0F0F;

      @include bigMobile {
        @include font(18, 24);
      }
    }
  }

  &__dot-w {
    width: 56px;
    min-height: 30px;

    @include flex-container(row, center, center);

    background-color: #d8d8d8;

    @include bigMobile {
      width: 24px;
      min-height: 16px;
    }
  }

  &__dot {
    width: 16px;
    height: 16px;

    background-color: #a0a0a0;

    border-radius: 50%;

    transition: 0.7s ease;

    cursor: pointer;

    @include bigMobile {
      width: 12px;
      height: 12px;
    }

    &.active {
      width: 30px;
      height: 30px;
      border-radius: 50%;

      @include bigMobile {
        width: 16px;
        height: 16px;
      }
    }

    &.colored {
      background-color: #F36C21;
    }
  }
}
</style>
