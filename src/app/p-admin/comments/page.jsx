import PanelUserLayout from "@/components/layouts/PanelUserLayout";
import React from "react";

const comments = [
  {
    id: 1,
    date: "2024-06-01",
    product: "محصول نمونه",
    content: "این یک کامنت نمونه است.",
    score: 4,
    status: "تایید شده",
  },
  {
    id: 2,
    date: "2024-06-02",
    product: "محصول دوم",
    content: "این یک کامنت دوم است.",
    score: 5,
    status: "تایید شده",
  },
];

export default function Comments() {
  return (
    <PanelUserLayout>
      <div className="flex items-center gap-4 mt-4">
        <hr className="flex-1 border-t-2 border-red-900" />
        <h1 className="whitespace-nowrap m-0 text-2xl font-bold">
          لیست کامنت ها
        </h1>
        <hr className="flex-[12] border-t-2 border-red-900" />
      </div>

      <div className="mt-8 mx-7 overflow-x-auto rounded-lg border border-gray-200 bg-white shadow-sm">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-50 text-right text-xs uppercase tracking-wide text-gray-600 border-b-2 border-gray-300">
            <tr>
              <th className="px-4 text-right py-3  border-r border-gray-300">
                تاریخ
              </th>
              <th className="px-4 py-3 text-right border-r border-gray-300">
                محصول
              </th>
              <th className="px-4 py-3 text-right border-r border-gray-300">
                کامنت
              </th>
              <th className="px-4 py-3 text-right border-r border-gray-300">
                امتیاز
              </th>
              <th className="px-4 py-3 text-right border-r border-gray-300">
                وضعیت
              </th>
              <th className="px-4 py-3 text-right border-r border-gray-300">
                عملیات
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {comments.map((comment) => (
              <tr key={comment.id} className="hover:bg-gray-50">
                <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-300">
                  {comment.date}
                </td>
                <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-300">
                  {comment.product}
                </td>
                <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-300">
                  {comment.content}
                </td>
                <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-300">
                  {comment.score}
                </td>
                <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-300">
                  {comment.status}
                </td>
                <td className="px-4 py-4 text-sm text-right border-r border-gray-300 flex justify-center gap-5">
                  <button
                    type="button"
                    className="rounded-md bg-blue-600 px-3 py-1 text-white transition hover:bg-blue-700"
                  >
                    ویرایش
                  </button>
                  <button
                    type="button"
                    className="rounded-md bg-red-600 px-3 py-1 text-white transition hover:bg-red-700"
                  >
                    حذف
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PanelUserLayout>
  );
}
