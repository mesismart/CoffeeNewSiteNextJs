import connectToDB from "../../../../configs/db";
import ProductModel from "./../../../../models/Product";

export async function POST(req) {
  try {
    connectToDB();

    const body = await req.json();

    const {
      name,
      price,
      shortDescription,
      longDescription,
      weight,
      suitbleFor,
      smell,
      tags,
    } = body;

    const product = await ProductModel.create({
      name,
      price,
      shortDescription,
      longDescription,
      weight,
      suitbleFor,
      smell,
      tags,
    });

    return Response.json(
      { message: "Product created successfully", product },
      { status: 200 }
    );
  } catch (error) {
    console.log("error: ", error);
    return Response.json(
      { message: "Error creating product", error },
      { status: 500 }
    );
  }
}

export async function GET(req) {
  // Get all products
}
