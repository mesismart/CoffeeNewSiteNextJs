import React from "react";

import styles from "./forgotPass.module.css";
import Link from "next/link";

function Sms() {
  return (
    <>
      <main className={styles.login_container}>
        <input
          className={styles.input_style}
          type="text"
          placeholder="ایمیل/شماره موبایل"
        />
        <button className={styles.login_pass}>بازنشانی رمز عبور</button>
        <Link href="#" className={styles.forget_password}>
          بازگشت به ورود
        </Link>
      </main>
      <Link href="#" className={styles.cancel}>
        لغو
      </Link>
    </>
  );
}

export default Sms;
