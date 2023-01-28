<template>
  <button
    class="button-buy"
    :class="[state, { disabled: inactive }, { buy: !inactive }, { normal: normalState }]"
    :disabled="inactive"
  >
    <div class="button-buy__images">
      <img
        class="button-buy__image buy-normal"
        src="~~/assets/icons/card-buy-normal.svg"
        alt="buy"
      />
      <img
        class="button-buy__image buy"
        src="~~/assets/icons/card-buy.svg"
        alt="buy"
      />
      <img
        class="button-buy__image report"
        src="~~/assets/icons/card-report.svg"
        alt="report"
      />
      <img
        class="button-buy__image pre-order"
        src="~~/assets/icons/card-pre-order.svg"
        alt="pre order"
      />
    </div>
    <div class="button-buy__titles">
      <span class="button-buy__title buy">Купить</span>
      <span class="button-buy__title report">Сообщить</span>
      <span class="button-buy__title pre-order">Предзаказ</span>
    </div>
  </button>
</template>

<script setup>
defineProps({
  state: { type: String, required: false },
  inactive: { type: Boolean, required: false },
  normalState: { type: Boolean, required: false },
});
</script>

<style lang="scss" scoped>
.button-buy {
  width: 100%;

  @include flex-container(row, center, center);

  border-radius: 6px;

  padding: 8px;
  gap: 8px;

  &.buy {
    background-color: #f36c21;

    &:hover {
      background-color: #FF5B00;
    }

    &:active {
      background-color: #AC450B;
    }

    &:disabled {
      background-color: #8A8A8A;
    }

    .button-buy__image.buy {
      display: block;
    }

    .button-buy__title.buy {
      display: block;
    }
  }

  &.report {
    background-color: #8a8a8a;

    .button-buy__image.report {
      display: block;
    }

    .button-buy__title.report {
      display: block;
    }
  }

  &.pre-order {
    background-color: #4490bb;

    .button-buy__image.pre-order {
      display: block;
    }

    .button-buy__title.pre-order {
      display: block;
    }
  }

  &.disabled {
    background-color: #8a8a8a;

    .button-buy__image.report {
      display: block;
    }

    .button-buy__title.report {
      display: block;
    }

    .button-buy__image.buy,
    .button-buy__image.pre-order {
      display: none;
    }

    .button-buy__title.buy,
    .button-buy__title.pre-order {
      display: none;
    }
  }
  &.normal {
    border: 1px solid #f36c21;
    border-radius: 8px;

    background-color: rgba(243, 108, 33, 0.1);

    @include bigMobile {
      border-radius: 6px;

      background-color: #f36c21;

      gap: 8px;

      .button-buy__image.buy {
        display: block;

        @include bigMobile {
          width: 24px;
          height: 24px;
        }
      }
    }

    .button-buy__image.buy-normal {
      display: block;

      @include bigMobile {
        display: none;
      }
    }

    .button-buy__title.buy {
      display: block;

      color: #f36c21;

      @include bigMobile {
        @include font(18, 24, 400);

        color: white;
      }
    }
  }

  &__image {
    width: 24px;
    height: 24px;

    display: none;

    color: white;

    @include bigMobile {
      width: 16px;
      height: 16px;
    }
  }

  &__title {
    display: none;

    @include font(18, 24, 400);
    letter-spacing: 0.02em;
    color: white;

    @include bigMobile {
      @include font(12, 16, 400);
    }
  }
}
</style>
