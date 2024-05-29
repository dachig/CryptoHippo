import { CoinListItem } from "./types";

export async function fetchCoinData() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "x-cg-demo-api-key": process.env.COIN_GECKO_API_KEY as string,
    },
  };
  const response = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur`,
    options
  );

  if (!response.ok) {
    throw new Error("API call failed");
  }
  const coinData: CoinListItem[] = await response.json();
  return { coinData };
}
