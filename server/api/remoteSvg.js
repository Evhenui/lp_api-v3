import axios from 'axios';

export default defineEventHandler(async (event) => {
  const { url } = getQuery(event);

  try {
    const { data } = await axios(url);

    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
});
