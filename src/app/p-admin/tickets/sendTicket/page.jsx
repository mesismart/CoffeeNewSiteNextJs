import PanelUserLayout from "@/components/layouts/PanelUserLayout";
import DropDown from "@/components/ui/DropDown";

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
          {/* <div className="flex flex-col w-full bg-grey-100 gap-1 mt-4">
            <label className="text-sm font-bold px-4 ">نام کاربری</label>
            <div className="border-red-900 border-2 rounded-md px-4 py-2 ">
              <select
                defaultValue=""
                className="outline-none border-0 bg-transparent w-full"
              >
                <option value="" disabled>
                  دپارتمان خود را انتخاب کنید
                </option>
                <option value="support">پشتیبانی</option>
                <option value="sales">فروش</option>
                <option value="billing">حسابداری</option>
              </select>
            </div>
          </div> */}

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

          <div className="flex flex-col w-full bg-grey-100 gap-1 mt-4">
            <label className="text-sm font-bold px-4 ">
              دپارتمان خود را انتخاب کنید
            </label>
            <div className="border-red-900 border-2 rounded-md px-4 py-2 ">
              <select
                defaultValue=""
                className="outline-none border-0 bg-transparent w-full"
              >
                <option value="" disabled>
                  دپارتمان خود را انتخاب کنید
                </option>
                <option value="support">پشتیبانی</option>
                <option value="sales">فروش</option>
                <option value="billing">حسابداری</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </PanelUserLayout>
  );
}
