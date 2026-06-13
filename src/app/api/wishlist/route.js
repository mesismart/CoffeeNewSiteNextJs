import WishlistModel from "../../lib/models/Wishlist.js";
import connectToDB from "../../lib/configs/db.js";

export async function POST(req) {
  //Code to handle POST request for wishlist

  try {
    connectToDB();
    const body = await req.json();
    const { user, product } = body;

    //Validate the request body
    if (!user || !product) {
      return Response.json(
        { message: "User and product are required" },
        { status: 400 },
      );
    }

    //Check user and product existence
    const userExists = await WishlistModel.exists({ user, product });
    if (userExists) {
      return Response.json(
        { message: "This product is already in your wishlist" },
        { status: 409 },
      );
    }

    await WishlistModel.create({ user, product });

    return Response.json(
      { message: "Wishlist item added successfully" },
      { status: 201 },
    );
  } catch (error) {
    return Response.json(
      { message: "Error adding to wishlist", error },
      { status: 500 },
    );
  }
}

export async function DELETE(req) {
  //Code to handle DELETE request for wishlist

  console.log("delete log");

  try {
    connectToDB();

    // Get the product ID from the request URL
    const { pathname } = new URL(req.url);
    const id = pathname.split("/").pop(); // Assuming the URL ends with the product ID

    console.log("iddddddddddddddddd--> ", id);

    // Check if the wishlist item exists and delete it
    const wishlistItem = await WishlistModel.findByIdAndDelete(id);
    if (!wishlistItem) {
      return Response.json(
        { message: "Wishlist item not found" },
        { status: 404 },
      );
    }

    return Response.json(
      { message: "Wishlist item removed successfully" },
      { status: 200 },
    );
  } catch (error) {
    return Response.json(
      { message: "Error removing from wishlist", error },
      { status: 500 },
    );
  }
}
