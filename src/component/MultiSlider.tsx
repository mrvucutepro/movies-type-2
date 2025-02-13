'use client';

import React, { useEffect, useState } from 'react';
import CardMovie from './CardMovie';
import Image from 'next/image';
import ArrowLeft from '@/assets/icons/arrow-left.png';
import ArrowRight from '@/assets/icons/arrow-right.png';
import { MovieType } from '@/libs/type';
import { useMovie } from '@/hooks/useMoviesContext';
import { handleFetchMovieByID } from '@/services/movie';

interface MovieSliderProps {
  movies: MovieType[];
}

export default function MultiSlider({ movies }: MovieSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { setMovie } = useMovie();
  const visibleCountDesktop = 5;
  const visibleCountMobile = 3;
  const [visibleCount, setVisibleCount] = useState(visibleCountDesktop);
  const totalMovies = movies.length;
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setVisibleCount(visibleCountMobile);
      } else {
        setVisibleCount(visibleCountDesktop);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < totalMovies - visibleCount) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleSelectMovie = async (movieId: string) => {
    try {
      const res = await handleFetchMovieByID(movieId);
      const movieData: MovieType = {
        id: res.data.id,
        title_id: parseInt(res.data.id),
        title: res.data.des,
        des: res.data.des,
        cate_id: res.data.cate_id,
        image: res.data.image,
        actor: res.data.actor,
        actor_images: null,
        episodes: [],
      };
      if (res.success) {
        setMovie(movieData);
      }
    } catch (error) {
      console.error('Error fetching movie id:', error);
    }
  };

  return (
    <div className="relative">
      <div className="overflow-hidden w-full">
        <div
          className="flex transition-transform duration-500 gap-3"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
            width: `${(100 / visibleCount) * totalMovies}%`,
          }}
        >
          {movies.map((movie, index) => (
            <div
              key={index}
              className=""
              style={{ width: `${100 / visibleCount}%` }}
            >
              <CardMovie
                onClick={() => handleSelectMovie(movie.id)}
                movieName={movie.title}
                movieImage={movie.image}
              />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={handlePrev}
        disabled={currentIndex === 0}
        className={` absolute opacity-90 focus:opacity-60 top-1/2 left-0 transform -translate-y-1/2 px-2 py-1 rounded-full ${
          currentIndex === 0
            ? 'bg-gray-300 cursor-not-allowed'
            : 'bg-gray-600 hover:bg-gray-700 '
        }`}
      >
        <Image
          height={20}
          alt=""
          src={ArrowLeft}
          className="w-full h-auto object-cover opacity-50"
        />
      </button>

      <button
        onClick={handleNext}
        disabled={currentIndex >= totalMovies - visibleCount}
        className={`absolute opacity-90 focus:opacity-60 top-1/2 right-0 transform -translate-y-1/2 px-2 py-1 rounded-full ${
          currentIndex >= totalMovies - visibleCount
            ? 'bg-gray-300 cursor-not-allowed'
            : 'bg-gray-600 hover:bg-gray-700 '
        }`}
      >
        <Image
          alt=""
          src={ArrowRight}
          height={20}
          className="w-full h-auto object-cover"
        />
      </button>
    </div>
  );
}
