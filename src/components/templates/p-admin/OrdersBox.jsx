"use client";

import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import OrderBox from "./OrderBox";
import { getOrders } from "@/app/lib/services/order.service";

export default function OrdersBox({ leftTitle = "", rightTitle = "" }) {
  const [orders, setOrder] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadOrders = async () => {
      try {
        const data = await getOrders();
        setOrder(data);
        console.log("orders:", data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    loadOrders();
  }, []);

  return (
    <div className="flex-row w-1/2 bg-red-100 px-3 rounded-md mx-2">
      <div className="flex justify-between  p-2">
        <h3 className="text-sm">{rightTitle}</h3>
        <div className="flex items-center">
          <h3 className="text-sm">{leftTitle}</h3>
          <FaArrowLeft className="mr-2" fontSize={15} />
        </div>
      </div>
      <div className="border-b-2 border-red-500"></div>
      <div className="py-3 ">
        {orders.map((ticket) => (
          <OrderBox key={ticket.id} {...ticket} />
        ))}
      </div>
    </div>
  );
}
