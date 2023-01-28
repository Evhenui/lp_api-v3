<template>
  <div v-if="icon" :class="attrs.class">
    <svg
      class="icon"
      :style="{ height: props.height, width: props.width }"
      v-html="icon"
    ></svg>
  </div>
</template>

<script setup>
const props = defineProps(['name', 'height', 'width']);

const icons = Object.fromEntries(
  Object.entries(import.meta.glob('~/assets/icons/*.svg', { as: 'raw' })).map(
    ([key, value]) => {
      const filename = key.split('/').pop().split('.').shift();
      return [filename, value];
    },
  ),
);

const attrs = useAttrs();

const icon = props.name && (await icons?.[props.name]?.());
</script>

<style lang="scss"></style>
