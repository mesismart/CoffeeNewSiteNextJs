import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import TicketBox from "./TicketBox";

const tickets = [
  {
    id: 1,
    imgURl:
      "https://set-coffee.com/wp-content/uploads/2022/12/setj-600x600.png",
    title: "قهوه عربیکا 80 درصد",
    ticketDate: "1404/05/02",
    status: "تکمیل",
    price: "5000000",
  },
  {
    id: 2,
    imgURl:
      "https://set-coffee.com/wp-content/uploads/2022/12/setj-600x600.png",
    title: "قهوه عربیکا 60 درصد",
    ticketDate: "1404/05/03",
    status: "در حال پردازش",
    price: "3200000",
  },
  {
    id: 3,
    imgURl:
      "https://set-coffee.com/wp-content/uploads/2022/12/setj-600x600.png",
    title: "قهوه روبوستا",
    ticketDate: "1404/05/04",
    status: "لغو شده",
    price: "210000000",
  },
];

export default function TicketsBox({ leftTitle = "", rightTitle = "" }) {
  return (
    <div className="flex-row w-1/2 bg-red-100 px-3 mx-2">
      <div className="flex justify-between  p-2">
        <h3 className="text-sm">{rightTitle}</h3>
        <div className="flex items-center">
          <h3 className="text-sm">{leftTitle}</h3>
          <FaArrowLeft className="mr-2" fontSize={15} />
        </div>
      </div>
      <div className="border-b-2 border-red-500"></div>
      <div className="py-3 ">
        {tickets.map((ticket) => (
          <TicketBox key={ticket.id} {...ticket} />
        ))}
      </div>
    </div>
  );
}
