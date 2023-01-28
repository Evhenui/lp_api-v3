<template>
  <div
    class="modal-menu"
    :class="[{ active: menuItems.active }, { catalog: mobileCatalog }]"
    @click.stop="closeModal"
  >
    <div @click.stop class="modal-menu__wrapper">
      <section class="modal-menu__content">
        <header class="modal-menu__header">
          <!-- <a href="#" class="modal-menu__logo">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="modal-menu__logo-image"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.89062 30.1491L4.76522 16.748H7.24306L5.70576 27.7426H9.80522L9.46792 30.1491H2.89062Z"
                fill="#F36C21"
              />
              <path
                class="modal-menu__logo-image"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M35.1875 30.1491L37.0621 16.748H40.8113C42.3421 16.761 43.4707 17.1372 44.2037 17.8832C44.9302 18.6291 45.2026 19.6475 45.0275 20.9383C44.8589 22.1578 44.3075 23.1567 43.3929 23.9286C42.4718 24.707 41.2264 25.0897 39.6437 25.0897H38.3724L37.6653 30.1556H35.1875V30.1491ZM39.2026 19.1545L38.7097 22.6832H40.1821C40.8632 22.6832 41.4016 22.534 41.8037 22.2486C42.2059 21.9567 42.4589 21.5156 42.5497 20.9253C42.634 20.3416 42.5107 19.907 42.1799 19.6086C41.8491 19.3102 41.3497 19.161 40.6686 19.161H39.2026V19.1545Z"
                fill="#F36C21"
              />
              <path
                class="modal-menu__logo-image"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.7237 19.5499C21.3399 17.2407 23.8178 8.00391 23.8178 8.00391H20.8859L16.475 24.4407C16.2545 25.2515 16.741 25.9066 17.5453 25.9066H23.954L24.888 22.9747H19.7961L20.7237 19.5499Z"
                fill="#F36C21"
              />
              <path
                class="modal-menu__logo-image"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M28.1882 19.252C28.999 19.252 29.479 19.9071 29.265 20.7179L27.1309 28.1449C26.9169 28.9557 26.0866 29.6109 25.2758 29.6109H21.4293C20.9428 31.4336 20.0088 34.8844 19.5158 36.7395H20.3006L17.0574 39.9957L15.6758 36.7395H16.5774L18.8931 28.1514C19.1071 27.3406 19.9374 26.6855 20.7482 26.6855H24.5947C24.8866 25.5828 25.6455 23.2865 25.9374 22.1903H20.9363L21.7017 19.2584H28.1882V19.252Z"
                fill="#F36C21"
              />
              <path
                class="modal-menu__logo-image"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.1084 31.4529C14.65 29.7535 13.0414 26.9124 13.0414 23.7016C13.0414 18.6097 17.0825 14.4583 22.1354 14.2832L22.8425 11.6432C22.7322 11.6432 22.6219 11.6367 22.5052 11.6367C15.8695 11.6367 10.4922 17.014 10.4922 23.6497C10.4922 28.0605 12.8727 31.92 16.4208 34.0021L17.1084 31.4529Z"
                fill="#F36C21"
              />
              <path
                class="modal-menu__logo-image"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M23.7338 11.6953L23.0397 14.2899C27.9824 14.5818 31.8938 18.6813 31.8938 23.6953C31.8938 28.8975 27.6775 33.1202 22.4689 33.1202C20.8019 33.1202 19.2386 32.6856 17.883 31.9267L17.2148 34.424C18.8105 35.2088 20.6138 35.6564 22.5143 35.6564C29.15 35.6564 34.5273 30.2791 34.5273 23.6434C34.5208 17.4229 29.7921 12.3115 23.7338 11.6953Z"
                fill="#F36C21"
              />
            </svg>
          </a> -->
          <Logo :orange="isLogoOrange" @click.stop="closeModal" />
          <div class="modal-menu__language">
            <ButtonLanguage
              :language="'ua'"
              :class="{ active: lang.active === true }"
              @click="changeLang($event.currentTarget)"
            />
            <ButtonLanguage
              :language="'ru'"
              :class="{ active: lang.active === false }"
              @click="changeLang($event.currentTarget)"
            />
          </div>
          <button class="modal-menu__close" @click="closeModal">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </header>
        <main class="modal-menu__main">
          <div class="modal-menu__main-wrapper">
            <section class="modal-menu__section">
              <ModalMenuItem
                class="modal-menu__item catalog"
                @click="openCatalog"
              >
                <template v-slot:title>
                  <span class="modal-menu__item-title">Каталог</span>
                </template>
                <template v-slot:image>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_4486_36092)">
                      <path
                        d="M8.86262 2.46875H0.800781V10.5306H8.86262V2.46875Z"
                        stroke="#363636"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M21.5305 15.1367H13.4688V23.1986H21.5305V15.1367Z"
                        stroke="#363636"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8.86262 15.1367H0.800781V23.1986H8.86262V15.1367Z"
                        stroke="#363636"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M17.5013 0.800781L11.8008 6.50134L17.5013 12.2019L23.2019 6.50134L17.5013 0.800781Z"
                        stroke="#363636"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_4486_36092">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </template>
              </ModalMenuItem>
            </section>

            <section class="modal-menu__section">
              <ModalMenuItem class="modal-menu__item">
                <template v-slot:title>
                  <span class="modal-menu__item-title">Личный кабинет</span>
                </template>
                <template v-slot:image>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4.26953 18.3457C4.26953 18.3457 6.49856 15.5 11.9986 15.5C17.4986 15.5 19.7276 18.3457 19.7276 18.3457"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </template>
              </ModalMenuItem>

              <ModalMenuItem class="modal-menu__item">
                <template v-slot:title>
                  <span class="modal-menu__item-title">Корзина</span>
                </template>
                <template v-slot:image>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.5 22C20.3284 22 21 21.3284 21 20.5C21 19.6716 20.3284 19 19.5 19C18.6716 19 18 19.6716 18 20.5C18 21.3284 18.6716 22 19.5 22Z"
                      fill="#2B2B2B"
                      stroke="#2B2B2B"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.5 22C10.3284 22 11 21.3284 11 20.5C11 19.6716 10.3284 19 9.5 19C8.67157 19 8 19.6716 8 20.5C8 21.3284 8.67157 22 9.5 22Z"
                      fill="#2B2B2B"
                      stroke="#2B2B2B"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5 4H22L20 15H7L5 4ZM5 4C4.83333 3.33333 4 2 2 2"
                      stroke="#2B2B2B"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M20 15H7H5.23077C3.44646 15 2.5 15.7812 2.5 17C2.5 18.2188 3.44646 19 5.23077 19H19.5"
                      stroke="#2B2B2B"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </template>
              </ModalMenuItem>

              <ModalMenuItem class="modal-menu__item">
                <template v-slot:title>
                  <span class="modal-menu__item-title">Сравнение товаров</span>
                </template>
                <template v-slot:image>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.6873 5.73644L19.2178 6.51726C19.4912 6.55587 19.6816 6.80882 19.643 7.08225C19.6044 7.35568 19.3514 7.54605 19.078 7.50744L13.5475 6.72662C13.2622 7.27471 12.6536 7.61033 12.007 7.51903C11.3603 7.42773 10.8684 6.93675 10.746 6.33109L5.21549 5.55026C4.94206 5.51165 4.7517 5.2587 4.7903 4.98527C4.82891 4.71184 5.08186 4.52147 5.35529 4.56008L10.8858 5.34091C11.1711 4.79282 11.7797 4.45719 12.4264 4.54849C13.073 4.63979 13.5649 5.13077 13.6873 5.73644Z"
                      fill="#2B2B2B"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M1.53518 13L5 7.80278L8.46482 13H1.53518ZM1.01805 14C1.00609 14.0735 1 14.1481 1 14.2232C1 16.309 2.69095 18 4.77684 18H5.22316C7.30905 18 9 16.309 9 14.2232C9 14.1481 8.99391 14.0735 8.98195 14H1.01805ZM0.401135 12.8983L4.39907 6.90139C4.68495 6.47258 5.31505 6.47258 5.60093 6.90139L9.59887 12.8983C9.86043 13.2906 10 13.7516 10 14.2232C10 16.8613 7.86133 19 5.22316 19H4.77684C2.13867 19 0 16.8613 0 14.2232C0 13.7516 0.139575 13.2906 0.401135 12.8983Z"
                      fill="#2B2B2B"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.5352 15L19 9.80278L22.4648 15H15.5352ZM15.018 16C15.0061 16.0735 15 16.1481 15 16.2232C15 18.309 16.691 20 18.7768 20H19.2232C21.309 20 23 18.309 23 16.2232C23 16.1481 22.9939 16.0735 22.9819 16H15.018ZM14.4011 14.8983L18.3991 8.90139C18.6849 8.47258 19.3151 8.47258 19.6009 8.90139L23.5989 14.8983C23.8604 15.2906 24 15.7516 24 16.2232C24 18.8613 21.8613 21 19.2232 21H18.7768C16.1387 21 14 18.8613 14 16.2232C14 15.7516 14.1396 15.2906 14.4011 14.8983Z"
                      fill="#2B2B2B"
                    />
                  </svg>
                </template>
              </ModalMenuItem>

              <ModalMenuItem class="modal-menu__item">
                <template v-slot:title>
                  <span class="modal-menu__item-title">Список желаний</span>
                </template>
                <template v-slot:image>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 8.86222C22 10.4087 21.4062 11.8941 20.3458 12.9929C17.9049 15.523 15.5374 18.1613 13.0053 20.5997C12.4249 21.1505 11.5042 21.1304 10.9488 20.5547L3.65376 12.9929C1.44875 10.7072 1.44875 7.01723 3.65376 4.73157C5.88044 2.42345 9.50794 2.42345 11.7346 4.73157L11.9998 5.00642L12.2648 4.73173C13.3324 3.6245 14.7864 3 16.3053 3C17.8242 3 19.2781 3.62444 20.3458 4.73157C21.4063 5.83045 22 7.31577 22 8.86222Z"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                  </svg>
                </template>
              </ModalMenuItem>
            </section>

            <section class="modal-menu__section">
              <ModalMenuItem class="modal-menu__item">
                <template v-slot:title>
                  <span class="modal-menu__item-title">Отдел продаж:</span>
                  <span class="modal-menu__item-title"
                    >+38 (067) 654-07-90</span
                  >
                </template>
                <template v-slot:image>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.1181 14.702L13.9998 15.5C11.2181 14.1038 9.49985 12.5 8.49985 10L9.2698 5.8699L7.81436 2L4.06344 2C2.9359 2 2.04799 2.93178 2.21639 4.04668C2.63679 6.83 3.87638 11.8765 7.49985 15.5C11.305 19.3052 16.7856 20.9564 19.8019 21.6127C20.9666 21.8662 21.9998 20.9575 21.9998 19.7655L21.9998 16.1812L18.1181 14.702Z"
                      stroke="#2B2B2B"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </template>
              </ModalMenuItem>

              <ModalMenuItem class="modal-menu__item">
                <template v-slot:title>
                  <span class="modal-menu__item-title">Техподдержка:</span>
                  <span class="modal-menu__item-title"
                    >+38 (067) 654-07-90</span
                  >
                </template>
                <template v-slot:image>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 11C20 6.58172 16.4183 3 12 3C7.58172 3 4 6.58172 4 11"
                      stroke="#2B2B2B"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2 15.4384V13.5616C2 12.6438 2.62459 11.8439 3.51493 11.6213L5.25448 11.1864C5.63317 11.0917 6 11.3781 6 11.7685V17.2315C6 17.6219 5.63317 17.9083 5.25448 17.8136L3.51493 17.3787C2.62459 17.1561 2 16.3562 2 15.4384Z"
                      stroke="#2B2B2B"
                      stroke-width="1.5"
                    />
                    <path
                      d="M22 15.4384V13.5616C22 12.6438 21.3754 11.8439 20.4851 11.6213L18.7455 11.1864C18.3668 11.0917 18 11.3781 18 11.7685V17.2315C18 17.6219 18.3668 17.9083 18.7455 17.8136L20.4851 17.3787C21.3754 17.1561 22 16.3562 22 15.4384Z"
                      stroke="#2B2B2B"
                      stroke-width="1.5"
                    />
                    <path
                      d="M20 18V18.5C20 19.6046 19.1046 20.5 18 20.5H14.5"
                      stroke="#2B2B2B"
                      stroke-width="1.5"
                    />
                    <path
                      d="M13.5 22H10.5C9.67157 22 9 21.3284 9 20.5C9 19.6716 9.67157 19 10.5 19H13.5C14.3284 19 15 19.6716 15 20.5C15 21.3284 14.3284 22 13.5 22Z"
                      stroke="#2B2B2B"
                      stroke-width="1.5"
                    />
                  </svg>
                </template>
              </ModalMenuItem>
            </section>

            <section class="modal-menu__section">
              <section class="modal-menu__item-dropdown">
                <div
                  class="modal-menu__menu-header"
                  :class="{ active: dropdownAboutCompany }"
                  @click="dropdownAboutCompany = !dropdownAboutCompany"
                >
                  <ModalMenuItem class="modal-menu__item">
                    <template v-slot:title>
                      <span class="modal-menu__item-title">О компании</span>
                    </template>
                    <template v-slot:image>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20.4839 3H16.4922L16.9922 8C16.9922 8 17.9922 9 19.4922 9C20.5692 9 21.3025 8.48445 21.6305 8.1937C21.7612 8.07782 21.809 7.90091 21.7803 7.72861L21.0757 3.50136C21.0275 3.21205 20.7772 3 20.4839 3Z"
                          stroke="#2B2B2B"
                          stroke-width="1.5"
                        />
                        <path
                          d="M16.4922 3L16.9922 8C16.9922 8 15.9922 9 14.4922 9C12.9922 9 11.9922 8 11.9922 8V3H16.4922Z"
                          stroke="#2B2B2B"
                          stroke-width="1.5"
                        />
                        <path
                          d="M11.9922 3V8C11.9922 8 10.9922 9 9.49219 9C7.99219 9 6.99219 8 6.99219 8L7.49219 3H11.9922Z"
                          stroke="#2B2B2B"
                          stroke-width="1.5"
                        />
                        <path
                          d="M7.49349 3H3.50177C3.20846 3 2.95815 3.21205 2.90993 3.50136L2.20539 7.72862C2.17667 7.90091 2.2245 8.07782 2.3552 8.1937C2.68312 8.48445 3.41644 9 4.49347 9C5.99347 9 6.99349 8 6.99349 8L7.49349 3Z"
                          stroke="#2B2B2B"
                          stroke-width="1.5"
                        />
                        <path
                          d="M3 9V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V9"
                          stroke="#2B2B2B"
                          stroke-width="1.5"
                        />
                        <path
                          d="M14.832 21V15C14.832 13.8954 13.9366 13 12.832 13H10.832C9.72746 13 8.83203 13.8954 8.83203 15V21"
                          stroke="#2B2B2B"
                          stroke-width="1.5"
                          stroke-miterlimit="16"
                        />
                      </svg>
                    </template>
                  </ModalMenuItem>
                  <div class="modal-menu__item-arrow">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 6L15 12L9 18"
                        stroke="#F36C21"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div class="modal-menu__menu-body" v-if="dropdownAboutCompany">
                  <ul class="modal-menu__dropdown-list">
                    <li
                      class="modal-menu__dropdown-category"
                      v-for="(item, index) in menuItems.aboutCompany"
                      :key="index"
                    >
                      {{ item }}
                    </li>
                  </ul>
                </div>
              </section>

              <ModalMenuItem class="modal-menu__item">
                <template v-slot:title>
                  <span class="modal-menu__item-title">Контакты</span>
                </template>
                <template v-slot:image>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 10L12 10L16 10"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8 14L10 14L12 14"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.8214 2.48697 15.5291 3.33782 17L2.5 21.5L7 20.6622C8.47087 21.513 10.1786 22 12 22Z"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </template>
              </ModalMenuItem>

              <section class="modal-menu__item-dropdown">
                <div
                  class="modal-menu__menu-header"
                  :class="{ active: dropdownServices }"
                  @click="dropdownServices = !dropdownServices"
                >
                  <ModalMenuItem class="modal-menu__item">
                    <template v-slot:title>
                      <span class="modal-menu__item-title"
                        >Сервис и поддержка</span
                      >
                    </template>
                    <template v-slot:image>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.5 22C10.5376 22 13 19.5376 13 16.5C13 13.4624 10.5376 11 7.5 11C4.46243 11 2 13.4624 2 16.5C2 17.5018 2.26783 18.441 2.7358 19.25L2.275 21.725L4.75 21.2642C5.55898 21.7322 6.49821 22 7.5 22Z"
                          stroke="#2B2B2B"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M15.2824 17.8978C16.2587 17.7405 17.1758 17.4065 18 16.9297L21.6 17.6L20.9297 14C21.6104 12.8233 22 11.4571 22 10C22 5.58172 18.4183 2 14 2C9.97262 2 6.64032 4.97598 6.08221 8.84884"
                          stroke="#2B2B2B"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </template>
                  </ModalMenuItem>
                  <div class="modal-menu__item-arrow">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 6L15 12L9 18"
                        stroke="#F36C21"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div class="modal-menu__menu-body" v-if="dropdownServices">
                  <ul class="modal-menu__dropdown-list">
                    <li
                      class="modal-menu__dropdown-category"
                      v-for="(item, index) in menuItems.services"
                      :key="index"
                    >
                      {{ item }}
                    </li>
                  </ul>
                </div>
              </section>
            </section>

            <section class="modal-menu__section">
              <ModalMenuItem class="modal-menu__item">
                <template v-slot:title>
                  <span class="modal-menu__item-title">Блог</span>
                </template>
                <template v-slot:image>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 8L4 6L16 6V8"
                      stroke="#2B2B2B"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10 6L10 18M10 18H12M10 18H8"
                      stroke="#2B2B2B"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M14 13.5L14 12L20 12V13.5"
                      stroke="#2B2B2B"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17 12V18M17 18H15.5M17 18H18.5"
                      stroke="#2B2B2B"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </template>
              </ModalMenuItem>

              <ModalMenuItem class="modal-menu__item">
                <template v-slot:title>
                  <span class="modal-menu__item-title">Форум</span>
                </template>
                <template v-slot:image>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 12.5C17.2761 12.5 17.5 12.2761 17.5 12C17.5 11.7239 17.2761 11.5 17 11.5C16.7239 11.5 16.5 11.7239 16.5 12C16.5 12.2761 16.7239 12.5 17 12.5Z"
                      fill="#2B2B2B"
                      stroke="#2B2B2B"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12 12.5C12.2761 12.5 12.5 12.2761 12.5 12C12.5 11.7239 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.7239 11.5 12C11.5 12.2761 11.7239 12.5 12 12.5Z"
                      fill="#2B2B2B"
                      stroke="#2B2B2B"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7 12.5C7.27614 12.5 7.5 12.2761 7.5 12C7.5 11.7239 7.27614 11.5 7 11.5C6.72386 11.5 6.5 11.7239 6.5 12C6.5 12.2761 6.72386 12.5 7 12.5Z"
                      fill="#2B2B2B"
                      stroke="#2B2B2B"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.8214 2.48697 15.5291 3.33782 17L2.5 21.5L7 20.6622C8.47087 21.513 10.1786 22 12 22Z"
                      stroke="#2B2B2B"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </template>
              </ModalMenuItem>
            </section>

            <section class="modal-menu__section">
              <ModalMenuItem class="modal-menu__item">
                <template v-slot:title>
                  <span class="modal-menu__item-title"
                    >Калькулятор для расчета ёмкости АКБ для ИБП</span
                  >
                </template>
                <template v-slot:image>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_4486_36138)">
                      <path
                        d="M1 21V3C1 1.89543 1.89543 1 3 1H21C22.1046 1 23 1.89543 23 3V21C23 22.1046 22.1046 23 21 23H3C1.89543 23 1 22.1046 1 21Z"
                        stroke="#2B2B2B"
                        stroke-width="1.5"
                      />
                      <path
                        d="M15 7L17 7H19"
                        stroke="#2B2B2B"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M15 15.5H17L19 15.5"
                        stroke="#2B2B2B"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M15 18.5H17H19"
                        stroke="#2B2B2B"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5 7H7M9 7H7M7 7V5M7 7V9"
                        stroke="#2B2B2B"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5.58609 18.4142L7.0003 17M8.41452 15.5858L7.0003 17M7.0003 17L5.58609 15.5858M7.0003 17L8.41452 18.4142"
                        stroke="#2B2B2B"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_4486_36138">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </template>
              </ModalMenuItem>
            </section>
          </div>
        </main>
        <main class="modal-menu__catalog">
          <div class="modal-menu__catalog-wrapper">
            <ButtonBack @click="catalogBack" />
            <ClientOnly>
              <ul
                ref="testList"
                class="modal-menu__catalog-menu"
              >
                <MenuCatalogItem 
                  v-for="(item, index) in dynamicCatalog"
                  :key="item.id" 
                  @click="getChildren(index)" 
                  :category="item" 
                />
              </ul>
            </ClientOnly>
          </div>
        </main>
        <footer class="modal-menu__footer">
          <p class="modal-menu__social-network-title">Мы в соцсетях:</p>
          <div class="modal-menu__social-networks">
            <a @click.prevent href="#" class="modal-menu__social-item">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                  stroke="#F36C21"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16Z"
                  stroke="#F36C21"
                  stroke-width="1.5"
                />
                <path
                  d="M17.5 6.51L17.51 6.49889"
                  stroke="#F36C21"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>

            <a @click.prevent href="#" class="modal-menu__social-item">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 12L10.5 14V10L14 12Z"
                  fill="#F36C21"
                  stroke="#F36C21"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2 12.708V11.2929C2 8.39754 2 6.94988 2.90549 6.01841C3.81099 5.08694 5.23656 5.04662 8.08769 4.96598C9.43873 4.92777 10.8188 4.90039 12 4.90039C13.1812 4.90039 14.5613 4.92777 15.9123 4.96598C18.7634 5.04662 20.189 5.08694 21.0945 6.01841C22 6.94988 22 8.39754 22 11.2929V12.708C22 15.6033 22 17.0509 21.0945 17.9824C20.189 18.9139 18.7635 18.9542 15.9124 19.0349C14.5613 19.0731 13.1812 19.1005 12 19.1005C10.8188 19.1005 9.43867 19.0731 8.0876 19.0349C5.23651 18.9542 3.81097 18.9139 2.90548 17.9824C2 17.0509 2 15.6033 2 12.708Z"
                  stroke="#F36C21"
                  stroke-width="1.5"
                />
              </svg>
            </a>

            <a @click.prevent href="#" class="modal-menu__social-item">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8Z"
                  stroke="#F36C21"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11 21C11 18 11 15 11 12C11 9.8125 11.5 8 15 8"
                  stroke="#F36C21"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 13H11H15"
                  stroke="#F36C21"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>

            <a @click.prevent href="#" class="modal-menu__social-item">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 8L5 12.5L9.5 14M18 8L9.5 14M18 8L14 18.5L9.5 14"
                  stroke="#F36C21"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="#F36C21"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>
        </footer>
      </section>
    </div>
  </div>
</template>

<script setup>
import MenuCatalogItem from "~~/modules/header/sections/MenuCatalogItem.vue";
import ButtonLanguage from "~~/modules/header/components/UI/ButtonLanguage.vue";
import ModalMenuItem from "~~/modules/header/components/UI/ModalMenuItem.vue";
import ButtonBack from "~~/modules/header/components/UI/ButtonBack.vue";
import Logo from "~~/modules/header/components/UI/Logo.vue";
import { useHeaderStore } from "~~/store/headerStore";
import { useCategoriesStore } from "~~/store/categoriesStore";

const categoriesStore = useCategoriesStore();

const categories = categoriesStore.getHeaderCategories;

const dropdownAboutCompany = ref(false);
const dropdownServices = ref(false);
const mobileCatalog = ref(false);
const currentIndex = ref(null);
const currentIndexSubmenu = ref(null);
const positionMenu = ref(0);
const isLogoOrange = ref(false);

const header = useHeaderStore();
const menuItems = header.getModalMenu;
const lang = header.getLanguage;
const catalogValues = header.getModalCatalog;

const changeLang = header.changeLang;
const activeMenu = header.activeModal;
const activeCatalog = header.activeCatalog;

const dynamicCatalog = ref([]);
const catalogHistory = ref([]);
const catalogCounter = ref(0);

function closeModal() {
  header.activeModal(false);
  mobileCatalog.value = false;
  document.body.style.overflow = "auto";
}

function openCatalog() {
  if (window.innerWidth > 1024) {
    activeMenu(false);
    activeCatalog(true);
    document.body.style.overflow = "auto";
  } else {
    mobileCatalog.value = true;
  }
}

function defaulModal() {
  if (window.innerWidth > 1024) {
    mobileCatalog.value = false;
    isLogoOrange.value = true;
  } else isLogoOrange.value = false;
}

function getInitialCatalog() {
  dynamicCatalog.value = categories.slice(0);
  catalogHistory.value.push(dynamicCatalog.value);
}

function getChildren(index) {
  if(dynamicCatalog.value[index].children) {

    dynamicCatalog.value = dynamicCatalog.value[index].children.slice(0);
    catalogCounter.value++;
    catalogHistory.value.push(dynamicCatalog.value);
    
  } else {
    dynamicCatalog.value = categories.slice(0);
    catalogHistory.value.length = 0;
    catalogHistory.value.push(dynamicCatalog.value);
    mobileCatalog.value = false;
    catalogCounter.value = 0;
    document.body.style.overflow = "auto";
  }
}

function catalogBack() {
  if(catalogCounter.value > 0) {
    catalogCounter.value--;
    dynamicCatalog.value = catalogHistory.value[catalogCounter.value].slice(0);
  } else {
    catalogCounter.value = 0;
    mobileCatalog.value = false;
  }
}

onMounted(() => {
  getInitialCatalog()
  window.addEventListener("resize", defaulModal);
});
</script>

<style lang="scss" scoped>
.modal-menu {
  display: flex;

  position: fixed;
  @include setAbs(0, 0, 0, 0);

  background-color: rgba(217, 217, 217, 0.4);
  backdrop-filter: blur(3px);

  z-index: 510;
  visibility: hidden;
  opacity: 0;

  transition: all 0.3s ease-in-out;

  &.catalog {
    .modal-menu__main {
      display: none;
    }

    .modal-menu__catalog {
      display: block;
    }

    .modal-menu__footer {
      display: none;
    }
  }

  &.active {
    visibility: visible;
    opacity: 1;

    .modal-menu__wrapper {
      transform: translateX(0);

      transition: transform 0.3s ease-in-out;
    }
  }

  &__wrapper {
    overflow-y: auto;
    transform: translateX(-100%);

    transition: transform 0.3s ease-in-out;

    &::-webkit-scrollbar {
      width: 0px;
    }

    @include mobile {
      width: 100%;
    }
  }

  &__content {
    height: 100vh;

    @include flex-container(column, flex-start);
  }

  &__header {
    @include flex-container(row, flex-start, center);

    background-color: #2b2b2b;

    gap: 45px;
    padding: 4px 16px;

    @include mobile {
      gap: 16px;
      justify-content: space-between;
    }
  }

  &__logo-image {
    @include bigMobile {
      fill: white;
    }
  }

  &__language {
    @include flex-container(row, center);

    gap: 24px;
    margin-right: 24px;
  }

  &__main {
    flex: 1 1 auto;

    background-color: white;

    padding: 16px 8px 4px 16px;

    overflow: auto;
  }

  &__main-wrapper {
    height: 100%;

    background-color: white;

    padding-right: 8px;

    overflow: auto;

    &::-webkit-scrollbar {
      width: 2px;
    }

    &::-webkit-scrollbar-track {
      background-color: #8a8a8a;

      border-radius: 100px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #f36c21;

      border-radius: 100px;
    }
  }

  &__section {
    @include flex-container(column, flex-start);

    border-top: 1px solid #d1d1d1;

    &:nth-child(1) {
      border-top: none;
    }
  }

  &__item {
    cursor: pointer;
  }

  &__item-title {
    max-width: 225px;
    width: 100%;

    @include font(16, 22, 600);
    color: #2b2b2b;
    letter-spacing: 0.02em;

    transition: color 0.2s ease;
  }

  &__menu-header {
    @include flex-container(row, space-between, center);

    cursor: pointer;

    &.active {
      .modal-menu__item-arrow {
        transform: rotate(90deg);
      }
    }
  }

  &__item-arrow {
    font-size: 0;

    transition: transform 0.1s ease-in-out;
  }

  &__dropdown-list {
    @include flex-container(column, center, left);

    gap: 24px;
  }

  &__dropdown-category {
    @include font(16, 22, 400);
    color: #8a8a8a;
    letter-spacing: 0.02em;

    cursor: pointer;
  }

  &__menu-body {
    padding: 16px 0 8px 56px;
  }

  &__catalog {
    height: 100vh;

    display: none;
  }

  &__catalog-wrapper {
    height: 100%;

    background-color: white;

    padding: 16px 0;
  }

  &__catalog-menu {
    max-width: 375px;
    width: 100%;

    @include flex-container(column, flex-start);

    background-color: white;

    padding-top: 24px;
    gap: 8px;

    @include mobile {
      max-width: 100%;
    }
  }

  &__catalog-menu-item {
    &.close {
      display: none;
    }
  }

  &__submenu-item {
    display: none;

    &.active {
      display: block;
    }
  }

  &__footer {
    @include flex-container(column, center, left);

    background-color: white;

    padding: 16px;
    gap: 16px;
  }

  &__social-network-title {
    @include font(16, 22, 400);
    color: #2b2b2b;
    letter-spacing: 0.02em;
  }

  &__social-networks {
    @include flex-container(row, flex-start, center);

    gap: 32px;
  }

  &__social-item {
    font-size: 0;
  }
}
</style>
