import {
  generateAccessToken,
  generateRefreshToken,
  verifyPassword,
} from "@/utils/auth";
import connectToDB from "../../../../../configs/db";

import UserModel from "../../../../../models/User";

export async function POST(req) {
  await connectToDB();

  console.log("req: ", req.json);

  const body = await req.json();

  const { phone, password } = body;

  //   Validation

  const isUserExist = await UserModel.findOne({ phone });

  const accessToken = generateAccessToken({ phone });
  const refreshToken = generateRefreshToken({ phone });

  await UserModel.findOneAndUpdate(
    { phone },
    {
      $set: {
        refreshToken,
      },
    }
  );

  if (!isUserExist)
    return Response.json({ message: "User not found" }, { status: 404 });

  var isValid = await verifyPassword(password, isUserExist.password);
  if (!isValid)
    return Response.json(
      { message: "P=>" + password + "hashed=>" + isUserExist.password },
      { status: 401 }
    );
  else
    return Response.json(
      { message: "User logged in successfully" },
      {
        status: 200,
        headers: { "Set-Cookie": `token=${accessToken};path=/;httpOnly=true` },
      }
    );
}
