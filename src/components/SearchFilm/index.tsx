"use client";

import { ANIMATION_REVEAL_ELEMENT, limitMovies } from "@/constants";
import { ScrollRevealElement } from "@/helper/animation";
import { getMovieCategories } from "@/services/movies";
import { IMovies } from "@/types";
import { useEffect, useState } from "react";
import CategoryFilmItem from "../CategoryFilmItem";
import CollectionFilm from "../CollectionFilm";

export default function SearchMovie({ search }: { search: string }) {
  const [pagination, setPagination] = useState<{
    page: number;
    limit: number;
  }>({
    page: 1,
    limit: limitMovies,
  });
  const [listMovie, setListMovie] = useState<{
    movies: IMovies[];
    total: number;
  }>({
    movies: [],
    total: 0,
  });

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movie = await getMovieCategories({
          ...pagination,
          search: decodeURIComponent(search),
        });
        setListMovie({
          movies: movie.data.movies,
          total: movie.data.total,
        });
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchMovies();
  }, [pagination, search]);
  useEffect(() => {
    ScrollRevealElement(
      ANIMATION_REVEAL_ELEMENT.BOTTOM_TO_TOP.default,
      ANIMATION_REVEAL_ELEMENT.BOTTOM_TO_TOP.active
    );
    ScrollRevealElement(
      ANIMATION_REVEAL_ELEMENT.LEFT_TO_RIGHT.default,
      ANIMATION_REVEAL_ELEMENT.LEFT_TO_RIGHT.active
    );
    ScrollRevealElement(
      ANIMATION_REVEAL_ELEMENT.RIGHT_TO_LEFT.default,
      ANIMATION_REVEAL_ELEMENT.RIGHT_TO_LEFT.active
    );
  }, []);
  return (
    <div className={`${ANIMATION_REVEAL_ELEMENT.RIGHT_TO_LEFT.default}`}>
      <CollectionFilm mainTitle={decodeURIComponent(search)}>
        {listMovie?.movies?.length > 0 ? (
          <CategoryFilmItem
            total={listMovie.total}
            listFilmCategories={listMovie.movies}
            isSwiper={false}
            pagination={pagination}
            setPagination={setPagination}
          />
        ) : (
          <div className="text-white text-center font-bold">{`표시할 결과가 없습니다 : ${decodeURIComponent(
            search
          )}`}</div>
        )}
      </CollectionFilm>
    </div>
  );
}
