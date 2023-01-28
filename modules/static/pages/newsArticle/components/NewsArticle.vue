<template>
  <div>
 <!--    <section class="banner">
      <div class="banner__img-w">
        <picture>
          <source
            srcset="img/NewsArticleBannerMob.png"
            media="(max-width: 680px)"
          />
          <img
            class="banner__img"
            src="img/NewsArticleBanner.png"
            alt=""
          />
        </picture>
      </div>
      <div class="banner__content">
        <div class="banner__content-column">
          <h1 class="banner__title">Система защиты остатков склада</h1>
        </div>
      </div>
    </section> -->
    <section class="news-article">
      <div class="news-article__content-wrp">
        <div class="news-article__info-header">
          <span class="news-article__data"
            >Опубликовано: {{ "20.04.2022" }}</span
          >
          <AmountView :large="true" :amountView="'12398'" />
        </div>
        <div class="news-article__content">
          <h4 class="news-article__content-title">Содержание</h4>
          <div>
            <a class="news-article__content-item" href="#news-article__anchor1"
              >Что означает «Система защиты остатков склада»?</a
            >
          </div>
          <div>
            <a class="news-article__content-item" href="#news-article__anchor2"
              >Как это работает?</a
            >
          </div>
          <div>
            <a class="news-article__content-item" href="#news-article__anchor3"
              >На какие группы товаров распространяется «Система защиты остатков
              склада»?</a
            >
          </div>
          <div>
            <a class="news-article__content-item" href="#news-article__anchor4"
              >Срок действия программы?</a
            >
          </div>
          <div>
            <a class="news-article__content-item" href="#news-article__anchor5"
              >Почему это выгодно нашим клиентам?</a
            >
          </div>
        </div>
      </div>

      <div class="news-article__w">
        <div class="news-article__info">
          <h4 class="news-article__info-title" id="news-article__anchor1">
            Что означает «Система защиты остатков склада»?
          </h4>
          <p class="news-article__info-text">
            Цены на товары то повышаются, то понижаются – это обычный рыночный
            механизм. Хорошо, если вы успели закупить партию товара до того, как
            на него выросла цена.
          </p>
          <p class="news-article__info-text">А если наоборот?</p>
          <p class="news-article__info-text">
            Специальная программа от
            <a href="#" class="news-article__info-text-link"></a>LogicPower
            «Система защиты остатков склада» разработана нашими специалистами
            специально, чтобы минимизировать риски оптовых клиентов компании в
            случаях, когда снижается стоимость некоторых товаров, как для
            оптовой, так и для розничной продажи.
          </p>
        </div>
        <div class="news-article__info">
          <h4 class="news-article__info-title" id="news-article__anchor2">
            Как это работает?
          </h4>
          <p class="news-article__info-text">
            Допустим, вы купили 100 аккумуляторов по цене $20 и до изменения
            цены в сторону уменьшения ($15) успели продать 20 батарей. Мы
            пересчитаем Вам оставшиеся 80 аккумуляторов по новой цене и
            перечислим разницу на бонусный счет контрагента, чтобы Вы могли
            использовать данные средства при следующем заказе.
          </p>
        </div>
        <div class="news-article__info">
          <h4 class="news-article__info-title" id="news-article__anchor3">
            На какие группы товаров распространяется «Система защиты остатков
            склада»?
          </h4>
          <p class="news-article__info-text">
            Программа лояльности «Система защиты остатков склада»
            распространяется на всю продукцию торговых марок LogicPower и
            GreenVision.
          </p>
        </div>
        <div class="news-article__info">
          <h4 class="news-article__info-title" id="news-article__anchor4">
            Срок действия программы?
          </h4>
          <p class="news-article__info-text">
            Программы защиты остатков склада от LogicPower действует в течение
            одного месяца со дня оформления покупки партии товара.
          </p>
        </div>
        <div class="news-article__info">
          <h4 class="news-article__info-title" id="news-article__anchor5">
            Почему это выгодно нашим клиентам?
          </h4>
          <p class="news-article__info-text">
            Наши сотрудники тщательно следят за соблюдением розничного
            индикатива цен на продукцию LogicPower, как в сторону увеличения,
            так и в сторону уменьшения.
          </p>
          <p class="news-article__info-text">
            Наши друзья и партнеры не должны терять свою прибыль, если стоимость
            товара уменьшилась.
          </p>
        </div>
      </div>
      <div class="more">
        <h5 class="more__title">Читайте также:</h5>
        <div class="more__card-list">
          <InfoCard
            class="more__item"
            v-for="(item, index) in dataCard"
            :key="index"
            :data="item"
          />
  
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import AmountView from "~~/modules/shared/components/infoCard/UI/AmountView.vue";
import InfoCard from "~~/modules/shared/components/infoCard/InfoCard.vue";

const dataCard = [
  {
    typeCard: {
      name: "Статья",
      type: "article",
    },
    data: "20.04.22",
    view: "132476",
    title: "Лучшие комплекты бесперебойного питания для частного дома",
    subtitle:
      "Как правило, частные дома и коттеджи получают электроэнергию из общей сети.",
  },
  {
    typeCard: {
      name: "Обзор",
      type: "review",
    },
    data: "20.04.22",
    view: "132476",
    title: "Лучшие комплекты бесперебойного питания для частного дома",
    subtitle:
      "Как правило, частные дома и коттеджи получают электроэнергию из общей сети.",
  },
  {
    typeCard: {
      name: "Новости",
      type: "news",
    },
    data: "20.04.22",
    view: "132476",
    title: "Лучшие комплекты бесперебойного питания для частного дома",
    subtitle:
      "Как правило, частные дома и коттеджи получают электроэнергию из общей сети. eqw eq weq we qwe qw eqw e",
  },
];
</script>

<style lang="scss">
.news-article {
  @include flex-container(column, flex-start, center);
  gap: 96px;

  background-color: white;

  @extend %padding-wrp;
  padding-bottom: 80px;

  &__content-wrp {
    @extend %width-content;

    @include flex-container(column, space-between);

    gap: 16px;
  }

  &__info-header {
    @include flex-container(row, space-between, center);
  }

  &__data {
    @include font(20, 24, 600);
    color: #747474;
  }

  &__content {
    @extend %width-content;

    @include flex-container(column, flex-start);
    gap: 32px;

    background: #f8f8f8;
    border-radius: 12px;

    padding: 32px;

    @include mobile {
      gap: 24px;

      border-radius: 8px;

      padding: 24px;
    }
  }

  &__content-title {
    @include font(32, 42, 600);

    margin-bottom: 16px;

    @include mobile {
      @include font(24, 34);

      margin-bottom: 0;
    }
  }

  &__content-item {
    @include font(20, 28, 500);
    letter-spacing: 0.02em;

    color: #f36c21;

    &:hover {
      color: #e05507;
    }

    @include mobile {
      @include font;
    }
  }

  &__w {
    @extend %width-content;
    @include flex-container(column, flex-start);
    gap: 48px;
  }

  &__info {
    @include flex-container(column, flex-start);
    gap: 24px;

    @include mobile {
      gap: 16px;
    }
  }

  &__info-title {
    @include font(26, 31, 700);
    letter-spacing: 0.02em;

    @include mobile {
      @include font(24, 34);
    }
  }

  &__info-text {
    @include font(16, 24);
    letter-spacing: 0.02em;

    @include mobile {
      @include font;
    }
  }
}

.more {
  @include flex-container(column, flex-start, center);
  gap: 16px;

  &__title {
    @include font(22, 26, 600);
    text-transform: uppercase;
  }

  &__card-list {
    @extend %width-main;

    @include flex-container(row, flex-start);
    flex-wrap: wrap;


    gap: 16px;
  }

  &__item {
    --gap: 16px;

    @include flex-container(column, flex-start);

    @include set-item-count-in-row(3);

    @include bigMobile {
      @include set-item-count-in-row(2);
    }

    @include mobile {
      @include set-item-count-in-row(1);
    }
  }
}
</style>
