import React from "react";

function Titlebar({ title }) {
  return (
    <div
      className="flex w-full min-h-80 bg-cover bg-center justify-center"
      style={{
        backgroundImage:
          "url('https://set-coffee.com/wp-content/uploads/2022/06/back1.jpg')",
      }}
    >
      <div className="  text-white content-center items-center mt-16">
        <h3 className="font-semibold text-6xl">{title}</h3>
      </div>
    </div>
  );
}

export default Titlebar;
