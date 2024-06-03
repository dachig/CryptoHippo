import { CoinListItem } from "@/utils/types";
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
import { CoinDrawer } from "./coinDrawer";
import { FaRegStar } from "react-icons/fa";
import { ToggleFavouriteCoin } from "./toggleFavouriteCoin";
import { getServerSession } from "next-auth";

interface CoinProps {
  coin: CoinListItem;
  email: string;
}
export async function Coin({ coin, email }: CoinProps) {
  
  return (
    <>
      <Drawer>
        <Card
          key={coin.id}
          className="text-center p-4 flex flex-col gap-2 hover:cursor-pointer"
        >
          <ToggleFavouriteCoin email={email as string} coin={coin.name as string} />
          <DrawerTrigger>
            {" "}
            <h3 className="tracking-right font-semibold text-gray-800">
              {coin.name} <span className="text-gray-400">({coin.symbol})</span>
            </h3>
            <Image
              className="mx-auto"
              src={coin.image}
              width={200}
              height={200}
              alt="coinLogo"
            />{" "}
          </DrawerTrigger>
        </Card>

        <DrawerContent className="max-w-lg mx-auto">
          <CoinDrawer coin={coin} />
          <DrawerFooter>
            <DrawerClose>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
