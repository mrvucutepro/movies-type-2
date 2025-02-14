'use client';

import { useEffect } from 'react';
import { useMovie } from '@/hooks/useMoviesContext';
import { handleFetchMovieByID } from '@/services/movie';
import DetailMovie from '@/component/DetailMovie';
import { MovieType } from '@/libs/type';

export default function MoviePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { movie, setMovie } = useMovie();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const resolvedParams = await params;
        const movieId = resolvedParams.id;

        if (!movie || movie.id !== movieId) {
          const res = await handleFetchMovieByID(movieId);
          if (res.success) {
            const movieData: MovieType = {
              id: res.data.id,
              title_id: parseInt(res.data.id),
              title: res.data.des,
              des: res.data.des,
              cate_id: res.data.cate_id,
              image: res.data.image,
              actor: res.data.actor,
              actor_images: null,
              episodes: res.data.episodes,
            };
            setMovie(movieData);
          }
        }
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovie();
  }, [params, movie, setMovie]);

  return <DetailMovie />;
}
