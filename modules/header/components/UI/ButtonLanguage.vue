<template>
  <button class="button-language" :class="language">
    <div class="button-language__image">
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_6931_1499)">
          <rect width="20" height="11" fill="#0082D1" />
          <rect y="11" width="20" height="11" fill="#FFD100" />
        </g>
        <defs>
          <clipPath id="clip0_6931_1499">
            <rect width="20" height="20" rx="10" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
    <span class="button-language__title ua">UA</span>
    <span class="button-language__title ru">RU</span>
  </button>
</template>

<script setup>
defineProps(['language']);
</script>

<style lang="scss" scoped>
.button-language {
  width: max-content;

  @include flex-container(row, flex-start, center);

  border: 1px solid #e9e9e9;
  border-radius: 8px;

  padding: 8px 16px;
  gap: 8px;

  &.active {
    border-color: #f36c21;
  }

  &.ua {
    .button-language__title.ru {
      display: none;
    }
  }

  &.ru {
    .button-language__image {
      display: none;
    }
    .button-language__title.ua {
      display: none;
    }
  }

  &__image {
    font-size: 0;
  }

  &__title {
    @include font(14, 18, 700);
    color: white;
  }
}
</style>
