"use client";
import InputField from "@/components/common/InputField";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { ShowSwl } from "@/app/lib/utils/Helper";
import { IoMdStar } from "react-icons/io";
import StarRatingInput from "./StarRatingInput";

function ReviewForm({ productId, onAddComment }) {
  const [txtBody, setTxtBody] = useState("");

  const [txtName, setTxtName] = useState("");
  const [txtEmail, setTxtEmail] = useState("");
  const [txtScore, setTxtScore] = useState(5);
  const [isChecked, setIsChecked] = useState(false);

  const handleScore = (score) => {
    console.log("score: ", score);
    setTxtScore(score);
  };

  const handleSubmit = async (e) => {
    console.log("txtBody: ", txtBody);

    // if (!txtBody.trim()) {
    //   console.log("txtBody is required");
    //   ShowSwl("متن  را وارد کنید", "error", "باشه");
    //   return;
    // }

    if (!txtName.trim()) {
      console.log("txtName is required");
      ShowSwl("نام  را وارد کنید", "error", "باشه");
      return;
    }

    if (!txtEmail.trim()) {
      console.log("txtEmail is required");
      ShowSwl("ایمیل  را وارد کنید", "error", "باشه");
      return;
    }
    const comment = {
      bodytxt: txtBody,
      username: txtName,
      email: txtEmail,
      score: txtScore,
      productId: productId,
    };

    console.log("comment: ", comment);
    const response = await fetch("/api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comment),
    });

    const data = await response.json();
    console.log("data: ", data);

    if (response.ok) {
      ShowSwl("نظر شما با موفقیت ثبت شد", "success", "باشه");
      setTxtBody("");
      setTxtName("");
      setTxtEmail("");
      setTxtScore(0);
      setIsChecked(false);

      if (onAddComment) {
        onAddComment(data.Comment);
      }
    }
  };

  return (
    <div className="bg-white text-black p-5 rounded-md">
      <p className="mb-5">
        نشانی ایمیل شما منتشر نخواهد شد. بخش‌های موردنیاز علامت‌گذاری شده‌اند{" "}
        <span className="text-red-500">*</span>
      </p>
      <div className="flex mb-4 gap-2">
        <label>
          امتیاز شما <span className="text-red-500">*</span> :
        </label>
        <div className="flex items-center text-yellow-500 py-1">
          <StarRatingInput onScoreChange={handleScore} />
        </div>
      </div>
      <InputField
        onchange={(e) => {
          setTxtBody(e.target.value);
        }}
        classNameMain="mt-3"
        type="text"
        txtTitle={"دیدگاه شما"}
        height="h-32"
        isMultiLine={true}
        isRequired={true}
        value={txtBody}
      ></InputField>

      <InputField
        onchange={(e) => {
          setTxtName(e.target.value);
        }}
        classNameMain="mt-3"
        type="text"
        txtTitle={"نام"}
        isRequired={true}
        value={txtName}
      ></InputField>

      <InputField
        onchange={(e) => {
          setTxtEmail(e.target.value);
        }}
        classNameMain="mt-3"
        type="text"
        txtTitle={"ایمیل"}
        isRequired={true}
        value={txtEmail}
      ></InputField>

      <div className="flex my-4">
        <input
          className="dark:focus:ring-blue-600 dark:ring-offset-green-400 accent-purple-500/25 border ml-2 bg-white text-black"
          type="checkbox"
          value={"yes"}
        ></input>

        <p className="text-sm text-gray-700">
          ذخیره نام، ایمیل و وبسایت من در مرورگر برای زمانی که دوباره دیدگاهی
          می‌نویسم.
        </p>
      </div>
      <button
        onClick={handleSubmit}
        className="bg-[rgb(0,137,121)] text-white px-4 py-2  text-sm hover:bg-[rgb(113,29,28)] "
      >
        ثبت
      </button>
    </div>
  );
}

export default ReviewForm;
