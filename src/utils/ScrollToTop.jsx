"use client";
import React, { useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";
import styles from "./ScrollToTop.module.css";

function ScrollToTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollButton = document.querySelector(".scroll-to-top");
      console.log(window.scrollY);
      if (window.scrollY > 200) {
        scrollButton.style.display = "block";
      } else {
        scrollButton.style.display = "none";
      }
    });
  }, []);

  return (
    <div className={styles.container}>
      <button onClick={scrollToTop} className="scroll-to-top">
        <IoIosArrowUp className={styles.icon} />
      </button>
    </div>
  );
}

export default ScrollToTop;
