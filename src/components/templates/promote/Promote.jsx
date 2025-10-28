import React from "react";
import styles from "./promote.module.css";
import Link from "next/link";

function Promote() {
  return (
    <main className={styles.main}>
      <section className={styles.top_part}>
        <div className={styles.top_part__left}>
          <div>
            <img src="/images/clubset1.jpg" alt="" />
          </div>
          <div className={styles.img_container}>
            <h3>باشگاه مشتریان ست</h3>
            <p>برای مشتریان وفادار ست</p>
            <Link href="/contact-us">اطلاعات بیشتر</Link>
          </div>
        </div>
        <div className={styles.top_part__right}>
          <h3>خرید قهوه ، به سبک حرفه ای ها</h3>
          <p>زیبایی امروز را با قهوه ست کنید</p>
          <Link href="/contact-us">تماس با ما</Link>
          <div className={styles.top_part__right_coffe}>
            <img src="/images/coffee-image-1.jpg" alt="coffee" />
          </div>
        </div>
      </section>
      <section className={styles.bottom_part}>
        <div className={styles.bottom_part__left}>
          <div>
            <img
              src="https://set-coffee.com/wp-content/uploads/2022/04/coffee-svg-2.svg"
              alt="logo"
            />
          </div>
          <h3>چرا قهوه ست</h3>
          <p>
            برخورداری از تجربه و قدمت کافی و آگاهی از ذایقه مصرف کنندگان راهنمای
            ما در برآورده ساختن نیاز مشتریان قهوه تخصصی (موج سوم) است .تجربه ای
            به قدمت چهار نسل و ارتباط مستمر با مصرف کنندگان قهوه ضامن این
            ویژگیها است.
          </p>
          <div className={styles.bottom_link_container}>
            <Link className={styles.bottom_link_top} href="/more-study">
              بیشتر بخوانید
            </Link>
            <Link className={styles.bottom_link_down} href="/more-study">
              فروشگاه
            </Link>
          </div>
        </div>

        <div className={styles.bottom_part__right}>
          <img src="/images/Home32.jpg" alt="" />
        </div>
      </section>
    </main>
  );
}

export default Promote;
