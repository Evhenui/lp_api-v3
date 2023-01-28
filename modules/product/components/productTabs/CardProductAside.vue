<template>
  <aside class="aside-card" >
    <div class="aside-card__w">
      <div class="aside-card__img-w">
        <img class="aside-card__img" src="/img/card-product-aside.png" alt="" />
      </div>
      <div class="aside-card__money" @click="isSale = !isSale">
        <div class="aside-card__money-sale" v-if="isSale">
          <p class="aside-card__money-sale-old">3500 грн</p>
          <p class="aside-card__money-sale-new">3113 грн</p>
        </div>
        <div class="aside-card__money-regular" v-else>3113 грн</div>
      </div>
      <p class="aside-card__code">
        Код: <span>{{ code }}</span>
      </p>
      <h2 class="aside-card__title">Наружная IP Камера</h2>
      <p class="aside-card__article">GV-074-IP-H-COА14 COO21 - 201080p</p>
      <ButtonBuy :state="'buy'" :inactive="false">Купить</ButtonBuy>
    </div>
  </aside>
</template>

<script setup>
import ButtonBuy from "~~/modules/shared/components/buttons/ButtonBuy.vue";

defineProps({
  code: { type: String, required: true },
  navHeight: { type: Number, required: true },
});

const isSale = ref(true);
</script>

<style lang="scss" scoped>
.aside-card {
/*   --top-aside: 0;
  position: sticky;
  top: calc(16px + var(--height-header) + var(--top-aside));

  @include bigMobile {
    display: none;
  } */

  &__w {
    width: 346px;

    @include flex-container(column, center, center);
    gap: 8px;

    background-color: white;
    box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);
    border-radius: 8px;

    padding: var(--local-pad);
  }

  &__img-w {
    max-width: 250px;
    width: 100%;
  }

  &__img {
  }

  &__money {
    width: 100%;

    @include flex-container(row, flex-start, center);
    gap: 8px;
  }

  &__money-sale {
    @include flex-container(row-reverse, flex-start, center);
    gap: 8px;
  }

  &__money-sale-old {
    @include font(18, 24);
    text-decoration: line-through;
  }

  &__money-sale-new {
    @include font(24, 32, 500);
    color: red;
  }

  &__money-regular {
    @include font(24, 32, 500);
  }

  &__code {
    align-self: flex-start;
    @include font;
    letter-spacing: 0.02em;
  }

  &__title {
    align-self: flex-start;
    @include font;
    letter-spacing: 0.02em;
  }

  &__article {
    align-self: flex-start;
    @include font(16, 22, 600);
    letter-spacing: 0.02em;
  }
}
</style>
