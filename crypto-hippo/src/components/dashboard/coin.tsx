import { CoinListItem } from "@/utils/types";
import { Card } from "../ui/card";
import Image from "next/image";
import { useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "../ui/button";
import { CoinDrawer } from "./coinDrawer";

interface CoinProps {
  coin: CoinListItem;
}
export function Coin({ coin }: CoinProps) {
  return (
    <>
      <Drawer>
        <DrawerTrigger>
          <Card
            key={coin.id}
            className="text-center p-4 flex flex-col gap-2 hover:cursor-pointer"
          >
            <h3 className="tracking-right font-semibold text-gray-800">
              {coin.name} <span className="text-gray-400">({coin.symbol})</span>
            </h3>
            <Image
              className="mx-auto"
              src={coin.image}
              width={200}
              height={200}
              alt="coinLogo"
            />
          </Card>
        </DrawerTrigger>
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
