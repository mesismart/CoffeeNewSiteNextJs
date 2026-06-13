"use client";

import { useEffect, useState } from "react";
import swal from "sweetalert";
import PanelUserLayout from "@/components/layouts/PanelUserLayout";
import WishlistItem from "@/components/templates/p-admin/WishlistItem";
import {
  getWishlist,
  deleteWishlistItem,
} from "@/app/lib/services/wishlist.service";

function WishlistPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const data = await getWishlist();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch wishlist:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchWishlist();
  }, []);

  const handleRemoveFromWishlist = async (productOrId) => {
    const productId =
      typeof productOrId === "object"
        ? (productOrId._id ?? productOrId.id)
        : productOrId;

    const willDelete = await swal({
      title: "حذف از علاقه مندی ها",
      text: "آیا مطمئن هستید که می‌خواهید این محصول را از علاقه‌مندی‌ها حذف کنید؟",
      icon: "warning",
      dangerMode: true,
    });

    if (willDelete) {
      swal("حذف موفق", "محصول از علاقه‌مندی‌ها حذف شد!", "success");
    }

    console.log("Removing product with ID:", productId);

    try {
      await deleteWishlistItem(productId);

      setProducts(
        products.filter(
          (product) => String(product.id ?? product._id) !== String(productId),
        ),
      );
    } catch (error) {
      console.error("Failed to remove product from wishlist:", error);
    }
  };

  return (
    <PanelUserLayout>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <hr className="w-full sm:flex-1 border-t-2 border-red-900" />
        <h1 className="whitespace-nowrap m-0 text-2xl font-bold text-center sm:text-left">
          علاقه مندی ها
        </h1>
        <hr className="w-full sm:flex-[12] border-t-2 border-red-900" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {loading ? (
          <p className="text-gray-600">در حال بارگذاری...</p>
        ) : products.length === 0 ? (
          <p className="text-gray-600">
            شما هیچ محصولی را به علاقه مندی ها اضافه نکرده اید.
          </p>
        ) : (
          products.map((product, index) => (
            <WishlistItem
              key={product.id ?? product._id ?? index}
              product={product}
              onRemove={handleRemoveFromWishlist}
            />
          ))
        )}
      </div>
    </PanelUserLayout>
  );
}

export default WishlistPage;
