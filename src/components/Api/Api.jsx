import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export const SerchImage = async value => {
  const response = await axios({
    params: {
      per_page: 12,
      key: '33676510-60d9800a173eb3eec07b521d4',
      q: value,
      page: 1,
    },
  });
  return response.data.hits;
};
