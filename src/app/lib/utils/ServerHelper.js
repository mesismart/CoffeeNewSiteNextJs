import { cookies } from "next/headers";

export async function authUser() {
  const cookieStore = await cookies();

  const token = cookieStore.get("token");

  console.log("Token", token);

  if (!token) {
    return null;
  }

  const res = await fetch(`http://localhost:4000/users?token=${token.value}`, {
    cache: "no-store",
  });

  const users = await res.json();
  console.log("user", users);

  if (!users.length) {
    return null;
  }

  return users[0];
}
