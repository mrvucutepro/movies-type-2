// import { useMovie } from '@/hooks/useMoviesContext';
import React, { useEffect, useState } from 'react';
import Episode from '../Episode';
import MovieInfomation from '../MovieInfomation';
import Comment from '../Comment/CommentWriteArea';
import ListCategory from '../ListCategory';
import MoviePlayer from '../MoviePlayer.tsx';
import { useMovie } from '@/hooks/useMoviesContext';

export default function DetailMovie() {
  const { movie, setMovie } = useMovie();
  const [videoUrl, setVideoUrl] = useState('');
  const [thumbnaiUrl, setThumbnailUrl] = useState('');

  const handleVideoSelect = (url: string) => {
    setVideoUrl(url);
    setThumbnailUrl(movie?.image ?? '');
  };

  useEffect(() => {
    setMovie(null);
  }, [setMovie]);

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
