<template>
  <NuxtLink :to="{ name: 'home' }" :class="orange ? 'orange' : 'white'">
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2.89062 30.1491L4.76522 16.748H7.24306L5.70576 27.7426H9.80522L9.46792 30.1491H2.89062Z"
        fill="white"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M35.1875 30.1491L37.0621 16.748H40.8113C42.3421 16.761 43.4707 17.1372 44.2037 17.8832C44.9302 18.6291 45.2026 19.6475 45.0275 20.9383C44.8589 22.1578 44.3075 23.1567 43.3929 23.9286C42.4718 24.707 41.2264 25.0897 39.6437 25.0897H38.3724L37.6653 30.1556H35.1875V30.1491ZM39.2026 19.1545L38.7097 22.6832H40.1821C40.8632 22.6832 41.4016 22.534 41.8037 22.2486C42.2059 21.9567 42.4589 21.5156 42.5497 20.9253C42.634 20.3416 42.5107 19.907 42.1799 19.6086C41.8491 19.3102 41.3497 19.161 40.6686 19.161H39.2026V19.1545Z"
        fill="white"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M20.7237 19.5499C21.3399 17.2407 23.8178 8.00391 23.8178 8.00391H20.8859L16.475 24.4407C16.2545 25.2515 16.741 25.9066 17.5453 25.9066H23.954L24.888 22.9747H19.7961L20.7237 19.5499Z"
        fill="white"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M28.1843 19.252C28.9951 19.252 29.4751 19.9071 29.2611 20.7179L27.127 28.1449C26.913 28.9557 26.0827 29.6109 25.2719 29.6109H21.4254C20.9389 31.4336 20.0048 34.8844 19.5119 36.7395H20.2967L17.0535 39.9957L15.6719 36.7395H16.5735L18.8892 28.1514C19.1032 27.3406 19.9335 26.6855 20.7443 26.6855H24.5908C24.8827 25.5828 25.6416 23.2865 25.9335 22.1903H20.9324L21.6978 19.2584H28.1843V19.252Z"
        fill="white"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17.1084 31.4529C14.65 29.7535 13.0414 26.9124 13.0414 23.7016C13.0414 18.6097 17.0825 14.4583 22.1354 14.2832L22.8425 11.6432C22.7322 11.6432 22.6219 11.6367 22.5052 11.6367C15.8695 11.6367 10.4922 17.014 10.4922 23.6497C10.4922 28.0605 12.8727 31.92 16.4208 34.0021L17.1084 31.4529Z"
        fill="white"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M23.7377 11.6953L23.0436 14.2899C27.9863 14.5818 31.8977 18.6813 31.8977 23.6953C31.8977 28.8975 27.6815 33.1202 22.4728 33.1202C20.8058 33.1202 19.2425 32.6856 17.8869 31.9267L17.2188 34.424C18.8144 35.2088 20.6177 35.6564 22.5182 35.6564C29.1539 35.6564 34.5312 30.2791 34.5312 23.6434C34.5247 17.4229 29.796 12.3115 23.7377 11.6953Z"
        fill="white"
      />
    </svg>
  </NuxtLink>
</template>

<script setup>
defineProps({
  orange: { type: Boolean, required: false, default: false },
});
</script>

<style lang="scss" scoped>
.orange {
  & svg {
    & path {
      fill: var(--color-primary-base);
    }
  }
}

.white {
  & svg {
    & path {
      fill: white;
    }
  }
}
</style>
