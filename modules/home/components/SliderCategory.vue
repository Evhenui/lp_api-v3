<template>
  <div class="category-slider-selector" ref="selector">
    <div v-if="!isMobile" class="category-slider">
      <div class="category-slider__prod">
        <div class="category-slider__prod-title-w">
          <h3 class="category-slider__prod-title">{{ _T('Продукция') }}</h3>
          <div class="category-slider__prod-line"></div>
        </div>
        <div class="category-slider__prod-list-w">
          <div class="category-slider__prod-arrows">
            <div class="category-slider__prod-arrow-up" @click="prevSlide">
              <span></span>
            </div>
            <div class="category-slider__prod-arrow-down" @click="nextSlide">
              <span></span>
            </div>
          </div>
          <div class="category-slider__prod-list-container" ref="leftWrapper">
            <ul
              class="category-slider__prod-list"
              ref="linkListEl"
              :style="{ '--translate-y': linksTranslateY + 'px' }"
            >
              <li
                class="category-slider__prod-item"
                v-for="(pagination, index) in sliderData"
                :key="index"
                :class="{ 'prod-item-active': index === currentSlide }"
                @click="goToSlide(index)"
                ref="linkItems"
              >
                {{ pagination.title }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="category-slider__category">
        <div
          class="category-slider__category-w"
          :style="{ '--translate-y': TranslateY() + '%' }"
        >
          <div
            class="category-slider__category-item-w"
            v-for="(slide, index) in sliderData"
            :key="index"
          >
            <div class="category-slider__category-img">
              <img :src="`/img/${slide.img}.png`" alt="" />
            </div>
            <div class="category-slider__category-title-w">
              <h4 class="category-slider__category-title">{{ slide.title }}</h4>
              <p class="category-slider__category-description">
                {{ slide.text }}
              </p>
              <a
                :href="`${slide.link}`"
                class="category-slider__category-link"
                >{{ _T('Перейти в раздел') }}</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="isMobile" class="category-list">
      <h3 class="category-list__title">{{ _T('Продукция') }}</h3>
      <div 
        class="category-list__container"
        :class="{show: showAll}"
      >
        <a
          class="category-list__item"
          v-for="(item, index) in sliderData"
          :key="index"
        >
          <div class="category-list__item-img-w">
            <img
              class="category-list__item-img"
              :src="`/img/${item.img}.png`"
              alt=""
            />
          </div>
          <h4 class="category-list__item-title">{{ item.title }}</h4>
        </a>
      </div>
      <a class="category-list__link" href="#" @click.prevent="showAll = !showAll">
        <svg
          class="category-list__link-img"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M21 12C19.1114 14.991 15.7183 18 12 18C8.2817 18 4.88856 14.991 3 12C5.29855 9.15825 7.99163 6 12 6C16.0084 6 18.7015 9.1582 21 12Z"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span v-if="!showAll" class="category-list__link-text">
          {{_T('Все категории')}}
        </span>
        <span v-else class="category-list__link-text">
          {{_T('Скрыть')}}
        </span>
      </a>
    </div>
  </div>
</template>

<script setup>
const leftWrapper = ref(null);
const linkListEl = ref(null);
const linkItems = ref(null);
const selector = ref(null);

const sliderData = [
  {
    img: 'sliderPromImg',
    title: 'Комплектующие для ПК',
    text: 'Благодаря форме выходного напряжения в виде правильной синусоиды, стабилизаторы удерживают максимально точные показатели напряжения',
    link: 'google.com',
  },
  {
    img: 'sliderPromImg',
    title: 'EGM аккумуляторы',
    text: 'Благодаря форме выходного напряжения в виде правильной синусоиды, стабилизаторы удерживают максимально точные показатели напряжения',
    link: 'logicpower.ua',
  },
  {
    img: 'sliderPromImg',
    title: 'Комплектующие для ПК',
    text: 'Благодаря форме выходного напряжения в виде правильной синусоиды, стабилизаторы удерживают максимально точные показатели напряжения',
    link: 'google.com',
  },
  {
    img: 'sliderPromImg',
    title: 'EGM аккумуляторы',
    text: 'Благодаря форме выходного напряжения в виде правильной синусоиды, стабилизаторы удерживают максимально точные показатели напряжения',
    link: 'logicpower.ua',
  },
  {
    img: 'sliderPromImg',
    title: 'Комплектующие для ПК',
    text: 'Благодаря форме выходного напряжения в виде правильной синусоиды, стабилизаторы удерживают максимально точные показатели напряжения',
    link: 'google.com',
  },
  {
    img: 'sliderPromImg',
    title: 'EGM аккумуляторы',
    text: 'Благодаря форме выходного напряжения в виде правильной синусоиды, стабилизаторы удерживают максимально точные показатели напряжения',
    link: 'logicpower.ua',
  },
  {
    img: 'sliderPromImg',
    title: 'Комплектующие для ПК',
    text: 'Благодаря форме выходного напряжения в виде правильной синусоиды, стабилизаторы удерживают максимально точные показатели напряжения',
    link: 'google.com',
  },
  {
    img: 'sliderPromImg',
    title: 'EGM аккумуляторы',
    text: 'Благодаря форме выходного напряжения в виде правильной синусоиды, стабилизаторы удерживают максимально точные показатели напряжения',
    link: 'logicpower.ua',
  },
  {
    img: 'sliderPromImg',
    title: 'Комплектующие для ПК',
    text: 'Благодаря форме выходного напряжения в виде правильной синусоиды, стабилизаторы удерживают максимально точные показатели напряжения',
    link: 'google.com',
  },
  {
    img: 'sliderPromImg',
    title: 'EGM аккумуляторы',
    text: 'Благодаря форме выходного напряжения в виде правильной синусоиды, стабилизаторы удерживают максимально точные показатели напряжения',
    link: 'logicpower.ua',
  },
  {
    img: 'sliderPromImg',
    title: 'Комплектующие для ПК',
    text: 'Благодаря форме выходного напряжения в виде правильной синусоиды, стабилизаторы удерживают максимально точные показатели напряжения',
    link: 'google.com',
  },
  {
    img: 'sliderPromImg',
    title: 'EGM аккумуляторы',
    text: 'Благодаря форме выходного напряжения в виде правильной синусоиды, стабилизаторы удерживают максимально точные показатели напряжения',
    link: 'logicpower.ua',
  },
];

const currentSlide = ref(0);
const linksTranslateY = ref(0);
const isMobile = ref(false);
const showAll = ref(false);

const slideCount = sliderData.length;

function step() {
 return 100 / slideCount;
};

function TranslateY() {
 return currentSlide.value * -step();
}

function calcHeight() {
  const leftWrapRect = leftWrapper.value.getBoundingClientRect();
  const linkListRect = linkListEl.value.getBoundingClientRect();
  const activeLinkRect = linkItems.value[currentSlide.value].getBoundingClientRect();
  const linkBottomFromWrapperCenter = leftWrapRect.height / 2 - (activeLinkRect.bottom - leftWrapRect.top);

  if (linksTranslateY.value + linkBottomFromWrapperCenter > 0) {
    linksTranslateY.value = 0;
  } else if (
    linksTranslateY.value + linkBottomFromWrapperCenter <
    leftWrapRect.height - linkListRect.height
  ) {
    linksTranslateY.value = leftWrapRect.height - linkListRect.height;
  } else {
    linksTranslateY.value += linkBottomFromWrapperCenter;
  }
};

function prevSlide() {
  if (currentSlide.value - 1 < 0) currentSlide.value = slideCount - 1;
  else currentSlide.value = currentSlide.value - 1;

  calcHeight();
};

function nextSlide() {
  if (currentSlide.value + 1 >= slideCount) currentSlide.value = 0;
  else currentSlide.value = currentSlide.value + 1;

  calcHeight();
};

function goToSlide(index) {
  currentSlide.value = index;
  calcHeight();
};

function calcIsMobile() {
  const mobWidth = getComputedStyle(selector.value).getPropertyValue('--mobile-width');
  isMobile.value = window.innerWidth <= parseInt(mobWidth);
};

function onResize() {
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
.category-slider-selector {
  width: 100%;
  
  @include flex-container(column, center, center);

  --mobile-width: #{$mobile-big-width};
}

.category-slider {
  @include flex-container(row, center);
  @extend %width-main;
  height: 540px;

  border-radius: 16px;
  overflow: hidden;

  &__prod {
    max-width: 415px;
    width: 100%;

    @include flex-container(column, center);
    flex-shrink: 2;
    flex-grow: 1;

    padding: 16px 0;
    color: white;
    background-color: #393d38;
  }

  &__prod-title {
    @include font(20, 30, 600);
    text-align: center;
    text-transform: uppercase;

    margin-bottom: 16px;
  }

  &__prod-line {
    width: 100%;
    height: 1px;

    background-color: white;
  }

  &__prod-list-w {
    position: relative;
/*     height: 100%; */

    padding: 80px 16px;
  }

  &__prod-arrows {
    position: absolute;
    @include setAbs;

    @include flex-container(column, space-between, center);

    padding-top: 16px;
    z-index: 3;
  }

  &__prod-arrow-up {
    width: 48px;
    height: 48px;

    @include flex-container(row, center, center);

    border-radius: 50%;

    background-color: #ffffff;
    box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);

    transition: 0.2s ease-in-out;

    cursor: pointer;

    & span {
      width: 10px;
      height: 10px;

      border-top: 1px solid black;
      border-left: 1px solid black;

      transform: rotateZ(45deg) translate(2px, 2px);
    }
  }

  &__prod-arrow-down {
    width: 48px;
    height: 48px;

    @include flex-container(row, center, center);

    border-radius: 50%;

    background-color: #ffffff;
    box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);

    transition: 0.2s ease-in-out;

    cursor: pointer;

    & span {
      width: 10px;
      height: 10px;

      border-top: 1px solid black;
      border-left: 1px solid black;

      transform: rotateZ(225deg) translate(2px, 2px);
    }
  }

  &__prod-list-container {
    width: 100%;
    height: 292px;

    overflow: hidden;
  }

  &__prod-list {
    --translate-y: 0;

    position: relative;

    @include flex-container(column, center, flex-start);
    gap: 16px;

    transition: 0.3s ease-in-out;

    transform: translateY(var(--translate-y));
    z-index: 3;
  }

  &__prod-item {
    @include font(20, 28);
    letter-spacing: 0.02em;

    cursor: pointer;

    &.prod-item-active {
      color: #F36C21;
    }
  }

  &__category {
    width: 100%;
    height: 540px;

    @include flex-container(column, flex-start, center);
    flex-shrink: 1;
    flex-grow: 2;

    background-color: white;
    overflow: hidden;

    padding: 0 32px;
  }

  &__category-w {
    --translate-y: 0;
    transform: translateY(var(--translate-y));
    transition: 0.3s ease-in-out;
  }

  &__category-item-w {
    width: 100%;
    height: 540px;
  }

  &__category-img {
    max-width: 341px;
    width: 100%;

    margin: auto;
  }

  &__category-title-w {
    width: 100%;
    max-width: 920px;

    @include flex-container(column, center, flex-start);
    gap: 16px;
  }

  &__category-title {
    width: 100%;

    @include font(20, 30, 600);
    letter-spacing: 0.02em;
    color: #2B2B2B;
    text-align: start;
    text-transform: uppercase;
  }

  &__category-description {
    @include font(16, 22, 400);
    color: #2B2B2B;
    letter-spacing: 0.02em;

    @include lineClamp(3);

    margin-bottom: 16px;
  }

  &__category-link {
    width: 100%;
    max-width: 376px;

    @include flex-container(row, center, center);

    @include font(20, 30, 600);
    text-transform: uppercase;
    color: white;

    border-radius: 8px;
    background-color: #F36C21;

    padding: 8px 0;
    transition: 0.1s ease-in-out;

    cursor: pointer;

    &:hover {
      background-color: #FF5B00;
    }

    &:active {
      background-color: #AC450B;
    }
  }
}

.category-list {
  --gap: 16px;

  @include flex-container(column, center, center);

  gap: calc(var(--gap) * 2);

  &__title {
    @include font(22, 26, 600);
    text-align: center;
    text-transform: uppercase;

    @include bigMobile {
      text-transform: none;
    }
  }

  &__link {
    width: 100%;
    max-width: 383px;

    @include flex-container(row, center, center);
    gap: var(--gap);

    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);

    padding: 10px 0;

    cursor: pointer;

    transition: 0.2s ease-in-out;
    &:hover {
      color: #F36C21;
      fill: #F36C21;
    }
    &:hover path {
      stroke: #F36C21;
      transition: 0.2s ease-in-out;
    }
  }

  &__link-img path {
    transition: 0.2s ease-in-out;
  }

  &__link-text {
    @include font(20, 28);
    letter-spacing: 0.02em;
    text-align: center;
  }

  &__container {
    @include flex-container(row, center);
    flex-wrap: wrap;
    gap: var(--gap);

    @include bigMobile {
      &.show {
        .category-list__item {
          display: flex;
        }
      }
    }
  }

  &__item {
    @include flex-container(column, center, center);
    gap: calc(var(--gap) * 2);

    @include set-item-count-in-row(2);

    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);

    padding: 8px;
    transition: 0.2s ease-in-out;

    @include bigMobile {
      display: none;

      &:nth-child(-n + 6) {
        display: flex;
      }
    }

    &:hover {
      color: #F36C21;
    }
  }

  &__item-img-w {
    position: relative;
    width: 100%;

    padding-top: 100%;
  }

  &__item-img {
    width: 100%;
    height: 100%;

    position: absolute;
    @include setAbs();

    object-fit: cover;
    pointer-events: none;
  }

  &__item-title {
    @include font(16, 19, 500);
    color: #2B2B2B;
    text-align: center;
    text-transform: uppercase;

    word-break: break-word;
  }
}
</style>
