"use client";
import PanelUserLayout from "@/components/layouts/PanelUserLayout";
import { useEffect, useState } from "react";
import { getComments } from "@/services/comment.service";
import swal from "sweetalert";
import { deleteComment } from "@/services/comment.service";
import { DataGrid } from "@mui/x-data-grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: { main: "#b91c1c" },
  },
});

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

  const columns = [
    { field: "date", headerName: "تاریخ", flex: 1, minWidth: 130 },
    { field: "product", headerName: "محصول", flex: 1, minWidth: 150 },
    { field: "content", headerName: "کامنت", flex: 2, minWidth: 250 },
    {
      field: "score",
      headerName: "امتیاز",
      type: "number",
      flex: 0.8,
      minWidth: 100,
    },
    { field: "status", headerName: "وضعیت", flex: 1, minWidth: 130 },
    {
      field: "actions",
      headerName: "عملیات",
      sortable: false,
      filterable: false,
      flex: 1,
      minWidth: 170,
      renderCell: (params) => (
        <div className="flex justify-center gap-2 w-full">
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={() => {}}
          >
            ویرایش
          </Button>
          <Button
            variant="contained"
            color="error"
            size="small"
            onClick={() => handleDeleteComment(params.row.id)}
          >
            حذف
          </Button>
        </div>
      ),
    },
  ];

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

      <ThemeProvider theme={theme}>
        <Box className="mt-8 mx-7 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
          <DataGrid
            autoHeight
            rows={filteredComments}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[5, 10, 20]}
            disableSelectionOnClick
            loading={loading}
            getRowId={(row) => row.id}
            sx={{
              border: 0,
              "& .MuiDataGrid-columnHeaders": {
                backgroundColor: "#f8fafc",
                borderBottom: "1px solid rgba(226,232,240,1)",
              },
              "& .MuiDataGrid-cell": {
                borderBottom: "1px solid rgba(226,232,240,1)",
              },
            }}
          />
        </Box>
      </ThemeProvider>
    </PanelUserLayout>
  );
}
