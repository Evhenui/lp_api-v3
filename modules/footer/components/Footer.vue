<template>
  <footer class="footer">
    <section class="footer__cont">
      <div class="content">
        <div class="content__logo-img-w">
          <img class="content__logo-img" src="@/assets/icons/footerMainLogo.svg" alt="" />
        </div>
        <FooterList :thin="true" :title="_T('@Products')" :list="prodList">
          <NuxtLink class="content__catalog-link" :to="{ name: 'catalog' }">
            {{ _T('@Go to catalog') }}</NuxtLink>
        </FooterList>
        <FooterList :title="_T('@Information')" :list="infoList" />
        <div class="contacts__block">
          <div class="contacts__block-unit">
            <h4 class="content__title">{{ _T('@Contacts') }}</h4>
            <a class="contacts__text" href="tel:0800309988">{{ _T('@Call center number') }}</a>
          </div>
          <div class="contacts__block-unit">
            <p class="content__caption">{{ _T('@Call center hours') }}</p>
            <p class="contacts__text">{{ _T('@Mon-Fri footer') }}</p>
            <p class="contacts__text">{{ _T('@Sat-Sun footer') }}</p>
          </div>
          <div class="contacts__block-unit">
            <a class="contacts__block-link" href="mailto:support@logicfox.ua">
              <svg class="contacts__block-link-img" width="29" height="18" viewBox="0 0 29 18" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M17.9062 8.99865L29.0014 16.884V1.11328L17.9062 8.99865Z" fill="white" />
                <path d="M11.0951 8.99775L0 1.11133V16.8831L11.0951 8.99775Z" fill="white" />
                <path
                  d="M16.3367 10.1133L14.8381 11.1783L14.5026 11.4174L13.9221 11.005L12.6583 10.1153L1.57031 17.9967H27.4359L16.3367 10.1133Z"
                  fill="white" />
                <path d="M14.4985 9.19062L16.3286 7.88245L27.4237 -0.00390625H1.57031L14.4985 9.19062Z" fill="white" />
              </svg>
              <span class="contacts__block-link-text">{{ _T('@Ask question') }}</span>
            </a>
            <p class="content__caption">
              {{ _T('@Ask us any question you have') }}
            </p>
          </div>
        </div>
        <div class="content__copyrights">
          <div class="content__logo-img-w">
            <img class="content__logo-img" src="@/assets/icons/footerMainLogo.svg" alt="" />
          </div>
          <div class="content__copyrights-unit">
            <p class="content__copyrights-caption">
              {{ _T('@Years of experience in provision of goods') }}
            </p>
            <p class="content__caption">&#169; {{ _T('@All rights reserved') }}</p>
          </div>
          <div class="content__copyrights-unit">
            <div class="content__copyrights-img-w">
              <img class="content__copyrights-img" src="@/assets/icons/footerMasterCardIcon.svg" alt="" />
            </div>
            <div class="content__copyrights-img-w">
              <img class="content__copyrights-img" src="@/assets/icons/footerVisaIcon.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="subscription__block">
        <div class="subscription__block-mailing">
          <div class="subscription__block-mailing-info">
            <h4 class="subscription__block-title">{{ _T('@Newsletter') }}</h4>
            <p class="subscription__block-text">
              {{ _T('@Subscribe to newsletter') }}
            </p>
          </div>
          <form class="subscription__block-mailing-form">
            <input class="subscription__block-mailing-input" type="email" placeholder="E-mail" />
            <button class="subscription__block-mailing-btn">{{ _T('@Subscribe') }}</button>
          </form>
        </div>
        <div class="subscription__block-social">
          <div class="subscription__block-social-w">
            <h4 class="subscription__block-title">{{ _T('@Join footer') }}</h4>
            <ul class="subscription__block-social-list">
              <li class="subscription__block-social-list-item">
                <a href="" class="subscription__block-social-list-item-link">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M17 2H14C12.6739 2 11.4021 2.52678 10.4645 3.46447C9.52678 4.40215 9 5.67392 9 7V10H6V14H9V22H13V14H16L17 10H13V7C13 6.73478 13.1054 6.48043 13.2929 6.29289C13.4804 6.10536 13.7348 6 14 6H17V2Z"
                      stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </a>
              </li>
              <li class="subscription__block-social-list-item">
                <a href="" class="subscription__block-social-list-item-link">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 12L10.5 14V10L14 12Z" fill="white" stroke="white" stroke-width="1.5"
                      stroke-linecap="round" stroke-linejoin="round" />
                    <path
                      d="M2 12.708V11.2929C2 8.39754 2 6.94988 2.90549 6.01841C3.81099 5.08694 5.23656 5.04662 8.08769 4.96598C9.43873 4.92777 10.8188 4.90039 12 4.90039C13.1812 4.90039 14.5613 4.92777 15.9123 4.96598C18.7634 5.04662 20.189 5.08694 21.0945 6.01841C22 6.94988 22 8.39754 22 11.2929V12.708C22 15.6033 22 17.0509 21.0945 17.9824C20.189 18.9139 18.7635 18.9542 15.9124 19.0349C14.5613 19.0731 13.1812 19.1005 12 19.1005C10.8188 19.1005 9.43867 19.0731 8.0876 19.0349C5.23651 18.9542 3.81097 18.9139 2.90548 17.9824C2 17.0509 2 15.6033 2 12.708Z"
                      stroke="white" stroke-width="1.5" />
                  </svg>
                </a>
              </li>
              <li class="subscription__block-social-list-item">
                <a href="" class="subscription__block-social-list-item-link">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                      stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path
                      d="M3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16Z"
                      stroke="white" stroke-width="1.5" />
                    <path d="M17.5 6.51L17.51 6.49889" stroke="white" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                  </svg>
                </a>
              </li>
              <li class="subscription__block-social-list-item">
                <a href="" class="subscription__block-social-list-item-link">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 5L2 12.5L9 13.5M21 5L18.5 20L9 13.5M21 5L9 13.5M9 13.5V19L12.2488 15.7229"
                      stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <div class="content__copyrights-unit">
            <div class="content__copyrights-img-w">
              <img class="content__copyrights-img" src="@/assets/icons/footerMasterCardIcon.svg" alt="" />
            </div>
            <div class="content__copyrights-img-w">
              <img class="content__copyrights-img" src="@/assets/icons/footerVisaIcon.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </footer>
</template>

<script setup>
import FooterList from './FooterList.vue';
const prodList = [
  { id: 1, title: 'Комплекты для резервного питания' },
  { id: 2, title: 'Источники бесперебойного питания' },
  { id: 3, title: 'Аккумуляторы AGM' },
  { id: 4, title: 'Литиевые аккумуляторы' },
  { id: 5, title: 'Альтернативная энергетика' },
  { id: 6, title: 'Стабилизаторы напряжения' },
  { id: 7, title: 'Аккумуляторы SILVER' },
  { id: 8, title: 'Электротранспорт' },
  { id: 9, title: 'Автомобильные аккумуляторы' },
  { id: 10, title: 'Компьютерная периферия' },
  { id: 11, title: 'Компьютерная периферия' },
];

const infoList = [
  // { id: 1, title: '@About company', link: 'about-company' },
  { id: 2, title: '@Contacts', link: 'contacts' },
  // { id: 3, title: '@Blog', link: 'blog' },
  // { id: 4, title: '@Delivery and payment', link: 'delivery-and-payment' },
  { id: 5, title: '@Warranty and Service', link: 'warranty' },
  { id: 6, title: '@Privacy Policy', link: 'privacy-policy' },
  { id: 7, title: '@Public offer agreement', link: 'public-offer' },
  { id: 8, title: '@Cooperation', link: 'cooperation' },
  // { id: 9, title: '@Instructions', link: 'instructions' },
  // { id: 10, title: '@Forum', link: 'forum' },
];
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;

  @include flex-container(column, stretch, center);

  background-color: #393d38;

  @extend %padding-wrp;

  &__cont {
    @extend %width-main;

    @include flex-container(column, stretch, center);
    gap: 48px;

    padding: 64px 0 40px;

    @include mobile {
      gap: 32px;

      padding: 48px 0;
    }
  }
}

.content {
  width: 100%;

  @include flex-container;
  gap: 24px 16px;

  &>.content__logo-img-w {
    display: none;

    @include mobile {
      display: block;
      margin-bottom: 16px;
    }
  }

  @include bigMobile {
    justify-content: space-evenly;
    flex-wrap: wrap;
  }

  @include mobile {
    flex-direction: column;
  }

  &__catalog-link {
    width: 100%;
    max-width: 200px;

    color: var(--color-primary-base);

    transition: color 0.2s ease;

    &:hover {
      color: var(--color-primary-dark);
    }

    @include mobile {
      display: none;
    }
  }

  &__title {
    position: relative;
    @include font(20, 30, 600);
    text-transform: uppercase;
    color: var(--color-primary-base);

    &+.contacts__text:hover {
      color: var(--color-primary-dark);
    }
  }

  &__block-list-link {
    width: 100%;
    max-width: 200px;

    @include font;
    letter-spacing: 0.02em;
    color: white;

    transition: color 0.2s ease-in-out;

    @include mobile {
      max-width: none;
    }

    &:hover {
      color: var(--color-primary-dark);
    }
  }

  &__caption {
    @include font(12, 16);
    letter-spacing: 0.02em;
    color: var(--color-sky-lighter);
  }

  &__copyrights {
    width: 100%;
    max-width: 200px;

    @include flex-container(column, stretch, center);
    gap: 16px;

    @include mobile {
      display: none;
    }
  }

  &__logo-img-w {
    @include mobile {
      display: none;
    }
  }

  &__logo-img {}

  &__copyrights-img-w {}

  &__copyrights-img {}

  &__copyrights-unit {
    @include flex-container(column, stretch, center);
    gap: 8px;

    & .content__caption {
      width: 100%;
      max-width: 120px;
      text-align: center;
    }

    &+& {
      @include flex-container;
      gap: 0;
    }
  }

  &__copyrights-caption {
    @include font(12, 16);
    letter-spacing: 0.02em;
    text-align: center;
    color: white;
  }
}

.contacts {
  &__block {
    width: 100%;
    max-width: 230px;

    @include flex-container(column, stretch);
    gap: 32px;

    @include mobile {
      max-width: none;
      gap: 24px;

      border-bottom: 1px solid var(--color-primary-base);

      padding-bottom: 16px;
    }
  }

  &__block-unit {
    @include flex-container(column, stretch);
    gap: 16px;

    @include mobile {
      gap: 8px;
    }
  }

  &__text {
    max-width: fit-content;

    @include font(16, 20, 700);
    letter-spacing: 0.02em;
    color: white;

    transition: 0.2s ease-in-out;

    @include mobile {
      @include font(16, 20);
    }
  }

  &__block-link {
    @include flex-container(row, flex-start, center);
    gap: 12px;

    &:hover .contacts__block-link-text {
      color: var(--color-primary-dark);
    }

    &:hover .contacts__block-link-img path {
      fill: var(--color-primary-dark);
    }
  }

  &__block-link-img path {
    transition: 0.2s ease-in-out;
  }

  &__block-link-text {
    @include font(20, 24);
    text-transform: uppercase;
    color: white;

    transition: 0.2s ease-in-out;
  }
}

.subscription {
  &__block {
    width: 100%;

    @include flex-container(row, space-between, center);
    gap: 16px;

    border-radius: 16px;
    background-color: var(--color-sky-dark);

    padding: 16px 32px;

    @include mobile {
      @include flex-container(column, center, flex-start);

      background: none;

      padding: 0;
    }
  }

  &__block-mailing {
    width: 100%;

    @include flex-container(row, flex-start, center);
    gap: 32px;

    @include bigMobile {
      flex-wrap: wrap;
      gap: 16px;
    }
  }

  &__block-mailing-info {
    width: 100%;
    max-width: 355px;

    @include flex-container(column, stretch);
    gap: 16px;

    @include mobile {
      max-width: none;
      gap: 8px;
    }

    & .subscription__block-title {
      @include mobile {
        color: var(--color-primary-base);
      }
    }
  }

  &__block-title {
    @include font(20, 30, 600);
    text-transform: uppercase;
    color: white;
  }

  &__block-text {
    @include font(12, 16);
    letter-spacing: 0.02em;
    color: white;

    @include mobile {
      @include font(12, 16);
      color: var(--color-sky-lighter);
    }
  }

  &__block-mailing-form {
    width: 100%;
    max-width: 484px;

    @include flex-container(row, center, center);
  }

  &__block-mailing-input {
    width: 100%;
    max-height: 40px;

    border-radius: 6px 0 0 6px;

    background-color: white;

    padding: 12px 8px;

    &::placeholder {
      @include font(12, 16);
      letter-spacing: 0.02em;
      color: var(--color-sky-lighter);
    }
  }

  &__block-mailing-btn {
    position: relative;
    width: 100%;
    max-width: 183px;

    @include flex-container(row, center, center);

    @include font(18, 24);
    letter-spacing: 0.02em;
    color: white;

    border-radius: 6px;
    background-color: var(--color-primary-base);

    margin-left: -8px;
    padding: 8px 0;

    transition: color 0.2s ease-in-out;

    &:hover {
      background-color: var(--color-primary-dark);
    }
  }

  &__block-social {
    @include mobile {
      width: 100%;
      @include flex-container(row, space-between, center);
      gap: 8px;
    }

    & .content__copyrights-unit {
      display: none;

      @include mobile {
        @include flex-container(column, center, center);
      }
    }
  }

  &__block-social-w {
    @include flex-container(column, stretch, center);
    gap: 16px;
  }

  &__block-social-list {
    @include flex-container(row, center, center);
    gap: 24px;
  }

  &__block-social-list-item {}

  &__block-social-list-item-link {
    font-size: 0;
    display: inline-block;

    & svg path {
      transition: transform 0.2s ease-in-out;
    }

    &:hover svg {
      transform: scale(1.1);
    }
  }
}
</style>
