import Link from "next/link";
import { Separator } from "../ui/separator";
import Image from "next/image";
import avatar from "../../../public/crypto-hippo-avatar.png";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { SignOutButton } from "./signOutButton";
import { MobileNavigation } from "./mobileNavigation";

export const Navigation = async () => {
  const session = await getServerSession(authOptions);
  return (
    <>
      <nav className="hidden max-w-5xl mx-auto md:flex flex-col md:flex-row md:gap-4 items-center md:justify-between py-2">
        <div className="flex flex-col md:flex-row items-center md:gap-4">
          <Link
            href="/"
            className="flex gap-2 items-center px-4 hover:bg-secondary"
          >
            <Image className="h-auto w-5 md:w-14" src={avatar} alt="logo" />{" "}
            Crypto Hippo
          </Link>
          <Link href="/dashboard" className="p-2 md:p-4 hover:bg-secondary">
            Dashboard
          </Link>
        </div>
        {!session?.user ? (
          <div className="flex flex-col md:flex-row items-center md:gap-4">
            <Link href="/sign-up" className="p-2 md:p-4 hover:bg-secondary">
              Sign Up{" "}
            </Link>
            <Link href="/sign-in" className="p-2 md:p-4 hover:bg-secondary">
              Sign In{" "}
            </Link>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row items-center md:gap-4">
            <Link className="p-2 md:p-4 hover:bg-secondary" href={`/portfolio`}>
              {session?.user.username}'s Portfolio
            </Link>
            <SignOutButton />
          </div>
        )}
      </nav>
      <MobileNavigation session={session} />
      <Separator />
    </>
  );
};
