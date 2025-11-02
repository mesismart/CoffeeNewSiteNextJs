import React from "react";
import { IoStatsChart } from "react-icons/io5";

function PanelBox({ boxNumber = "", boxTitle = "" }) {
  return (
    <div className=" flex px-3 pt-3  w-56 justify-between h-20 border-red-900 border-2 rounded-md">
      <div>
        <h4 className="text-xs font-bold">{boxNumber}</h4>
        <h4 className="text-xs font-bold mt-2">{boxTitle}</h4>
        <div className="border-red-900 rounded-md border mt-1 ml-3"></div>
        <div className="border-red-900 border mt-1 ml-8"></div>
      </div>
      <div className="flex items-end mb-3">
        <IoStatsChart className="text-red-900  " size={35} />
      </div>
    </div>
  );
}

export default PanelBox;
