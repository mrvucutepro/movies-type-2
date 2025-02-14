/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import Slider from '@/component/Slider';
import Advertisement from '@/component/Advertisement';
import ListCategory from '@/component/ListCategory';

import CategoryDetail from '../CategoryDetail';
import { useMovie } from '@/hooks/useMoviesContext';
import DetailMovie from '../DetailMovie';
export default function Content({ selectedCategory }: any) {
  const { movie } = useMovie();
  const isHome = selectedCategory?.id === 0;
  return (
    <div className="w-full">
      {isHome ? (
        <>
          {!movie ? (
            <>
              <Slider />
              <Advertisement />
              <ListCategory />
            </>
          ) : (
            <DetailMovie />
          )}
        </>
      ) : (
        <>
          <Advertisement />
          {!movie ? (
            <CategoryDetail
              name={selectedCategory?.name ?? ''}
              id={Number(selectedCategory?.id)}
            />
          ) : (
            <DetailMovie />
          )}
        </>
      )}
    </div>
  );
}
