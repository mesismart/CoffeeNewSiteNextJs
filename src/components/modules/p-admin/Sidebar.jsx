"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  ShoppingBasket,
  MessageSquareMore,
  MessagesSquare,
  HeartPlus,
  ReceiptText,
} from "lucide-react"; // icons

const menuItems = [
  { title: "پیشخوان", icon: <LayoutDashboard size={20} />, href: "/p-admin" },
  {
    title: "سفارش ها",
    icon: <ShoppingBasket size={20} />,
    href: "/p-admin/users",
  },
  {
    title: "تیکت های پشتیبانی",
    icon: <MessageSquareMore size={20} />,
    href: "/p-admin/settings",
  },
  {
    title: "کامنت ها",
    icon: <MessagesSquare size={20} />,
    href: "/p-admin/comments",
  },
  {
    title: "علاقه مندی",
    icon: <HeartPlus size={20} />,
    href: "/p-admin/wishlist",
  },
  {
    title: "جزئیات اکانت",
    icon: <ReceiptText size={20} />,
    href: "/p-admin/account",
  },
];

function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="h-full w-96 bg-red-950">
      <div className="h-16 mx-4 border-b-[0.5px] text-white border-white flex justify-center items-center ">
        <h4>خوش آمدی جعفر عزیز </h4>
      </div>
      <div>
        <ul className="flex flex-col pt-10 text-white pr-8 gap-4">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`flex items-center gap-2 p-2 ml-4 rounded-lg hover:bg-gray-700 transition ${
                  pathname === item.href ? "bg-green-600" : ""
                }`}
              >
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
