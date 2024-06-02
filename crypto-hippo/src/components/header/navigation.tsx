import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { Separator } from "../ui/separator";
import Image from "next/image";
import avatar from "../../../public/crypto-hippo-avatar.png";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { SignOutButton } from "./signOutButton";

const Navigation = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <>
      <nav className="max-w-5xl mx-auto flex gap-4 items-center justify-between py-1">
        <div className="flex gap-4">
          <Link href="/" className="flex gap-2 items-center px-4">
            <Image className="h-auto w-14" src={avatar} alt="logo" /> Crypto
            Hippo
          </Link>
          <Link href="/dashboard" className="p-4">
            Dashboard
          </Link>
        </div>
        <div className="">
          {!session?.user ? (
            <div>
              <Link href="/sign-up" className="p-4">
                Sign Up{" "}
              </Link>
              <Link href="/sign-in" className="p-4">
                Sign In{" "}
              </Link>
            </div>
          ) : (
            <div>
              <Link className="p-4" href={`/portfolio`}>
                {session?.user.username}'s Portfolio
              </Link>
              <SignOutButton />
            </div>
          )}
        </div>
      </nav>
      <Separator />
    </>
  );
};

export default Navigation;
