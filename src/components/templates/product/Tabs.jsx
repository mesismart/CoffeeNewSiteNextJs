"use client";

import React, { useState } from "react";
import Description from "@/components/templates/product/Description";
import MoreInfo from "@/components/templates/product/MoreInfo";
import Reviews from "@/components/templates/product/Reviews";

function Tabs({ product }) {
  const [tabState, SetTabState] = useState(1);
  console.log("product-->", product);

  const GetCommentCount = () => {
    return product.comments.filter((comment) => comment.isAccepted).length;
  };

  return (
    <div>
      <div dir="rtl" className="flex justify-center py-5 gap-16">
        <div
          className={`justify-center font-bold ${
            tabState === 1 ? "text-black" : "text-gray-500"
          } hover:text-black`}
        >
          <button onClick={() => SetTabState(1)}>توضیحات</button>
        </div>
        <div
          className={`justify-center font-bold ${
            tabState === 2 ? "text-black" : "text-gray-500"
          } hover:text-black`}
        >
          <button onClick={() => SetTabState(2)}>اطلاعات بیشتر</button>
        </div>
        <div
          className={`justify-center font-bold ${
            tabState === 3 ? "text-black" : "text-gray-500"
          } hover:text-black`}
        >
          <button onClick={() => SetTabState(3)}>
            نظرات ({GetCommentCount()})
          </button>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-[82%] h-4  border-b-2  "></div>
      </div>
      <div className=" px-36 mb-10">
        {tabState === 1 && <Description />}
        {tabState === 2 && <MoreInfo />}
        {tabState === 3 && (
          <Reviews
            product={product}
            comments={JSON.parse(JSON.stringify(product.comments))}
          />
        )}
      </div>
    </div>
  );
}

export default Tabs;
