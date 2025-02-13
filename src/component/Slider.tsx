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
        slidesPerView={3}
        centeredSlides={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        style={{ height: '60vh', overflow: 'hidden' }}
      >
        {images.map((slide, index) => (
          <SwiperSlide
            key={index}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                position: 'relative',
                width: index === activeIndex ? '80%' : '20%',
                transition: 'width 0.3s ease',
                height: '100%',
                overflow: 'hidden',
              }}
            >
              {index !== activeIndex && (
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 1,
                  }}
                />
              )}
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
