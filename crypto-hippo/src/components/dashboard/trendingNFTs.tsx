import { fetchTrendingCoinData } from "@/utils/fetchTrendingCoinData";
import { BsFire } from "react-icons/bs";
import { Card, CardContent, CardTitle } from "../ui/card";
import { TrendingCoinItem, TrendingNFTItem } from "@/utils/types";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { formatCurrency, formatNumber } from "@/utils/format";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import clsx from "clsx";
import { fetchTrendingNFTData } from "@/utils/fetchTrendingNFTData";

export async function TrendingNFTs() {
  const { trendingNFTItems } = await fetchTrendingNFTData();
  return (
      <Card className="w-full md:w-1/2 p-2 md:p-4 flex flex-col gap-2">
        <CardTitle className="flex items-center justify-between text-md font-semibold">
          <div className="flex gap-2 items-center">
            <BsFire className="text-orange-500" />
            Trending NFTs{" "}
          </div>
          <Badge>NEW</Badge>
        </CardTitle>
        <CardContent className="flex flex-col text-xs gap-2 p-0">
          {trendingNFTItems.map(
            (trendingNFT: TrendingNFTItem, index: number) =>
              index < 3 && (
                <div
                  key={trendingNFT.id}
                  className="flex items-center justify-between"
                >
                  <div className="flex gap-2 items-center">
                    <Image
                      src={trendingNFT.thumb}
                      width={30}
                      height={30}
                      alt="trendingCoin"
                    />
                    <h3 className="font-semibold">{trendingNFT.name}</h3>
                  </div>
                  <div>
                    <p className="font-semibold flex gap-2">
                      {trendingNFT.data.floor_price}{" "}
                      <span
                        className={clsx(
                          trendingNFT.floor_price_24h_percentage_change > 0
                            ? "text-green-600"
                            : "text-red-600",
                          "font-semibold flex items-center"
                        )}
                      >
                        {trendingNFT.floor_price_24h_percentage_change > 0 ? (
                          <TiArrowSortedUp />
                        ) : (
                          <TiArrowSortedDown />
                        )}{" "}
                        {formatNumber(
                          trendingNFT.floor_price_24h_percentage_change
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
