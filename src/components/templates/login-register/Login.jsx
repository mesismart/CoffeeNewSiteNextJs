"use client";

import React, { useState } from "react";
import styles from "./login.module.css";
import Link from "next/link";
import Sms from "./Sms";
import ForgotPass from "./ForgotPass";
import { ShowSwl } from "@/app/lib/utils/Helper";
import { signIn } from "@/app/lib/services/login.service";

function Login({ GoToRegisterForm }) {
  const [isLoginWithOTP, setIsLoginWithOTP] = useState(false);
  const [isForgetPassword, setIsForgetPassword] = useState(false);
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const signInFunc = async () => {
    if (!phone.trim()) {
      console.log("Phone is required");
      ShowSwl("شماره موبایل را وارد کنید", "error", "باشه");
      return;
    }
    if (!password.trim()) {
      console.log("Password is required");
      ShowSwl("رمز عبور را وارد کنید", "error", "باشه");
      return;
    }

    const user = { phone, password };

    const res = await signIn(user);

    console.log("res: ", res);
    if (res.status === 200) {
      console.log(res.message);
      ShowSwl("ورود موفقیت آمیز بود", "success", "باشه").then(() => {
        window.location.href = "/";
      });
    } else if (res.status == 401) {
      console.log(res.message);
      ShowSwl("رمز عبور اشتباه است", "error", "باشه");
    } else if (res.status == 404) {
      console.log(res.message);
      ShowSwl("کاربر یافت نشد", "error", "باشه");
    } else {
      console.log(res.message);
      ShowSwl("خطای نامشخص", "error", "باشه");
    }
  };

  if (isForgetPassword) {
    return <ForgotPass />;
  }

  return isLoginWithOTP == false ? (
    <>
      <main className={styles.login_container}>
        <input
          onChange={(e) => setPhone(e.target.value)}
          className={styles.input_style}
          type="text"
          placeholder="ایمیل/شماره موبایل"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input_style}
          type="text"
          placeholder="رمز عبور"
        />
        <div className={styles.remember_me}>
          <input type="checkbox" />
          <label>مرا به یاد داشته باش</label>
        </div>
        <button onClick={signInFunc} className={styles.login_btn}>
          ورود
        </button>
        <Link href="#" className={styles.forget_password}>
          رمز عبور را فراموش کرده اید؟
        </Link>
        <button className={styles.login_btn}>ورود با کد یکبار مصرف</button>
        <div className={styles.is_registerd_container}>
          <p className={styles.is_registerd}>آیا حساب کاربری ندارید؟</p>
        </div>

        <button onClick={GoToRegisterForm} className={styles.register_btn}>
          ثبت نام
        </button>
      </main>
      <Link href="#" className={styles.forget_password}>
        لغو
      </Link>
    </>
  ) : (
    <Sms />
  );
}

export default Login;
