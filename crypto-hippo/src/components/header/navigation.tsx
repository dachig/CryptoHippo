"use client";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { Separator } from "../ui/separator";
import Image from "next/image";
import avatar from "../../../public/crypto-hippo-avatar.png";

const Navigation = () => {
  const pathname = usePathname();
  return (
    <>
      <nav className="max-w-5xl mx-auto flex gap-4 items-center justify-between py-1">
        <div className="flex gap-4">
          <Link
            href="/"
            className={pathname === "/" ? "bg-secondary flex gap-2 items-center px-4" : "flex gap-2 items-center px-4"}
          >
            <Image className="h-auto w-14" src={avatar} alt="logo" /> Crypto Hippo
          </Link>
          <Link
            href="/dashboard"
            className={pathname === "/dashboard" ? "bg-secondary p-4" : "p-4"}
          >
            Dashboard
          </Link>
        </div>
        <div className="">
          {true ? (
            <Link
              href="/sign-up"
              className={pathname === "/sign-up" ? "bg-secondary p-4" : "p-4"}
            >
              Sign Up{" "}
            </Link>
          ) : (
            <Link
              href="/sign-in"
              className={pathname === "/sign-in" ? "bg-secondary p-4" : "p-4"}
            >
              Sign In{" "}
            </Link>
          )}
        </div>
      </nav>
      <Separator />
    </>
  );
};

export default Navigation;
