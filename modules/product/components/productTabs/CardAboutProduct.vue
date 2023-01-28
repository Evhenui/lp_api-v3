<template>
  <article class="product-about">
    <div class="gallery">
      <div class="slider-main">
        <ImageDesktopSlider :sliderValues="items" @showModal="showModal"/>
        <ImageModalSlider :sliderValues="items"/>
      </div>
      <div class="info__block">
        <div class="advantage">
          <h2 class="info__block-title">Преимущества</h2>
          <div class="advantage__w">
            <div class="advantage__img-w">
              <img class="advantage__img" src="~~/assets/icons/cardAdvantage1.svg" alt="" />
            </div>
            <div class="advantage__img-w">
              <img class="advantage__img" src="~~/assets/icons/cardAdvantage2.svg" alt="" />
            </div>
            <div class="advantage__img-w">
              <img class="advantage__img" src="~~/assets/icons/cardAdvantage3.svg" alt="" />
            </div>
            <div class="advantage__img-w">
              <img class="advantage__img" src="~~/assets/icons/cardAdvantage4.svg" alt="" />
            </div>
            <div class="advantage__img-w">
              <img class="advantage__img" src="~~/assets/icons/cardAdvantage5.svg" alt="" />
            </div>
            <div class="advantage__img-w">
              <img class="advantage__img" src="~~/assets/icons/cardAdvantage6.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="read-more">
        <a class="read-more__link" href="#description">
          <p class="read-more__text">Подробнее о товаре</p>
          <svg class="read-more__img" width="20" height="20" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M12 8V16M12 16L15.5 12.5M12 16L8.5 12.5" stroke="#F36C21" stroke-width="1.5" stroke-linecap="round"
              stroke-linejoin="round" />
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              stroke="#F36C21" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </a>
      </div>
    </div>
    <div class="info">
      <div class="info__block">
        <div class="sale">
          <div class="sale__info-w">
            <div class="sale__logo">Акция!</div>
            <div class="sale__info">
              <p class="sale__title">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut
              </p>
              <p class="sale__term">С 26 октября по 9 ноября 2021</p>
            </div>
          </div>
          <button class="sale__details">Узнать детали</button>
        </div>
      </div>
      <div class="info__block" ref="blockPrice">
        <div class="price">
          <div class="price__money">
            <div class="price__money-sale">
              <p class="price__money-sale-old">1 625 ₴</p>
              <p class="price__money-sale-new">2 625 ₴</p>
            </div>
         <!--    <div class="price__money-regular" v-else>3113 грн</div> -->
            <div class="price__money-btn-w">
              <ButtonBuy class="price__btn-buy" :normalState="true"/>

              <button class="buy__credit">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="#F36C21" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M15.5 16C15.7761 16 16 15.7761 16 15.5C16 15.2239 15.7761 15 15.5 15C15.2239 15 15 15.2239 15 15.5C15 15.7761 15.2239 16 15.5 16Z"
                    fill="#F36C21" stroke="#F36C21" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M8.5 9C8.77614 9 9 8.77614 9 8.5C9 8.22386 8.77614 8 8.5 8C8.22386 8 8 8.22386 8 8.5C8 8.77614 8.22386 9 8.5 9Z"
                    fill="#F36C21" stroke="#F36C21" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M16 8L8 16" stroke="#F36C21" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
                Купить в кредит
              </button>

            </div>
          </div>
          <div class="price__info">
            <div class="price__info-facilities">
              <AvailbilityLine :onlyStatus="'in-stock'"/> 
              <!-- <div class="price__info-facilities-availability">В наличии</div> -->
           <!--    <div class="price__info-facilities-item">
                <img
                  class="price__info-facilities-item-img"
                  src="/icons/cardPriceDelivery.svg"
                  alt=""
                />
                <p class="price__info-facilities-item-text">
                  бесплатная доставка
                </p>
              </div>
              <div class="price__info-facilities-item">
                <img
                  class="price__info-facilities-item-img"
                  src="/icons/cardPriceCredit.svg"
                  alt=""
                />
                <p class="price__info-facilities-item-text">оплата частями</p>
              </div>
              <div class="price__info-facilities-item">
                <img
                  class="price__info-facilities-item-img"
                  src="/icons/cardPriceReturn.svg"
                  alt=""
                />
                <p class="price__info-facilities-item-text">
                  14 дней обмен/возврат
                </p> 
              </div> -->
            </div>
            <HeaderActions />
          </div>
        </div>
      </div>
      <div class="info__block">
        <div class="delivery">
          <h2 class="info__block-title">Доставка</h2>
          <div class="delivery__nav">
            <div class="delivery__nav-line"></div>
            <ul class="delivery__nav-list">
              <li class="delivery__nav-item">
                <p class="delivery__nav-title" @click="currLabel = DeliveryLabel.ODESA"
                  :class="{active: currLabel === DeliveryLabel.ODESA}">
                  Одесса
                </p>
              </li>
              <li class="delivery__nav-item">
                <p class="delivery__nav-title" @click="currLabel = DeliveryLabel.UKRAINE"
                  :class="{active: currLabel === DeliveryLabel.UKRAINE}">
                  Украина
                </p>
              </li>
            </ul>
          </div>
          <transition name="fade" mode="out-in" appear>
            <div class="delivery__terms-odesa" v-if="currLabel === DeliveryLabel.ODESA">
              <div class="delivery__terms">
                <span class="delivery__terms-post">Самовывоз</span>
                <div class="delivery__terms-wrp">
                  <span class="delivery__sample">завтра </span>
                  <span class="delivery__terms-cost">Бесплатно</span>
                </div>
              </div>
              <div class="delivery__terms">
                <span class="delivery__terms-post">Курьер</span>
                <div class="delivery__terms-wrp">
                  <span class="delivery__sample">завтра с 10:00 до 17:00 </span>
                  <span class="delivery__terms-cost">Бесплатно</span>
                </div>
              </div>
              <div class="delivery__terms">
                <span class="delivery__terms-post">“Новая Почта”</span>
                <div class="delivery__terms-wrp">
                  <span class="delivery__sample">отправим завтра </span>
                  <span class="delivery__terms-cost">от 56 грн</span>
                </div>
              </div>
            </div>
            <div class="delivery__terms-ukraine" v-else-if="currLabel === DeliveryLabel.UKRAINE">
              <div class="delivery__terms">
                <span class="delivery__terms-post">“Новая Почта” </span>
                <div class="delivery__terms-wrp">
                  <span class="delivery__sample">отправим завтра </span>
                  <span class="delivery__terms-cost">от 56 грн</span>
                </div>
              </div>
              <div class="delivery__terms">
                <span class="delivery__terms-post">“УкрПочта” </span>
                <div class="delivery__terms-wrp">
                  <span class="delivery__sample">отправим завтра </span>
                  <span class="delivery__terms-cost">от 56 грн</span>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
      <div class="info__block">
        <div class="payments">
          <h2 class="info__block-title">Способы оплаты</h2>
          <div class="payments__w">
            <div class="payments__item">
              <img class="payments__item-img" src="~/assets/icons/cardGooglePay.svg" alt="" />
            </div>
            <div class="payments__item">
              <img class="payments__item-img" src="~/assets/icons/cardApplePay.svg" alt="" />
            </div>
            <div class="payments__item">
              <img class="payments__item-img" src="~/assets/icons/card24Pay.svg" alt="" />
            </div>
            <div class="payments__item">
              <img class="payments__item-img" src="~/assets/icons/cardVisaPay.svg" alt="" />
            </div>
            <div class="payments__item">
              <img class="payments__item-img" src="~/assets/icons/cardMastercardPay.svg" alt="" />
            </div>
            <div class="payments__item">
              <img class="payments__item-img" src="~/assets/icons/cardInstallmentPay.svg" alt="" />
            </div>
            <div class="payments__item">
              <img class="payments__item-img" src="~/assets/icons/cardInInstallmentPay.svg" alt="" />
            </div>
            <div class="payments__item">
              <p class="payments__item-text">Наличный</p>
            </div>
            <div class="payments__item">
              <p class="payments__item-text">Безналичный расчет</p>
            </div>
          </div>
        </div>
      </div>
      <div class="info__block">
        <div class="guarantee">
          <h2 class="info__block-title">Гарантия</h2>
          <div class="guarantee__info">
            <img class="guarantee__info-img" src="~/assets/icons/cardGuarantee.svg" alt="" />
            <div class="guarantee__info-text-w">
              <p class="guarantee__info-text">
                <b>100%</b> гарантия качества от производителя.
              </p>
              <p class="guarantee__info-text">
                Возврат/обмен осуществляется в течении 14 дней
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup>
import ImageDesktopSlider from '~~/modules/product/components/imageSlider/sections/ImageDesktopSlider.vue';
import ButtonBuy from '~~/modules/shared/components/buttons/ButtonBuy.vue';
import AvailbilityLine from '~~/modules/shared/components/slideCard/AvailabilityLine.vue';
import HeaderActions from '~~/modules/shared/components/slideCard/HeaderActions.vue';
import ImageModalSlider from '~~/modules/product/components/imageSlider/sections/ImageModalSlider.vue';
import { useSliderCardStore } from "~~/store/sliderCard";

const slider = useSliderCardStore();
const activeModal = slider.activeSliderModal;

const emits = defineEmits(["getPriceEl"]);

defineProps({
  items: { type: Object, required: true },
});

const DeliveryLabel = {
  ODESA: 1,
  UKRAINE: 0
};

const isSale = ref(false);
const currLabel = ref(1);

const blockPrice = ref(null);

function showModal(state) {
  if(state) {
    activeModal();
    document.body.style.overflow = "hidden";
  }
}

function sendEmits() {
  emits("getPriceEl", blockPrice.value);
}

onMounted(() => {
  sendEmits();
})
</script>

<style lang="scss" scoped>
.buy {
  max-width: 274px;
  width: 100%;

  @include flex-container(row, center, center);
  padding: 8px 0;

  @include font(18, 24);
  text-align: center;

  color: white;
  background: #f36c21;
  border-radius: 6px;

  @include mobile {
    max-width: none;
  }

  &__credit {
    max-width: 274px;
    width: 100%;

    @include flex-container(row, center, center);
    gap: 16px;
    padding: 8px 0;

    @include font(18, 24);
    text-align: center;

    color: #F36C21;

    border: 1px solid #F36C21;
    border-radius: 6px;

    transition: 0.2s ease;

    &:hover {
      background-color: #FFE4D6;
      border: 1px solid #E05507;
      color: #E05507;
    }

    @include mobile {
      max-width: none;
    }
  }
}

.product-about {
  display: none;

  --local-pad: 16px;
  --mobile-width: #{$mobile-big-width};
  --header-height: 136px;

  width: 100%;
  gap: 16px;

  @include bigMobile() {
    --height-header: 56px;
	}

  &.active {
    @include flex-container;

    @include bigMobile {
      flex-direction: column;
    }
  }
}

.gallery {
  max-width: 590px;
  width: 100%;

  @include flex-container(column, flex-start);
  gap: 16px;

  @include bigMobile {
    max-width: none;
  }

  &__w {
    width: 100%;
    height: 522px;

    background: white;
    box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }
}

.advantage {
  @include flex-container(column, flex-start);
  gap: 16px;

  @include bigMobile {
    gap: 24px;
  }

  &__w {
    width: 100%;

    @include flex-container(row, space-between, center);
    flex-wrap: wrap;
    gap: 24px 40px;

    @include bigMobile {
      justify-content: center;
    }
  }
}

.read-more {
  border: 1px solid #F36C21;
  border-radius: 8px;

  padding: var(--local-pad);

  &__link {
    @include flex-container(row, space-between, center);
    gap: 24px;

    transition: 1s ease;

    &:hover .read-more__text {
      text-decoration: underline;
      color: #E05507;
    }

    &:hover .read-more__img path {
      stroke: #E05507;
    }
  }

  &__text {
    @include font(16, 24, 700);
    color: #F36C21;

    transition: 0.2s ease;
  }

  &__img {
    path {
      transition: 0.2s ease;
    }
  }
}

.info {
  width: 100%;

  @include flex-container(column, flex-start);
  gap: 16px;

  &__block {
    background: white;
    box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.1);
    border-radius: 8px;

    padding: var(--local-pad);
  }

  &__block-title {
    @include font(18, 20, 700);

    @include mobile {
      @include font(18, 20, 500);
    }
  }
}

.sale {
  @include flex-container(row, space-between, center);
  gap: 16px;

  @include smallestScreen {
    flex-direction: column;
    align-items: flex-start;
  }

  &__info-w {
    @include flex-container(row, center, center);
    gap: 16px;
  }

  &__logo {
    max-width: 85px;
    width: 100%;
    height: 85px;

    @include flex-container(row, center, center);

    @include font(18, 24, 700);
    text-align: center;
    color: white;

    background-color: #F73B2F;
    border-radius: 50%;

    @include bigMobile {
      display: none;
    }
  }

  &__info {
    max-width: 488px;
    width: 100%;

    @include flex-container(column, flex-start);
    gap: 8px;

    @include bigMobile {
      max-width: none;
    }
  }

  &__title {
    @include font(20, 24, 700);
    color: red;

    @include bigMobile {
      @include font(14, 16, 500);
    }
  }

  &__term {
    @include font(20, 24);

    @include bigMobile {
      @include font(14, 16);
    }
  }

  &__details {
    max-width: 195px;
    width: 100%;

    align-self: center;

    @include font(20, 24);
    text-align: center;
    color: #F36C21;

    background: rgba(243, 108, 33, 0.1);
    border-radius: 6px;

    padding: 8px 0;

    transition: 0.2s ease;

    &:hover {
      color: #E05507;
      background: rgba(243, 108, 33, 0.5);
    }

    @include bigMobile {
      max-width: 380px;
    }

    @include mobile {
      max-width: none;
    }
  }
}

.price {
  height: 100%;

  @include flex-container(row, space-between, stretch);
  gap: 16px;

  @include bigMobile {
    flex-direction: column;
  }

  &__money {
    width: 100%;

    @include flex-container(column, flex-start);
    gap: 16px;
  }

  &__money-sale {
    @include flex-container(row-reverse, flex-end, center);
    gap: 16px;
  }

  &__money-sale-old {
    @include font(18, 24);
    text-decoration: line-through;

    @include bigMobile {
      @include font;
    }
  }

  &__money-sale-new {
    @include font(48, 52, 500);
    color: #2B2B2B;

    @include bigMobile {
      @include font(24, 28, 500);
    }
  }

  &__money-regular {
    @include font(48, 52, 500);

    @include bigMobile {
      @include font(24, 28, 500);
    }
  }

  &__money-btn-w {
    @include flex-container(row, flex-start, center);
    flex-wrap: wrap;
    gap: 16px 32px;
  }

  &__info {
    height: 100%;

    @include flex-container(column, space-between, flex-end);

    @include bigMobile {
      width: 100%;

      flex-direction: row-reverse;
    }
  }

  &__info-facilities-availability {
    @include flex-container(row, center, center);

    @include font(14, 20);
    color: #00A86B;
    white-space: nowrap;

    background: rgba(21, 152, 34, 0.1);
    border-radius: 4px;

    padding: 3px 10px;
  }

  &__info-facilities-item {
    @include flex-container(row, flex-start, center);
    gap: 8px;
  }

  &__info-facilities-item-img {
    @include mobile {
      width: 24px;
    }
  }

  &__info-facilities-item-text {
    max-width: 100px;
    width: 100%;

    @include font(12, 12);
    text-transform: uppercase;

    color: #F36C21;

    @include mobile {
      @include font(8, 10);
    }
  }

  &__btn-buy {
    max-width: 273px;
    width: 100%;

    gap: 32px;

    @include mobile {
      max-width: 100%;
    }
  }

  &__info-tools {}
}

.delivery {
  @include flex-container(column, space-between, flex-start);
  gap: 24px;

  &__nav {
    width: 100%;

    @include flex-container(column, flex-start);

    position: relative;

    padding-top: 8px;
  }

  &__nav-line {
    width: 100%;
    height: 3px;

    position: absolute;
    top: 0;
    left: 0;

    background-color: #E3E5E6;

    z-index: 0;
  }

  &__nav-list {
    width: 100%;

    @include flex-container(row, flex-start, flex-start);
    gap: 24px;

    overflow-x: auto;

    &::-webkit-scrollbar {
      width: 0;
      height: 2px;
    }

    &::-webkit-scrollbar-track {
      background-color: #B4B6B8;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #F36C21;
    }
  }

  &__nav-item {
  }

  &__nav-title {
    position: relative;

    @include font;
    text-align: center;

    border-bottom: 3px solid #D3D3D3;

    white-space: nowrap;

    padding-bottom: 8px;

    cursor: pointer;
    transition: 0.2s ease;

    z-index: 2;

    &:hover {
      border-bottom: 3px solid #F36C21;
      color: #F36C21;
    }

    &.active {
      border-bottom: 3px solid #F36C21;
      color: #F36C21;
    }

    @include bigMobile {
      @include font;
    }
  }

  &__terms-odesa {
    @include flex-container(column, flex-start);
    gap: 8px;

    @include bigMobile {
      width: 100%;
    }
  }

  &__terms {
    @include flex-container(row, flex-start, center);
    flex-wrap: wrap;
    gap: 8px;

    @include font;
    letter-spacing: 0.02em;
    color: #7A7E80;

    @include bigMobile {
      @include flex-container(row, space-between, center);

      @include font(14, 16);
    }
  }

  &__terms-post {
    font-weight: 700;
    color: #292C2E;

    @include bigMobile {
      font-weight: 500;
    }
  }

  &__terms-cost {
    color: #F36C21;
  }

  &__terms-ukraine {
    @include flex-container(column, flex-start);
    gap: 8px;

    @include bigMobile {
      width: 100%;

      @include flex-container(column, space-between);
    }
  }
}

.payments {
  @include flex-container(column, flex-start);
  gap: 24px;

  @include mobile {
    gap: 16px;
  }

  &__w {
    @include flex-container(row, flex-start, center);
    flex-wrap: wrap;
    gap: 16px;

    @include mobile {
      gap: 8px;
    }
  }

  &__item {
    height: 40px;

    @include flex-container(row, center, center);

    border: 1px solid #F36C21;
    border-radius: 6px;

    padding: 0 12px;
  }

  &__item-img {}

  &__item-text {
    @include font;
    text-align: center;

    white-space: nowrap;
  }
}

.guarantee {
  @include flex-container(column, flex-start);
  gap: 24px;

  @include mobile {
    gap: 16px;
  }

  &__info {
    @include flex-container(row, flex-start, center);
    gap: 16px;
  }

  &__info-img {}

  &__info-text {
    @include font;

    @include mobile {
      @include font(14, 16);
    }
  }
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

.fade-leave-active,
.fade-enter-active {
  transition: all 0.2s ease;
}
</style>
