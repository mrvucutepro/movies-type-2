import React, { useEffect, useState } from 'react';
import Button from './Base/Button';
import { handleFetchCategories } from '@/services/category';
import { CategoryType, FetchCategoriesResponse } from '@/libs/type';
import { useLoading } from '@/contexts/LoadingContext';
import { useMovie } from '@/hooks/useMoviesContext';

export default function NavBar({
  onCategorySelect,
}: {
  onCategorySelect: (category: CategoryType | null) => void;
}) {
  const { showLoading, hideLoading } = useLoading();
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<CategoryType | null>(
    null
  );
  const { setMovie } = useMovie();

  useEffect(() => {
    const fetchCategories = async () => {
      showLoading();
      try {
        const res: FetchCategoriesResponse = await handleFetchCategories();

        if (res.success) {
          const homeCategory = { id: 0, name: 'Home' };
          const updatedCategories = [homeCategory, ...res.data];
          setCategories(updatedCategories);
        }
      } catch (err) {
        console.error('Error fetching categories:', err);
      } finally {
        hideLoading();
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryClick = async (category: CategoryType) => {
    try {
      showLoading();
      setMovie(null);
      setSelectedCategory(category);
      onCategorySelect(category);
    } catch (error) {
      console.error('Error while fetching movies:', error);
    } finally {
      hideLoading();
    }
  };

  return (
    <ul className=" flex-col space-y-2 bg-[#313131] w-32 md:flex hidden">
      {categories.map((item) => (
        <li
          key={item.id}
          className={`mx-auto flex justify-center border-b-0 ${
            selectedCategory === item
              ? 'border-b-2 border-[#EA1616] text-[#EA1616]'
              : ''
          } hover:border-b-2 hover:border-[#EA1616]`}
        >
          <Button
            onClick={() => handleCategoryClick(item)}
            label={item.name ?? ''}
            type="button"
            className="flex items-center p-2 rounded-lg font-bold transition whitespace-nowrap  border-none hover:text-[#EA1616]"
          />
        </li>
      ))}
    </ul>
  );
}
