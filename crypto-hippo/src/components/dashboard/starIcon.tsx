import { db } from "@/lib/db";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { FaRegStar } from "react-icons/fa";

interface StarIconProps {
  toggleFavourite: () => void;
}

export function StarIcon({ toggleFavourite }: StarIconProps) {
  return (
    <FaRegStar
      onClick={toggleFavourite}
      className={clsx("text-gray-700 absolute text-2xl")}
    />
  );
}
