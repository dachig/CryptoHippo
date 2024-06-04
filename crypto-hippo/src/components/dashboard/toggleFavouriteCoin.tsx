"use client";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import ClipLoader from "react-spinners/ClipLoader";
import { StarIcon } from "./starIcon";
import { usePathname, useRouter } from "next/navigation";

interface ToggleFavouriteCoinProps {
  email: string;
  coin: string;
}

export const ToggleFavouriteCoin = ({
  email,
  coin,
}: ToggleFavouriteCoinProps) => {
  const { toast } = useToast();
  const router = useRouter();
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  const addFavourite = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/addFavourite", {
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
          description: `${coin} has been successfully added to your favourites!`,
          variant: "default",
        });
        router.refresh();
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

  const deleteFavourite = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/deleteFavourite", {
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
          description: `${coin} has been successfully removed from your portfolio.`,
          variant: "default",
        });
        router.refresh();
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
        <StarIcon
          pathname={pathname}
          coinId={coin}
          toggleFavourite={
            pathname == "/portfolio" ? deleteFavourite : addFavourite
          }
        />
      )}
    </>
  );
};
