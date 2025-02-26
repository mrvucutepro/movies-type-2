"use client";
import { Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

export default function CommonSwiper({
  children,
  slidesPerView,
  gap,
  slidePerViewResponsive,
}: {
  children: React.ReactNode;
  slidesPerView?: number;
  gap?: string;
  slidePerViewResponsive?: number;
}) {
  return (
    <>
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: slidePerViewResponsive ?? 1.5,
            spaceBetween: gap ?? 16,
          },
          500: {
            slidesPerView: slidePerViewResponsive ?? 2.5,
            spaceBetween: gap ?? 16,
          },
          768: {
            slidesPerView: slidePerViewResponsive ?? 3.5,
            spaceBetween: gap ?? 16,
          },
          1024: {
            slidesPerView: slidePerViewResponsive ?? slidesPerView,
            spaceBetween: gap ?? 16,
          },
        }}
        navigation={true}
        modules={[Navigation]}
      >
        {children}
      </Swiper>
    </>
  );
}
