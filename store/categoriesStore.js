import axios from 'axios';
import { defineStore } from 'pinia';

export const useCategoriesStore = defineStore({
  id: 'categoryStore',
  state: () => {
    return {
      categoriesOrigin: [],
      formattedCategories: [],
      flattenCategories: [],
      headerCategories: [],
    };
  },
  actions: {
    async fetch() {
      const { data: categories } = await axios.get(
        'https://dev.api.logicpower.ua/user/catalog/category/list/tree',
      );

      console.log(
        `Categories fetched. Total item(s): ${categories.data.length}`,
      );

      this.categoriesOrigin = categories.data;
      this.formattedCategories = categoryFormatted(categories.data);
      this.flattenCategories = categoryFlatten(categories.data);
      this.headerCategories = categoryHeader(categories.data);
    },
  },
  getters: {
    getFormattedCategories: (state) => state.formattedCategories,
    getCategoryBySlug: (state) => {
      return (slug) => {
        const findItemNested = (arr) => {
          return arr.reduce((a, item) => {
            if (a) return a;
            if (item.slug === slug) return item;
            if (item.children) return findItemNested(item.children);
          }, null);
        };

        return findItemNested(state.formattedCategories);
      };
    },
    getFlattenCategories: (state) => state.flattenCategories,
    getHeaderCategories: (state) => state.headerCategories,
  },
});
