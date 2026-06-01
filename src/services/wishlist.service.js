// Get all wishlist items
export const getWishlist = async () => {
  try {
    const response = await fetch("http://localhost:4000/wishlist", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch wishlist");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching wishlist:", error);
    throw error;
  }
};

// Delete wishlist item by ID
export const deleteWishlistItem = async (itemId) => {
  try {
    const response = await fetch(`http://localhost:4000/wishlist/${itemId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Failed to delete wishlist item");
    }
    return await response.json();
  } catch (error) {
    console.error("Error deleting wishlist item:", error);
    throw error;
  }
};
