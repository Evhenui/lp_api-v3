<template>
  <li class="filter-item">
    <span class="filter-item__filter-name">
      <slot></slot>
    </span>
    <div class="filter-item__icon">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426"
          stroke="#F36C21"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  </li>
</template>
    
<style lang="scss" scoped>
.filter-item {
  @include flex-container(row, flex-start, center);

  border: 1px solid #f36c21;
  border-radius: 8px;

  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  padding: 4px 8px;
  gap: 8px;

  cursor: pointer;

  @include bigMobile {
    padding: 8px;
  }

  &__filter-name {
    @include font(16, 22, 400);
    letter-spacing: 0.02em;
    color: #f36c21;

    @include bigMobile {
      @include font(14, 16, 500);
    }
  }

  &__icon {
    font-size: 0;

    svg {
      @include bigMobile {
        width: 16px;
        height: 16px;
      }
    }
  }
}
</style>
          