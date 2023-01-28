<template>
  <div class="employee-card">
    <div class="employee-card__info">
      <div class="employee-card__photo">
        <img src="/img/manager-photo.png" alt="" />
      </div>
      <div class="employee-card__data">
        <p class="employee-card__name">
          {{ _T("@Anna Georgieva") }}
        </p>
        <p class="employee-card__position">
          {{ _T("@Retail Sales Manager") }}
        </p>
      </div>
    </div>
    <div class="employee-card__contact">
      <div class="employee-card__comm-w">
        <a class="employee-card__comm" href="tel:+380674625740">
          <img
            class="employee-card__comm-img"
            src="~/assets/icons/managerPhoneIcon.svg"
            alt=""
          />
          <span>+38 (067) 462-57-40</span>
        </a>
        <div class="employee-card__messengers">
          <a
            class="employee-card__messenger"
            href="viber://chat?number=12345678"
          >
            <img
              class="employee-card__messenger-img"
              src="~/assets/icons/contactsManagerViber.svg"
              alt=""
            />
          </a>
          <a
            class="employee-card__messenger"
            href="https://t.me/<USERNAME>"
          >
            <img
              class="employee-card__messenger-img"
              src="~/assets/icons/contactsManagerTelegram.svg"
              alt=""
            />
          </a>
        </div>
      </div>
      <a
        class="employee-card__comm"
        href="mailto:a.georgieva@logicfox.pro"
      >
        <img
          class="employee-card__comm-img"
          src="~/assets/icons/managerMailIcon.svg"
          alt=""
        />
        <span>a.georgieva@logicfox.pro</span>
      </a>
    </div>
  </div>
</template>

<script setup>
/* defineProps = ({
  data: { type: Object, required: true },
}) */
</script>

<style lang="scss" scoped>
.employee-card {
  @include flex-container(column, null, null);
  gap: 24px;

  padding: 10px;

  transition: all 0.5s ease;

  @include mobile {
    border-bottom: 1px solid #f3f3f3;
  }

  &:hover {
    box-shadow: 0px 0px 24px rgb(0 0 0 / 30%);
    border-radius: 8px;

    @include mobile {
      box-shadow: none;
      border-radius: 0;
    }
  }

  &__info {
    @include flex-container(row, space-between, center);
    gap: 24px;

    @include mobile {
      @include flex-container(row, flex-start, center);
      gap: 16px;
    }
  }

  &__photo {
    flex: 0 0 90px;

    & img {
      border-radius: 50%;
    }
  }

  &__data {
    @include flex-container(column, null, null);
    gap: 2px;

    @include mobile {
      gap: 6px;
    }
  }

  &__name {
    @include font(22, 26, 700);
    text-transform: capitalize;
    color: var(--color-primary-base);

    @include mobile {
      @include font;
    }
  }

  &__position {
    @include font(20, 24);
    font-style: italic;

    @include mobile {
      @include font(12, 16);
      font-style: normal;
    }
  }

  &__contact {
    @include flex-container(column, null, null);
    gap: 16px;

    & > span {
      @include font(14, 16);
    }
  }

  &__comm-w {
    @include flex-container(row, flex-start, center);
    gap: 16px;
  }

  &__comm {
    @include flex-container(row, flex-start, center);
    gap: 16px;

    transition: 0.2s ease;

    &:hover {
      color: var(--color-primary-dark);
    }

    @include mobile {
      gap: 24px;
    }
  }

  &__messengers {
    @include flex-container(row, flex-start, center);
    gap: 16px;
  }

  &__messenger {
    transition: 0.2s ease;

    &:hover {
      transform: scale(1.1);
    }
  }
}
</style>
