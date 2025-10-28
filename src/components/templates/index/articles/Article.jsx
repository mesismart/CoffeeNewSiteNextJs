import React from "react";
import styles from "./article.module.css";
import Link from "next/link";
import { IoShareSocialOutline } from "react-icons/io5";
import { FiMessageSquare } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";

function Article() {
  return (
    <main className={styles.container}>
      <section className={styles.img}>
        <img
          src="https://set-coffee.com/wp-content/uploads/2024/12/1324007808_f-scaled-300x300.jpg"
          alt=""
        />
      </section>
      <section className={styles.date}>
        <div className={styles.date_container}>
          <p>24</p>
          <p>بهمن</p>
        </div>
      </section>
      <section className={styles.details}>
        <section className={styles.title}>
          <p>قهوه</p>
        </section>
        <section className={styles.text}>
          <h4>مصرف قهوه با شیر برای کاهش التهاب</h4>
        </section>
        <section className={styles.bottoms}>
          <Link href="/article">
            <IoShareSocialOutline />
          </Link>

          <Link href="/article">
            <FiMessageSquare />
          </Link>
          <p>Mahdi</p>
          <Link href="/article">
            <CgProfile />
          </Link>
          <p>نویسنده</p>
        </section>
      </section>
    </main>
  );
}

export default Article;
