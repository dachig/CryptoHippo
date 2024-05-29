"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "../ui/button";
import ClipLoader from "react-spinners/ClipLoader";

export function ButtonRouterPushLoading() {
  const [loadingBrowse, setLoadingBrowse] = useState(false);

  const router = useRouter();

  function handleRouterPush(route: string) {
    setLoadingBrowse(true);
    router.push(route);
  }

  return (
    <>
      <Button onClick={() => handleRouterPush("/dashboard")} variant="default">
        {loadingBrowse ? (
          <ClipLoader
            className="my-0 mx-auto block border-white"
            color="#ffffff"
            loading={loadingBrowse}
            size={25}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        ) : (
          "Browse"
        )}
      </Button>
      <Button onClick={() => router.push("/sign-up")} variant="outline">
        Sign Up
      </Button>
    </>
  );
}
