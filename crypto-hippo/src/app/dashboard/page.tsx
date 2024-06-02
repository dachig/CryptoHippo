import { Coins } from "@/components/dashboard/coins";
import { CurrencyPicker } from "@/components/dashboard/currencyPicker";
import { TrendingCoins } from "@/components/dashboard/trendingCoins";
import { TrendingNFTs } from "@/components/dashboard/trendingNFTs";
import { GlobalMarketData } from "@/components/header/globalMarketData";
import Navigation from "@/components/header/navigation";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { Suspense, useState } from "react";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  return (
    <main>
      {/* <CurrencyPicker currency={currency} setCurrency={setCurrency} /> */}
      <GlobalMarketData />
      <Suspense fallback="loading">
        <Navigation />
      </Suspense>
      <div className="flex items-center max-w-3xl mx-auto p-4 pb-0 gap-4 flex-col md:flex-row">
        <TrendingCoins />
        <TrendingNFTs />
      </div>
      <Suspense>
        <Coins />
      </Suspense>
    </main>
  );
}
