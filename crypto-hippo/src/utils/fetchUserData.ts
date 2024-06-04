import { db } from "@/lib/db";
import { getServerSession } from "next-auth";

export async function fetchUserData() {
  const session = await getServerSession();
  const email = session?.user.email;
  if (email) {
    const user = await db.user.findUnique({
      where: { email },
    });
    return { user, session };
  }
}
