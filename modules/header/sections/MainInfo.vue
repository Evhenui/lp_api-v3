<template>
  <div class="main-info" ref="mainInfo">
    <div class="main-info__wrapper">
      <ButtonBurger />
      <div class="main-info__catalog-menu">
        <ButtonCatalog
          class="main-info__button-catalog"
          @buttonCatalog="getButton"
        />
        <ModalCatalog
          class="main-info__catalog"
          @catalogModal="getModalCatalog"
          @heightContent="getHeightContent"
          :nullState="catalogState"
          :style="{
            '--bottom':
              heightCatalog > bottomValue - heightHeader
                ? -(bottomValue - heightHeader) + 'px'
                : -heightCatalog + 'px',
          }"
        />
      </div>
      <Logo class="main-info__logo" />
      <SearchProduct />
      <ChangeLanguage class="main-info__language" />
      <NavigationMenu />
    </div>
  </div>
</template>

<script setup>
import { useHeaderStore } from "~~/store/headerStore";
import ButtonBurger from "../components/UI/ButtonBurger.vue";
import ButtonCatalog from "../components/UI/ButtonCatalog.vue";
import Logo from "../components/UI/Logo.vue";
import SearchProduct from "../components/UI/SearchProduct.vue";
import ChangeLanguage from "../components/UI/ChangeLanguage.vue";
import NavigationMenu from "./NavigationMenu.vue";
import ModalCatalog from "./ModalCatalog.vue";

const header = useHeaderStore();
const activeCatalog = header.activeCatalog;

const mainInfo = ref(null);
const buttonCatalog = ref(null);
const catalogModal = ref(null);

const heightCatalog = ref(0);
const bottomValue = ref(0);
const catalogState = ref(false);

const emits = defineEmits(["getHeightMainInfo"]);

const props = defineProps({
  heightHeader: { type: Number, required: false },
});

function getPosition() {
  emits("getHeightMainInfo", mainInfo.value.offsetHeight);
  getPositionButton();
}

function getButton(item) {
  buttonCatalog.value = item;
}

function getModalCatalog(item) {
  catalogModal.value = item;
}

function closeModal(event) {
  const clickModal = event.composedPath().includes(catalogModal.value);
  const clickButton = event.composedPath().includes(buttonCatalog.value);

  if (!clickModal && !clickButton) {
    activeCatalog(false);
  }
}

function startStateCatalog(event) {
  const clickModal = event.composedPath().includes(catalogModal.value);

  catalogState.value = !clickModal ? true : false;
}

function getPositionButton() {
  bottomValue.value = document.documentElement.clientHeight;
}

function getHeightContent(value) {
  heightCatalog.value = value;
}

onMounted(() => {
  getPosition();
  window.addEventListener("resize", getPosition);

  window.addEventListener("click", function (event) {
    closeModal(event);
  });

  window.addEventListener("mouseover", function (event) {
    startStateCatalog(event);
  });
});
</script>

<style lang="scss" scoped>
.main-info {
  background-color: #393d38;

  &__wrapper {
    @extend %width-main;

    @include flex-container(row, space-between, center);

    position: relative;

    margin: 0 auto;
    gap: 16px;
  }

  &__catalog {
    --bottom: 0;

    position: absolute;
    top: 109%;
    bottom: var(--bottom);
    left: 0;
    z-index: 501;

    box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.25);
  }

  &__button-catalog,
  &__language {
    @include bigMobile {
      display: none;
    }
  }

  &__logo {
    width: 48px;
    height: 48px;

    @include bigMobile {
      display: none;
    }
  }
}
</style>
