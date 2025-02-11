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

export default function Home() {
  const [category, setCategory] = useState('Home');
  const images = [Movie01, Movie02, Movie03];
  const isHome = category === 'Home';

  return (
    <>
      <Header />
      <div className="flex">
        <NavBar onCategorySelect={setCategory} />
        <div className="w-full">
          <Title />
          {isHome ? (
            <>
              <Slider slides={images} />
              <Advertisement />
              <ListCategory />
            </>
          ) : (
            category !== 'Home' && (
              <>
                <Advertisement />
                <CategoryDetail category={category} />
              </>
            )
          )}
          <MobileNav />
          <Footer />
        </div>
      </div>
    </>
  );
}
