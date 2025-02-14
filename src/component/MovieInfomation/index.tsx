import { useMovie } from '@/hooks/useMoviesContext';
import Image from 'next/image';
import React from 'react';
import Star from '@/assets/icons/voting.png';

export default function MovieInfomation() {
  const { movie } = useMovie();

  return (
    <div className="md:flex  m-4 p-4 items-center  justify-items-center bg-[#313131]  rounded-sm">
      <Image
        src={movie?.image || ''}
        alt=""
        height={0}
        width={200}
        className="h-[30vh] flex object-contain"
      />
      <div className="gap-4 grid max-w-[100%] my-24 md:mx-24">
        <span className="font-bold text-2xl">위드아웃 리모스 (2021)</span>
        <Image src={Star} alt="" height={20} />
        <div className="gap-4 flex text-xs">
          <span className="">개봉: 2024.08.21</span>
          <span className="">국가:한국</span>
        </div>
        <span className="text-xs">{movie?.des}</span>
      </div>
      <div className="grid gap-2 text-xs max-w-[100%]">
        <span className="">출연:박성웅, 곽시양, 윤경호</span>
        <span className="">장르:코미디,드라마</span>
        <span className="">감독:김재훈</span>
      </div>
    </div>
  );
}
