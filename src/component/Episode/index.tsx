import React from 'react';
import Button from '../Base/Button';
import { useMovie } from '@/hooks/useMoviesContext';
// import { EpisodeType } from '@/libs/type';

export default function Episode() {
  const { movie } = useMovie();

  // const [listEpisode, setListEpisode] = useState<EpisodeType[]>([]);

  console.log(movie);

  return (
    <div className="flex gap-4 m-4 p-4 items-center bg-[#313131] rounded-sm">
      <span className="font-bold text-2xl">영화 목록</span>
      {movie?.episodes.map((value, index) => (
        <>
          {movie?.episodes.length === 0 ? (
            <Button
              key={index}
              label="abc"
              className="bg-[#EA1616] rounded-sm"
            />
          ) : (
            <Button
              key={index}
              label="abc"
              className="bg-[#EA1616] rounded-sm"
            />
          )}
        </>
      ))}

      {/* <Button label="abc" className="bg-[#191919]  rounded-sm" /> */}
    </div>
  );
}
