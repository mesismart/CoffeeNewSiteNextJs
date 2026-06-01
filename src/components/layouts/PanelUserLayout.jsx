import React from "react";
import { redirect } from "next/navigation";
import Toolbar from "../modules/p-admin/Toolbar";
import Sidebar from "../modules/p-admin/Sidebar";

export default function PanelUserLayout({ children }) {
  // check Auth user in there

  // const user = await authUser();
  // if (!user) {
  //   redirect("/login-register");
  // }

  return (
    <div dir="rtl" className="bg-white w-screen h-full text-black ">
      <section className="flex w-full h-screen">
        <Sidebar></Sidebar>
        <div className="w-full ">
          <Toolbar></Toolbar>
          {children}
        </div>
      </section>
    </div>
  );
}
