import InputField from "@/components/ui/InputField";
import Footer from "@/components/modules/footer/Footer";
import Navbar from "@/components/modules/navbar/Navbar";
import Banner from "@/components/templates/index/banner/Banner";
import Link from "next/link";
import React from "react";
import { FaCoffee, FaTelegram } from "react-icons/fa";
import { FaInternetExplorer } from "react-icons/fa";
import { FaRegAddressBook } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

function ContactUs() {
  let user = null;
  return (
    <main className="w-full h-full">
      <div className="flex h-[350] w-full justify-center items-center bg-cover bg-center bg-[url('https://set-coffee.com/wp-content/uploads/2022/06/back1.jpg')]">
        <Navbar isLogin={user} isFixed={true} />
        <span className="text-[70px] mt-28">تماس با ما</span>
      </div>
      <div className="flex w-full p-24 justify-center items-center text-black">
        <div className="flex flex-col  w-[50%] pl-20 text-right">
          <p className="text-gray-400 mb-3 text-[14px]">فرم تماس با ما</p>
          <p className="text-2xl mb-10">
            برای تماس با ما می توانید فرم زیر را تکمیل کنید
          </p>
          <div className="flex justify-between ">
            <div className=" w-[49%]">
              <InputField txtTitle="آدرس ایمیل" />
            </div>
            <div className=" w-[49%]">
              <InputField txtTitle="نام و نام خانوادگی" />
            </div>
          </div>
          <div className="flex justify-between mt-3">
            <div className=" w-[49%]">
              <InputField txtTitle="نام شرکت" />
            </div>
            <div className=" w-[49%] ">
              <InputField txtTitle="شماره تماس" />
            </div>
          </div>
          <div className=" mt-3">
            <div className="">
              <InputField txtTitle="درخواست شما" height="h-24" />
            </div>
          </div>
          <div className="mt-3">
            <button className="bg-[#34180E] text-white w-[100%] h-[40px] hover:bg-[#459647] transition diuration-600">
              ارسال
            </button>
          </div>
        </div>
        <div className="flex flex-col w-[50%] pr-10  text-right border-r-[1px] border-gray-200">
          <p className="text-gray-400 mb-3 text-[14px]">تماس با ما</p>
          <p className="text-2xl">اطلاعات تماس</p>
          <Link className="flex justify-end items-center mt-5" href="/">
            <p className="text-gray-400 text-[14px]">
              شرکت فنجان داغ خوارزمی (کارخانه قهوه ست )
            </p>
            <FaCoffee className="text-[40px] ml-2 text-gray-500" />
          </Link>
          <Link className="flex justify-end items-center mt-5" href="/">
            <p className="text-gray-400 text-[14px]">set-coffee.com </p>
            <FaInternetExplorer className="text-[30px] ml-4 text-gray-500" />
          </Link>
          <Link className="flex justify-end items-center mt-5" href="/">
            <p className="text-gray-400 text-[14px]">
              تهران. پاکدشت . شهرک صنعتی خوارزمی. فاز 2 . بلوار بهارستان. خیابان
              ماگنولیا بلوک{" "}
            </p>
            <FaRegAddressBook className="text-[30px] ml-4 text-gray-500" />
          </Link>
          <Link className="flex justify-end items-center mt-5" href="/">
            <p className="text-gray-400 text-[14px]">021-36479228</p>
            <FaPhone className="text-[30px] ml-4 text-gray-500" />
          </Link>
          <Link className="flex justify-end items-center mt-5" href="/">
            <p className="text-gray-400 text-[14px]">
              coffee[at]set-coffee.com
            </p>
            <FaEnvelopeOpenText className="text-[30px] ml-4 text-gray-500" />
          </Link>
          <Link className="flex justify-end items-center mt-5" href="/">
            <p className="text-gray-400 text-[14px]">
              coffee[at]set-coffee.com
            </p>
            <FaEnvelopeOpenText className="text-[30px] ml-4 text-gray-500" />
          </Link>
          <Link className="flex justify-end items-center mt-5" href="/">
            <p className="text-gray-400 text-[14px]">
              تماس با مدیریت از طریق واتساپ و یا تلگرام : 09366726563
            </p>
            <FaTelegramPlane className="text-[30px] ml-4 text-gray-500" />
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default ContactUs;
