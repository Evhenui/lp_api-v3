<template>
  <ClientOnly>
  <div v-if="icon" :class="attrs.class">
    <svg
      class="icon"
      :style="{ height: props.height, width: props.width }"
      v-html="icon"
    ></svg>
  </div>
</ClientOnly>
</template>

<script setup>
const props = defineProps(['url', 'width', 'height']);

const attrs = useAttrs();

let icon;

try {
  const response = await useFetch(`/api/remoteSvg?url=${props.url}`);
  icon = props.url && response.data;
} catch (e) {
  console.log(e);
}
</script>

<style lang="scss"></style>
