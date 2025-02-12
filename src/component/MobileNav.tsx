import Image from 'next/image';
import React from 'react';
import Home from '@/assets/icons/iconamoon_home-bold.png';
import Movie from '@/assets/icons/material-symbols_movie-outline.png';
import PlayMovie from '@/assets/icons/ri_movie-line.png';
import FilmStrip from '@/assets/icons/mingcute_movie-line.png';
import SeeMore from '@/assets/icons/solar_menu-dots-circle-linear.png';

export default function MobileNav() {
  const navMenuMobile = [
    { image: Home, title: '홈' },
    { image: Movie, title: '드라마' },
    { image: PlayMovie, title: '예능' },
    { image: FilmStrip, title: '영화' },
    { image: SeeMore, title: '기타' },
  ];
  return (
    <div>
      <div className="bg-black md:hidden flex justify-between px-4 pb-2">
        {navMenuMobile.map((menu, index) => (
          <div className=" justify-items-center" key={index}>
            <Image src={menu.image} alt="" />
            <span>{menu.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
