'use client';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import Movie01 from '@/assets/movie/movie-1.png';
import Movie02 from '@/assets/movie/movie-2.png';
import Movie03 from '@/assets/movie/movie-3.png';

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [Movie01, Movie02, Movie03];

  return (
    <div
      style={{ width: '100%', margin: '0 auto' }}
      className="md:block hidden"
    >
      <Swiper
        modules={[Navigation]}
        navigation
        loop={true}
        spaceBetween={0}
        slidesPerView={'auto'}
        centeredSlides={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        style={{ height: '60vh', overflow: 'hidden' }}
      >
        {images.map((slide, index) => (
          <SwiperSlide
            key={index}
            style={{
              display: 'flex',
              justifyContent: index === activeIndex ? 'center' : 'space-evenly',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                position: 'relative',
                width: index === activeIndex ? '100%' : '20%',
                transition: 'width 0.3s ease',
                height: '100%',
                // width: '100%',
                overflow: 'hidden',
              }}
            >
              {index !== activeIndex && <div />}
              <Image
                src={slide.src}
                alt=""
                fill
                sizes="(max-width: 1200px) 60vw, 60vw"
                style={{
                  objectFit: 'contain',
                  zIndex: 0,
                }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
