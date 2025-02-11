import { customFetch } from '@/libs/helpers/customFetch';
import { FetchMoviesResponse } from '@/libs/type';

export const handleFetchMovies = async (): Promise<FetchMoviesResponse> => {
  const res = await customFetch('/movies/', {
    method: 'GET',
  });
  return res as FetchMoviesResponse;
};
