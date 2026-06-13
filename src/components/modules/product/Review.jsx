import React from "react";
import { FaStar } from "react-icons/fa";
import RateStar from "./RateStar";
import moment from "moment-jalaali";
import { toPersianDigits } from "@/app/lib/utils/Helper";

function Review({ bodytxt, date, email, score, username }) {
  console.log("bodytxt: ", bodytxt);
  const formattedDate = moment(date).format("jMMMM jYYYY jDD");

  return (
    <main>
      <div className="flex w-full pb-4 border-b  gap-2 items-center">
        <div className="">
          <img
            className="rounded-full ml-5 w-[60px] h-[60px]"
            src="https://secure.gravatar.com/avatar/c9463aebedcaa9a5e383b21d9871fe570c7c86f7ba69169360c9e66af0fbe48c?s=120&d=mm&r=g"
          ></img>
        </div>
        <div className=" w-full py-4">
          <div className=" flex  justify-between">
            <div className=" flex mb-3 me-3 items-center">
              <h3 className="font-semibold">{username}</h3>
              <h3 className="font-semibold"> - </h3>

              <p className="text-sm text-gray-500 italic">
                {toPersianDigits(formattedDate)}
              </p>
            </div>
            <div className="flex items-center text-yellow-500 py-1">
              <RateStar rating={score} />
            </div>
          </div>
          <div>
            <h3 className="text-gray-500 text-sm">{bodytxt}</h3>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Review;
