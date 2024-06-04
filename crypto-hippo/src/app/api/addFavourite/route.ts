import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import * as z from "zod";

const updateFavouritesSchema = z.object({
  email: z.string().min(1, "email is required"),
  coin: z.string().min(1, "Coin is required"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, coin } = updateFavouritesSchema.parse(body);

    // Find the user by username
    const user = await db.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // Check if the coin is already in the user's favourites
    const favouritesSet = new Set(user.favourites);
    if (favouritesSet.has(coin)) {
      // Coin is already a favourite, remove it
      return NextResponse.json(
        { message: `${coin} is already in your portfolio` },
        { status: 500 }
      );
    } else {
      // Coin is not a favourite, add it
      favouritesSet.add(coin);
    }

    // Update the user's favourites
    const updatedUser = await db.user.update({
      where: { email },
      data: {
        favourites: Array.from(favouritesSet),
      },
    });

    return NextResponse.json(
      {
        user: updatedUser,
        message: `${coin} has been successfully added to your favourites!`,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "You must be signed in to perform this action" },
      { status: 500 }
    );
  }
}
