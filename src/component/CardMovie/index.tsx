import Image from 'next/image';
import React from 'react';
// import Movie03 from '@/assets/movie/movie-3.png';

interface CardMovieProps {
  movieName: string;
  movieTitle: string;
  movieImage: string;
}

export default function CardMovie({
  movieImage,
  movieName,
  movieTitle,
}: CardMovieProps) {
  return (
    <div>
      <div className="py-3">
        <Image src={movieImage} className="rounded-lg" alt="" height={200} />
      </div>
      <div>{movieName}</div>
      <div className="text-xs">{movieTitle}</div>
    </div>
  );
}
