"use client";

import React, { useState } from "react";

import styles from "@/styles/login-register.module.css";
import Login from "@/components/templates/login-register/Login";
import Register from "@/components/templates/login-register/Register";
import { authType } from "@/app/lib/utils/Constants";

function Login_register() {
  const [currentAuth, setCurrentAuth] = useState(authType.REGISTER);

  const GoToLoginForm = () => {
    console.log("GoToLoginForm");
    setCurrentAuth(authType.LOGIN);
  };
  const GoToRegisterForm = () => {
    console.log("GoToRegisterForm");
    setCurrentAuth(authType.REGISTER);
  };

  return (
    <main className={styles.login_register}>
      <div className={styles.left_part}>
        {currentAuth === authType.LOGIN ? (
          <Login GoToRegisterForm={GoToRegisterForm} />
        ) : (
          <Register GoToLoginForm={GoToLoginForm} />
        )}
      </div>
      <div className={styles.right_part}></div>
    </main>
  );
}
export default Login_register;
