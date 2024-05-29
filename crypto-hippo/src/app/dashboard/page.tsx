import { Coins } from "@/components/dashboard/coins";
import { CurrencyPicker } from "@/components/dashboard/currencyPicker";
import { TrendingCoins } from "@/components/dashboard/trendingCoins";
import { TrendingNFTs } from "@/components/dashboard/trendingNFTs";
import { GlobalMarketData } from "@/components/header/globalMarketData";
import Navigation from "@/components/header/navigation";
import { Suspense, useState } from "react";

export default function Dashboard() {
  return (
    <main>
      {/* <CurrencyPicker currency={currency} setCurrency={setCurrency} /> */}
      <GlobalMarketData />
      <Navigation />
      <div className="flex items-center max-w-3xl mx-auto p-4 pb-0 gap-4 flex-col md:flex-row">
        <TrendingCoins />
        <TrendingNFTs />
      </div>
      <Suspense fallback="loading">
        <Coins />
      </Suspense>
    </main>
  );
}
