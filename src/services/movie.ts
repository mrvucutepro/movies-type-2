import { customFetch } from '@/libs/helpers/customFetch';
import { FetchMovieDetailResponse, FetchMoviesResponse } from '@/libs/type';

export const handleFetchMovies = async (
  page: number,
  limit: number,
  categoryId: number
): Promise<FetchMoviesResponse> => {
  const query = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString(),
    categoryId: categoryId.toString(),
  }).toString();
  const res = await customFetch(`/movies?${query}`, {
    method: 'GET',
  });
  return res as FetchMoviesResponse;
};

export const handleFetchMovieByID = async (
  id: string
): Promise<FetchMovieDetailResponse> => {
  const res = await customFetch(`/movies/${id}`, {
    method: 'GET',
  });
  return res as FetchMovieDetailResponse;
};
