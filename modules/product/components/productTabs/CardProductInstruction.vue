<template>
  <section class="instruction">
    <slot></slot>
    <div class="instruction__title-w">
      <span class="instruction__title">Тип</span>
      <span class="instruction__title">Дата</span>
      <span class="instruction__title">Язык</span>
      <span class="instruction__title">Тип файла</span>
      <span class="instruction__title">Загрузка</span>
    </div>
    <div class="instruction__tech-w">
      <div class="instruction__tech-title-w">
        <span class="instruction__tech-title">Техническая документация</span>
      </div>
      <div
        class="instruction__tech-row"
        v-for="(item, idx) of techData"
        :key="idx"
      >
        <span class="instruction__tech-row-title">{{ item.title }}</span>
        <span class="instruction__tech-row-date">{{ item.date }}</span>
        <span class="instruction__tech-row-lang">{{ item.lang }}</span>
        <span class="instruction__tech-row-type">{{ item.type }}</span>
        <a class="instruction__tech-row-link" :href="item.link"
          ><span>Скачать</span>
          <img
            class="instruction__tech-row-link-img"
            src="~~/assets/icons/download-arrow.svg"
            alt=""
        /></a>
      </div>
    </div>
    <div class="instruction__tech-w" v-if="driverData.length">
      <div class="instruction__tech-title-w">
        <span class="instruction__tech-title">Драйвера</span>
      </div>
      <div
        class="instruction__tech-row"
        v-for="(item, idx) of driverData"
        :key="idx"
      >
        <span class="instruction__tech-row-title">{{ item.title }}</span>
        <span class="instruction__tech-row-date">{{ item.date }}</span>
        <span class="instruction__tech-row-lang">{{ item.lang }}</span>
        <span class="instruction__tech-row-type">{{ item.type }}</span>
        <a class="instruction__tech-row-link" :href="item.link"
          ><span>Скачать</span>
          <img
            class="instruction__tech-row-link-img"
            src="~~/assets/icons/download-arrow.svg"
            alt=""
        /></a>
      </div>
    </div>
    <div class="instruction__tech-w">
      <div class="instruction__tech-title-w">
        <span class="instruction__tech-title">Мобильные приложения</span>
      </div>
      <div
        class="instruction__tech-row"
        v-for="(item, idx) of techData"
        :key="idx"
      >
        <span class="instruction__tech-row-title">{{ item.title }}</span>
        <span class="instruction__tech-row-date">{{ item.date }}</span>
        <span class="instruction__tech-row-lang">{{ item.lang }}</span>
        <span class="instruction__tech-row-type">{{ item.type }}</span>
        <a class="instruction__tech-row-link" :href="item.link"
          ><span>Скачать</span>
          <img
            class="instruction__tech-row-link-img"
            src="~~/assets/icons/download-arrow.svg"
            alt=""
        /></a>
      </div>
    </div>
  </section>
</template>

<script setup>
const techData = [
    {
      title: "Руководство пользователя",
      date: "23.01.2020",
      lang: "укр; рус;",
      type: "pdf",
      link: "https://greenvision.ua/download.php?url=https://logicfox.info/manuals/LP/UPS/16157/16157_16158_161159_17014_17015_manual_ukr.pdf",
    },
    {
      title: "Руководство пользователя IP камеры",
      date: "27.05.2021",
      lang: "eng",
      type: "pdf",
      link: "https://greenvision.ua/download.php?url=https://logicfox.info/manuals/LP/UPS/16157/16157_16158_161159_17014_17015_manual_ukr.pdf",
    },
];

const driverData = [
    {
      title: "Руководство пользователя",
      date: "23.01.2020",
      lang: "укр; рус;",
      type: "pdf",
      link: "https://greenvision.ua/download.php?url=https://logicfox.info/manuals/LP/UPS/16157/16157_16158_161159_17014_17015_manual_ukr.pdf",
    },
    {
      title: "Руководство пользователя IP камеры",
      date: "27.05.2021",
      lang: "eng",
      type: "pdf",
      link: "https://greenvision.ua/download.php?url=https://logicfox.info/manuals/LP/UPS/16157/16157_16158_161159_17014_17015_manual_ukr.pdf",
    },
];
</script>

<style lang="scss">
.instruction {
  display: none;

  gap: 16px;

  background-color: white;
  box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);
  border-radius: 8px;

  padding: var(--local-pad) 0;

  &.active {
    @include flex-container(column, flex-start);
  }

  & .spec__title {
    padding: 0 var(--local-pad);
  }

  &__title-w {
    display: grid;
    grid-template-columns: 2fr repeat(4, 1fr);
    justify-items: center;

    padding: 0 var(--local-pad);

    @include mobile {
      grid-template-columns: 2fr repeat(2, 1fr);
    }
  }

  &__title {
    @include font;
    letter-spacing: 0.02em;

    color: #7A7E80;

    &:first-child {
      justify-self: flex-start;
    }

    &:last-child {
      justify-self: flex-end;
    }

    @include mobile {
      @include font(14, 16);

      &:nth-child(2n) {
        display: none;
      }
    }
  }

  &__tech-w {
    @include flex-container(column, center, flex-start);
    gap: 16px;

    @include mobile {
      gap: 8px;
    }
  }

  &__tech-title-w {
    width: 100%;

    border-top: 1px solid #F36C21;

    background: rgba(243, 108, 33, 0.1);
    padding: 8px 0;
  }

  &__tech-title {
    @include font(16, 22, 500);
    color: #F36C21;

    padding-left: 16px;
  }

  &__tech-row {
    width: 100%;

    display: grid;
    grid-template-columns: 2fr repeat(4, 1fr);
    gap: 8px;

    justify-items: center;

    @include font;

    padding: 0 var(--local-pad);

    @include mobile {
      grid-template-columns: 2fr repeat(2, 1fr);

      @include font(14, 16);
    }
  }

  &__tech-row-title {
    justify-self: flex-start;
  }

  &__tech-row-date {
    @include mobile {
      display: none;
    }
  }

  &__tech-row-lang {
  }

  &__tech-row-type {
    @include mobile {
      display: none;
    }
  }

  &__tech-row-link {
    width: fit-content;

    color: #F36C21;

    @include flex-container(row, flex-start, flex-start);
    gap: 8px;

    justify-self: flex-end;

    & span {
      border-bottom: 1px solid transparent;

      transition: 0.2s ease;
    }

    &:hover {
      & span {
        border-bottom: 1px solid #F36C21;
      }

      & .instruction__tech-row-link-img {
        transform: translateY(2px);
      }
    }
  }

  &__tech-row-link-img {
    transition: 0.2s ease;

    @include mobile {
      display: none;
    }
  }
}
</style>
