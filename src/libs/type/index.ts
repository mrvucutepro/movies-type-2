export interface CategoryType {
  id: number;
  name: string;
}

export interface MovieType {
  title_id: number;
  title: string;
  des: string;
  cate_id: number;
  image: string;
}

export interface FetchCategoriesResponse {
  data: CategoryType[];
  success: boolean;
}

export interface FetchCategoryDetailResponse {
  data: {
    id: number;
    name: string;
  };
  success: boolean;
}

export interface FetchMoviesResponse {
  data: {
    movies: MovieType[];
    limit: number;
    page: number;
    total: number;
  };
  success: boolean;
}

export const ITEMS_PER_PAGE = 10;
