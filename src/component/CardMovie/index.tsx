import Image from 'next/image';
import React from 'react';
// import Movie03 from '@/assets/movie/movie-3.png';

interface CardMovieProps {
  movieName: string;
  movieTitle?: string;
  movieImage: string;
  onClick?: () => void;
}

export default function CardMovie({
  movieImage,
  movieTitle,
  movieName,
  onClick,
}: CardMovieProps) {
  return (
    <div className=" py-3" onClick={onClick}>
      <Image
        src={movieImage}
        className=" rounded-lg hover:scale-105 transform transition-transform duration-300"
        alt=""
        height={0}
        width={300}
      />
      <div className="text-base font-medium break-words mt-6">{movieName}</div>
      <div className="text-xs break-words">{movieTitle}</div>
    </div>
  );
}
