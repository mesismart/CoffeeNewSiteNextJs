"use client";

import Product from "@/components/modules/product/Product";
import { IoIosClose } from "react-icons/io";

export default function WishlistItem({ productId, name, price, score }) {
  console.log("WishlistItem props:", { productId, name, price, score }); // Log to check values

  //remove function
  const removeFromWishlist = async () => {
    console.log("removeFromWishlist called with productId:", productId);
    // Add logic to remove item from wishlist
    // This could be an API call to remove the item from the wishlist
    const response = await fetch(`/api/wishlist/${productId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      console.log("Item removed successfully");
      // Optionally, you can refresh the wishlist or update the UI
      window.location.reload(); // Reload the page to reflect changes
    } else {
      console.error("Failed to remove item from wishlist");
      // Handle error case, e.g., show an error message to the user
    }
    // For example, you might want to call an API endpoint to remove the item
  };

  return (
    <main className="w-14">
      <div className="flex">
        <IoIosClose size="32" color="#FF8A65" />
        <button
          onClick={() => {
            console.log("Remove from wishlist clicked , productId:", productId);
            // Add logic to remove item from wishlist
            removeFromWishlist(productId);
          }}
          className="text-red-500 text-sm"
        >
          حذف
        </button>
      </div>
      <Product
        product={{
          id: String(productId),
          name: String(name),
          price: Number(price),
          score: Number(score),
          image: "https://set-coffee.com/wp-content/uploads/2024/11/brazil.jpg",
        }}
      />
    </main>
  );
}
