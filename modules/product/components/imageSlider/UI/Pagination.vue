<template>
  <div 
    class="paginaion"
    :class="{modal: modal}"
  >
    <div class="paginaion__wrapper">
      <ArrowButton 
        :bottom="false" 
        @click="prevSlide" 
        class="paginaion__button-prev"
      />
      <div 
        class="paginaion__slides"
        ref="pagination"
      >
        <Slide
          ref="slides"
          v-for="(item, index) in items"
          :key="index"
          :img="item.image"
          :class="{ active: index === sliderCounter.counter }"
          :mainSlide="false"
          :modal="modal"
          @click="activeSlide(index)"
        />
      </div>

      <div class="paginaion__modal-nav">
        <div 
          class="paginaion__point"
          v-for="(item, index) in items"
          :key="index"
          :class="{ active: index === sliderCounter.counter }"
          @click="activeSlide(index)"
        ></div>
      </div>
      <ArrowButton 
        :bottom="true" 
        @click="nextSlide" 
        class="paginaion__button-next"
      />
    </div>
  </div>
</template>
  
<script setup>
import Slide from "~~/modules/product/components/imageSlider/UI/Slide.vue";
import ArrowButton from "~~/modules/product/components/imageSlider/UI/ArrowButton.vue";
import { useSliderCardStore } from "~~/store/sliderCard";

const slider = useSliderCardStore();
const sliderCounter = slider.getCounter;
const changeCounter = slider.changeCounter;
const activeCounter = slider.activeCounter;
const calcSliderLength = slider.calcSliderLength;
const sliderLength = slider.getLength;

const indexSlide = ref(0);
const positionScroll = ref(0);
const sizeSlide = ref(0);

const slides = ref(null);
const pagination = ref(null);


defineProps({
  items: { type: Array, required: true },
  modal: { type: Boolean, required: false },
});

function getValuesSlider() {
  const gap = parseInt(getComputedStyle(pagination.value, null).getPropertyValue("gap"));
  const heightSlide = pagination.value.children[0].offsetHeight;

  sizeSlide.value = heightSlide + gap;
  calcSliderLength(slides.value);
}

function resizePagination() {
  getValuesSlider();
  changeCounter('null');

  positionScroll.value = 0
}

function activeSlide(index) {
  activeCounter(index);
  indexSlide.value = index;
}

function prevSlide() {
  if (sliderCounter.counter !== 0) {
    indexSlide.value--;
    changeCounter('remove');
  }
}

function nextSlide() {
  if (sliderCounter.counter < sliderLength.length) {
    indexSlide.value++;
    changeCounter('add');
  }
}

watch(sliderCounter, (current) => {
  positionScroll.value =  sizeSlide.value * current.counter;
  pagination.value.scrollTop = sizeSlide.value * current.counter;
});

onMounted(() => {
  getValuesSlider();

  window.addEventListener('resize', resizePagination)
});

</script>
  
<style lang="scss" scoped>
.paginaion {

  &.modal {
    .paginaion__button-prev,
    .paginaion__button-next {
      @include bigMobile {
        display: none;
      }
    }

    .paginaion__slides {
      @include bigMobile {
        display: none;
      }
    }

    .paginaion__modal-nav {
      @include bigMobile {
        @include flex-container(row, center, center);

        gap: 8px;
      }
    }

    .paginaion__point {
      width: 8px;
      height: 8px;

      border-radius: 50%;
      background-color: #D9D9D9;
      
      &.active {
        background-color: #F36C21;
      }

      &:last-child,
      &:nth-child(1) {
        width: 4px;
        height: 4px;

        &.active {
          width: 8px;
          height: 8px;
        }
      }
    }
  }

  &__wrapper {
    @include flex-container(column, center, center);
  }

  &__slides {
    height: 430px;

    @include flex-container(column, flex-start, center);

    gap: 8px;

    overflow: auto;

    &::-webkit-scrollbar {
      width: 0px;
    }

    @include mobile {
      height: 224px;

      gap: 4px;
    }
  }

  &__modal-nav {
    display: none;
  }
}
</style>