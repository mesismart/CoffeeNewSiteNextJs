"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaShoppingCart, FaRegHeart } from "react-icons/fa";

import styles from "./Navbar.module.css";

function Navbar(props) {
  const [fixToTop, setFixToTop] = useState(false);
  console.log("isFixed", props.isFixed);
  console.log("isLogin", props.isLogin);

  useEffect(() => {
    const handleScroll = () => {
      console.log("isFixed:  " + props.isFixed);
      // console.log(window.pageYOffset);
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos > 150) {
        console.log("fix");
        setFixToTop(true);
      } else {
        setFixToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={styles.navbar}>
      <main
        className={
          props.isFixed === true
            ? styles.main_container_fixed
            : fixToTop
            ? styles.main_container_fixed
            : styles.main_container
        }
      >
        <div>
          <Link href="/">
            <img src="/images/logo.png" alt="" />
          </Link>
        </div>
        <ul className={styles.links}>
          <li>
            <Link href="/">صفحه اصلی</Link>
          </li>
          <li>
            <Link href="/">فروشگاه</Link>
          </li>{" "}
          <li>
            <Link href="/">وبلاگ</Link>
          </li>{" "}
          <li>
            <Link href="/contact-us">تماس با ما</Link>
          </li>{" "}
          <li>
            <Link href="/">درباره ما</Link>
          </li>{" "}
          <li>
            <Link href="/">باشگاه مشتریان</Link>
          </li>
          {!props.isLogin ? (
            <li>
              <Link href="/login-register">ورود / ثبت نام</Link>
            </li>
          ) : (
            <div className={styles.dropdown}>
              <Link href="/">
                <IoIosArrowDown className={styles.dropdown_icon} />
                حساب کاربری
              </Link>
              <div className={styles.dropdown_items}>
                <Link href="/">سفارشات</Link>{" "}
                <Link href="/">تیکت های پشتیبانی</Link>{" "}
                <Link href="/">کامنت ها</Link>{" "}
                <Link href="/">علاقه مندی ها</Link>
              </div>
            </div>
          )}
        </ul>
        <div className={styles.navbar_icons}>
          <Link href="/shopping">
            <FaShoppingCart />
            <span>1</span>
          </Link>

          <Link href="/shopping">
            <FaRegHeart />
            <span>1</span>
          </Link>
        </div>
      </main>
    </nav>
  );
}

export default Navbar;
