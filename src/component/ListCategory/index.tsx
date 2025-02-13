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
import { useMovie } from '@/hooks/useMoviesContext';

export default function ListCategory() {
  const { movie } = useMovie();
  const [categoriesWithMovies, setCategoriesWithMovies] = useState<
    { category: CategoryType; movies: MovieType[] }[]
  >([]);
  useEffect(() => {
    const fetchCategoriesAndMovies = async () => {
      try {
        const categoriesRes: FetchCategoriesResponse =
          await handleFetchCategories();
        if (categoriesRes.success) {
          const categories = categoriesRes.data;

          const fetchMoviesPromises = categories.map(async (category) => {
            const moviesRes: FetchMoviesResponse = await handleFetchMovies(
              0,
              0,
              category.id
            );
            return {
              category,
              movies: moviesRes.success ? moviesRes.data.movies : [],
            };
          });

          const categoriesWithMoviesData = await Promise.all(
            fetchMoviesPromises
          );

          setCategoriesWithMovies(categoriesWithMoviesData);
        }
      } catch (error) {
        console.error('Error fetching categories or movies:', error);
      }
    };

    fetchCategoriesAndMovies();
  }, []);

  return (
    <>
      <div>
        {movie ? (
          <Category
            key={movie.cate_id}
            category={
              categoriesWithMovies.find(
                (item) => item.category.id === movie.cate_id
              )?.category.name ?? ''
            }
            movies={
              categoriesWithMovies.find(
                (item) => item.category.id === movie.cate_id
              )?.movies ?? []
            }
          />
        ) : (
          categoriesWithMovies.map(({ category, movies }) => (
            <Category
              key={category.id}
              category={category.name ?? ''}
              movies={movies}
            />
          ))
        )}
      </div>
    </>
  );
}
