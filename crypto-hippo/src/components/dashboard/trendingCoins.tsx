import { fetchTrendingCoinData } from "@/utils/fetchTrendingCoinData";
import { BsFire } from "react-icons/bs";
import { Card, CardContent, CardTitle } from "../ui/card";
import { TrendingCoinItem } from "@/utils/types";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { formatCurrency, formatNumber } from "@/utils/format";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import clsx from "clsx";

export async function TrendingCoins() {
  const { trendingCoinItems } = await fetchTrendingCoinData();
  return (
    <Card className="w-full md:w-1/2 p-2 md:p-4 flex flex-col gap-2">
      <CardTitle className="flex gap-2 items-center text-md font-semibold">
        <BsFire className="text-orange-500" />
        Trending Coins{" "}
      </CardTitle>
      <CardContent className="flex flex-col text-xs gap-2 p-0">
        {trendingCoinItems.map(
          (trendingCoin: TrendingCoinItem, index: number) =>
            index < 3 && (
              <div
                key={trendingCoin.id}
                className="flex items-center justify-between"
              >
                <div className="flex gap-2 items-center">
                  <Image
                    src={trendingCoin.thumb}
                    width={30}
                    height={30}
                    alt="trendingCoin"
                  />
                  <h3 className="font-semibold">{trendingCoin.name}</h3>
                  <Badge variant="default">
                    #{trendingCoin.market_cap_rank}
                  </Badge>
                </div>
                <div>
                  <p className="font-semibold flex gap-2">
                    {formatCurrency(trendingCoin.data.price, "eur")}{" "}
                    <span
                      className={clsx(
                        trendingCoin.data.price_change_percentage_24h.eur > 0
                          ? "text-green-600"
                          : "text-red-600",
                        "font-semibold flex items-center"
                      )}
                    >
                      {trendingCoin.data.price_change_percentage_24h.eur > 0 ? (
                        <TiArrowSortedUp />
                      ) : (
                        <TiArrowSortedDown />
                      )}{" "}
                      {formatNumber(
                        trendingCoin.data.price_change_percentage_24h.eur
                      )}
                      %
                    </span>
                  </p>
                </div>
              </div>
            )
        )}
      </CardContent>
    </Card>
  );
}
