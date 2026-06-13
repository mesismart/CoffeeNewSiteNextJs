import connectToDB from "../../../lib/configs/db";
import ProductModel from "../../../lib/models/Product";

export async function POST(req) {
  try {
    await connectToDB();

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
      { status: 200 },
    );
  } catch (error) {
    console.log("error: ", error);
    return Response.json(
      { message: "Error creating product", error },
      { status: 500 },
    );
  }
}

export async function GET(req, { params }) {
  console.log("GET /api/products called", params.id);
  try {
    await connectToDB();
    const { id } = params;

    if (id) {
      const product = await ProductModel.findById(id).populate("comments");

      return Response.json({ product }, { status: 200 });
    }

    const products = await ProductModel.find({}).populate("comments");
    return Response.json({ products }, { status: 200 });
  } catch (error) {
    console.log("error: ", error);
    return Response.json(
      { message: "Error fetching products", error },
      { status: 500 },
    );
  }
}
