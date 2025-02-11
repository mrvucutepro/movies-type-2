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

export const listCategory = [
  { title: 'Category ABC' },
  { title: 'Category XYZ' },
  { title: 'Category WWE' },
  { title: 'Category XXX' },
];

export default function ListCategory() {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [movies, setMovies] = useState<MovieType[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res: FetchCategoriesResponse = await handleFetchCategories();
        if (res.success) {
          setCategories(res.data);
        } else {
          return;
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res: FetchMoviesResponse = await handleFetchMovies();
        if (res.success) {
          setMovies(res.data);
        } else {
          return;
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchMovies();
  }, []);

  return (
    <>
      <div>
        {categories.map((category) => (
          <Category key={category.id} category={category.name} />
        ))}
      </div>
    </>
  );
}
