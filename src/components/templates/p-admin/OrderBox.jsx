import { formatPrice } from "@/app/lib/utils/Helper";
import React from "react";

function OrderBox({
  title = "",
  ticketDate = "",
  price = "",
  status = "",
  imgURl = "",
}) {
  return (
    <div className="bg-white p-3 rounded-lg mb-2">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row">
          <img
            className="h-8 w-8 object-contain"
            src={imgURl}
            // src="https://set-coffee.com/wp-content/uploads/2022/12/setj-600x600.png"
            alt=""
          />
          <p className="font-semibold text-sm text-gray-800">{title}</p>
        </div>
        <p className="font-semibold text-sm text-gray-500">{ticketDate}</p>
      </div>
      <div className="flex flex-row justify-between mt-2">
        <p className="font-medium text-sm text-gray-600">{status}</p>

        <p className="font-bold text-sm text-gray-900">
          {formatPrice(price)} تومان
        </p>
      </div>
    </div>
  );
}

export default OrderBox;
