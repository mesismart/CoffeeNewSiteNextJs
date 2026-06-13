import { formatPrice } from "@/app/lib/utils/Helper";
import React from "react";

function TicketBox({ title = "", ticketDate = "", status = "", vahed = "" }) {
  return (
    <div className="bg-red-900 text-gray-100  p-3 rounded-lg mb-2">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row">
          <p className=" text-sm ">{title}</p>
        </div>
        <p className=" text-sm ">{ticketDate}</p>
      </div>
      <div className="flex flex-row justify-between mt-2">
        <p className="font-medium text-sm bg-gray-100 text-red-900 p-2 rounded-md">
          {vahed}
        </p>

        <p className=" text-sm ">{status}</p>
      </div>
    </div>
  );
}

export default TicketBox;
