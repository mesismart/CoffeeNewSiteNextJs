"use client";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";

function Banner() {
  return (
    <>
      <Swiper
        rewind={true}
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 2000 }}
        loop={true}
        className="mySwiper home-slider "
      >
        <SwiperSlide>
          <img
            src="https://set-coffee.com/wp-content/uploads/2024/12/b-and-rw-slide.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://set-coffee.com/wp-content/uploads/2022/06/82.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Banner;
