import { CoinListItem, GlobalMarketData } from "./types";

export async function fetchGlobalMarketData() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "x-cg-demo-api-key": process.env.COIN_GECKO_API_KEY as string,
    },
  };
  const response = await fetch(
    `https://api.coingecko.com/api/v3/global`,
    options
  );

  if (!response.ok) {
    throw new Error("API call failed");
  }
  const globalMarketData: GlobalMarketData = await response.json();
  return { globalMarketData };
}
