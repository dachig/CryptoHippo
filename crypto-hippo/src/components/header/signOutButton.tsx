"use client";

import { signOut } from "next-auth/react";
import { Button } from "../ui/button";

export function SignOutButton() {
  return (
    <Button className="p-4" onClick={() => signOut()} variant="destructive">
      Sign Out
    </Button>
  );
}
