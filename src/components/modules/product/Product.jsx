"use client";

import React from "react";
import styles from "./product.module.css";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import RateStar from "./RateStar";
import Link from "next/link";

function Product({ product }) {
  console.log("ProductInProduct: ", product);

  // const addToWishlist = () => {
  //   console.log("addToWishlist");
  // };
  const addToBasket = () => {};

  const handleQuickView = () => {};

  return (
    <main className={styles.main}>
      <div className={styles.image_container}>
        <img
          src="https://set-coffee.com/wp-content/uploads/2024/11/burundi.jpg"
          alt=""
        />
        <div className={styles.options}>
          <div>
            <p className={styles.tooltip}>افزودن به علاقه مندی</p>
            <CiHeart />
          </div>
          <div>
            <p className={styles.tooltip}>مشاهده سریع</p>
            <CiSearch />
          </div>
          <div className={styles.btn_container}>
            <button
              onClick={() => {
                console.log("Add to Basket");
              }}
            >
              افزودن به سبد خرید
            </button>
          </div>
        </div>
      </div>
      <div className={styles.title}>
        <Link href={`/product/${product.id}`}> {product.name}</Link>
        <span>{product.weight}</span>
      </div>
      <div className={styles.stars}>
        <RateStar rating={product.score} />
      </div>
      <div className={styles.price}>
        <span className="text-gray-600 font-bold">تومان</span>
        <span className="text-gray-600 font-bold">{product.price}</span>
      </div>
    </main>
  );
}

export default Product;
