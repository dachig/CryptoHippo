"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import ClipLoader from "react-spinners/ClipLoader";

export function FormSubmitButtonLoading({ buttonText }: any) {
  const [loading, setLoading] = useState(false);

  return (
      <Button
        className="w-full mt-6"
        onClick={() => setLoading(true)}
        type="submit"
        variant="default"
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
          `${buttonText}`
        )}
      </Button>
  );
}
