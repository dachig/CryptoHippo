"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HamburgerMenu } from "react-hamburger-menu-responsive";
import avatar from "../../../public/crypto-hippo-avatar.png";
import { SignOutButton } from "./signOutButton";

export function MobileNavigation({ session }: any) {
  const [trigger, setTrigger] = useState(false);

  return (
    <nav className="p-4 block md:hidden">
      <HamburgerMenu
        barsColor="#2563EB"
        closeColor="#2563EB"
        trigger={trigger}
        setTrigger={setTrigger}
        backgroundColor="#ECF7FD"
        breakPoint={768}
        childrenStyle={{
          marginTop: "100px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          paddingBottom: "15px",
          gap: "10px",
          borderBottom: "2px solid #2563EB",
        }}
      >
        <div className="flex flex-col items-center">
          <Link
            href="/"
            className="p-2 flex gap-2 items-center px-4 hover:bg-secondary"
          >
            <Image className="h-auto w-5 md:w-14" src={avatar} alt="logo" />{" "}
            Crypto Hippo
          </Link>
          <Link href="/dashboard" className="p-2 md:p-4 hover:bg-secondary">
            Dashboard
          </Link>

          {!session?.user ? (
            <div className="flex flex-col items-center">
              <Link href="/sign-up" className="p-2 hover:bg-secondary">
                Sign Up{" "}
              </Link>
              <Link href="/sign-in" className="p-2 hover:bg-secondary">
                Sign In{" "}
              </Link>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <Link className="p-2 hover:bg-secondary" href={`/portfolio`}>
                {session?.user.username}'s Portfolio
              </Link>
              <SignOutButton />
            </div>
          )}
        </div>
      </HamburgerMenu>
    </nav>
  );
}
