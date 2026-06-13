import React from "react";
import Link from "next/link";
import { RiArrowLeftSLine } from "react-icons/ri";

import styles from "./latest.module.css";
import Product from "@/components/modules/product/Product";
import connectToDB from "../../../app/lib/configs/db";
import productModel from "../../../app/lib/models/Product";
import userModel from "../../../app/lib/models/User";

async function Latest() {
  connectToDB();

  const product = await productModel.find({}).limit(10).sort({ createdAt: -1 });
  console.log("product:==> ", product);

  return (
    <>
      <main className={styles.main}>
        <section className={styles.title}>
          <div className={styles.title_left}>
            <RiArrowLeftSLine />
            <Link href="/showAllProduct">مشاهده همه </Link>
          </div>
          <div className={styles.title_right}>
            <h3>آخرین محصولات</h3>
            <p>latest product</p>
          </div>
        </section>
        <section dir="rtl" data-aos="fade-up" className={styles.product}>
          {product.map((item) => (
            <Product
              key={item._id}
              product={{
                id: String(item._id),
                name: String(item.name),
                price: Number(item.price),
                score: Number(item.score),
                image: String(item.image),
                shortDescription: String(item.shortDescription),
                weight: String(item.weight),
              }}
            />
          ))}
        </section>
      </main>
    </>
  );
}

export default Latest;
