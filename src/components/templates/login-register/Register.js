"use client";
import React, { useState } from "react";

import styles from "./register.module.css";
import Link from "next/link";
import { ShowSwl } from "@/utils/Helper";

function Register({ GoToLoginForm }) {
  const [isLoginPass, setIsLoginPass] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerWithPassFunc = () => {
    if (isLoginPass) {
      signUpFunc();
    } else {
      setIsLoginPass(true);
    }
  };

  const signUpFunc = async () => {
    if (!name.trim()) {
      console.log("Name is required");
      ShowSwl("نام را وارد کنید", "error", "باشه");
      return;
    }

    if (!phone.trim()) {
      console.log("Phone is required");
      ShowSwl("شماره موبایل را وارد کنید", "error", "باشه");
      return;
    }

    if (!email.trim()) {
      console.log("Email is required");
      ShowSwl("ایمیل را وارد کنید", "error", "باشه");
      return;
    }

    if (!password.trim()) {
      console.log("Password is required");
      ShowSwl("رمز عبور را وارد کنید", "error", "باشه");
      return;
    }

    const user = { name, phone, email, password };
    const res = await fetch("/api/auth/signup", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(user),
    });

    console.log("res: ", res);

    if (res.status === 201) {
      console.log("User created successfully");
      ShowSwl("کاربر با موفقیت ایجاد شد", "success", "باشه");
    } else if (res.status === 422) {
      ShowSwl("کاربر قبلا ثبت نام کرده است", "error", "باشه");
    }
  };

  return (
    <>
      <main className={styles.login_container}>
        <input
          onChange={(e) => setName(e.target.value)}
          className={styles.input_style}
          type="text"
          placeholder="نام"
        />
        <input
          onChange={(e) => setPhone(e.target.value)}
          className={styles.input_style}
          type="phone"
          placeholder="شماره موبایل"
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input_style}
          type="phone"
          placeholder="ایمیل (دلخواه)"
        />
        {isLoginPass && (
          <input
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input_style}
            type="phone"
            placeholder="رمز عبور"
          />
        )}
        {!isLoginPass && (
          <button className={styles.login_btn}>ثبت نام با کد تایید</button>
        )}
        <button onClick={registerWithPassFunc} className={styles.login_pass}>
          ثیت نام با رمز عبور
        </button>
        <Link
          onClick={GoToLoginForm}
          href="#"
          className={styles.forget_password}
        >
          برگشت به ورود
        </Link>
      </main>
      <Link href="#" className={styles.cancel}>
        لغو
      </Link>
    </>
  );
}

export default Register;
