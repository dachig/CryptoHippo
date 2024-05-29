import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/header/navigation";
import { GlobalMarketData } from "@/components/header/globalMarketData";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Crypto Hippo",
  description: "by Dachi Giorgobiani",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx("font-poppins")}>
        <GlobalMarketData />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
