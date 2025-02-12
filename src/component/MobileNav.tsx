import Image from 'next/image';
import React from 'react';
import Home from '@/assets/icons/iconamoon_home-bold.png';
import Movie from '@/assets/icons/material-symbols_movie-outline.png';
import PlayMovie from '@/assets/icons/ri_movie-line.png';
import FilmStrip from '@/assets/icons/mingcute_movie-line.png';
import SeeMore from '@/assets/icons/solar_menu-dots-circle-linear.png';

export default function MobileNav() {
  return (
    <div>
      <div className="bg-black md:hidden flex justify-between p-4">
        <Image src={Home} alt="" />
        <Image src={Movie} alt="" />
        <Image src={PlayMovie} alt="" />
        <Image src={FilmStrip} alt="" />
        <Image src={SeeMore} alt="" />
      </div>
    </div>
  );
}
