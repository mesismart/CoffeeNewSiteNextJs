"use client";

import React from "react";

function InputField({
  txtTitle,
  height = "h-10",
  isMultiLine = false,
  isRequired = false,
  classNameMain = null,
  classNameInput = null,
  onchange = () => {},
  value = "",
}) {
  return (
    <div className={classNameMain}>
      <p className="text-gray-500 mb-2 text-sm">
        {txtTitle}{" "}
        {isRequired ? <span className="text-red-500">*</span> : null}{" "}
      </p>
      {isMultiLine ? (
        <textarea
          value={value}
          onChange={onchange}
          className={`w-[100%] ${height} ${classNameInput} px-2 py-2 text-right text-xs bg-white border rounded-[3px] border-solid border-gray-800 focus:border-gray-300 focus:outline-none`}
        ></textarea>
      ) : (
        <input
          value={value}
          onChange={onchange}
          className={`w-[100%] ${height} ${classNameInput} px-2 py-2 text-right text-xs bg-white border rounded-[3px] border-solid border-gray-800 focus:border-gray-300 focus:outline-none`}
          type="text"
        />
      )}
    </div>
  );
}

export default InputField;
