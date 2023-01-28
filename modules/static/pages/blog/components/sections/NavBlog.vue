<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <li
        class="navigation__list-item"
        :class="{active: indexItem === index}"
        v-for="(item, index) in menuItems"
        :key="index"
        @click="addActive(index)"
      >
        {{ item }}
      </li>
    </ul>
  </nav>
</template>

<script setup>
const emits = defineEmits(["getIndexMenu"]);

const indexItem= ref(0);

const menuItems = ["Все", "Статьи", "Новости", "Обзоры"];

function addActive(index) {
  indexItem.value = index;

  emits('getIndexMenu', index)
}
</script>

<style lang="scss" scoped>
.navigation {
  width: 100%;

  background-color: #1F1F1F;

  padding: 16px;

  &__list {
    @include flex-container(row, center, center);
  }

  &__list-item {
    max-width: 225px;
    width: 100%;

    @include font(18, 25, 500);
    color: white;
    letter-spacing: 0.02em;
    text-align: center;

    border-radius: 6px;

    background-color: #1F1F1F;

    padding: 8px;

    cursor: pointer;

    transition: background-color .1s ease-in-out;

    @include bigMobile {
      @include font(16, 22, 400);
    }

    &.active {
      background-color: #F36C21;

      &:hover {
        background-color: #FF5B00;
      }

      &:active {
        background-color: #AC450B;
      }
    }
  }
}
</style>
