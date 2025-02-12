import React, { useEffect, useState } from 'react';
import Category from '../Category';
import { FetchCategoriesResponse, CategoryType, MovieType } from '@/libs/type';
import { handleFetchCategories } from '@/services/category';

export const listCategory = [
  { title: 'Category ABC' },
  { title: 'Category XYZ' },
  { title: 'Category WWE' },
  { title: 'Category XXX' },
];
interface ListCategoryProps {
  movies: MovieType[];
}

export default function ListCategory({ movies }: ListCategoryProps) {
  const [categories, setCategories] = useState<CategoryType[]>([]);

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
