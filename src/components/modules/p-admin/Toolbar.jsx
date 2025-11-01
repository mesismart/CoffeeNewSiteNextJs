"use client";
import React from "react";
import Image from "next/image";
import { Bell, Search } from "lucide-react"; // icons

function Toolbar() {
  const user = {
    name: "جعفر صادقی",
    avatar: "/images/shahin.jpg",
    rule: "ادمین",
  };

  return (
    <div className="flex justify-between items-center px-6 text-white w-full h-16 bg-black">
      <div className="flex">
        <div>
          <Image
            className=" rounded-full object-cover"
            src={user.avatar}
            alt={user.name}
            width={40}
            height={40}
          />
        </div>
        <div className="mr-3">
          <h4 className="text-gray-100 font-normal">{user.name}</h4>
          <h4 className=" text-gray-500 text-xs">{user.rule}</h4>
        </div>
      </div>
      <div className="flex gap-3">
        <div className="flex items-center px-1  bg-white rounded-full w-52 ">
          <input
            type="text"
            placeholder="جستجو"
            className="bg-transparent text-xs mr-2 outline-none w-full text-gray-700 placeholder-gray-400 "
          />
          <Search className="w-6 h-6 p-1 bg-red-950 rounded-full" />
        </div>
        <div
          className="bg-red-950 p-1 rounded-sm cursor-pointer"
          onClick={() => {
            console.log("hi");
          }}
        >
          <Bell
            className="text-gray-600 hover:text-white transition"
            size={20}
          />
        </div>
      </div>
    </div>
  );
}

export default Toolbar;
