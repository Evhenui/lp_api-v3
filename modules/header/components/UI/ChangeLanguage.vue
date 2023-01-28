<template>
  <div class="language">
    <div
      class="language__wrapper-ua ua"
      :class="{ active: lang.active === true }"
      @click="changeLang($event.currentTarget)"
    >
      <a @click.prevent href="#" class="language__ua">Укр</a>
    </div>
    <div
      class="language__wrapper-ru ru"
      :class="{ active: lang.active === false }"
      @click="changeLang($event.currentTarget)"
    >
      <a @click.prevent href="#" class="language__ru">Рус</a>
    </div>
  </div>
</template>

<script setup>
import { useHeaderStore } from '~~/store/headerStore';

const header = useHeaderStore();
const lang = header.getLanguage;
const changeLang = header.changeLang;
</script>

<style lang="scss" scoped>
.language {
  @include flex-container(row, flex-start, center);

  &__wrapper-ua {
    border-right: 1px solid white;

    padding: 4px 8px 4px 0;

    &.active .language__ua {
      color: #f36c21;
    }
  }

  &__wrapper-ru {
    padding: 4px 0 4px 8px;

    &.active .language__ru {
      color: #f36c21;
    }
  }

  &__ua,
  &__ru {
    @include font(12, 14, 400);
    color: white;
  }
}
</style>
