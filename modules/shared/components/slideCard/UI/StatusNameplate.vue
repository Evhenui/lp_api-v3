<template>
  <div
    class="button-status"    
    :class="getStatus()"
  >
    <div class="button-status__images">
      <svg class="button-status__image in-stock" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.33203 10.417L8.83203 12.917L14.6654 7.08366" stroke="#159822" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10.5013 18.3337C15.1037 18.3337 18.8346 14.6027 18.8346 10.0003C18.8346 5.39795 15.1037 1.66699 10.5013 1.66699C5.89893 1.66699 2.16797 5.39795 2.16797 10.0003C2.16797 14.6027 5.89893 18.3337 10.5013 18.3337Z" stroke="#159822" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>

      <svg class="button-status__image not-available" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_7240_14066)">
        <path d="M7.64218 12.357L9.9992 10M12.3562 7.64298L9.9992 10M9.9992 10L7.64218 7.64298M9.9992 10L12.3562 12.357" stroke="#393D38" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10.0013 18.3337C14.6037 18.3337 18.3346 14.6027 18.3346 10.0003C18.3346 5.39795 14.6037 1.66699 10.0013 1.66699C5.39893 1.66699 1.66797 5.39795 1.66797 10.0003C1.66797 14.6027 5.39893 18.3337 10.0013 18.3337Z" stroke="#393D38" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
        <clipPath id="clip0_7240_14066">
        <rect width="20" height="20" fill="white"/>
        </clipPath>
        </defs>
      </svg>

      <svg class="button-status__image pre-order" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.5 1.66699L12.5 1.66699" stroke="#4490BB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10 8.33301L10 11.6663" stroke="#4490BB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9.9987 18.3333C13.6806 18.3333 16.6654 15.3486 16.6654 11.6667C16.6654 7.98477 13.6806 5 9.9987 5C6.3168 5 3.33203 7.98477 3.33203 11.6667C3.33203 15.3486 6.3168 18.3333 9.9987 18.3333Z" stroke="#4490BB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>

      <svg class="button-status__image ends" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_3986_35023)">
        <path d="M10 5.83301L10 10.833" stroke="#EB1717" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10 14.1753L10.0083 14.1661" stroke="#EB1717" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10.0013 18.3337C14.6037 18.3337 18.3346 14.6027 18.3346 10.0003C18.3346 5.39795 14.6037 1.66699 10.0013 1.66699C5.39893 1.66699 1.66797 5.39795 1.66797 10.0003C1.66797 14.6027 5.39893 18.3337 10.0013 18.3337Z" stroke="#EB1717" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
        <clipPath id="clip0_3986_35023">
        <rect width="20" height="20" fill="white"/>
        </clipPath>
        </defs>
      </svg>
    </div>
    <div class="button-status__titles">
      <span class="button-status__title in-stock">В наличии</span>
      <span class="button-status__title not-available">Нет в наличии</span>
      <span class="button-status__title ends">Заканчивается</span>
      <span class="button-status__title pre-order">Предзаказ</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  status: { type: String, required: false },
  changeView: { type: Boolean, required: false },
  inactive: { type: Boolean, required: false },
});

function getStatus() {
  if(props.status === 'inStock') {
    return 'in-stock';
  } else if (props.status === 'ends') {
    return 'ends';
  } else if(props.status === 'preOrder') {
    return 'pre-order';
  } else {
    return 'not-available';
  }
}
</script>

<style lang="scss" scoped>
.button-status {
  width: max-content;
  min-height: 28px;

  @include flex-container(row, center, center);

  border: 1px solid;
  border-radius: 4px;

  padding: 4px;
  gap: 8px;

  &:disabled {
    display: none
  }

  &.filter &__title {
    @include font(12, 16, 400);
  }

  @include bigMobile {
    width: max-content;

    padding: 0;
  }

  &.in-stock {
    border-color: #159822;

    @include bigMobile {
      border: none;
    }

    .button-status__image.in-stock {
      display: block;
    }

    .button-status__title.in-stock {
      display: block;
    }
  }

  &.ends {
    border-color: #e25750;

    @include bigMobile {
      border: none;
    }

    .button-status__image.ends {
      display: block;
    }

    .button-status__title.ends {
      display: block;
    }
  }

  &.not-available {
    border-color: #393d38;

    @include bigMobile {
      border: none;
    }

    .button-status__image.not-available {
      display: block;
    }

    .button-status__title.not-available {
      display: block;
    }
  }

  &.pre-order {
    border-color: #4490bb;

    @include bigMobile {
      border: none;
    }

    .button-status__image.pre-order {
      display: block;
    }

    .button-status__title.pre-order {
      display: block;
    }
  }

  &.inactive {
    border-color: #393d38;

    @include bigMobile {
      border: none;
    }

    cursor: auto;

    .button-status__image.not-available {
      display: block;
    }

    .button-status__image.in-stock {
      display: none;
    }

    .button-status__image.ends {
      display: none;
    }

    .button-status__image.pre-order {
      display: none;
    }

    .button-status__title.not-available {
      display: block;
    }

    .button-status__title.in-stock {
      display: none;
    }

    .button-status__title.ends {
      display: none;
    }

    .button-status__title.pre-order {
      display: none;
    }
  }

  &__images {
    @include bigMobile {
      display: none;
    }
  }

  &__image {
    display: none;

    &.in-stock {
      color: #159822;
    }

    &.ends {
      color: #e25750;
    }

    &.not-available {
      color: #393d38;
    }

    &.pre-order {
      color: #4490bb;
    }
  }

  &__title {
    display: none;

    @include font(12, 16, 400);
    letter-spacing: 0.02em;

    @include bigMobile {
      @include font(10, 13, 400);
    }

    &.in-stock {
      color: #159822;
    }

    &.ends {
      color: #e25750;
    }

    &.not-available {
      color: #393d38;
    }

    &.pre-order {
      color: #4490bb;
    }
  }
}
</style>
          