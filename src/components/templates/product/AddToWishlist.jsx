"use client";

import React, { useEffect, useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { ShowSwl } from "@/utils/Helper";

function AddToWishlist(productId) {
  const [user, setUser] = useState({});

  const authUser = async () => {
    const response = await fetch("/api/auth/me");
    console.log("authUser");
    if (response.status == 200) {
      const data = await response.json();
      console.log("data-me: ", data);
      setUser(data.user);
    } else {
      ShowSwl("لطفا لاگین کنید", "error", "باشه");
    }
  };

  useEffect(() => {
    console.log("AddToWishlist mounted");

    authUser();
  }, []);

  const addToWishlist = async () => {
    console.log("addToWishlist");
    console.log("user: ", user);
    console.log("productId", productId);

    const response = await fetch("/api/wishlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: user._id,
        product: productId.productId,
      }),
    });
    console.log("response: ", response);
    if (response.status == 201) {
      ShowSwl("محصول به علاقه مندی ها اضافه شد", "success", "باشه").then(() => {
        window.location.href = "/wishlist";
      });
      //go to wishlist page
    } else if (response.status == 500) {
      ShowSwl("خطا در اضافه کردن محصول به علاقه مندی ها", "error", "باشه");
    } else if (response.status == 409) {
      //after click ok go to wishlist page
      console.log("product already in wishlist");

      ShowSwl(
        "این محصول قبلا به علاقه مندی های شما اضافه شده است",
        "warning",
        "باشه"
      ).then(() => {
        window.location.href = "/wishlist";
      });
    } else {
      ShowSwl("لطفا لاگین کنید", "error", "باشه");
    }
  };
  return (
    <div className="flex items-center justify-start">
      <button
        onClick={addToWishlist}
        className="flex text-sm font-bold mr-1 hover:text-gray-500"
      >
        <IoMdHeartEmpty className="text-xl ml-1" />
        افزودن به علاقه مندی
      </button>
    </div>
  );
}

export default AddToWishlist;
