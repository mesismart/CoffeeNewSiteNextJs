export const signUp = async (userData) => {
  const { name, phone, email, password } = userData;

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
    return { status: 201, message: "کاربر با موفقیت ایجاد شد" };
  } else if (res.status === 422) {
    return { status: 422, message: "کاربر قبلا ثبت نام کرده است" };
  }

  return { status: res.status, message: "خطای نامشخص" };
};

export const signIn = async (user) => {
  const res = await fetch("/api/auth/signIn", {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify(user),
  });

  console.log("res: ", res);
  if (res.status === 200) {
    return { status: 200, message: "ورود موفقیت آمیز بود" };
  }
  if (res.status == 401) {
    return { status: 401, message: "رمز عبور اشتباه است" };
  }
  if (res.status == 404) {
    return { status: 404, message: "کاربر یافت نشد" };
  }
  return { status: res.status, message: "خطای نامشخص" };
};
