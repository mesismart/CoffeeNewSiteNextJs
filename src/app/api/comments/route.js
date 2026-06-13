import connectToDB from "../../lib/configs/db";
import CommentModel from "../../lib/models/Comment";
import ProductModel from "../../lib/models/Product";

export async function POST(req) {
  try {
    connectToDB();

    const body = await req.json();

    const { username, bodytxt, email, score, productId } = body;

    const Comment = await CommentModel.create({
      username,
      bodytxt,
      email,
      score,
      isAccepted: false, // Default value, can be changed later by admin
      productId,
    });

    const updatedProduct = await ProductModel.findOneAndUpdate(
      { _id: productId },
      { $push: { comments: Comment._id } },
    );

    return Response.json(
      { message: "Comment created successfully", Comment },
      { status: 200 },
    );
  } catch (error) {
    console.log("error: ", error);
    return Response.json(
      { message: "Error creating Comment", error },
      { status: 500 },
    );
  }
}

export async function GET(req) {
  try {
    connectToDB();

    const comments = await commentsModel.find().populate("productId", "name");

    return Response.json({ comments }, { status: 200 });
  } catch (error) {
    console.log("error: ", error);
    return Response.json(
      { message: "Error fetching comments", error },
      { status: 500 },
    );
  }
}
