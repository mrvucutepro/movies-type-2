/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import Slider from '@/component/Slider';
import Title from '@/component/Title';
import Advertisement from '@/component/Advertisement';
import ListCategory from '@/component/ListCategory';
import Footer from '@/component/Footer';
import MobileNav from '@/component/MobileNav';
import CategoryDetail from '../CategoryDetail';
import { useMovie } from '@/hooks/useMoviesContext';
import DetailMovie from '../DetailMovie';
export default function Content({ selectedCategory }: any) {
  const isHome = selectedCategory?.name === 'Home';
  const { movie } = useMovie();

  return (
    <div className="w-full">
      <Title />
      {isHome ? (
        <>
          <Slider />
          <Advertisement />
          <ListCategory />
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
      <Footer />
      <MobileNav />
    </div>
  );
}
