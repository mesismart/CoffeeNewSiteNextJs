"use client";

import { useEffect, useState } from "react";
import PanelUserLayout from "@/components/layouts/PanelUserLayout";
import WishlistItem from "@/components/templates/p-admin/WishlistItem";

function WishlistPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const response = await fetch("http://localhost:4000/wishlist");
        console.log("Wishlist API response:", response);
        if (!response.ok) {
          throw new Error(`Failed to fetch wishlist: ${response.status}`);
        }
        const data = await response.json();
        console.log("Wishlist data:", data);
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

    console.log("Removing product with ID:", productId);

    try {
      let response = await fetch(
        `http://localhost:4000/wishlist/${productId}`,
        {
          method: "DELETE",
        },
      );

      if (response.status === 404) {
        response = await fetch("http://localhost:4000/wishlist", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: productId }),
        });
      }

      if (!response.ok) {
        throw new Error(
          `Failed to remove product from wishlist: ${response.status}`,
        );
      }

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
      <div className="flex items-center gap-4 mt-4">
        <hr className="flex-1 border-t-2 border-red-900" />
        <h1 className="whitespace-nowrap m-0 text-2xl font-bold">
          علاقه مندی ها
        </h1>
        <hr className="flex-[12] border-t-2 border-red-900" />
      </div>

      <div className="grid grid-cols-3 gap-4 mt-4">
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
