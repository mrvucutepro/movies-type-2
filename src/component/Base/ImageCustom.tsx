import Image from 'next/image';
import React from 'react';
import Play from '@/assets/movie/play_button.png';
export default function ImageCustom({
  movieImage,
  movieName,
}: {
  movieImage: string;
  movieName: string;
}) {
  return (
    <>
      <div className="relative z-10 w-full max-w-sm mx-auto cursor-pointer rounded-lg overflow-hidden group">
        <Image
          src={movieImage}
          alt="Movie Thumbnail"
          className="object-cover w-full h-[40vh] xl:h-[40vh] lg:h-[30vh] rounded-lg group-hover:scale-105 transform transition-transform duration-300"
          height={0}
          width={600}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50  flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Image src={Play} alt="Play Icon" height={50} width={50} />
        </div>
      </div>
      <div className="text-base duration-200 group-hover:text-[#EA1616] font-bold break-words mt-6 flex justify-center">
        {movieName}
      </div>
    </>
  );
}
