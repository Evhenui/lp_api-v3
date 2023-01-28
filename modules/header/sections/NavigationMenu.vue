<template>
  <ul class="menu">
    <li class="menu__item user">
      <div class="menu__image">
        <svg
          width="18"
          height="20"
          viewBox="0 0 18 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_2_56)">
            <path
              d="M17 19V17C17 15.9391 16.5786 14.9217 15.8284 14.1716C15.0783 13.4214 14.0609 13 13 13H5C3.93913 13 2.92172 13.4214 2.17157 14.1716C1.42143 14.9217 1 15.9391 1 17V19"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9 9C11.2091 9 13 7.20914 13 5C13 2.79086 11.2091 1 9 1C6.79086 1 5 2.79086 5 5C5 7.20914 6.79086 9 9 9Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_2_56">
              <rect width="18" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <span class="menu__title">Кабинет</span>
    </li>
    <li class="menu__item comparison">
      <div class="menu__image">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 4L18 4"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1 14L4.50006 4L8 14M1 14C1 15.3333 1.86883 18 4.50006 18C7.1313 18 8 15.3333 8 14M1 14H8"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 14L15.5001 4L19 14M12 14C12 15.3333 12.8688 18 15.5001 18C18.1313 18 19 15.3333 19 14M12 14H19"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10 2L10 5"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <div class="menu__count">
          <span class="menu__number">32</span>
        </div>
      </div>
      <span class="menu__title">Сравнение</span>
    </li>
    <li class="menu__item basket">
      <div class="menu__image">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_2_59)">
            <path
              d="M7.5013 18.3332C7.96154 18.3332 8.33463 17.9601 8.33463 17.4998C8.33463 17.0396 7.96154 16.6665 7.5013 16.6665C7.04106 16.6665 6.66797 17.0396 6.66797 17.4998C6.66797 17.9601 7.04106 18.3332 7.5013 18.3332Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16.6654 18.3332C17.1256 18.3332 17.4987 17.9601 17.4987 17.4998C17.4987 17.0396 17.1256 16.6665 16.6654 16.6665C16.2051 16.6665 15.832 17.0396 15.832 17.4998C15.832 17.9601 16.2051 18.3332 16.6654 18.3332Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M0.832031 0.833496H4.16536L6.3987 11.9918C6.4749 12.3755 6.68362 12.7201 6.98832 12.9654C7.29302 13.2107 7.67428 13.341 8.06536 13.3335H16.1654C16.5564 13.341 16.9377 13.2107 17.2424 12.9654C17.5471 12.7201 17.7558 12.3755 17.832 11.9918L19.1654 5.00016H4.9987"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_2_59">
              <rect width="20" height="19.1667" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <div class="menu__count">
          <span class="menu__number">32</span>
        </div>
      </div>
      <span class="menu__title">Корзина</span>
    </li>
  </ul>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.menu {
  @include flex-container(row, flex-start, center);

  gap: 24px;

  &__title {
    @include font(12, 14, 400);
    color: white;

    @include bigMobile {
      display: none;
    }
  }

  &__item {
    @include flex-container(column, center, center);

    cursor: pointer;

    &.user,
    &.comparison {
      @include bigMobile {
        display: none;
      }
    }
  }

  &__image {
    position: relative;
    font-size: 0;

    @include bigMobile {
      & > svg {
        width: 28px;
        height: 28px;
      }
    }
  }

  &__count {
    width: 21px;
    height: 21px;

    position: absolute;
    right: -70%;
    top: -30%;

    @include flex-container(column, center, center);

    background-color: #f36c21;

    border-radius: 50%;

    @include bigMobile {
      right: -40%;
    }
  }

  &__number {
    @include font(10, 13, 400);
    letter-spacing: 0.02em;
    color: white;
  }
}
</style>