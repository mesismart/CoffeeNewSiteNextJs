"use client";

import React from "react";
import { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import styles from "./gallery.module.css";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";

function Gallery() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#000",
          "--swiper-pagination-color": "#000",
          "--swiper-navigation-size": "20px",
          "--swiper-pagination-size": "40px",
        }}
        loop={true}
        spaceBetween={100}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="w-full h-[300px] relative  md:h-[400px] lg:h-[500px]"
      >
        <SwiperSlide>
          <img
            src="https://set-coffee.com/wp-content/uploads/2025/01/Guji-washed.jpg"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://set-coffee.com/wp-content/uploads/2025/01/Guji-washed.jpg"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={2}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="w-full h-full mt-2 flex"
      >
        <SwiperSlide className="w-8 cursor-pointer opacity-30 transition-opacity [&.swiper-slide-thumb-active]:opacity-100">
          <img
            src="https://set-coffee.com/wp-content/uploads/2025/01/Guji-washed.jpg"
            className="w-full h-full object-cover rounded-md"
          />
        </SwiperSlide>
        <SwiperSlide className="cursor-pointer opacity-30 transition-opacity [&.swiper-slide-thumb-active]:opacity-100">
          <img
            src="https://set-coffee.com/wp-content/uploads/2025/01/Guji-washed.jpg"
            className="w-full h-full object-cover rounded-md"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Gallery;
