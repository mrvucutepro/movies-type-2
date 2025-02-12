'use client';
import Header from '@/component/Header';
import NavBar from '@/component/NavBar';
import Slider from '@/component/Slider';
import Title from '@/component/Title';
import Advertisement from '@/component/Advertisement';
import ListCategory from '@/component/ListCategory';
import Footer from '@/component/Footer';
import MobileNav from '@/component/MobileNav';
import Movie01 from '@/assets/movie/movie-1.png';
import Movie02 from '@/assets/movie/movie-2.png';
import Movie03 from '@/assets/movie/movie-3.png';
import { useState } from 'react';
import CategoryDetail from '@/component/CategoryDetail';
import { CategoryType, MovieType } from '@/libs/type';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType | null>(
    null
  );
  // const [movies, setMovies] = useState<MovieType[]>([]);
  const images = [Movie01, Movie02, Movie03];
  const isHome = selectedCategory?.name === 'Home';

  return (
    <>
      <Header />
      <div className="flex">
        <NavBar onCategorySelect={setSelectedCategory} />
        <div className="w-full">
          <Title />
          {isHome ? (
            <>
              <Slider slides={images} />
              <Advertisement />
              {/* <ListCategory movies={movies} /> */}
            </>
          ) : (
            !isHome && (
              <>
                <Advertisement />
                <CategoryDetail
                  name={selectedCategory?.name ?? ''}
                  id={Number(selectedCategory?.id)}
                />
              </>
            )
          )}
          <Footer />
          <MobileNav />
        </div>
      </div>
    </>
  );
}
