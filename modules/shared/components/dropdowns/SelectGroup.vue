<template>
  <div
    class="select__w"
    tabindex="0"
    :class="{ active: openList }"
    @click="openList = !openList"
    @blur="openList = false"
  >
    <div class="select">
      <input
        class="select__input"
        type="text"
        disabled
        :placeholder="placeholder"
        :value="choisedValue"
        :class="{ filled: choisedValue.length }"
      />
      <span class="select__caption">{{ caption }}</span>
      <div class="select__arrow">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9.125L12 14.875L18 9.125" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
      </div>
    </div>
    <div class="select__option-list">
      <div
        class="select__option-item"
        v-for="item of selectList"
        :key="item.title"
        @click.stop="
          choisedValue = item.title;
          openList = false;
        "
      >
        {{ item.title }}
      </div>
    </div>
  </div>
</template>
  
  <script setup>
const props = defineProps({
  selectList: { type: Array, required: true },
  placeholder: { type: String, required: false },
  caption: { type: String, required: false },
});

const openList = ref(false);

const choisedValue = ref("");

/*     @Watch("choisedValue")
    changeChoisedValue() {
      this.$emit("input", this.choisedValue);
    } */
</script>
  
<style lang="scss" scoped>
.select {
  width: 100%;

  @include flex-container(row, space-between, center);
  
  &__w {
    position: relative;

    width: 100%;

    @include flex-container(row, space-between, center);

    background-color: white;

    border: 1px solid #d1d1d1;
    border-radius: 8px;

    padding: 8px;

    cursor: pointer;

    &:hover {
      border-color: #0e0f0f;
    }

    &.active {
      border-color: #0e0f0f;

      .select__arrow {
        transform: rotateZ(180deg);
      }

      .select__icon {
        transform: rotateZ(180deg);
      }

      .select__option-list {
        opacity: 1;
        visibility: visible;
      }
    }
  }

  &__input {
    @include font;
    color: #0e0f0f;

    cursor: pointer;

    &:focus {
      & + .select__caption {
        @include font(12, 12);

        top: 0px;
        left: 12px;

        background-color: white;

        padding: 0 4px;
      }
    }

    &.filled {
      & + .select__caption {
        @include font(12, 12);

        top: 0px;
        left: 12px;

        background-color: white;

        padding-inline: 4px;
      }
    }
  }

  &__arrow {
    font-size: 0;

    transition: transform .2s ease-in-out;
  }

  &__caption {
    @include font;
    color: #7a7e80;

    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);

    pointer-events: none;

    transition: 0.1s ease-out;
  }

  &__icon {
    @include fixedHW(24px, 24px);

    transition: 0.2s ease-in-out;
  }

  &__option-list {
    position: absolute;
    top: 42px;
    left: 0;
    z-index: 500;

    width: 100%;

    background-color: white;

    border: 1px solid #d1d1d1;
    border-radius: 8px;

    transition: 0.2s ease-in-out;

    opacity: 0;
    visibility: hidden;

    &:hover {
      border-color: #0e0f0f;
    }
  }

  &__option-item {
    @include font;

    padding: 8px;

    transition: 0.2s ease-in-out;

    &:first-child {
      border-top-right-radius: inherit;
      border-top-left-radius: inherit;
    }

    &:last-child {
      border-bottom-left-radius: inherit;
      border-bottom-right-radius: inherit;
    }

    &:hover {
      background-color: #ffe4d6;
    }
  }
}
</style>