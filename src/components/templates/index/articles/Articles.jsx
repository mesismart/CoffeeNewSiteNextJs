"use client";
import React from "react";
import Article from "./Article";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

import styles from "./articles.module.css";

function Articles() {
  return (
    <main className={styles.container}>
      <div className={styles.title}>
        <h3>مقالات ما</h3>
        <p>دانستنی های جداب دنیای قهوه</p>
      </div>

      <div className={styles.article_container}>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          navigation={true}
          dir="rtl"
          loop={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Article />
          </SwiperSlide>
          <SwiperSlide>
            <Article />
          </SwiperSlide>
          <SwiperSlide>
            <Article />
          </SwiperSlide>
          <SwiperSlide>
            <Article />
          </SwiperSlide>
          <SwiperSlide>
            <Article />
          </SwiperSlide>
        </Swiper>
      </div>
    </main>
  );
}

export default Articles;
