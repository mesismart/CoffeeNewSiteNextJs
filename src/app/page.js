import Footer from "@/components/modules/footer/Footer";
import Navbar from "@/components/modules/navbar/Navbar";
import Articles from "@/components/templates/index/articles/Articles";
import Banner from "@/components/templates/index/banner/Banner";
import Latest from "@/components/templates/latest/Latest";
import Promote from "@/components/templates/promote/Promote";
import { verifyAccessToken } from "@/utils/auth";
import UserModel from "./../../models/User";
import { cookies } from "next/headers";
export default async function Home() {
  const token = cookies().get("token");
  console.log("token: ", token);

  let user = null;

  // const token = null;
  if (token) {
    console.log("Token found: ", token.value);
    const tokenPayload = verifyAccessToken(token.value);

    if (tokenPayload) {
      user = await UserModel.findOne({ phone: tokenPayload.phone });
      console.log("yes, user logined");
    }
  } else console.log("No token found");
  return (
    <>
      <Navbar isLogin={null} />
      <Banner />
      <Latest />
      <Promote />
      <Articles />
      <Footer />
    </>
  );
}
