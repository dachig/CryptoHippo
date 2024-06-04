import { Coins } from "@/components/dashboard/coins";
import { TrendingCoins } from "@/components/dashboard/trendingCoins";
import { TrendingNFTs } from "@/components/dashboard/trendingNFTs";
import { GlobalMarketData } from "@/components/header/globalMarketData";
import { Navigation } from "@/components/header/navigation";
import { fetchCoinData } from "@/utils/fetchCoinData";
import { getServerSession } from "next-auth";
import { Suspense } from "react";

export default async function Dashboard() {
  const { coinData } = await fetchCoinData();
  const session = await getServerSession();
  return (
    <main>
      <GlobalMarketData />
      <Navigation />
      <div className="flex items-center max-w-3xl mx-auto p-4 pb-0 gap-4 flex-col md:flex-row">
        <TrendingCoins />
        <TrendingNFTs />
      </div>
      <Suspense>
        <Coins coins={coinData} session={session} />
      </Suspense>
    </main>
  );
}
