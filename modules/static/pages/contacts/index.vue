<template>
  <div>
    <section class="banner contact-banner" ref="banner">
      <div class="banner__img-w">
 <!--        <picture>
          <source srcset="../assets/img/contactBannerMob.png" media="(max-width: 680px)" />
          <img class="banner__img" src="../assets/img/contactBanner.png" alt="" />
        </picture> -->
      </div>
      <div class="banner__content">
        <div class="banner__content-column">
          <h1 class="banner__title">{{ _T('@Contacts') }}</h1>
        </div>
      </div>
    </section>
    <section class="contact">
      <div class="contact__w" ref="contentWrap">
        <aside class="contact__nav">
          <div class="contact__nav-line"></div>
          <ul class="contact__nav-list" ref="navList">
            <li class="contact__nav-list-item" @click="navActive(0)">
              <a href="#generalPhone" class="contact__nav-list-item">
                <div class="contact__nav-list-count">1</div>
                <p class="contact__nav-list-title">{{ _T('@General number') }}</p>
              </a>
            </li>
            <li class="contact__nav-list-item" @click="navActive(1)">
              <a href="#sales" class="contact__nav-list-item">
                <div class="contact__nav-list-count">2</div>
                <p class="contact__nav-list-title">{{ _T('@Sales department') }}</p>
              </a>
            </li>
            <li class="contact__nav-list-item" @click="navActive(2)">
              <a href="#shops" class="contact__nav-list-item">
                <div class="contact__nav-list-count">3</div>
                <p class="contact__nav-list-title">{{ _T('@Shops') }}</p>
              </a>
            </li>
            <li class="contact__nav-list-item" @click="navActive(3)">
              <a href="#techSupport" class="contact__nav-list-item">
                <div class="contact__nav-list-count">4</div>
                <p class="contact__nav-list-title">{{ _T('@Technical support') }}</p>
              </a>
            </li>
            <li class="contact__nav-list-item" @click="navActive(4)">
              <a href="#accounting" class="contact__nav-list-item">
                <div class="contact__nav-list-count">5</div>
                <p class="contact__nav-list-title">{{ _T('@Accounting department') }}</p>
              </a>
            </li>
            <li class="contact__nav-list-item" @click="navActive(5)">
              <a href="#legal" class="contact__nav-list-item">
                <div class="contact__nav-list-count">6</div>
                <p class="contact__nav-list-title">
                  {{ _T('@Legal address and contacts') }}
                </p>
              </a>
            </li>
          </ul>
        </aside>
        <div class="contact__main">

          <div class="contact__main-block">
            <div class="contact__block-title-w">
              <h3 class="contact__block-title">
                <span class="ui-anchor" id="generalPhone"></span>
                {{ _T('@General number') }}
              </h3>
              <div class="contact__block-line"></div>
            </div>
            <div class="contact__block-content">
              <h4 class="contact__block-subtitle">
                {{ _T('@Multichannel hotline telephone') }}
              </h4>
              <a class="contact__button-transparent" href="tel:0800309988">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path class="contact__btn-img" d="M18.1183 14.702L14.0001 15.5C11.2184 14.1038 9.50009 12.5 8.50009 10L9.27004 5.8699L7.81461 2L4.06369 2C2.93614 2 2.04823 2.93178 2.21663 4.04668C2.63704 6.83 3.87662 11.8765 7.50009 15.5C11.3053 19.3052 16.7858 20.9564 19.8021 21.6127C20.9669 21.8662 22.0001 20.9575 22.0001 19.7655L22.0001 16.1812L18.1183 14.702Z" stroke="#F36C21" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>{{ _T('@Call center number') }}</span>
              </a>
              <p class="contact__block-text">
                ({{ _T('@Calls within Ukraine are free') }})
              </p>
            </div>
            <div class="contact__block-social">
              <div class="contact__block-subtitle">
                {{ _T('@We always happy to answer questions') }}
              </div>
              <div class="contact__block-social-w">
                <a class="contact__block-social-link" href="https://www.instagram.com/logicpower_official/">
                  <img src="~/assets/icons/instagramIcon.svg" alt="instagram" />
                </a>
                <a class="contact__block-social-link" href="https://www.facebook.com/logicpower.official/">
                  <img src="~/assets/icons/facebookIcon.svg" alt="facebook" />
                </a>
                <a class="contact__block-social-link" href="https://www.youtube.com/channel/UCy8sx2LSb7clwULG-X-cCyQ">
                  <img src="~/assets/icons/youtubeIcon.svg" alt="youtube" />
                </a>
              </div>
            </div>
          </div>

          <div class="contact__main-block">
            <div class="contact__block-title-w">
              <h3 class="contact__block-title">
                <span class="ui-anchor" id="sales"></span>
                {{ _T('@Sales department') }}
              </h3>
              <div class="contact__block-line"></div>
            </div>
            <p class="contact__block-text">
              {{ _T('@Calls within Ukraine are free') }}.
            </p>
            <div class="contact__block-employee-list">

              <EmployeeCard 
                class="contact__employee-item"
                v-for="(item, index) in 6"
                :key="index" 
              />

            </div>
          </div>

          <div class="contact__main-block">
            <div class="contact__block-title-w">
              <h3 class="contact__block-title">
                <span class="ui-anchor" id="shops"></span>
                {{ _T('@Shops') }}
              </h3>
              <div class="contact__block-line"></div>
            </div>

            <div class="contact__block-description">
              <h4 class="contact__block-subtitle">{{ _T('@Odesa') }}</h4>
              <p class="contact__block-info-text">
                {{ _T('@Address') }}: {{ _T('@Industrial market 7 km') }}
              </p>
              <p class="contact__block-info-text">
                {{ _T('@Schedule Sat-Thu') }}
              </p>
            </div>

            <div class="contact__block-map-w">
              <iframe class="contact__block-map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10996.652086968357!2d30.6352593!3d46.4454668!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x65fa4f41baab6944!2sLogicPower!5e0!3m2!1sru!2sua!4v1592986552060!5m2!1sru!2sua"
                frameborder="0" style="border: 0" aria-hidden="false" tabindex="0"></iframe>
            </div>

            <div class="contact__block-line"></div>

            <div class="contact__block-description">
              <h4 class="contact__block-subtitle">{{ _T('@Odesa') }}</h4>
              <p class="contact__block-info-text">
                {{ _T('@Address') }}: {{ _T('@Prom.rynok Starokonnyy') }}
              </p>
              <p class="contact__block-info-text">
                {{ _T('@Schedule Mon-Sun') }}
              </p>
            </div>

            <div class="contact__block-map-w">
              <iframe class="contact__block-map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2747.4966733400734!2d30.7112497!3d46.4784769!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x510ed329a1dace3d!2sLogicPower!5e0!3m2!1sru!2sua!4v1592986700273!5m2!1sru!2sua"
                frameborder="0" style="border: 0" aria-hidden="false" tabindex="0"></iframe>
            </div>

            <div class="contact__block-line"></div>

            <div class="contact__block-description">
              <h4 class="contact__block-subtitle">{{ _T('@Odesa') }}</h4>
              <p class="contact__block-info-text">
                {{ _T('@Address') }}: {{ _T('@Nebesnoi Sotny avenue') }}
              </p>
              <p class="contact__block-info-text">
                {{ _T('@Schedule Mon-Sun') }}
              </p>
            </div>

            <div class="contact__block-map-w">
              <iframe class="contact__block-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d343.88882708408215!2d30.710111198252406!3d46.40686231749278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c633b0678e4b13%3A0x8c6f39b843a3b43a!2sLogicPower!5e0!3m2!1sru!2sua!4v1632305240162!5m2!1sru!2sua"
                frameborder="0" style="border: 0" aria-hidden="false" tabindex="0"></iframe>
            </div>
          </div>

          <div class="contact__main-block">
            <div class="contact__block-title-w">
              <h3 class="contact__block-title">
                <span class="ui-anchor" id="techSupport"></span>
                {{ _T('@Technical support') }}
              </h3>
              <div class="contact__block-line"></div>
            </div>
            <div class="contact__block-description">
              <p class="contact__block-info-text">
                {{ _T('@All products covered by warranty') }}
              </p>
              <p class="contact__block-info-text">
                {{ _T('@Warranty period indicated in warranty card') }}
              </p>
            </div>

            <EmployeeCard class="contact__tech-support-item" />

            <a class="contact__button-transparent" href="tel:0800309988">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path class="contact__btn-img" d="M18.1183 14.702L14.0001 15.5C11.2184 14.1038 9.50009 12.5 8.50009 10L9.27004 5.8699L7.81461 2L4.06369 2C2.93614 2 2.04823 2.93178 2.21663 4.04668C2.63704 6.83 3.87662 11.8765 7.50009 15.5C11.3053 19.3052 16.7858 20.9564 19.8021 21.6127C20.9669 21.8662 22.0001 20.9575 22.0001 19.7655L22.0001 16.1812L18.1183 14.702Z" stroke="#F36C21" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>Позвонить</span>
              </a>
            <h4 class="contact__block-subtitle">{{ _T('@Service centres') }}:</h4>
            <div class="contact__block-map-w">
              <iframe class="contact__block-map"
                src="https://www.google.com/maps/d/embed?mid=1tlN4jCbZdkwoAuvsD7P-0hJwBGwZVCp6&hl=ru" frameborder="0"
                style="border: 0" aria-hidden="false" tabindex="0"></iframe>
            </div>
            <p class="contact__block-info-text">
              {{ _T('@Attach accompanying sheet') }}
            </p>

            <a class="contact__button-transparent" href="https://logicpower.ua/flies/blank_servis.xlsx">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path class="contact__btn-img" d="M6 20L18 20" stroke="#F36C21" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path class="contact__btn-img" d="M12 4V16M12 16L15.5 12.5M12 16L8.5 12.5" stroke="#F36C21" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>{{ _T('@Download file') }}</span>
            </a>
          </div>

          <div class="contact__main-block">
            <div class="contact__block-title-w">
              <h3 class="contact__block-title">
                <span class="ui-anchor" id="accounting"></span>
                {{ _T('@Accounting department') }}
              </h3>
              <div class="contact__block-line"></div>
            </div>
            <p class="contact__block-text">
              {{ _T('@For all questions documentation') }}
            </p>
            <div class="contact__block-employee-list">
              <EmployeeCard class="contact__tech-support-item" />
            </div>
          </div>

          <div class="contact__main-block">
            <div class="contact__block-title-w">
              <h3 class="contact__block-title">
                <span class="ui-anchor" id="legal"></span>
                {{ _T('@Legal address and contacts') }}
              </h3>
              <div class="contact__block-line"></div>
            </div>
            <div class="contact__block-content">
              <h4 class="contact__block-subtitle">{{ _T('@Legal address') }}:</h4>
              <p class="contact__block-info-text">
                {{ _T('@Mala Arnautska 105/1') }}
              </p>

              <div class="contact__block-info-buttons">
                <a class="contact__button-transparent" href="mailto:info@logicpower.ua">
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path class="contact__btn-img" d="M7.5 9L12.5 12.5L17.5 9" stroke="#F36C21" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path class="contact__btn-img" d="M2.5 17V7C2.5 5.89543 3.39543 5 4.5 5H20.5C21.6046 5 22.5 5.89543 22.5 7V17C22.5 18.1046 21.6046 19 20.5 19H4.5C3.39543 19 2.5 18.1046 2.5 17Z" stroke="#F36C21" stroke-width="1.5"/>
                </svg>

                <span>E-mail: {{ 'info@logicpower.ua' }}</span>
              </a>

              <a class="contact__button-transparent" href="tel:0674886362">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path class="contact__btn-img" d="M18.1183 14.702L14.0001 15.5C11.2184 14.1038 9.50009 12.5 8.50009 10L9.27004 5.8699L7.81461 2L4.06369 2C2.93614 2 2.04823 2.93178 2.21663 4.04668C2.63704 6.83 3.87662 11.8765 7.50009 15.5C11.3053 19.3052 16.7858 20.9564 19.8021 21.6127C20.9669 21.8662 22.0001 20.9575 22.0001 19.7655L22.0001 16.1812L18.1183 14.702Z" stroke="#F36C21" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>{{ _T('@Telephone') }}: {{ '067 488 63 62' }}</span>
              </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import EmployeeCard from '~~/modules/shared/components/infoCard/EmployeeCard.vue';

const navList = ref(null);

function navActive(index) {
  for (const key in navList.value.children) {
    if (Object.hasOwnProperty.call(navList.value.children, key)) {
      const element = navList.value.children[key];
      element.classList.remove('active');
    }
  }
  navList.value.children[index].classList.add('active')
}

</script>

<style lang="scss" scoped>
.banner.contact-banner {
  margin-bottom: 0;
}

.contact {
  @include flex-container(column, center, center);

  @extend %padding-wrp;

  &_block-info-text {
    @include font(18, 24);
    letter-spacing: 0.02em;

    @include mobile {
      @include font;
    }
  }

  &__w {
    @extend %width-main;

    @include flex-container;
    gap: 24px;

    padding-bottom: 64px;
  }

  &__nav {
    --circ-r: 24px;

    position: relative;

    @include bigMobile {
      display: none;
    }
  }

  &__nav-line {
    position: absolute;
    left: var(--circ-r);
    transform: translateX(-50%);

    height: 100%;
    width: 8px;

    border-radius: 6px;

    background-color: white;
    z-index: -1;
  }

  &__nav-list {
    width: 100%;
    max-width: 230px;

    position: sticky;
    top: calc(16px + var(--height-header, 0px));

    @include flex-container(column, null, null);
    gap: 32px;

    padding: 16px 0;
  }

  &__nav-list-item {
    @include flex-container(row, flex-start, center);
    gap: 16px;

    cursor: pointer;

    &:hover {
      .contact__nav-list-count {
        border-color: #F36C21;
        background-color: #FEF0E9;
      }

      .contact__nav-list-title {
        color: #2B2B2B;
      }
    }

    &.active {
      .contact__nav-list-count {
        border-color: #F36C21;
        background-color: #F36C21;
        color: white;
      }

      .contact__nav-list-title {
        color: #2B2B2B;
      }
    }
  }

  &__nav-list-count {
    min-width: calc(var(--circ-r) * 2);
    height: calc(var(--circ-r) * 2);

    @include flex-container(row, center, center);

    @include font(18, 24);
    text-align: center;
    color: var(--color-primary-base);

    border-radius: 50%;
    border: 1px solid white;
    background-color: white;

    transition: background-color .1s ease-in-out;
  }

  &__nav-list-title {
    @include font(20, 28);
    letter-spacing: 0.02em;
    color: #8A8A8A;
  }

  &__main {
    @include flex-container(column, null, null);
    gap: 36px;

    padding-top: 80px;

    @include mobile {
      gap: 24px;
      padding-top: 56px;
    }
  }

  &__main-block {
    --local-pad: 32px;

    @include flex-container(column, null, null);
    gap: 16px;

    background: white;
    box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.1);
    border-radius: 8px;

    padding: var(--local-pad);

    @include mobile {
      gap: 16px;

      padding: 16px;
    }
  }

  &__block-title-w {
    @include flex-container(column, null, null);
    gap: 16px;
  }

  &__block-title {
    @include font(20, 30, 600);
    text-transform: uppercase;
    color: #2B2B2B;

    @include mobile {
      @include font(20, 30, 600);
    }
  }

  &__block-line {
    width: 100%;
    height: 1px;

    background-color: var(--color-primary-base);
  }

  &__block-content {
    @include flex-container(column, null, null);
    gap: 16px;

    @include mobile {
      align-items: center;
      margin-bottom: 24px;
    }
  }

  &__block-subtitle {
    @include font(16, 22);
    letter-spacing: 0.02em;

    @include mobile {
      @include font(16, 22);
      text-align: center;
      text-transform: none;
    }
  }

  &__button-transparent {
    width: max-content;

    @include flex-container(row, space-evenly, center);
    gap: 16px;

    border: 1px solid #F36C21;
    border-radius: 8px;

    padding: 8px 32px;

    transition: border-color 0.1s ease;
    transition: background-color 0.1s ease;

    &:hover {
      border-color: #FF5B00;
      background-color: #FF5B00;

      & span {
        color: white;
      }

      .contact__btn-img {
        stroke: white;
      }
    }

    &:active {
      border-color: #AC450B;
      background-color: #AC450B;

      & span {
        color: white;
      }

      .contact__btn-img {
        stroke: white;
      }
    }

    & span {
      @include font(18, 24);
      letter-spacing: 0.02em;

      color: var(--color-primary-base);

      transition: 0.2s ease;
    }

    @include mobile {
      max-width: 220px;
    }
  }

  &__block-text {
    @include font;
    letter-spacing: 0.02em;

    @include mobile {
      @include font(12, 16);
      text-align: center;
    }
  }

  &__block-social {
    @include flex-container(column, center, flex-start);
    gap: 16px;

    @include mobile {
      align-items: center;
    }
  }

  &__block-social-w {
    @include flex-container(row, flex-start, center);
    gap: 16px;

    @include mobile {
      justify-content: center;
    }
  }

  &__block-social-link {
    cursor: pointer;
  }

  &__block-employee-list {
    @include flex-container(row, flex-start, center);
    flex-wrap: wrap;
    gap: 16px;
  }

  &__employee-item {
    --gap: 16px;

    @include set-item-count-in-row(3);

    @include smallestScreen {
      @include set-item-count-in-row(2);
    }

    @include mobile {
      @include set-item-count-in-row(1);
    }
  }

  &__tech-support-item {
    max-width: 400px;
    width: 100%;
  }

  &__block-description {
    @include flex-container(column, null, null);
    gap: 16px;

    & .contact__block-subtitle {
      text-align: left;
    }
  }

  &__block-map-w {
    @include flex-container(row, center, center);

    width: 100%;
    max-height: 100%;
    overflow: hidden;
  }

  &__block-map {
    width: 100%;
    height: 523px;
  }

  &__block-info-text {
    /* @include font(18, 24, 500); */
    @include font(16, 22);
    letter-spacing: 0.02em;

    @include mobile {
      @include font;
    }
  }

  &__block-info-buttons {
    max-width: 360px;
    width: 100%;

    @include flex-container(column, flex-start);
    
    gap: 16px;

    & > a {
      width: 100%;
    }
  }

  &__block-legal-contacts {
    max-width: 415px;
    width: 100%;

    @include flex-container(row, flex-start, center);
    gap: 16px;

    border: 1px solid #8a8a8a;
    border-radius: 8px;

    padding: 8px 12px;

    transition: 0.2s ease;

    &:hover {
      border-color: var(--color-primary-dark);

      & span {
        color: var(--color-primary-dark);
      }
    }

    & span {
      @include font(20, 28);
      letter-spacing: 0.02em;

      transition: 0.2s ease;

      @include mobile {
        @include font;
      }
    }
  }
}
</style>
