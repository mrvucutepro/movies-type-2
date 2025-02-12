export interface MovieType {
  id: string;
  title_id?: number;
  title: string;
  des: string;
  cate_id: number;
  image: string;
}

export interface CategoryType {
  id: number;
  name: string;
}
export interface EpisodeType {
  id: string;
  movie_id: string;
  ep_no: number;
  video_id: string;
  status: string;
  progress: string | null;
  video_url: string;
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

export interface FetchMovieDetailResponse {
  data: {
    id: string;
    des: string;
    actor: string | null;
    image: string;
    actor_images: string | null;
    episodes: EpisodeType[];
    cate_id: number;
  };
  success: boolean;
}

export const ITEMS_PER_PAGE = 10;
