<template>
  <div>
    <Header />
      <slot />
    <Footer />
  </div>
</template>

<script setup>
import { useLanguageFilterStore } from '~~/store/languageFilterStore';
import Header from '~/modules/header/components/Header.vue';
import Footer from '~/modules/footer/components/Footer.vue';

const lang = useLanguageFilterStore();

const languageList = lang.getFiltersList;

const toggleLanguage = (item) => {
  lang.setLanguage(item);
};
</script>

<style scoped></style>
