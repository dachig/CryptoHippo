"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import ClipLoader from "react-spinners/ClipLoader";

export function FormSubmitButtonLoading({ buttonText }: any) {
  const [loading, setLoading] = useState(false);

  function handleChange() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 7500);
  }

  return (
    <Button
      className="w-full mt-6"
      onClick={handleChange}
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
