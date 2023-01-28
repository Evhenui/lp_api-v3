<template>
  <div class="checkbox">
    <label class="checkbox__label" >
    <input 
      class="checkbox__input" 
      type="checkbox" 
      :value="modelValue"
      @change="change"
    />
    <span class="checkbox__title">
      <slot></slot>
    </span>
  </label>
  </div>
</template>
  
<script setup>
const checked = ref(false);

const props = defineProps({
    modelValue: Boolean,
})

const emits = defineEmits(['update:modelValue']);

function change() {
  checked.value = !checked.value;
  emits("update:modelValue", checked.value);
}
</script>
  
<style lang="scss" scoped>
.checkbox {
  padding: 0 16px;

  &:hover {
    background-color: #F3F3F3;
  }

  &__label {
    position: relative;
  }
  
  &__input {
    width: 0;
    height: 0;
    position: absolute;
    left: 0;
    top: 50%;
    z-index: -1;
    opacity: 0;
  }

  &__title {
    @include flex-container(row, flex-start, center);
    gap: 16px;

    letter-spacing: 0.02em;

    padding: 8px 0;

    user-select: none;

    &:before {
      content: "";

      width: 16px;
      height: 16px;

      display: inline-block;
      flex: 0 0 auto;
  
      border: 1px solid #CDCFD0;
      border-radius: 4px;
      background-repeat: no-repeat;
      background-position: center;

      transition: 0.2s ease;

      @include bigMobile {
        width: 24px;
        height: 24px;
      }
    }
  }

  &__input:not(:checked) + &__title:hover::before {
    border-color: #f36c21;
  }

  &__input:checked + &__title::before {
    border-color: #f36c21;
    background-color: #f36c21;
    background-image: url("~/assets/icons/check-icon.svg");
  }
}
</style>