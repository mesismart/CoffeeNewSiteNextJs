import connectToDB from "../../../lib/configs/db";
import UserModel from "../../../lib/models/User";
import { generateAccessToken, hashPassword } from "@/app/lib/utils/auth";
import { roleType } from "@/app/lib/utils/Constants";

export async function POST(req) {
  try {
    await connectToDB();

    console.log("req: ", req.json);

    const body = await req.json();

    const { name, phone, email, password } = body;

    //Validate the input

    const isUserExist = await UserModel.findOne({
      $or: [{ name }, { email }, { phone }],
    });
    // console.log("isUserExist: " + isUserExist);

    if (isUserExist) {
      return Response.json({ message: "User already exists" }, { status: 422 });
    }

    const hashedPassword = await hashPassword(password);
    const accessToken = generateAccessToken({ name });

    const users = await UserModel.find({});

    await UserModel.create({
      name,
      phone,
      email,
      password: hashedPassword,
      role: users.length === 0 ? roleType.ADMIN : roleType.USER,
    });

    return Response.json(
      { message: "User created successfully" },
      {
        status: 201,
        headers: { "Set-Cookie": `token=${accessToken};path=/;httpOnly=true` },
      },
    );
  } catch (error) {
    console.error("Error in GET:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
