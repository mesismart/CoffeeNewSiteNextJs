import React from "react";
import { FaStar } from "react-icons/fa";
import { IoShuffle } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoPinterest } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa6";
import { RiTelegramFill } from "react-icons/ri";

import RateStar from "@/components/modules/product/RateStar";
import AddToWishlist from "./AddToWishlist";

function Detail(product) {
  console.log("product", product);
  return (
    <main className="mr-20 ml-20">
      <div dir="rtl" className="text-black text-right py-4 ">
        <h2 className="text-gray-400 ">
          خانه / جدیدترین محصولات/ {product.product.name}
        </h2>
      </div>
      <div dir="rtl" className="text-black text-right  ">
        <h2 className="text-2xl font-[shabnam] font-bold">
          {product.product.name}
        </h2>
      </div>
      <div className="flex py-4 justify-end text-gray-500">
        <div>
          <a className="text-sm">
            (دیدگاه {product.product.comments.length} کاربر)
          </a>
        </div>
        <div className="flex pl-2 text-yellow-400">
          <RateStar rating={product.product.score} />
        </div>
      </div>
      <div dir="rtl" className="text-black">
        <h2>
          <span className="text-2xl">{product.product.price} تومان</span>
        </h2>
      </div>
      <div dir="rtl" className="text-gray-400 text-[1rem] my-5 ">
        {product.product.shortDescription}
      </div>
      <div className="w-[100%] border-b-2"></div>
      <div dir="rtl" className="flex py-9 items-center ">
        <p className="text-black">انتخاب آسیاب :</p>
        <input
          className="bg-white  mr-3 border border-gray-400 h-10 w-60"
          type="select"
          name=""
          id=""
        />
      </div>
      <div dir="rtl" className="flex ">
        <div></div>
        <button className="h-10 w-40 text-sm font-bold bg-[rgb(0,137,121)]  text-white  hover:bg-[rgb(52,24,14)]">
          افزودن به سبد خرید
        </button>
      </div>
      <div dir="rtl" className="flex py-4 text-black">
        <AddToWishlist productId={product.product._id} />
        <div className="flex mr-3 items-center">
          <a
            className="flex text-sm font-bold mr-1 hover:text-gray-500"
            href=""
          >
            <IoShuffle className="text-xl ml-1" />
            مقایسه
          </a>
        </div>
      </div>
      <div className="w-[100%] py-3 border-b-2"></div>
      <div dir="rtl" className="flex text-black text-right py-4 ">
        <p className="text-base font-bold">شناسه محصول : </p>
        <p className="text-base mr-2 font-bold"> GUJIW </p>
      </div>
      <div dir="rtl" className="flex text-black text-right py-1 ">
        <p className="text-base font-bold">دسته : </p>
        <a href="" className="text-base mr-2 text-gray-500">
          {" "}
          جدیدترین محصولات, قهوه اسپشیالیتی, محصولات ویژه, همه موارد{" "}
        </a>
      </div>
      <div dir="rtl" className="flex text-black text-right py-1 ">
        <p className="text-base font-bold">برچسب: </p>
        <a href="" className="text-base mr-2 text-gray-500">
          انواع دانه قهوه، خرید آنلاین قهوه، خرید دانه قهوه اتیوپی، خرید دانه
          قهوه کلمبیا، خرید قهوه، فروش دانه قهوه، فروش قهوه، فروشگاه آنلاین
          قهوه، قهوه دمی، قهوه ست
        </a>
      </div>
      <div dir="rtl" className="flex text-black text-right py-1 ">
        <p className="text-sm font-bold">به اشتراک گذاری: </p>
        <a href="" className="text-base mr-2 text-gray-500">
          <FaFacebookF />
        </a>
        <a href="" className="text-base mr-2 text-gray-500">
          <FaXTwitter />
        </a>
        <a href="" className="text-base mr-2 text-gray-500">
          <IoLogoPinterest />
        </a>
        <a href="" className="text-base mr-2 text-gray-500">
          <FaLinkedinIn />
        </a>
        <a href="" className="text-base mr-2 text-gray-500">
          <RiTelegramFill />
        </a>
      </div>
      <div className="w-[100%] py-3 border-b-2"></div>
    </main>
  );
}

export default Detail;
