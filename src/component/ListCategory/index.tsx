import React, { useEffect, useState } from 'react';
import Category from '../Category';
import {
  FetchCategoriesResponse,
  CategoryType,
  FetchMoviesResponse,
  MovieType,
} from '@/libs/type';
import { handleFetchCategories } from '@/services/category';
import { handleFetchMovies } from '@/services/movie';

export default function ListCategory() {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [movies, setMovies] = useState<MovieType[]>([]);

  useEffect(() => {
    const fetchCategoriesAndMovies = async () => {
      try {
        const res: FetchCategoriesResponse = await handleFetchCategories();

        if (res.success) {
          setCategories(res.data);
          const defaultCategoryId = res.data[0].id;
          const moviesRes: FetchMoviesResponse = await handleFetchMovies(
            0,
            0,
            defaultCategoryId
          );

          if (moviesRes.success) {
            setMovies(moviesRes.data.movies);
          }
        }
      } catch (err) {
        console.error('Error fetching categories or movies:', err);
      }
    };

    fetchCategoriesAndMovies();
  }, []);

  return (
    <>
      <div>
        {categories.map((category) => (
          <Category
            key={category.id}
            category={category.name ?? ''}
            movies={movies}
          />
        ))}
      </div>
    </>
  );
}
