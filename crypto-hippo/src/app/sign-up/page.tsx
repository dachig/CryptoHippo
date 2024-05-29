import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { User } from "../user";

export default async function SignUp() {
  const session = await getServerSession(authOptions);
  const user = await prisma.user.findFirst({
    where: {
      email: "test@test.com",
    },
  });
  return (
    <>
      <p>hello, {user?.name}</p>
      <p>SERVER</p>
      <p>{JSON.stringify(session)}</p>
      <p>client</p>
      <User />
    </>
  );
}
