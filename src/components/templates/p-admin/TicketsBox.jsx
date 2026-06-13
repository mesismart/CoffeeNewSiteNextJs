"use client";

import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import TicketBox from "./TicketBox";
import { getTickets } from "@/app/lib/services/ticket.service";

export default function TicketsBox({ leftTitle = "", rightTitle = "" }) {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const loadTicket = async () => {
      try {
        const data = await getTickets();
        setTickets(data);
        console.log("Tickets:", data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    loadTicket();
  }, []);

  if (error) return <p>خطا در دریافت اطلاعات</p>;
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
        {loading && (
          <p className="text-center text-sm">درحال دریافت اطلاعات...</p>
        )}
        {!loading && error && (
          <p className="text-center text-sm text-red-600">{error}</p>
        )}

        {!loading &&
          !error &&
          tickets.map((ticket) => <TicketBox key={ticket.id} {...ticket} />)}
      </div>
    </div>
  );
}
