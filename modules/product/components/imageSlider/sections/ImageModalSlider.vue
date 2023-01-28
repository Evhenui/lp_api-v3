<template>
  <div
    class="modal-slider"
    :class="{ active: modalState.activeModal }"
    @click.stop="closeModal"
  >
    <div @click.stop class="modal-slider__wrapper">
      <section class="modal-slider__content">
        <div class="modal-slider__header">
          <div class="modal-slider__pages">
            <span class="modal-slider__page"
              >{{ sliderCounter.counter }}/{{ sliderLength.length }}</span
            >
          </div>

          <button class="modal-slider__close" @click="closeModal">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.00972 22.9902L15.9999 16M22.9901 9.00981L15.9999 16M15.9999 16L9.00972 9.00981M15.9999 16L22.9901 22.9902"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>

        <div class="card-slider">
          <div class="card-slider__wrapper">
            <Pagination
              :items="sliderValues.itemsImage"
              class="card-slider__pagination"
              :modal="true"
            />
            <div class="card-slider__wrapper-main">
              <NavButton class="card-slider__modal-prev" @click="prevSlide" />
              <MobileImageSlides :items="sliderValues.itemsImage" :modal="true" class="card-slider__slider" />
              <NavButton
                class="card-slider__modal-next"
                :buttonNext="true"
                @click="nextSlide"
              />
            </div>
          </div>
        </div>

        <div class="modal-slider__footer">
          <Prices :price="sliderValues.price" />
          <ButtonBuy class="modal-slider__button-buy" :state="'buy'"/>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import Pagination from "~~/modules/product/components/imageSlider/UI/Pagination.vue";
import MobileImageSlides from "~~/modules/product/components/imageSlider/UI/MobileImageSlides.vue";
import Prices from "~~/modules/shared/components/slideCard/UI/Prices.vue";
import ButtonBuy from "~~/modules/shared/components/buttons/ButtonBuy.vue";
import NavButton from "~~/modules/product/components/imageSlider/UI/NavButton.vue";
import { useSliderCardStore } from "~~/store/sliderCard";

const slider = useSliderCardStore();
const sliderCounter = slider.getCounter;
const sliderLength = slider.getLength;
const modalState = slider.getSliderModal;
const changeCounter = slider.changeCounter;
const activeModal = slider.activeSliderModal;

defineProps({
  sliderValues: { type: Object, required: true },
});

const suggestions = {
  topSales: "top-sales",
  novelty: "novelty",
  stock: "stock",
};

const active = ref(false);

function closeModal() {
  activeModal();
  document.body.style.overflow = "auto";
}

function prevSlide() {
  if (sliderCounter.counter !== 0) {
    changeCounter("remove");
  }
}

function nextSlide() {
  if (sliderCounter.counter < sliderLength.length) {
    changeCounter("add");
  }
}
</script>

<style lang="scss" scoped>
.modal-slider {
  @include flex-container(column, center, center);

  position: fixed;
  @include setAbs(0, 0, 0, 0);

  background-color: rgba(217, 217, 217, 0.4);
  backdrop-filter: blur(3px);

  z-index: 510;
  visibility: hidden;
  opacity: 0;

  transition: all 0.3s ease-in-out;

  &.active {
    visibility: visible;
    opacity: 1;

    .modal-slider__wrapper {
      transform: translateX(0);

      transition: transform 0.3s ease-in-out;
    }
  }

  &__wrapper {
    max-width: 1240px;
    width: 100%;

    padding: 32px 16px;

    overflow: auto;

    @include bigMobile {
      padding: 16px;
    }
    
    &::-webkit-scrollbar {
      width: 0;
    }
  }

  &__content {
    position: relative;

    @include flex-container(column, space-between, center);

    background-color: white;

    box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);
    border-radius: 8px;

    padding: 24px;
    gap: 16px;

    @include bigMobile {
      padding: 16px;
    }
  }

  &__header {
    width: 100%;

    position: absolute;
    top: 0;
    left: 0;
    z-index: 511;

    @include flex-container(row, space-between, center);

    padding: 24px 24px 0 24px;

    @include bigMobile {
      position: static;

      @include flex-container(row, flex-end, center);

      padding: 0;
    }
  }

  &__pages {
    width: max-content;

    background-color: #e9e9e9;
    border-radius: 8px;

    padding: 8px 16px;

    @include bigMobile {
      display: none;
    }
  }

  &__page {
    @include font(16, 22, 700);
    letter-spacing: 0.02em;
    color: #2b2b2b;
  }

  &__close {
  }

  &__footer {
    @include flex-container(column, center, center);
    gap: 16px;

    @include mobile {
      @include flex-container(column, center, flex-start);
    }
  }

  &__button-buy {
    @include mobile {
      width: 100%;
    }
  }
}
.card-slider {
  width: 100%;

  margin-bottom: 32px;

  &__wrapper {
    position: relative;

    @include flex-container(row, flex-start);

    gap: 119px;

    @include bigMobile {
      @include flex-container(column-reverse, space-between, center);

      gap: 32px;
    }
  }

  &__wrapper-main {
    max-width: 825px;
    width: 100%;

    @include flex-container(row, space-between, center);

    gap: 16px;

    @include bigMobile {
      justify-content: center;
    }
  }

  &__modal-prev,
  &__modal-next {
    align-self: center;

    @include bigMobile {
      display: none;
    }
  }

  &__pagination {
    align-self: flex-end;

    @include bigMobile {
      margin: 0 auto;
    }
  }
}
</style>