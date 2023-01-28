<template>
  <div class="info-card">
    <div class="info-card__image">
      <img src="/img/blog-item.png" alt="item name">
    </div>
    <div class="info-card__content">
      <div class="info-card__header">
        <TypeCard :typeCard="data.typeCard" />
        <span class="info-card__data">{{ data.data }}</span>
        <AmountView :amountView="data.view" />
      </div>
      <div class="info-card__body">
        <h3 class="info-card__title">{{ data.title }}</h3>
        <p class="info-card__subtitle"> {{ data.subtitle }}</p>
      </div>
      <div class="info-card__footer">
        <GoTo>Перейти</GoTo>
      </div>
    </div>
  </div>
</template>

<script setup>
import TypeCard from '~~/modules/shared/components/infoCard/UI/TypeCard.vue';
import AmountView from '~~/modules/shared/components/infoCard/UI/AmountView.vue';
import GoTo from '~~/modules/shared/components/buttons/GoTo.vue';

defineProps({
  data: { type: Object, required: true},
});
</script>

<style lang="scss" scoped>
.info-card {
  box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);
  background-color: white;

  border-radius: 8px;

  overflow: hidden;

  &__image {
    & > img {
      width: 100%;
    }
  }

  &__content {
    height: 100%;

    @include flex-container(column, flex-start, center);

    padding: 16px 8px;
    gap: 16px;

    @include bigMobile {
      gap: 32px;
    }
  }

  &__header {
    width: 100%;

    @include flex-container(row, space-between, center);

    gap: 8px;
  }

  &__data {
    @include font(16, 22);
    letter-spacing: 0.02em;
    color: #393D38;
  }

  &__body {
    @include flex-container(column, flex-start, center);
    flex: 1 1 auto;

    gap: 8px;
  }

  &__title {
    @include font(20, 30, 600);
    color: #2B2B2B;
    text-transform: uppercase;
    text-align: center;

    @include bigMobile {
      @include font(18, 22, 600);
      text-transform: none;
    }
  }

  &__subtitle {
    @include font(16, 22);
    color: #8A8A8A;
    text-align: center;
    letter-spacing: 0.02em;

    @include bigMobile {
      display: none;
    }
  }

  &__footer {
  }
}
</style>