<template>
  <nav class="nav" ref="nav">
    <div class="nav__w">
      <ul class="nav__list" @scroll="calcColorLinePosX(getIndex(CurrentNav))" ref="navItems">
        <li
          class="nav__item"
          v-for="item in navList"
          :key="item.id"
          @click="clickNav(item.id)"
          ref="navItemList"
        >
          <h3
            class="nav__title"
            :class="{active: item.id === CurrentNav}"
          >
            {{ item.title }}
          </h3>
        </li>
      </ul>
      <div
        class="nav__color-line"
        :style="{
          '--line-width': colorLineWidth + 'px',
          '--pos-x': colorLinePosX + 'px',
        }"
      ></div>
      <div class="nav__line"></div>
    </div>
  </nav>
</template>

<script setup>
const { CurrentNav } = defineProps(['CurrentNav']);

const emits = defineEmits(["navChange"]);

const navItems = ref(null);
const navItemList = ref(null);
const nav = ref(null);

const colorLineWidth = ref(0);
const colorLinePosX = ref(0);

const navList = [
    {
      id: 1,
      title: "Новинки",
    },
    {
      id: 2,
      title: "Популярное",
    }
];

function getIndex(id) {
  return navList.findIndex((el) => el.id === id);
}

function calcColorLineWidth(index) {
  const currNavItemWidth = navItems.value.children[index].scrollWidth;
  colorLineWidth.value = currNavItemWidth;
}

function clickNav(id) {
  emits("navChange", id);
  calcColorLineWidth(getIndex(id));
  calcColorLinePosX(getIndex(id));
}

function calcColorLinePosX(index) {
  colorLinePosX.value = navItems.value.children[index].offsetLeft - navItems.value.scrollLeft;
}

function onResize() {
  calcColorLineWidth(getIndex(CurrentNav));
  calcColorLinePosX(getIndex(CurrentNav));
}

onMounted(() => {
  onResize();
  window.addEventListener("resize", onResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", onResize);
});
</script>

<style lang="scss" scoped>
.nav {
  max-width: 300px;
  width: 100%;

  @include flex-container(column, flex-start);
  align-items: center;

  z-index: 100;

  background-color: #F7F9FA;

  @include bigMobile {
    max-width: 260px;

    align-items: flex-start;
  }

  &__w {
    position: relative;
    @extend %width-main;

    background-color: white;
  }

  &__line {
    @extend %width-main;
    height: 1px;

    position: absolute;
    top: 0;

    background-color: #D1D1D1;

    @include mobile() {
      height: 1px;
    }
  }

  &__color-line {
    --line-width: 0;
    --pos-x: 0;

    width: var(--line-width);

    height: 3px;

    position: absolute;
    top: 0;

    transform: translateX(var(--pos-x));

    background-color: #F36C21;

    z-index: 1;

    transition: 0.4s ease;

    @include mobile() {
      height: 1px;
      transition: 0.1s ease;
    }
  }

  &__list {
    width: 100%;

    @include flex-container(row, space-between, flex-start);

    overflow-x: auto;

    @include scrollbarStyle(0px);

    @include mobile {
      gap: 16px;

      padding: 0 16px;
    }
  }

  &__item {
  }

  &__title {
    @include font(20, 30, 600);
    text-transform: uppercase;

    white-space: nowrap;

    padding-top: 8px;

    cursor: pointer;
    transition: 0.2s ease;

    @include bigMobile {
      @include font(18, 22, 500);
      text-transform: none;
    }

    @include mobile {
      padding: 4px 0;
    }

    &:hover {
      color: #F36C21;
    }

    &.active {
      color: #F36C21;
    }
  }
}
</style>
