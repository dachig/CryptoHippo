import { CoinListItem } from "@/utils/types";
import Image from "next/image";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import { clsx } from "clsx";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { LuInfo } from "react-icons/lu";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { formatCurrency, formatNumber } from "@/utils/format";

interface CoinDrawerProps {
  coin: CoinListItem;
}

export function CoinDrawer({ coin }: CoinDrawerProps) {
  return (
    <>
      <div className="p-4 flex flex-col gap-4 mx-auto">
        <div className="flex gap-4 items-center">
          <Image src={coin.image} width={50} height={50} alt="coinLogo" />

          <h2 className="text-xl tracking-right font-semibold text-gray-800">
            {coin.name}{" "}
            <span className="text-gray-400">({coin.symbol})</span>{" "}
            <Badge variant="default">#{coin.market_cap_rank}</Badge>
          </h2>
        </div>
        <h3 className="font-semibold tracking-wide text-3xl flex gap-2">
          {formatCurrency(coin.current_price, "eur")}{" "}
          <span
            className={clsx(
              coin.price_change_percentage_24h > 0
                ? "text-green-600"
                : "text-red-600",
              "font-semibold text-lg flex items-center"
            )}
          >
            {coin.price_change_percentage_24h > 0 ? (
              <TiArrowSortedUp />
            ) : (
              <TiArrowSortedDown />
            )}{" "}
            {formatNumber(coin.price_change_percentage_24h)}%
          </span>
        </h3>

        <div className="md:w-[400px] flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <div className="flex gap-2 text-gray-400 items-center">
              <h3 className="">24h Highest</h3>
            </div>
            <p>{formatCurrency(coin.high_24h, "eur")} </p>
          </div>
          <Separator />
          <div className="flex justify-between gap-2 items-center">
            <div className="flex gap-2 text-gray-400 items-center">
              <h3 className="">24h Lowest</h3>
            </div>
            <p>{formatCurrency(coin.low_24h, "eur")}</p>
          </div>
          <Separator />
          <div className="flex justify-between gap-2 items-center">
            <div className="flex gap-2 text-gray-400 items-center">
              <h3 className="">All-Time High</h3>
            </div>
            <p className="flex gap-2 items-center">
              {formatCurrency(coin.ath, "eur")}{" "}
              <span className="flex items-center text-red-600">
                <TiArrowSortedDown /> {formatNumber(coin.ath_change_percentage)}
                %
              </span>
            </p>
          </div>
          <Separator />
          <div className="flex justify-between gap-2 items-center">
            <div className="flex gap-2 text-gray-400 items-center">
              <h3 className="">All-Time low</h3>
            </div>
            <p className="flex gap-2 items-center">
              {formatCurrency(coin.atl, "eur")}{" "}
              <span className="flex items-center text-green-600">
                <TiArrowSortedUp /> {formatNumber(coin.atl_change_percentage)}%
              </span>
            </p>
          </div>
          <Separator />
          <div className="flex justify-between gap-2 items-center">
            <div className="flex gap-2 text-gray-400 items-center">
              <h3 className="">Market Cap</h3>
              <HoverCard>
                <HoverCardTrigger>
                  <LuInfo />
                </HoverCardTrigger>
                <HoverCardContent className="text-gray-400">
                  Market Cap = Current Price x Circulating Supply <br />
                  <br />
                  Refers to the total market value of a cryptocurrency’s
                  circulating supply. It is similar to the stock market’s
                  measurement of multiplying price per share by shares readily
                  available in the market (not held & locked by insiders,
                  governments)
                </HoverCardContent>
              </HoverCard>
            </div>
            <p>{formatCurrency(coin.market_cap, "eur")}</p>
          </div>
          <Separator />
          <div className="flex justify-between gap-2 items-center">
            <div className="flex gap-2 text-gray-400 items-center">
              <h3>Fully Diluted Valuation</h3>
              <HoverCard>
                <HoverCardTrigger>
                  <LuInfo />
                </HoverCardTrigger>
                <HoverCardContent className="text-gray-400">
                  Fully Diluted Valuation (FDV) = Current Price x Total Supply{" "}
                  <br />
                  <br />
                  Fully Diluted Valuation (FDV) is the theoretical market
                  capitalization of a coin if the entirety of its supply is in
                  circulation, based on its current market price. The FDV value
                  is theoretical as increasing the circulating supply of a coin
                  may impact its market price. Also depending on the tokenomics,
                  emission schedule or lock-up period of a coin's supply, it may
                  take a significant time before its entire supply is released
                  into circulation.
                </HoverCardContent>
              </HoverCard>
            </div>
            <p>{formatCurrency(coin.fully_diluted_valuation,"eur")}</p>
          </div>
          <Separator />
          <div className="flex justify-between gap-2 items-center">
            <div className="flex gap-2 text-gray-400 items-center">
              <h3>Circulating Supply</h3>
              <HoverCard>
                <HoverCardTrigger>
                  <LuInfo />
                </HoverCardTrigger>
                <HoverCardContent className="text-gray-400">
                  The amount of coins that are circulating in the market and are
                  tradeable by the public. It is comparable to looking at shares
                  readily available in the market (not held & locked by
                  insiders, governments).
                </HoverCardContent>
              </HoverCard>
            </div>{" "}
            <p>{formatNumber(coin.circulating_supply)}</p>
          </div>
          <Separator />
          <div className="flex justify-between gap-2 items-center">
            <div className="flex gap-2 text-gray-400 items-center">
              <h3>Total Supply</h3>
              <HoverCard>
                <HoverCardTrigger>
                  <LuInfo />
                </HoverCardTrigger>
                <HoverCardContent className="text-gray-400">
                  The amount of coins that have already been created, minus any
                  coins that have been burned (removed from circulation). It is
                  comparable to outstanding shares in the stock market. <br />
                  <br />
                  Total Supply = Onchain supply - burned tokens
                </HoverCardContent>
              </HoverCard>
            </div>{" "}
            <p>{formatNumber(coin.total_supply)}</p>
          </div>
          <Separator />
          <div className="flex justify-between gap-2 items-center">
            <div className="flex gap-2 text-gray-400 items-center">
              <h3>Maximum Supply</h3>
              <HoverCard>
                <HoverCardTrigger>
                  <LuInfo />
                </HoverCardTrigger>
                <HoverCardContent className="text-gray-400">
                  The maximum number of coins coded to exist in the lifetime of
                  the cryptocurrency. It is comparable to the maximum number of
                  issuable shares in the stock market. <br />
                  <br />
                  Max Supply = Theoretical maximum as coded
                </HoverCardContent>
              </HoverCard>
            </div>{" "}
            <p>{coin.max_supply ? formatNumber(coin.max_supply) : "N/A"}</p>
          </div>
          <Separator />
        </div>
      </div>
    </>
  );
}
