import PanelUserLayout from "@/components/layouts/PanelUserLayout";
import PanelBox from "@/components/templates/p-admin/PanelBox";
import React from "react";

function Index() {
  return (
    <PanelUserLayout>
      <div className="grid grid-cols-3 gap-4 mt-10 mr-10">
        <PanelBox boxNumber="20" boxTitle="مجموع تیکت ها" />
        <PanelBox boxNumber="0" boxTitle="مجموع کامنت ها" />
        <PanelBox boxNumber="2" boxTitle="مجموع سفارشات" />
        <PanelBox boxNumber="10" boxTitle="مجموع علاقه مندی ها" />
      </div>
    </PanelUserLayout>
  );
}

export default Index;
