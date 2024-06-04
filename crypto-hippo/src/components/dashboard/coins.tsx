"use client";
import { useState } from "react";
import { Coin } from "./coin";
import { CoinListItem } from "@/utils/types";
import { Input } from "../ui/input";
import { IoSearch, IoClose } from "react-icons/io5";
import { Button } from "../ui/button";

interface CoinsProps {
  coins: CoinListItem[];
  session: any;
}

export function Coins({ coins, session }: CoinsProps) {
  const [filteredCoins, setFilteredCoins] = useState<CoinListItem[]>(coins);
  const [searchQuery, setSearchQuery] = useState("");

  function search(searchQuery: string) {
    let coinsCpy = coins.filter((coin) =>
      coin.name.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
    );
    setFilteredCoins(coinsCpy);
  }

  return (
    <div className="max-w-7xl p-4 mx-auto flex flex-col gap-4">
      {" "}
      <div className="flex ml-auto items-center">
        <Input
          onChange={(e) => setSearchQuery(e.target.value)}
          className="rounded-l-full rounded-r-none "
          type="text"
          placeholder="Search a coin"
          value={searchQuery}
        />

        <Button
          onClick={() => {
            setSearchQuery("");
            setFilteredCoins(coins);
          }}
          variant="outline"
          className="rounded-none"
        >
          <IoClose className="text-lg" />
        </Button>
        <Button
          onClick={() => search(searchQuery)}
          className="rounded-l-none rounded-r-full"
        >
          <IoSearch className="text-lg" />
        </Button>
      </div>
      {filteredCoins.length == 0 ? (
        <h3 className="mx-auto">
          We tried our best, but there are no coins with that name...
        </h3>
      ) : (
        <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {filteredCoins.map((coin) => (
            <Coin
              email={session?.user.email as string}
              key={coin.id}
              coin={coin}
            />
          ))}
        </div>
      )}
    </div>
  );
}
