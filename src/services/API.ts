import axios from 'axios';

export const fetchImages = async (query, page) => {
  const API_KEY = 'sNnG1FKdyAwUMG3w6oepnJca_mAduhDNcGDiqf2jp2c';
  const BASE_URL = 'https://api.unsplash.com/search/photos/';
  const request = `${BASE_URL}?client_id=${API_KEY}`;
  const response = await axios.get(request, {
    params: { query, page, per_page: 30 },
  });
  console.log(response.data);

  return response.data;
};
