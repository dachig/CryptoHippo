import { Card } from "../ui/card";
import Image from "next/image";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "../ui/button";
import { FavouriteCoinDrawer } from "./FavouriteCoinDrawer";
import { ToggleFavouriteCoin } from "../dashboard/toggleFavouriteCoin";
import { fetchCoinDataById } from "@/utils/fetchCoinDataById";

interface CoinProps {
  email: string;
  favouriteCoinId: string;
}
export async function FavouriteCoin({ email, favouriteCoinId }: CoinProps) {
  const coin = await fetchCoinDataById(favouriteCoinId);
  return (
    <Drawer>
      <Card
        key={coin.id}
        className="text-center p-4 flex flex-col gap-2 hover:bg-secondary"
      >
        <ToggleFavouriteCoin email={email as string} coin={coin.id as string} />
        <DrawerTrigger className="">
          {" "}
          <h3 className="tracking-right font-semibold text-gray-800 mb-4">
            {coin.name} <span className="text-gray-400">({coin.symbol})</span>
          </h3>
          <Image
            className="mx-auto"
            src={coin.image.large}
            width={200}
            height={200}
            alt="coinLogo"
          />{" "}
        </DrawerTrigger>
      </Card>

      <DrawerContent className="max-w-lg mx-auto">
        <FavouriteCoinDrawer coin={coin} />
        <DrawerFooter>
          <DrawerClose>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
