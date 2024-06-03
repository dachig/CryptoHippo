import { fetchCoinData } from "@/utils/fetchCoinData";
import { Coin } from "./coin";
import { getServerSession } from "next-auth";

export async function Coins() {
  const { coinData } = await fetchCoinData();
  const session = await getServerSession();
  return (
    <div className="max-w-7xl p-4 mx-auto gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
      {coinData.map((coin) => (
        <Coin email={session?.user.email as string} key={coin.id} coin={coin} />
      ))}
    </div>
  );
}
