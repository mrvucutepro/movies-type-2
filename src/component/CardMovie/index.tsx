import React from 'react';
import ImageCustom from '../Base/ImageCustom';

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
    <div className="relative z-10 py-3" onClick={onClick}>
      <ImageCustom movieImage={movieImage} movieName={movieName} />
      <div className="text-xs break-words">{movieTitle}</div>
    </div>
  );
}
