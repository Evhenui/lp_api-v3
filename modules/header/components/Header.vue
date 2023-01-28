<template>
  <header class="header" ref="header" :class="{ active: activeScroll }">
    <div class="header__wrapper">
      <AdditionalInfo 
        @getHeightAdditional="getHeightAdditional"
        class="header__additional" 
      />
      <MainInfo
        class="header__main-info"
        @getHeightMainInfo="getHeightMainInfo"
        :heightHeader="heightHeader"
      />
      <ModalMenu />
    </div>
  </header>
</template>

<script setup>
import { useHeaderStore } from "~~/store/headerStore";
import AdditionalInfo from '~/modules/header/sections/AdditionalInfo.vue';
import MainInfo from '~/modules/header/sections/MainInfo.vue';
import ModalMenu from '~/modules/header/sections/ModalMenu.vue';
import ModalCatalog from '~/modules/header/sections/ModalCatalog.vue';

const headerStore = useHeaderStore();
const setHeaderHeight = headerStore.setHeightHeader;

const heightAdditionalInfo = ref(0);
const heightHeader = ref(0);
const heightMainInfo = ref(0);
const activeScroll = ref(false);

const header = ref(null);

function getHeightAdditional(height) {
  heightAdditionalInfo.value = height;
}

function getHeightHeader() {
  heightHeader.value = header.value.offsetHeight;

  setHeaderHeight(heightMainInfo.value);
}

function getHeightMainInfo(height) {
  heightMainInfo.value = `${height}px`;
}

function stateHeader() {
  if(window.innerWidth > 1024) {
    activeScroll.value = window.scrollY >= heightAdditionalInfo.value ? true: false;
  }
}

onMounted(() => {
  window.addEventListener('scroll', stateHeader);

  getHeightHeader();
  window.addEventListener('resize', getHeightHeader);
  window.addEventListener('scroll', getHeightHeader);
});
</script>

<style lang="scss" scoped>
.header {
  background-color: white;

  @include bigMobile {
    margin-bottom: v-bind(heightMainInfo);
  }

  &.active {
    margin-bottom: v-bind(heightMainInfo);

    .header__additional {
      opacity: 0;
      visibility: hidden;
    }

    .header__main-info {
      position: fixed;
      top: 0;

      z-index: 501;
    }
  }

  &__main-info {
    width: 100%;

    padding: 4px 16px;

    @include bigMobile {
      position: fixed;
      top: 0;
      z-index: 501;
      
      padding: 8px 16px;
    }
  }

  &__additional {
    transition: opacity .5s ease-in-out;

    @include bigMobile {
      display: none;
    }
  }
}
</style>