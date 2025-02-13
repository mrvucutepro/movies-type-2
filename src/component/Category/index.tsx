import React from 'react';
import Image from 'next/image';
import MovieIcon from '@/assets/icons/ic_baseline-local-movies.png';
import MultiSlider from '../MultiSlider';
import Button from '../Base/Button';
import { MovieType } from '@/libs/type';
import { useMovie } from '@/hooks/useMoviesContext';

interface CategoryProps {
  categorySelected: string;
  movies: MovieType[];
}

export default function Category({ categorySelected, movies }: CategoryProps) {
  const { setMovie } = useMovie();
  const onSelectCategory = () => {
    setMovie(null);
  };

  return (
    <div className="mx-4">
      <div className="bg-black absolute left-0 w-10" />
      <div className=" mt-4 flex  justify-between">
        <div className="flex items-center ">
          <Image alt="" src={MovieIcon} height={20} />
          <span className="font-bold">{categorySelected}</span>
        </div>
        <Button
          onClick={onSelectCategory}
          label={'+더보기'}
          className="bg-[#EA1616] text-white w-20 whitespace-nowrap rounded-sm mx-2"
        />
      </div>
      <div className="flex">
        <MultiSlider movies={movies} />
      </div>
    </div>
  );
}
