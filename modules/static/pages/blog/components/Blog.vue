<template>
  <section class="blog">
    <NuvBlog @getIndexMenu="getIndexMenu"/>
    <div class="blog__body" :class="{'show-all': showMenu === 0}">
      <div class="blog__items" :class="{active: showMenu === 1}">
        <InfoCard
          class="blog__item"       
          v-for="(item, index) in dataCard"
          :key="index"
          :data="item"
        />
      </div>

      <div class="blog__items" :class="{active: showMenu === 2}">
        <InfoCard
          class="blog__item"
          v-for="(item, index) in dataCard"
          :key="index"
          :data="item"
        />
      </div>

      <div class="blog__items" :class="{active: showMenu === 3}">
        <InfoCard
          class="blog__item"
          v-for="(item, index) in dataCard"
          :key="index"
          :data="item"
        />
      </div>

      <nav class="blog__navigation">
        <ButtonShowMore />
        <div class="blog__pagination">
          <PaginationBtnArrow />
          <div class="blog__pages">
            <PaginationBtnNumber>1</PaginationBtnNumber>
            <PaginationBtnNumber>2</PaginationBtnNumber>
            <PaginationBtnNumber>3</PaginationBtnNumber>
          </div>
          <PaginationBtnArrow :directionRight="true" />
        </div>
      </nav>
    </div>
  </section>
</template>

<script setup>
import NuvBlog from "~~/modules/static/pages/blog/components/sections/NavBlog.vue";
import InfoCard from "~~/modules/shared/components/infoCard/InfoCard.vue";
import ModalShowResult from "~/modules/products/pages/filter/components/sections/ModalShowResult.vue";
import ButtonShowMore from "~/modules/shared/components/buttons/ButtonShowMore.vue";
import PaginationBtnArrow from "~~/modules/shared/components/buttons/PaginationBtnArrow.vue";
import PaginationBtnNumber from "~~/modules/shared/components/buttons/PaginationBtnNumber.vue";

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

const showMenu = ref(0);

function getIndexMenu(index) {
  showMenu.value = index;
}
</script>

<style lang="scss" scoped>
.blog {
  @include flex-container(column, flex-start);
  gap: 32px;

  padding-bottom: 140px;

  &__body {
    @extend %padding-wrp;

    @include flex-container(column, space-between);

    gap: 32px;

    &.show-all {
      .blog__items {
        @include flex-container(row, center);
      }
    }
  }

  &__items {
    @extend %width-main;

    display: none;

    flex-wrap: wrap;

    gap: 16px;
    margin: auto;

    &.active {
      @include flex-container(row, center);
    }
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

  &__navigation {
    @include flex-container(column, center, center);

    gap: 32px;
  }

  &__pagination {
    @include flex-container(row, center, center);

    gap: 26px;
  }

  &__pages {
    @include flex-container(row, center, center);

    gap: 26px;
  }
}
</style>
