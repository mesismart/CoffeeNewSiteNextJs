import Footer from "@/components/modules/footer/Footer";
import Navbar from "@/components/modules/navbar/Navbar";
import Product from "@/components/modules/product/Product";
import Titlebar from "@/components/modules/titlebar/Titlebar";
import WishlistItem from "@/components/templates/wishlist/WishlistItem";
import React from "react";
import connectToDB from "../lib/configs/db";

import wishlishModel from "../lib/models/Wishlist";

async function Wishlist() {
  connectToDB();

  const wishlist = await wishlishModel
    .find({})
    .populate("product")
    .populate("user")
    .sort({ createdAt: -1 });

  // console.log("wishlist:==> ", wishlist);

  return (
    <main dir="rlt">
      <Navbar isFixed={true} />
      <Titlebar title={"علاقه مندی ها"} />
      {/* <div className="flex justify-center items-center h-[80vh]">
        <h1 className="text-4xl font-semibold text-gray-700">
          در حال حاضر هیچ محصولی در لیست علاقه مندی های شما وجود ندارد
        </h1>
      </div> */}
      <div className="min-h-[80vh] mx-28 my-10">
        <div className="flex justify-end border-b border-gray-200 pb-2">
          <h2 className="text-gray-800 font-bold text-lg">
            محصولات مورد علاقه شما
          </h2>
        </div>
        <div
          dir="rtl"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3 mt-6  "
        >
          {wishlist.map((item) => (
            <WishlistItem
              key={item._id}
              productId={item._id.toString()}
              name={item.product.name}
              price={item.product.price}
              score={item.product.score}
            />
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default Wishlist;
