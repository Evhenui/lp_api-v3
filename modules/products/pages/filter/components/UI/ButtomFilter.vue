<template>
  <button 
    class="button-filter" 
    :class="{active: active}"
    @click="active = !active"
  >
    <div class="button-filter__image">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path class="button-filter__image-state" d="M3.74961 3H20.2497C20.6639 3 20.9997 3.33573 20.9997 3.7499L21 5.68927C21 5.88822 20.921 6.07904 20.7803 6.21971L14.2193 12.7803C14.0786 12.921 13.9996 13.1118 13.9996 13.3107L13.9996 20.0394C13.9996 20.5273 13.5411 20.8854 13.0677 20.767L10.5677 20.142C10.2338 20.0586 9.99961 19.7586 9.99961 19.4144L9.99961 13.3107C9.99961 13.1117 9.92059 12.921 9.77994 12.7803L3.21928 6.21967C3.07862 6.07902 2.99961 5.88825 2.99961 5.68934V3.75C2.99961 3.33579 3.33539 3 3.74961 3Z" stroke="#F36C21" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <span class="button-filter__title">Фильтры</span>
  </button>
</template>

<script setup>

const active = ref(false);

</script>

<style lang="scss" scoped>
.button-filter {
  width: max-content;

  @include flex-container(row, center, center);

  border-radius: 4px;
  border: 1px solid #F36C21;

  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  background-color: white;

  gap: 4px;
  padding: 4px 8px;

  &.active {
    background-color: #F36C21;

    .button-filter__image-state {
      stroke: white;
    }

    .button-filter__title {
      color: white;
    }
  }

  &__image {
    font-size: 0;
  }

  &__title {
    @include font(14, 18, 400);
    letter-spacing: 0.02em;
    color: #f36c21;
  }
}
</style>