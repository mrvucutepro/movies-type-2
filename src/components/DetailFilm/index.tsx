"use client";

import { ANIMATION_REVEAL_ELEMENT } from "@/constants";
import { ScrollRevealElement } from "@/helper/animation";
import { getMovieDetail } from "@/services/movies";
import { IEpisodes, IMovies } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import CollectionFilm from "../CollectionFilm";
import InformationDetailFilm from "../InformationFilm";
import MoviePlayer from "../MoviePlayer";
import RelatedFilm from "../RelatedFilm";
const ButtonSelectFilm = ({
  number_ep,
  isActive,
  handleSelectEpisode,
  episode,
}: {
  number_ep: string;
  isActive?: boolean;
  handleSelectEpisode?: (episode: IEpisodes) => void;
  episode: IEpisodes;
}) => {
  return (
    <button
      onClick={() => handleSelectEpisode && handleSelectEpisode(episode)}
      className={`rounded text-white px-6 py-2 ${
        isActive ? "bg-[#00C8FA]" : "bg-[#202020]"
      }`}
    >
      {number_ep}
    </button>
  );
};
export default function DetailMovie({ movie }: { movie: string }) {
  const number_ep = useSearchParams().get("number_ep");
  const [detailMovie, setDetailMovie] = useState<IMovies | null>(null);
  const [video_url, setVideoUrl] = useState<string | null>(null);
  const router = useRouter();
  const handleSelectEpisode = (episode: IEpisodes) => {
    router.push(`${window.location.pathname}?number_ep=${episode.ep_no}`);
    setVideoUrl(episode.video_url);
  };
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const detailMovie = await getMovieDetail(movie);
        router.replace(
          `${window.location.pathname}?number_ep=${
            detailMovie.number_ep || detailMovie.episodes.length
          }`
        );
        setDetailMovie(detailMovie);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchMovie();
  }, [movie]);

  useEffect(() => {
    if (!detailMovie) return;
    const video =
      detailMovie.episodes.find(
        (ep: IEpisodes) => ep.ep_no === Number(number_ep)
      ) ?? detailMovie.episodes[detailMovie.episodes.length - 1];
    setVideoUrl(video.video_url);
  }, [number_ep, detailMovie]);

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
    <>
      {detailMovie ? (
        <CollectionFilm mainTitle={detailMovie?.title ?? ""}>
          <div className={` mb-5`}>
            <MoviePlayer movieUrl={video_url!} />
          </div>
          <div
            className={`my-1 bg-[#313131] rounded px-4 py-6 flex gap-[10px] flex-wrap items-center ${ANIMATION_REVEAL_ELEMENT.BOTTOM_TO_TOP.default}`}
          >
            <span>서버 : </span>
            {detailMovie?.episodes
              .map((ep) => (
                <ButtonSelectFilm
                  episode={ep}
                  handleSelectEpisode={() => handleSelectEpisode(ep)}
                  key={ep.ep_no}
                  number_ep={`서버${ep.ep_no === 0 ? 1 : ep.ep_no}`}
                  isActive={
                    ep.ep_no ===
                      (Number(number_ep) || detailMovie.episodes.length) ||
                    ep.ep_no === 0
                  }
                />
              ))
              .reverse()}
          </div>
          <div
            className={`${ANIMATION_REVEAL_ELEMENT.BOTTOM_TO_TOP.default} my-1`}
          >
            <InformationDetailFilm profile={detailMovie} />
          </div>
          <div
            className={`my-4 ${ANIMATION_REVEAL_ELEMENT.BOTTOM_TO_TOP.default}`}
          >
            <RelatedFilm />
          </div>
        </CollectionFilm>
      ) : null}
    </>
  );
}
