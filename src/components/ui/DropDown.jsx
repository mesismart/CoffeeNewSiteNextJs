"use client";

import React from "react";

function DropDown({
  label,
  options,
  selectedOption,
  onSelect = () => {},
  isRequired = false,
}) {
  return (
    <div className="flex flex-col w-full bg-grey-100 gap-1 mt-4">
      <label className="text-sm font-bold px-4 ">
        {label}
        {isRequired ? <span className="text-red-500">*</span> : null}{" "}
      </label>
      <div className="border-red-900 border-2 rounded-md px-4 py-2 ">
        <select
          value={selectedOption}
          onChange={onSelect}
          className="outline-none border-0 bg-transparent w-full"
        >
          <option value="" disabled>
            یک گزینه را انتخاب کنید
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default DropDown;
