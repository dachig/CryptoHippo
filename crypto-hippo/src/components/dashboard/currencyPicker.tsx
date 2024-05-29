"use client";
import { useState } from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

const currencies = ["eur", "usd", "cad"];

interface CurrencyPickerProps {
  currency: string;
  setCurrency: React.Dispatch<React.SetStateAction<string>>;
}

export function CurrencyPicker({ currency, setCurrency }: CurrencyPickerProps) {
  return (
    <div className="flex gap-4 max-w-7xl mx-auto p-4">
      {currencies.map((c, i) => (
        <Badge
          key={i}
          className="hover:cursor-pointer"
          onClick={() => {
            setCurrency(c);
          }}
          variant={c === currency ? "default" : "outline"}
        >
          {c}
        </Badge>
      ))}
    </div>
  );
}
