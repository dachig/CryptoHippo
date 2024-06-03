"use client";
import {  useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import ClipLoader from "react-spinners/ClipLoader";
import { StarIcon } from "./starIcon";

interface ToggleFavouriteCoinProps {
  email: string;
  coin: string;
}

export const ToggleFavouriteCoin = ({
  email,
  coin,
}: ToggleFavouriteCoinProps) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const toggleFavourite = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/favourite", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, coin }),
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: "Success",
          description: "Favourites updated successfully.",
          variant: "default",
        });
      } else {
        toast({
          title: "Error",
          description: data.message || "Failed to update favourites.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "You must be signed in to perform this action.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <ClipLoader
          className="absolute border-white"
          color="#000000"
          loading={loading}
          size={25}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <StarIcon toggleFavourite={toggleFavourite}/>
      )}
    </>
  );
};
