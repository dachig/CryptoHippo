import { db } from "@/lib/db";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { FaRegStar } from "react-icons/fa";

interface StarIconProps {
  toggleFavourite: () => void;
  coinId: string;
  pathname: string;
}

export function StarIcon({ toggleFavourite, coinId, pathname }: StarIconProps) {
  return (
    <FaRegStar
      id={coinId}
      onClick={toggleFavourite}
      className={clsx(
        pathname == "/portfolio" ? "text-yellow-400" : "text-gray-700",
        "absolute text-4xl md:text-2xl"
      )}
    />
  );
}
