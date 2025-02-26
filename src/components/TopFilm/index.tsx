"use client";
import { ANIMATION_REVEAL_ELEMENT } from "@/constants";
import { ScrollRevealElement } from "@/helper/animation";
import Image from "next/image";
import { useEffect } from "react";
import { SwiperSlide } from "swiper/react";
import CommonSwiper from "../Swiper";

const listFilms = [
  {
    id: 1,
    banner:
      "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/6MKr3KgOLmzOP6MSuZERO41Lpkt.jpg",
  },
  {
    id: 2,
    banner:
      "https://media.themoviedb.org/t/p/original/fbGCmMp0HlYnAPv28GOENPShezM.jpg",
  },
  {
    id: 3,
    banner:
      "https://media.themoviedb.org/t/p/original/293Mo4GWf7Tl0TfAr5NFghqeMy7.jpg",
  },
];

export default function TopFilm() {
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
    <div className={`${ANIMATION_REVEAL_ELEMENT.BOTTOM_TO_TOP.default}`}>
      <CommonSwiper slidePerViewResponsive={1} slidesPerView={1}>
        {listFilms.map((film) => {
          return (
            <SwiperSlide key={film.id}>
              <div className="w-full aspect-[2.3629]">
                <Image
                  src={film.banner}
                  alt=""
                  layout="fill"
                  objectFit="center"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </CommonSwiper>
    </div>
  );
}
