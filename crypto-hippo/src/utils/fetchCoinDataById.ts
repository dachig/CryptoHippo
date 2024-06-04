import { CoinById } from "./types";

export async function fetchCoinDataById(id: string) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "x-cg-demo-api-key": process.env.COIN_GECKO_API_KEY as string,
    },
  };
  const response = await fetch(
    `https://api.coingecko.com/api/v3/coins/${id}`,
    options
  );

  if (!response.ok) {
    throw new Error("API call failed");
  }
  const coinDataById: CoinById = await response.json();
  return  coinDataById ;
}
