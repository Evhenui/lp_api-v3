<template>
  <h3>Product {{ slug }}</h3>
</template>

<script setup>
const { slug } = useRoute().params;
</script>

<style scoped></style>
