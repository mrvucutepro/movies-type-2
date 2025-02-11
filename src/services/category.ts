import { customFetch } from '@/libs/helpers/customFetch';
import {
  FetchCategoriesResponse,
  FetchCategoryDetailResponse,
} from '@/libs/type';

export const handleFetchCategories =
  async (): Promise<FetchCategoriesResponse> => {
    const res = await customFetch('/categories/', {
      method: 'GET',
    });
    return res as FetchCategoriesResponse;
  };

export const handleFetchCategoriesByID = async (
  id: number
): Promise<FetchCategoryDetailResponse> => {
  const res = await customFetch(`/categories/${id}`, {
    method: 'GET',
  });
  return res as FetchCategoryDetailResponse;
};
