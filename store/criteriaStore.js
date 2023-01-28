import axios from 'axios';

export const useCriteriaStore = defineStore({
  id: 'criteriaStore',
  state: () => {
    return {
      criteria: [],
    };
  },
  actions: {
    async fetch(params) {
      try {
        const { data: result } = await axios.get(
          'https://dev.api.logicpower.ua/user/catalog/product/criteria',
          { params },
        );

        this.criteria = result.data;
      } catch (e) {
        console.log(e);
      }
    },
  },
  getters: {
    getCriteria: (state) => state.criteria,
  },
});
