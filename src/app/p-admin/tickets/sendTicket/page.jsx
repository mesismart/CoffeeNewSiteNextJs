import PanelUserLayout from "@/components/layouts/PanelUserLayout";
import DropDown from "@/components/ui/DropDown";
import InputField from "@/components/ui/InputField";

export default function SendTicket() {
  return (
    <PanelUserLayout>
      <div className="flex items-center gap-4 mt-4">
        <hr className="flex-1 border-t-2 border-red-900" />
        <h1 className="whitespace-nowrap m-0 text-2xl font-bold">
          ارسال تیکت جدید
        </h1>
        <hr className="flex-[12] border-t-2 border-red-900" />
      </div>

      <div className=" gap-4 mt-4 w-full">
        <div className="flex px-4  mt-4 justify-between gap-4">
          <DropDown
            label="دپارتمان خود را انتخاب کنید"
            options={[
              { value: "support", label: "پشتیبانی" },
              { value: "sales", label: "فروش" },
              { value: "billing", label: "حسابداری" },
            ]}
            selectedOption=""
            isRequired={true}
          />

          <DropDown
            label="نوع تیکت خود را انتخاب کنید"
            options={[
              { value: "question", label: "سوال" },
              { value: "problem", label: "مشکل" },
              { value: "feature", label: "ویژگی" },
            ]}
            selectedOption=""
          />
        </div>
      </div>

      <div className=" gap-4 mt-4 w-full">
        <div className="flex px-4  mt-4 justify-between  gap-4">
          <InputField
            classNameMain="mt-3 w-full"
            classNameInput="w-full h-11 border-2 rounded-md px-4 py-2 border-red-900 focus:border-red-900"
            type="text"
            txtTitle={"عنوان تیکت خود را وارد کنید"}
            isRequired={true}
            value={""}
          ></InputField>

          <DropDown
            label="اولویت تیکت خود را انتخاب کنید"
            options={[
              { value: "low", label: "پایین" },
              { value: "medium", label: "متوسط" },
              { value: "high", label: "بالا" },
            ]}
            selectedOption=""
          />
        </div>
      </div>
    </PanelUserLayout>
  );
}
