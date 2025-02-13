'use client';

import { CategoryType, MovieType } from '@/libs/type';
import React, { createContext, useContext, useEffect, useState } from 'react';

interface MovieContextType {
  category: CategoryType | null;
  movie: MovieType | null;
  // setMovie: (movie: MovieType) => void;
  setMovie: React.Dispatch<React.SetStateAction<MovieType | null>>;
  setCategory: React.Dispatch<React.SetStateAction<CategoryType | null>>;
}

const MovieContext = createContext<MovieContextType | undefined>(undefined);

export const MovieProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [movie, setMovie] = useState<MovieType | null>(() => {
    const storedMovie = localStorage.getItem('movie');
    return storedMovie ? JSON.parse(storedMovie) : null;
  });

  const [category, setCategory] = useState<CategoryType | null>(() => {
    const storedCategory = localStorage.getItem('category');
    return storedCategory ? JSON.parse(storedCategory) : null;
  });

  useEffect(() => {
    if (movie) {
      localStorage.setItem('movie', JSON.stringify(movie));
    } else {
      localStorage.removeItem('movie');
    }
  }, [movie]);

  useEffect(() => {
    if (category) {
      localStorage.setItem('category', JSON.stringify(category));
    } else {
      localStorage.removeItem('category');
    }
  }, [category]);

  return (
    <MovieContext.Provider value={{ movie, setMovie, category, setCategory }}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovie = (): MovieContextType => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error('useMovie must be used within a MovieProvider');
  }
  return context;
};
