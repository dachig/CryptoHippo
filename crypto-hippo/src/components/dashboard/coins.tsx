import { fetchCoinData } from "@/utils/fetchCoinData";
import Image from "next/image";
import { Card } from "../ui/card";
import { useEffect, useState } from "react";
import { Coin } from "./coin";

export async function Coins() {
  const { coinData } = await fetchCoinData();

  return (
    <div className="max-w-7xl p-4 mx-auto gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
      {coinData.map((coin) => (
        <Coin coin={coin}/>
      ))}
    </div>
  );
}
