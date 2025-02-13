import React, { useState } from 'react';
import Button from '../Base/Button';
import { useMovie } from '@/hooks/useMoviesContext';

export default function Episode({
  onVideoSelect,
}: {
  onVideoSelect: (videoUrl: string) => void;
}) {
  const { movie } = useMovie();
  const [selectedVideoUrl, setSelectedVideoUrl] = useState('');

  const selectEpisode = (videoUrl: string) => {
    setSelectedVideoUrl(videoUrl);
    onVideoSelect(videoUrl);
  };

  return (
    <div className="m-4 p-4 bg-[#313131] rounded-sm">
      <span className="font-bold text-2xl whitespace-nowrap">영화 목록</span>
      <div className="flex flex-wrap gap-4 mt-2">
        {movie?.episodes.length === 0 ? (
          <Button label="FULL" className="bg-[#EA1616] rounded-sm" />
        ) : (
          movie?.episodes.map((episode, index) => (
            <Button
              onClick={() => selectEpisode(episode.video_url)}
              key={episode.id || index}
              label={index.toString()}
              className="bg-[#EA1616] focus:bg-[#191919] focus:text-white rounded-sm font-bold text-lg w-20 !h-8 hover:bg-[#191919] duration-100"
            />
          ))
        )}
      </div>
    </div>
  );
}
