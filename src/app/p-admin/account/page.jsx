import PanelUserLayout from "@/components/layouts/PanelUserLayout";

export default function Account() {
  return (
    <PanelUserLayout>
      <div className="flex items-center gap-4 mt-4">
        <hr className="flex-1 border-t-2 border-red-900" />
        <h1 className="whitespace-nowrap m-0 text-2xl font-bold">
          جزئیات اکانت
        </h1>
        <hr className="flex-[12] border-t-2 border-red-900" />
      </div>
      {/* ------------------------------------------ */}
      <div className="flex gap-4 mt-4">
        <div className="flex-1 px-4">
          {" "}
          <div className="flex flex-col bg-grey-100 gap-1 mt-4">
            <label className="text-sm font-bold px-4 ">نام کاربری</label>
            <div className="border-red-900 border-2 rounded-md px-4 py-2 ">
              <input
                placeholder="لطفا نام کاربری خود را وارد کنید "
                className="outline-none border-0 align-right w-full"
              />
            </div>
          </div>
          <div className="flex flex-col bg-grey-100 gap-1 mt-4">
            <label className="text-sm font-bold px-4 ">ایمیل</label>
            <div className="border-red-900 border-2 rounded-md px-4 py-2 ">
              <input
                placeholder="لطفا ایمیل خود را وارد کنید "
                className="outline-none border-0 align-right w-full"
              />
            </div>
          </div>
          <div className="flex flex-col bg-grey-100 gap-1 mt-4">
            <label className="text-sm font-bold px-4 ">شماره تماس</label>
            <div className="border-red-900 border-2 rounded-md px-4 py-2 ">
              <input
                placeholder="لطفا شماره تماس خود را وارد کنید "
                className="outline-none border-0 align-right w-full"
              />
            </div>
          </div>
        </div>
        <div className="flex-1 px-4">
          <div></div>
          <div className="flex flex-col bg-grey-100 gap-1 mt-4">
            <label className="text-sm font-bold px-4 ">رمز عبور</label>
            <div className="flex gap-2 items-stretch">
              <div className="flex-1 border-red-900 border-2 rounded-md px-4 py-2 ">
                <input
                  placeholder="لطفا رمز عبور خود را وارد کنید "
                  className="outline-none border-0 align-right w-full"
                />
              </div>
              <button className="bg-red-900  text-white px-4 py-2 rounded-md whitespace-nowrap">
                تغییر رمز عبور
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-4 mt-20">
        <button className="bg-red-900 w-60 text-white px-4 py-2 rounded-md">
          ثبت تغییرات
        </button>
      </div>
      <div></div>
    </PanelUserLayout>
  );
}
