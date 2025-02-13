// import { useMovie } from '@/hooks/useMoviesContext';
import React, { useState } from 'react';
import Episode from '../Episode';
import MovieInfomation from '../MovieInfomation';
import Comment from '../Comment/CommentWriteArea';
import ListCategory from '../ListCategory';
import MoviePlayer from '../MoviePlayer.tsx';
import { useMovie } from '@/hooks/useMoviesContext';

export default function DetailMovie() {
  const { movie } = useMovie();
  const [videoUrl, setVideoUrl] = useState('');
  const [thumbnaiUrl, setThumbnailUrl] = useState('');

  const handleVideoSelect = (url: string) => {
    setVideoUrl(url);
    setThumbnailUrl(movie?.image ?? '');
  };

  return (
    <>
      <MoviePlayer videoUrl={videoUrl} thumbnail={thumbnaiUrl} />
      <Episode onVideoSelect={handleVideoSelect} />
      <MovieInfomation />
      <Comment />
      <ListCategory />
    </>
  );
}
