<template>
  <li class="slider__list-item">
    <div class="slider__list-item-img-w">
     <img class="slider__list-item-img" :src="`/img/${aboutCard.img}.png`" alt="" />
    </div>
    <div class="slider__list-item-info">
      <p class="slider__list-item-info-title">{{ aboutCard.title }}</p>
      <p
        class="slider__list-item-info-text"
        :class="{
          active: isActive,
        }"
        ref="itemText"
      >
        {{ _T(aboutCard.text) }}
      </p>
      <div
        class="slider__list-item-btn"
        v-if="isMobile && isTextBiggerThanWrapper"
        @click="isActive = !isActive"
      >
        {{ isActive ? 'Свернуть' : 'Развернуть' }}
      </div>
    </div>
  </li>
</template>

<script setup>
const { aboutCard, isMobile } = defineProps(['aboutCard', 'isMobile']);

const itemText = ref(null);

const isTextBiggerThanWrapper = ref(false);
const isActive = ref(false);

function calcItemTextHeight() {
  isTextBiggerThanWrapper.value = itemText.value.scrollHeight > 180;
};

function onResize() {
  calcItemTextHeight();
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
.slider {
  &__list-item {
    --item-width: 0;
    min-width: var(--item-width);
    height: 600px;

    @include flex-container;
    align-items: center;
    gap: 48px;

    background-color: white;

    box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);
    border-radius: 8px;

    padding-right: 48px;

    transform: scaleY(0.8);
    transition: 0.7s cubic-bezier(0.18, 0.17, 0.74, 0.76);
    @include smallScreen {
      height: 540px;

      gap: 32px;

      box-shadow: none;

      padding-right: 32px;
    }

    @include bigMobile {
      min-width: 100%;
      height: auto;

      flex-direction: column;
      gap: 16px;

      padding: 0;
    }

    &.active {
      transform: scaleY(1);
    }
  }

  &__list-item-img-w {
    width: 100%;
    height: 100%;

    box-shadow: inherit;

    border-top-left-radius: inherit;
    border-bottom-left-radius: inherit;

    @include bigMobile {
      height: 450px;

      box-shadow: none;

      border-top-right-radius: inherit;
      border-bottom-left-radius: unset;
    }

    @include mobile {
      height: 300px;
    }
  }

  &__list-item-img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    box-shadow: inherit;

    border-top-left-radius: inherit;
    border-bottom-left-radius: inherit;

    @include bigMobile() {
      box-shadow: none;

      border-top-right-radius: inherit;
      border-bottom-left-radius: unset;
    }
  }

  &__list-item-info {
    width: 100%;
    max-width: 756px;

    @include flex-container(column, center,);
    gap: 56px;

    @include smallScreen {
      gap: 28px;
    }

    @include bigMobile {
      gap: 8px;

      padding: 0 16px;
    }
  }

  &__list-item-info-title {
    @include font(30, 40, 600);
    color: #F36C21;
    letter-spacing: 0.02em;

    @include smallScreen {
      @include font(24, 32, 600);
    }

    @include bigMobile {
      @include font(20, 30, 600);
    }
  }

  &__list-item-info-text {
    @include font(20, 28);
    letter-spacing: 0.02em;

    transition: 0.2s ease;

    @include smallScreen {
      @include font(18, 24);
    }

    @include bigMobile {
      @include font(18, 24);

      @include lineClamp(8);

      height: 180px;
    }

    &.active {
      height: auto;
      display: block;
    }
  }

  &__list-item-btn {
    @include font(18, 24);
    letter-spacing: 0.02em;
    text-align: left;
    color: #F36C21;

    cursor: none;
  }
}
</style>
