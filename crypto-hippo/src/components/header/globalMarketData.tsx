import { fetchGlobalMarketData } from "@/utils/fetchGlobalMarketData";
import { formatCurrency, formatNumber } from "@/utils/format";
import clsx from "clsx";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { Separator } from "../ui/separator";
import Marquee from "../magicui/marquee";

export async function GlobalMarketData() {
  const { globalMarketData } = await fetchGlobalMarketData();
  return (
    <>
      <header className="max-w-5xl mx-auto p-4 text-xs">
        <Marquee pauseOnHover className="[--duration:20s]">
          <div className="flex gap-4 flex-wrap">
            <p className="text-gray-400 flex items-center gap-1">
              Coins:{" "}
              <span className="text-gray-800 font-semibold">
                {globalMarketData.data.active_cryptocurrencies}
              </span>
            </p>
            <p className="text-gray-400 flex items-center gap-1">
              Exchanges:{" "}
              <span className="text-gray-800 font-semibold">
                {globalMarketData.data.markets}
              </span>
            </p>
            <p className="text-gray-400 flex items-center gap-1">
              Market Cap:{" "}
              <span className="text-gray-800 font-semibold">
                {formatCurrency(
                  Object.values(globalMarketData.data.total_market_cap).reduce(
                    (acc, v) => acc + v,
                    0
                  ),
                  "usd"
                )}
              </span>
              <span
                className={clsx(
                  globalMarketData.data.market_cap_change_percentage_24h_usd > 0
                    ? "text-green-600"
                    : "text-red-600",
                  "flex items-center"
                )}
              >
                {globalMarketData.data.market_cap_change_percentage_24h_usd >
                0 ? (
                  <TiArrowSortedUp />
                ) : (
                  <TiArrowSortedDown />
                )}{" "}
                {formatNumber(
                  globalMarketData.data.market_cap_change_percentage_24h_usd
                )}
                %
              </span>
            </p>
            <p className="text-gray-400 flex gap-1">
              Total Volume:{" "}
              <span className="text-gray-800 font-semibold">
                {formatCurrency(
                  Object.values(globalMarketData.data.total_volume).reduce(
                    (acc, v) => acc + v,
                    0
                  ),
                  "usd"
                )}
              </span>
            </p>
            <p className="text-gray-400 flex items-center gap-1">
              Dominance:{" "}
              <span className="text-gray-800 font-semibold mr-3">
                BTC{" "}
                {formatNumber(globalMarketData.data.market_cap_percentage.btc)}%
              </span>
              <span className="text-gray-800 font-semibold">
                ETH{" "}
                {formatNumber(globalMarketData.data.market_cap_percentage.eth)}%
              </span>
            </p>
          </div>{" "}
        </Marquee>
      </header>
      <Separator />
    </>
  );
}
