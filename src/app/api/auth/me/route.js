import { cookies } from "next/headers";

import userModel from "../../../../../models/User";
import { verifyAccessToken } from "@/utils/auth";
import connectToDB from "../../../../../configs/db";

export async function GET(req) {
  console.log("Fetching user details...");
  connectToDB();

  const token = cookies().get("token");
  console.log("token from cookies:", token);

  let user = null;

  if (token) {
    const tokenPayload = verifyAccessToken(token.value);
    if (tokenPayload) {
      user = await userModel.findOne(
        { phone: tokenPayload.phone },
        "-__v -password -createdAt -updatedAt -refreshToken "
      );
    }
    console.log("user-----me", user);

    return Response.json({ user });
  } else {
    return Response.json(
      {
        data: null,
        message: "Unauthorized, please login to access this resource.",
      },
      { status: 401 }
    );
  }
}
