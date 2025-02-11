import React from 'react';
// import CardMovie from '../CardMovie';
import Image from 'next/image';
import MovieIcon from '@/assets/icons/ic_baseline-local-movies.png';
import MultiSlider from '../MultiSlider';
import Button from '../Base/Button';

interface CategoryProps {
  category: string;
}

interface Movie {
  name: string;
  title: string;
}

export default function Category({ category }: CategoryProps) {
  const movies: Movie[] = [
    { name: 'ABC', title: 'Title ABC' },
    { name: 'XYZ', title: 'Title XYZ' },
    { name: 'WWE', title: 'Title WWE' },
    { name: 'XXX', title: 'Title XXX' },
    { name: 'YYY', title: 'Title YYY' },
    { name: 'ZZZ', title: 'Title ZZZ' },
    { name: 'NYC', title: 'Title NYC' },
    { name: 'ABC', title: 'Title ABC' },
    { name: 'XYZ', title: 'Title XYZ' },
    { name: 'WWE', title: 'Title WWE' },
    { name: 'XXX', title: 'Title XXX' },
    { name: 'YYY', title: 'Title YYY' },
    { name: 'ZZZ', title: 'Title ZZZ' },
    { name: 'NYC', title: 'Title NYC' },
  ];

  return (
    <div className="mx-4">
      <div className="bg-black absolute left-0 w-10" />
      <div className=" mt-4 flex  justify-between">
        <div className="flex items-center ">
          <Image alt="" src={MovieIcon} height={20} />
          <span className="font-bold">{category}</span>
        </div>
        <Button
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
