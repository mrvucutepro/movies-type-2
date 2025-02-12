import { MovieType } from '@/libs/type';
import { handleFetchMovies } from '@/services/movie';
import { useState, useEffect } from 'react';

const useMovies = (categoryId: number, page = 0, limit = 10) => {
  const [movies, setMovies] = useState<MovieType[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await handleFetchMovies(page, limit, categoryId);
        if (response.success) {
          setMovies(response.data.movies);
        } else {
          console.log('abc');
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchMovies();
  }, [categoryId, page, limit]);

  return { movies };
};

export default useMovies;
