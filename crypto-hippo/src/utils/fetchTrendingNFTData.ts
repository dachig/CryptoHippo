import { CoinListItem, TrendingCoinItem, TrendingNFTItem } from "./types";

export async function fetchTrendingNFTData() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "x-cg-demo-api-key": process.env.COIN_GECKO_API_KEY as string,
    },
  };
  const response = await fetch(
    `https://api.coingecko.com/api/v3/search/trending`,
    options
  );

  if (!response.ok) {
    throw new Error("API call failed");
  }
  const trendingData = await response.json();
  const trendingNFTItems: TrendingNFTItem[] = trendingData.nfts.map(
    (nft: TrendingNFTItem) => nft
  );
  return { trendingNFTItems };
}
