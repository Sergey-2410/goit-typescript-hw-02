import axios from 'axios';
import { FetchImagesResponse } from '../components/App/App.types';

export const fetchImages = async (
  query: string,
  page: number
): Promise<FetchImagesResponse> => {
  const API_KEY = 'sNnG1FKdyAwUMG3w6oepnJca_mAduhDNcGDiqf2jp2c';
  const BASE_URL = 'https://api.unsplash.com/search/photos/';

  try {
    const response = await axios.get<FetchImagesResponse>(BASE_URL, {
      params: {
        client_id: API_KEY,
        query,
        page,
        per_page: 30,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch images');
  }
};
