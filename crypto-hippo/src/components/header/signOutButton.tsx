"use client";

import { signOut } from "next-auth/react";
import { Button } from "../ui/button";
import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

export function SignOutButton() {
  const [loading, setLoading] = useState(false);

  return (
    <Button
      className="p-2 mt-8 md:mt-0"
      onClick={() => {
        setLoading(true);
        signOut();
      }}
      variant="destructive"
    >
      {loading ? (
        <ClipLoader
          className="my-0 mx-auto block border-white"
          color="#ffffff"
          loading={loading}
          size={25}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        "Sign Out"
      )}
    </Button>
  );
}
