"use client";

import { ANIMATION_REVEAL_ELEMENT, limitMovies } from "@/constants";
import { ScrollRevealElement } from "@/helper/animation";
import { getMovieCategories } from "@/services/movies";
import { IMovies } from "@/types";
import { useEffect, useState } from "react";
import CategoryFilmItem from "../CategoryFilmItem";
import CollectionFilm from "../CollectionFilm";

export default function ListFilmCategory({ category }: { category: string }) {
  const [pagination, setPagination] = useState({
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

  const categoryId = category.split("-").pop();
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movie = await getMovieCategories({
          categoryId: Number(categoryId),
          ...pagination,
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
  }, [pagination, categoryId]);
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
    <div className={`${ANIMATION_REVEAL_ELEMENT.LEFT_TO_RIGHT.default}`}>
      <CollectionFilm mainTitle={listMovie.movies[0]?.categories[0].name}>
        <CategoryFilmItem
          total={listMovie.total}
          listFilmCategories={listMovie.movies}
          title={listMovie.movies[0]?.categories[0].name}
          isSwiper={false}
          pagination={pagination}
          setPagination={setPagination}
        />
      </CollectionFilm>
    </div>
  );
}
