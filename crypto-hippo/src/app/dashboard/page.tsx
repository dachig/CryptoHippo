import { Coins } from "@/components/dashboard/coins";
import { CurrencyPicker } from "@/components/dashboard/currencyPicker";
import { Suspense, useState } from "react";

export default function Dashboard() {
  return (
    <main>
      {/* <CurrencyPicker currency={currency} setCurrency={setCurrency} /> */}
      <Suspense>
        <Coins />
      </Suspense>
    </main>
  );
}
