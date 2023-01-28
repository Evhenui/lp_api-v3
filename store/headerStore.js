export const useHeaderStore = defineStore({
  id: 'headerStore',
  state: () => {
    return {
      language: {
        active: false,
      },
      menuItems: ['Блог', 'О нас', 'Сотрудничество', 'Контакты'],
      inputSerach: {
        value: '',
      },
      result: {
        categoryMenu: [
          'Аккумуляторы',
          'Стабилизаторы',
          'Кабельная продукция',
          'Электрооборудование',
        ],
        resultItems: [
          {
            itemName:
              'Источник бесперебойного питания (ИБП) LP-U600VA-3PS (360Вт)',
            code: 'Код: 1324',
            price: '20 954 ₴',
          },
          {
            itemName:
              'Источник бесперебойного питания (ИБП) LP-U600VA-3PS (360Вт)',
            code: 'Код: 1324',
            price: '20 954 ₴',
          },
          {
            itemName:
              'Источник бесперебойного питания (ИБП) LP-U600VA-3PS (360Вт)',
            code: 'Код: 1324',
            price: '20 954 ₴',
          },
          {
            itemName:
              'Источник бесперебойного питания (ИБП) LP-U600VA-3PS (360Вт)',
            code: 'Код: 1324',
            price: '20 954 ₴',
          },
        ],
        popularItems: [
          {
            itemName:
              'Источник бесперебойного питания (ИБП) LP-U600VA-3PS (360Вт)',
            code: 'Код: 1324',
            price: '20 954 ₴',
          },
          {
            itemName:
              'Источник бесперебойного питания (ИБП) LP-U600VA-3PS (360Вт)',
            code: 'Код: 1324',
            price: '20 954 ₴',
          },
          {
            itemName:
              'Источник бесперебойного питания (ИБП) LP-U600VA-3PS (360Вт)',
            code: 'Код: 1324',
            price: '20 954 ₴',
          },
          {
            itemName:
              'Источник бесперебойного питания (ИБП) LP-U600VA-3PS (360Вт)',
            code: 'Код: 1324',
            price: '20 954 ₴',
          },
        ],
      },
      modalMenu: {
        active: false,
        aboutCompany: [
          'Оплата и Доставка',
          'История компании',
          'Сотрудничество',
        ],
        services: ['Инструкции', 'Видео-материалы'],
      },
      modalCatalog: {
        active: false,
        menu: [
          { image: 'percent-catalog.svg', title: 'Акции' },
          {
            image: 'ups-catalog.svg',
            title: 'Комплекты для резервного питания',
          },
          {
            image: 'ups-one-catalog.svg',
            title: 'Источники бесперебойного питания',
          },
          { image: 'accumulators-agm-catalog.svg', title: 'Аккумуляторы AGM' },
          { image: 'li-ion-catalog.svg', title: 'Литивые аккумуляторы' },
          {
            image: 'stabilizer-catalog.svg',
            title: 'Стабилизаторы напряжения',
          },
          {
            image: 'accumulators-silver-catalog.svg',
            title: 'Аккумуляторы SILVER',
          },
          { image: 'accumulators-catalog.svg', title: 'Аккумуляторы' },
          {
            image: 'electric-transport-catalog.svg',
            title: 'Электротранспорт',
          },
          {
            image: 'accumulators-car-catalog.svg',
            title: 'Автомобильные аккумуляторы',
          },
          { image: 'peripherals-catalog.svg', title: 'Компьютерная переферия' },
          {
            image: 'pc-accessories-catalog.svg',
            title: 'Комплектующие для ПК',
          },
          {
            image: 'network-filters-catalog.svg',
            title: 'Сетевые фильтры и удлинители',
          },
          {
            image: 'chargers-catalog.svg',
            title: 'Зарядные устройства, кабельки и адаптеры питания',
          },
          {
            image: 'cable-production-catalog.svg',
            title: 'Кабельная продукция',
          },
          { image: 'appliances-catalog.svg', title: 'Бытовая техника' },
          {
            image: 'network-hardware-catalog.svg',
            title: 'Сетевое оборудование',
          },
          { image: 'fire-extinguishers-catalog.svg', title: 'Огнетушители' },
          { image: 'discounted-catalog.svg', title: 'Уцененный товар' },
          {
            image: 'product-discontinued-catalog.svg',
            title: 'Товары снятые с производства',
          },
        ],
        submenu: [
          {
            category: [
              { item: 'Корпуса', submenu: true },
              { item: 'Блоки питания ATX', submenu: true },
              { item: 'Вентиляторы', submenu: false },
              { item: 'Кабели питания', submenu: false },
            ],
          },
          {
            category: [
              { item: 'Корпуса', submenu: true },
              { item: 'Блоки питания ATX', submenu: true },
              { item: 'Вентиляторы', submenu: false },
              { item: 'Кабели питания', submenu: false },
            ],
          },
          {
            category: [
              { item: 'Корпуса', submenu: true },
              { item: 'Блоки питания ATX', submenu: true },
              { item: 'Вентиляторы', submenu: false },
              { item: 'Кабели питания', submenu: false },
            ],
          },
          {
            category: [
              { item: 'Корпуса', submenu: true },
              { item: 'Блоки питания ATX', submenu: true },
              { item: 'Вентиляторы', submenu: false },
              { item: 'Кабели питания', submenu: false },
            ],
          },
          {
            category: [
              { item: 'Корпуса', submenu: true },
              { item: 'Блоки питания ATX', submenu: true },
              { item: 'Вентиляторы', submenu: false },
              { item: 'Кабели питания', submenu: false },
            ],
          },
          {
            category: [
              { item: 'Корпуса', submenu: true },
              { item: 'Блоки питания ATX', submenu: true },
              { item: 'Вентиляторы', submenu: false },
              { item: 'Кабели питания', submenu: false },
            ],
          },
          {
            category: [
              { item: 'Корпуса', submenu: true },
              { item: 'Блоки питания ATX', submenu: true },
              { item: 'Вентиляторы', submenu: false },
              { item: 'Кабели питания', submenu: false },
            ],
          },
          {
            category: [
              { item: 'Корпуса', submenu: true },
              { item: 'Блоки питания ATX', submenu: true },
              { item: 'Вентиляторы', submenu: false },
              { item: 'Кабели питания', submenu: false },
            ],
          },
          {
            category: [
              { item: 'Корпуса', submenu: true },
              { item: 'Блоки питания ATX', submenu: true },
              { item: 'Вентиляторы', submenu: false },
              { item: 'Кабели питания', submenu: false },
            ],
          },
          {
            category: [
              { item: 'Корпуса', submenu: true },
              { item: 'Блоки питания ATX', submenu: true },
              { item: 'Вентиляторы', submenu: false },
              { item: 'Кабели питания', submenu: false },
            ],
          },
          {
            category: [
              { item: 'Корпуса', submenu: true },
              { item: 'Блоки питания ATX', submenu: true },
              { item: 'Вентиляторы', submenu: false },
              { item: 'Кабели питания', submenu: false },
            ],
          },
          {
            category: [
              { item: 'Корпуса', submenu: true },
              { item: 'Блоки питания ATX', submenu: true },
              { item: 'Вентиляторы', submenu: false },
              { item: 'Кабели питания', submenu: false },
            ],
          },
          {
            category: [
              { item: 'Корпуса', submenu: true },
              { item: 'Блоки питания ATX', submenu: true },
              { item: 'Вентиляторы', submenu: false },
              { item: 'Кабели питания', submenu: false },
            ],
          },
          {
            category: [
              { item: 'Корпуса', submenu: true },
              { item: 'Блоки питания ATX', submenu: true },
              { item: 'Вентиляторы', submenu: false },
              { item: 'Кабели питания', submenu: false },
            ],
          },
          {
            category: [
              { item: 'Корпуса', submenu: true },
              { item: 'Блоки питания ATX', submenu: true },
              { item: 'Вентиляторы', submenu: false },
              { item: 'Кабели питания', submenu: false },
            ],
          },
          {
            category: [
              { item: 'Корпуса', submenu: true },
              { item: 'Блоки питания ATX', submenu: true },
              { item: 'Вентиляторы', submenu: false },
              { item: 'Кабели питания', submenu: false },
            ],
          },
          {
            category: [
              { item: 'Корпуса', submenu: true },
              { item: 'Блоки питания ATX', submenu: true },
              { item: 'Вентиляторы', submenu: false },
              { item: 'Кабели питания', submenu: false },
            ],
          },
          {
            category: [
              { item: 'Корпуса', submenu: true },
              { item: 'Блоки питания ATX', submenu: true },
              { item: 'Вентиляторы', submenu: false },
              { item: 'Кабели питания', submenu: false },
            ],
          },
          {
            category: [
              { item: 'Корпуса', submenu: true },
              { item: 'Блоки питания ATX', submenu: true },
              { item: 'Вентиляторы', submenu: false },
              { item: 'Кабели питания', submenu: false },
            ],
          },
          {
            category: [
              { item: 'Корпуса', submenu: true },
              { item: 'Блоки питания ATX', submenu: true },
              { item: 'Вентиляторы', submenu: false },
              { item: 'Кабели питания', submenu: false },
            ],
          },
        ],
        submenuDeep: [
          {
            category: [
              { item: 'Серия “Вторая”' },
              { item: 'Серия “Шестая”' },
              { item: 'Серия “Slim”' },
              { item: 'Серия “Perfect”' },
            ],
          },
          {
            category: [
              { item: 'Серия “Вторая”' },
              { item: 'Серия “Шестая”' },
              { item: 'Серия “Slim”' },
              { item: 'Серия “Perfect”' },
            ],
          },
          { category: [{ item: '' }] },
          { category: [{ item: '' }] },
          {
            category: [
              { item: 'Серия “Вторая”' },
              { item: 'Серия “Шестая”' },
              { item: 'Серия “Slim”' },
              { item: 'Серия “Perfect”' },
            ],
          },
          {
            category: [
              { item: 'Серия “Вторая”' },
              { item: 'Серия “Шестая”' },
              { item: 'Серия “Slim”' },
              { item: 'Серия “Perfect”' },
            ],
          },
          { category: [{ item: '' }] },
          { category: [{ item: '' }] },
          {
            category: [
              { item: 'Серия “Вторая”' },
              { item: 'Серия “Шестая”' },
              { item: 'Серия “Slim”' },
              { item: 'Серия “Perfect”' },
            ],
          },
          {
            category: [
              { item: 'Серия “Вторая”' },
              { item: 'Серия “Шестая”' },
              { item: 'Серия “Slim”' },
              { item: 'Серия “Perfect”' },
            ],
          },
          { category: [{ item: '' }] },
          { category: [{ item: '' }] },
          {
            category: [
              { item: 'Серия “Вторая”' },
              { item: 'Серия “Шестая”' },
              { item: 'Серия “Slim”' },
              { item: 'Серия “Perfect”' },
            ],
          },
          {
            category: [
              { item: 'Серия “Вторая”' },
              { item: 'Серия “Шестая”' },
              { item: 'Серия “Slim”' },
              { item: 'Серия “Perfect”' },
            ],
          },
          { category: [{ item: '' }] },
          { category: [{ item: '' }] },
          {
            category: [
              { item: 'Серия “Вторая”' },
              { item: 'Серия “Шестая”' },
              { item: 'Серия “Slim”' },
              { item: 'Серия “Perfect”' },
            ],
          },
          {
            category: [
              { item: 'Серия “Вторая”' },
              { item: 'Серия “Шестая”' },
              { item: 'Серия “Slim”' },
              { item: 'Серия “Perfect”' },
            ],
          },
          { category: [{ item: '' }] },
          { category: [{ item: '' }] },
          {
            category: [
              { item: 'Серия “Вторая”' },
              { item: 'Серия “Шестая”' },
              { item: 'Серия “Slim”' },
              { item: 'Серия “Perfect”' },
            ],
          },
          {
            category: [
              { item: 'Серия “Вторая”' },
              { item: 'Серия “Шестая”' },
              { item: 'Серия “Slim”' },
              { item: 'Серия “Perfect”' },
            ],
          },
          { category: [{ item: '' }] },
          { category: [{ item: '' }] },
          {
            category: [
              { item: 'Серия “Вторая”' },
              { item: 'Серия “Шестая”' },
              { item: 'Серия “Slim”' },
              { item: 'Серия “Perfect”' },
            ],
          },
          {
            category: [
              { item: 'Серия “Вторая”' },
              { item: 'Серия “Шестая”' },
              { item: 'Серия “Slim”' },
              { item: 'Серия “Perfect”' },
            ],
          },
          { category: [{ item: '' }] },
          { category: [{ item: '' }] },
          {
            category: [
              { item: 'Серия “Вторая”' },
              { item: 'Серия “Шестая”' },
              { item: 'Серия “Slim”' },
              { item: 'Серия “Perfect”' },
            ],
          },
          {
            category: [
              { item: 'Серия “Вторая”' },
              { item: 'Серия “Шестая”' },
              { item: 'Серия “Slim”' },
              { item: 'Серия “Perfect”' },
            ],
          },
          { category: [{ item: '' }] },
          { category: [{ item: '' }] },
          {
            category: [
              { item: 'Серия “Вторая”' },
              { item: 'Серия “Шестая”' },
              { item: 'Серия “Slim”' },
              { item: 'Серия “Perfect”' },
            ],
          },
          {
            category: [
              { item: 'Серия “Вторая”' },
              { item: 'Серия “Шестая”' },
              { item: 'Серия “Slim”' },
              { item: 'Серия “Perfect”' },
            ],
          },
          { category: [{ item: '' }] },
          { category: [{ item: '' }] },
          {
            category: [
              { item: 'Серия “Вторая”' },
              { item: 'Серия “Шестая”' },
              { item: 'Серия “Slim”' },
              { item: 'Серия “Perfect”' },
            ],
          },
          {
            category: [
              { item: 'Серия “Вторая”' },
              { item: 'Серия “Шестая”' },
              { item: 'Серия “Slim”' },
              { item: 'Серия “Perfect”' },
            ],
          },
          { category: [{ item: '' }] },
          { category: [{ item: '' }] },
          {
            category: [
              { item: 'Серия “Вторая”' },
              { item: 'Серия “Шестая”' },
              { item: 'Серия “Slim”' },
              { item: 'Серия “Perfect”' },
            ],
          },
          {
            category: [
              { item: 'Серия “Вторая”' },
              { item: 'Серия “Шестая”' },
              { item: 'Серия “Slim”' },
              { item: 'Серия “Perfect”' },
            ],
          },
          { category: [{ item: '' }] },
          { category: [{ item: '' }] },
          {
            category: [
              { item: 'Серия “Вторая”' },
              { item: 'Серия “Шестая”' },
              { item: 'Серия “Slim”' },
              { item: 'Серия “Perfect”' },
            ],
          },
          {
            category: [
              { item: 'Серия “Вторая”' },
              { item: 'Серия “Шестая”' },
              { item: 'Серия “Slim”' },
              { item: 'Серия “Perfect”' },
            ],
          },
          { category: [{ item: '' }] },
          { category: [{ item: '' }] },
          {
            category: [
              { item: 'Серия “Вторая”' },
              { item: 'Серия “Шестая”' },
              { item: 'Серия “Slim”' },
              { item: 'Серия “Perfect”' },
            ],
          },
          {
            category: [
              { item: 'Серия “Вторая”' },
              { item: 'Серия “Шестая”' },
              { item: 'Серия “Slim”' },
              { item: 'Серия “Perfect”' },
            ],
          },
          { category: [{ item: '' }] },
          { category: [{ item: '' }] },
          {
            category: [
              { item: 'Серия “Вторая”' },
              { item: 'Серия “Шестая”' },
              { item: 'Серия “Slim”' },
              { item: 'Серия “Perfect”' },
            ],
          },
          {
            category: [
              { item: 'Серия “Вторая”' },
              { item: 'Серия “Шестая”' },
              { item: 'Серия “Slim”' },
              { item: 'Серия “Perfect”' },
            ],
          },
          { category: [{ item: '' }] },
          { category: [{ item: '' }] },
          {
            category: [
              { item: 'Серия “Вторая”' },
              { item: 'Серия “Шестая”' },
              { item: 'Серия “Slim”' },
              { item: 'Серия “Perfect”' },
            ],
          },
          {
            category: [
              { item: 'Серия “Вторая”' },
              { item: 'Серия “Шестая”' },
              { item: 'Серия “Slim”' },
              { item: 'Серия “Perfect”' },
            ],
          },
          { category: [{ item: '' }] },
          { category: [{ item: '' }] },
          {
            category: [
              { item: 'Серия “Вторая”' },
              { item: 'Серия “Шестая”' },
              { item: 'Серия “Slim”' },
              { item: 'Серия “Perfect”' },
            ],
          },
          {
            category: [
              { item: 'Серия “Вторая”' },
              { item: 'Серия “Шестая”' },
              { item: 'Серия “Slim”' },
              { item: 'Серия “Perfect”' },
            ],
          },
          { category: [{ item: '' }] },
          { category: [{ item: '' }] },
          {
            category: [
              { item: 'Серия “Вторая”' },
              { item: 'Серия “Шестая”' },
              { item: 'Серия “Slim”' },
              { item: 'Серия “Perfect”' },
            ],
          },
          {
            category: [
              { item: 'Серия “Вторая”' },
              { item: 'Серия “Шестая”' },
              { item: 'Серия “Slim”' },
              { item: 'Серия “Perfect”' },
            ],
          },
          { category: [{ item: '' }] },
          { category: [{ item: '' }] },
          {
            category: [
              { item: 'Серия “Вторая”' },
              { item: 'Серия “Шестая”' },
              { item: 'Серия “Slim”' },
              { item: 'Серия “Perfect”' },
            ],
          },
          {
            category: [
              { item: 'Серия “Вторая”' },
              { item: 'Серия “Шестая”' },
              { item: 'Серия “Slim”' },
              { item: 'Серия “Perfect”' },
            ],
          },
          { category: [{ item: '' }] },
          { category: [{ item: '' }] },
          {
            category: [
              { item: 'Серия “Вторая”' },
              { item: 'Серия “Шестая”' },
              { item: 'Серия “Slim”' },
              { item: 'Серия “Perfect”' },
            ],
          },
          {
            category: [
              { item: 'Серия “Вторая”' },
              { item: 'Серия “Шестая”' },
              { item: 'Серия “Slim”' },
              { item: 'Серия “Perfect”' },
            ],
          },
          { category: [{ item: '' }] },
          { category: [{ item: '' }] },
          {
            category: [
              { item: 'Серия “Вторая”' },
              { item: 'Серия “Шестая”' },
              { item: 'Серия “Slim”' },
              { item: 'Серия “Perfect”' },
            ],
          },
          {
            category: [
              { item: 'Серия “Вторая”' },
              { item: 'Серия “Шестая”' },
              { item: 'Серия “Slim”' },
              { item: 'Серия “Perfect”' },
            ],
          },
          { category: [{ item: '' }] },
          { category: [{ item: '' }] },
        ],
      },
      height: {
        header: '',
      },
    };
  },
  actions: {
    changeLang(element) {
      this.language.active = element.classList.contains('ua') ? true : false;
    },
    activeModal(state) {
      this.modalMenu.active = state;
    },
    activeCatalog(state) {
      this.modalCatalog.active = state;
    },
    setHeightHeader(height) {
      this.height.header = height;
    },
  },
  getters: {
    getLanguage: (state) => state.language,
    getMenuItems: (state) => state.menuItems,
    getResult: (state) => state.result,
    getInputSerach: (state) => state.inputSerach,
    getModalMenu: (state) => state.modalMenu,
    getModalCatalog: (state) => state.modalCatalog,
    getHeightHeader: (state) => state.height,
  },
});
