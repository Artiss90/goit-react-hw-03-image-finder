import axios from 'axios';
/* eslint react/prop-types: 1 */

const KEY_API = '19207943-ecb2269b7818ebd0e732e1fe9';
axios.defaults.baseURL = 'https://pixabay.com/api/';

const fetchImages = (querySearch, page) => {
  return axios
    .get(
      `?image_type=photo&orientation=horizontal&q=${querySearch}&page=${page}&per_page=12&key=${KEY_API}`,
    )
    .then(response => response.data.hits);
};

export default fetchImages;
