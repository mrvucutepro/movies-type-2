'use client';

import React, { useEffect, useState } from 'react';
import CardMovie from './CardMovie';
import Image from 'next/image';
import ArrowLeft from '@/assets/icons/arrow-left.png';
import ArrowRight from '@/assets/icons/arrow-right.png';

interface Movie {
  name: string;
  title: string;
}

interface MovieSliderProps {
  movies: Movie[];
}

export default function MultiSlider({ movies }: MovieSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

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
              <CardMovie movieName={movie.name} movieTitle={movie.title} />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={handlePrev}
        disabled={currentIndex === 0}
        className={`absolute opacity-30 focus:opacity-90 top-1/2 left-0 transform -translate-y-1/2 px-2 py-1 rounded-full ${
          currentIndex === 0
            ? 'bg-gray-300 cursor-not-allowed'
            : 'bg-gray-600 hover:bg-gray-800'
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
        className={`absolute opacity-30 focus:opacity-90 top-1/2 right-0 transform -translate-y-1/2 px-2 py-1 rounded-full ${
          currentIndex >= totalMovies - visibleCount
            ? 'bg-gray-300 cursor-not-allowed'
            : 'bg-gray-600 hover:bg-gray-800'
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
