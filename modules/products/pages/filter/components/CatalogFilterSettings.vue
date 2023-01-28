<template>
  <nav class="filter-setting">
    <section class="filter-setting__navigation">
      <div class="filter-setting__navigation-wrapper">
        <ButtonFilter
          @click="openFilters"
          class="filter-setting__button-filter"
        />
        <ButtonChangeView
          class="filter-setting__button-filter"
          @click="activeFilter"
        />
      </div>
    </section>

    <section class="filter-setting__header" :class="{ active: showFilters }">
      <SelectedFilter class="filter-setting__filters" :items="filterItem" />
      <SelectGroup
        class="filter-setting__select"
        :selectList="selectItems"
        :caption="'По умолчанию'"
      />
    </section>
  </nav>
</template>

<script setup>
import ButtonChangeView from "~/modules/products/pages/filter/components/UI/ButtonChangeView.vue";
import ButtonFilter from "~/modules/products/pages/filter/components/UI/ButtomFilter.vue";
import SelectedFilter from "~/modules/products/pages/filter/components/sections/SelectedFilter.vue";
import SelectGroup from "~/modules/shared/components/dropdowns/SelectGroup.vue";

const emits = defineEmits(["getShowFilters", "getChangeView"]);

const filterItem = [
  { name: "Евровилка" },
  { name: "1000/900" },
  { name: "1000/900" },
  { name: "700-1200 грн" },
];

const selectItems = [
  { title: "По умолчанию" },
  { title: "Дешёвые" },
  { title: "Дорогие" },
  { title: "Популярные" },
];

const showFilters = ref(false);
const changeView = ref(false);

function activeFilter() {
  changeView.value = !changeView.value;

  emits("getChangeView", changeView.value);
}

function openFilters() {
  showFilters.value = !showFilters.value;

  emits("getShowFilters", showFilters.value);
}
</script>

<style lang="scss" scoped>
.filter-setting {
  width: 100%;

  @include flex-container(column, flex-start);

  gap: 16px;

  &__navigation {
    display: none;

    @include bigMobile {
      width: 100%;

      display: block;

      padding: 0 16px;
    }
  }

  &__navigation-wrapper {
    @include flex-container(row, space-between, flex-end);

    background-color: white;

    border: 1px solid #d1d1d1;
    border-radius: 8px;

    padding: 16px;
  }

  &__button-filter {
    display: none;

    @include bigMobile {
      display: flex;
    }
  }

  &__header {
    width: 100%;

    @include flex-container(row, space-between, flex-end);

    @include bigMobile {
      padding: 0 16px;
      &.active {
        .filter-setting__filters {
          display: flex;
        }

        .filter-setting__select {
          display: none;
        }
      }
    }
  }

  &__filters {
    @include bigMobile {
      width: 100%;

      display: none;

      overflow: hidden;

      transition: all 0.3s ease-in-out;
    }
  }

  &__select {
    max-width: 363px;

    z-index: 101;

    @include bigMobile {
      max-width: 100%;
    }
  }
}
</style>
