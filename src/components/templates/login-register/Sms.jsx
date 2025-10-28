import React from "react";

import styles from "./sms.module.css";
import Link from "next/link";

function Sms() {
  return (
    <>
      <main className={styles.login_container}>
        <p className={styles.taiid}>کد تایید</p>
        <p className={styles.lbl_taid}>لطفا کد تایید ارسال شده را تایپ کنید</p>
        <p className={styles.phone_lbl}>۰۹۱۱۷۷۷۲۷۷۷</p>

        <input className={styles.input_style} type="text" placeholder="" />
        <button className={styles.login_pass}>ثبت کد تایید</button>
        <Link href="#" className={styles.forget_password}>
          ارسال مجدد کد یکبار مصرف
        </Link>
      </main>
      <Link href="#" className={styles.cancel}>
        لغو
      </Link>
    </>
  );
}

export default Sms;
