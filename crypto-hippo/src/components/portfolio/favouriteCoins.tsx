import { fetchCoinData } from "@/utils/fetchCoinData";
import { getServerSession } from "next-auth";
import { FavouriteCoin } from "./favouriteCoin";

interface FavouriteCoinsProps {
  favourites: string[];
  email: string;
}

export function FavouriteCoins({ favourites, email }: any) {
  return (
    <div className="max-w-7xl p-4 mx-auto gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
      {favourites.map((favourite: string) => (
        <FavouriteCoin
          email={email as string}
          key={favourite}
          favouriteCoinId={favourite}
        />
      ))}
    </div>
  );
}
