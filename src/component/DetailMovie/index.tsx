// import { useMovie } from '@/hooks/useMoviesContext';
import React from 'react';
import Episode from '../Episode';
import MovieInfomation from '../MovieInfomation';
import Comment from '../Comment/CommentWriteArea';
import { useMovie } from '@/hooks/useMoviesContext';
import ListCategory from '../ListCategory';
// import { handleFetchMovieByID } from '@/services/movie';
// import { EpisodeType, FetchMovieDetailResponse } from '@/libs/type';

export default function DetailMovie() {
  return (
    <>
      <div className="mt-4 px-4">
        <video
          src="https://youtu.be/lCRHkMZ35MQ?list=RDlCRHkMZ35MQ"
          className="w-[100vw] "
          height="680"
          controls
        />
      </div>
      <Episode />
      <MovieInfomation />
      <Comment />
      <ListCategory />
    </>
  );
}
