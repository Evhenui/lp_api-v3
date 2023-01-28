import axios from 'axios';

const URL = 'https://dev.api.logicpower.ua/user/catalog/product/list/all';

export default defineEventHandler(async (event) => {
  const { pageSize, pageNum, categoryId } = getQuery(event);

  try {
    const { data } = await axios(URL, {
      params: {
        pageSize,
        pageNum,
        categoryId,
      },
    });
    return data.data.items;
  } catch (error) {
    console.log(error, error.response.request.path);
    return error;
  }
});
