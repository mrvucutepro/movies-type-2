import Image from 'next/image';
import React from 'react';
// import Movie03 from '@/assets/movie/movie-3.png';

interface CardMovieProps {
  movieName: string;
  movieTitle?: string;
  movieImage: string;
}

export default function CardMovie({
  movieImage,
  movieTitle,
  movieName,
}: CardMovieProps) {
  return (
    <div>
      <div className="py-3">
        <Image
          src={movieImage}
          className=" rounded-lg"
          alt=""
          height={0}
          width={300}
        />
        <div className="text-base font-medium break-words mt-6">
          {movieName}
        </div>
        <div className="text-xs break-words">{movieTitle}</div>
      </div>
    </div>
  );
}
