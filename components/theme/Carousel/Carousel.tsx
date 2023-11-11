'use client';

import { useRef } from 'react';
import cn from 'classnames';

import { Swiper, SwiperSlide } from 'swiper/react';

import { CarouselType } from './Carousel.type';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Carousel({
  slides,
  settings,
  className,
  useCustomNavigation = false,
}: CarouselType) {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <div className={cn('carousel', className)}>
      <div className="carousel__wrapper">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          // onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
          {...settings}
        >
          {slides.length &&
            slides.map((slide, index) => (
              <SwiperSlide key={index}>{slide}</SwiperSlide>
            ))}
        </Swiper>
      </div>
      {useCustomNavigation ? (
        <div className="swiper-button-control">
          <button
            className={cn('swiper-button swiper-button-prev')}
            ref={navigationPrevRef}
          >
            prev
          </button>
          <button
            className={cn('swiper-button swiper-button-next')}
            ref={navigationNextRef}
          >
            next
          </button>
        </div>
      ) : null}
    </div>
  );
}
