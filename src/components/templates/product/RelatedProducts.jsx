"use client";

import Product from "@/components/modules/product/Product";
import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

function RelatedProducts({ relatedProduct }) {
  console.log("relatedProduct-->", relatedProduct);
  return (
    <main dir="rtl" className="px-12 text-black">
      <div className="px-8">
        <h3 className="text-xl font-bold">محصولات مرتبط</h3>
      </div>
      <div className="py-8  ">
        <>
          <Swiper
            style={{
              "--swiper-navigation-color": "#000",
              "--swiper-pagination-color": "#000",
              "--swiper-navigation-size": "20px",
              "--swiper-pagination-size": "40px",
            }}
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="w-full h-[30rem] relative "
          >
            <SwiperSlide>
              <div className="flex gap-10   px-10">
                {relatedProduct.map((product) => (
                  <Product key={product._id} product={product} />
                ))}
              </div>
            </SwiperSlide>
          </Swiper>
        </>
      </div>
    </main>
  );
}

export default RelatedProducts;
