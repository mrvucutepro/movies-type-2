// import { useMovie } from '@/hooks/useMoviesContext';
import React from 'react';
import Episode from '../Episode';
import MovieInfomation from '../MovieInfomation';
import Comment from '../Comment/CommentWriteArea';

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
      {/* <Category category={category.name ?? ''} movies={movies} /> */}
    </>
  );
}
