"use client";
import PanelUserLayout from "@/components/layouts/PanelUserLayout";
import { useEffect, useState } from "react";
import { getComments } from "@/services/comment.service";
import swal from "sweetalert";
import { deleteComment } from "@/services/comment.service";
import { DataGrid, faIR } from "@mui/x-data-grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";

const theme = createTheme(
  {
    palette: {
      primary: { main: "#b91c1c" },
    },
  },
  faIR,
);

export default function Comments() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterText, setFilterText] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await getComments();
        setComments(response);
      } catch (error) {
        console.error("Failed to fetch comments:", error);
        setComments([]);
      } finally {
        setLoading(false);
      }
    };
    fetchComments();
  }, []);

  const filteredComments = comments.filter((comment) => {
    const search = filterText.toLowerCase();
    const textMatch =
      comment.product.toLowerCase().includes(search) ||
      comment.content.toLowerCase().includes(search) ||
      comment.id.toString().includes(search);

    const statusMatch = filterStatus ? comment.status === filterStatus : true;

    return textMatch && statusMatch;
  });

  const handleDeleteComment = async (commentId) => {
    // Implement delete comment logic here
    const willDelete = await swal({
      title: "حذف کامنت",
      text: "آیا مطمئن هستید که می‌خواهید این کامنت را حذف کنید؟",
      icon: "warning",
      dangerMode: true,
    });

    if (willDelete) {
      swal("حذف موفق", "کامنت حذف شد!", "success");
    }

    try {
      await deleteComment(commentId);
      setComments(comments.filter((comment) => comment.id !== commentId));
    } catch (error) {
      console.error("Failed to delete comment:", error);
    }
  };

  return (
    <PanelUserLayout>
      <div className="flex items-center gap-4 mt-4">
        <hr className="flex-1 border-t-2 border-red-900" />
        <h1 className="whitespace-nowrap m-0 text-2xl font-bold">
          لیست کامنت ها
        </h1>
        <hr className="flex-[12] border-t-2 border-red-900" />
      </div>

      <div className="mt-6 mx-7 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex-1">
          <input
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
            placeholder="جستجو بر اساس محصول یا کامنت"
            className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-red-900 focus:outline-none focus:ring-1 focus:ring-red-900"
          />
        </div>
        <div className="flex w-full max-w-xs items-center gap-3">
          <label className="text-sm text-gray-700">وضعیت:</label>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-red-900 focus:outline-none focus:ring-1 focus:ring-red-900"
          >
            <option value="">همه</option>
            <option value="pending">در انتظار</option>
            <option value="approved">تایید شده</option>
            <option value="rejected">رد شده</option>
          </select>
        </div>
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
            {filteredComments.map((comment) => (
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
                    onClick={() => {
                      // Handle delete action
                      handleDeleteComment(comment.id);
                    }}
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
