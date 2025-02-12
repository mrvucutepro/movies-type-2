import { useMovie } from '@/hooks/useMoviesContext';
import Image from 'next/image';
import React from 'react';
import Star from '@/assets/icons/voting.png';

export default function MovieInfomation() {
  const { movie } = useMovie();

  return (
    <div className="md:flex grid gap-12 m-4 p-4 items-center  justify-items-center bg-[#313131]  rounded-sm">
      <img src={movie?.image} alt="" className="h-[30vh] flex" />
      <div className="gap-2 grid w-[50%]">
        <span className="font-bold text-2xl">위드아웃 리모스 (2021)</span>
        <Image src={Star} alt="" height={20} />
        <div className="gap-4 flex text-xs">
          <span className="">개봉: 2024.08.21</span>
          <span className="">국가:한국</span>
        </div>
        <span className="text-xs">
          완벽한 변장술로 형사들을 크게 뺑이 치게 만들어 빅뺑이라 불리는 사기꾼
          김인해(박성웅), 말보다 주먹이 빠른 분노조절장애 형사 조수광(곽시양),
          피도 눈물도 없는 보스 주린팡(윤경호)까지 각기 다른 이유로 제주도에서
          운명적으로 조우한 세 사람! 도망칠 곳 없는 제주에 발을 디딘 그들의 쫓고
          쫓기는 대환장 추격이 시작된다!
        </span>
      </div>
      <div className="grid text-xs">
        <span className="">출연:박성웅, 곽시양, 윤경호</span>
        <span className="">장르:코미디,드라마</span>
        <span className="">감독:김재훈</span>
      </div>
    </div>
  );
}
