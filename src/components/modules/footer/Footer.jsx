import React from "react";

import styles from "./footer.module.css";
import { FaLocationArrow } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

import Link from "next/link";
import Article from "./Article";

function Footer() {
  return (
    <main className={styles.footer}>
      <section className={styles.top_part}>
        <section className={styles.title}>
          <img
            src="https://set-coffee.com/wp-content/uploads/2021/09/logosefid.png"
            alt="logo"
          />
          <p>شرکت فنجان داغ خوارزمی، فروشگاه اینترنتی قهوه ست</p>
          <div className={styles.address_container}>
            <FaLocationArrow className={styles.address_icon} />
            <span>
              تهران. شریف آباد . شهرک صنعتی خوارزمی فاز 2 . بلوار بهارستان.
              خیابان ماگنولیا بلوک آ117
            </span>
          </div>
          <div className={styles.mobile_container}>
            <FaMobileAlt className={styles.mobile_icon} />
            <Link href="/peigiri">پیگیری سفارشات : 02188305827</Link>
          </div>
          <div className={styles.email_container}>
            <HiOutlineMail className={styles.email_icon} />
            <Link href="/peigiri">support [at] set-coffee.com</Link>
          </div>
        </section>
        <section className={styles.last_article}>
          <p>آخرین نوشته ها</p>
          <Article
            imageSrc={
              "https://set-coffee.com/wp-content/uploads/2024/12/1530002164_f-150x150.jpg"
            }
            title={"قهوه فوری تاریخ انقضا دارد؟"}
            date={"06 دی 1403"}
            comments={"بدون دیدگاه"}
          />
          <hr />
          <Article
            imageSrc={
              "https://set-coffee.com/wp-content/uploads/2024/12/1530002164_f-150x150.jpg"
            }
            title={"قهوه فوری تاریخ انقضا دارد؟"}
            date={"06 دی 1403"}
            comments={"بدون دیدگاه"}
          />
          <hr />

          <Article
            imageSrc={
              "https://set-coffee.com/wp-content/uploads/2024/12/1530002164_f-150x150.jpg"
            }
            title={"قهوه فوری تاریخ انقضا دارد؟"}
            date={"06 دی 1403"}
            comments={"بدون دیدگاه"}
          />
        </section>
        <section className={styles.quick_access}>
          <p>دسترسی سریع</p>
          <Link href="/peigiri">حفظ حریم شخصی</Link>
          <Link href="/peigiri">ثبت شکایات</Link>
          <Link href="/peigiri">درباره ما</Link>
        </section>
        <section className={styles.footer_menu}>
          <p>منوی فوتر</p>
          <Link href="/peigiri">شرایط و قوانین</Link>
          <Link href="/peigiri">شرایط و هزینه ارسال</Link>
          <Link href="/peigiri">ثبت شکایات</Link>
          <Link href="/peigiri">حفظ حریم شخصی</Link>
          <Link href="/peigiri">دیکشنری قهوه</Link>
        </section>
        <section className={styles.logos}>
          <div className={styles.logos_top}>
            <div className={styles.logos_top_container}>
              <img
                src="https://set-coffee.com/wp-content/uploads/2022/07/logonama.png"
                alt=""
              />
            </div>
            <div className={styles.logos_top_container}>
              <img
                src="https://set-coffee.com/wp-content/uploads/2022/07/logonama.png"
                alt=""
              />
            </div>
          </div>
          <div className={styles.logos_bottom}>
            <div className={styles.logos_bottom_container}>
              <img
                src="https://set-coffee.com/wp-content/uploads/2022/07/meli-final.jpg"
                alt=""
              />
            </div>
            <div className={styles.logos_bottom_container}>
              <img
                src="https://set-coffee.com/wp-content/uploads/2022/07/Logo-tejaratbank.jpg"
                alt=""
              />
            </div>
            <div className={styles.logos_bottom_container}>
              <img
                src="https://set-coffee.com/wp-content/uploads/2022/07/Logo-tejaratbank.jpg"
                alt=""
              />
            </div>
          </div>
        </section>
      </section>
      <section className={styles.bottom_part}></section>
    </main>
  );
}

export default Footer;
