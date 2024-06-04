import { GlobalMarketData } from "@/components/header/globalMarketData";
import { Navigation } from "@/components/header/navigation";
import { FavouriteCoins } from "@/components/portfolio/favouriteCoins";
import { fetchUserData } from "@/utils/fetchUserData";
import { Suspense } from "react";

export default async function Portfolio() {
  const user = await fetchUserData();
  return (
    <main>
      <GlobalMarketData />
      <Navigation />
      {user?.user?.favourites.length == 0 ? (
        <h3 className="max-w-5xl mx-auto p-4 font-2xl">
          Looks empty in here...
        </h3>
      ) : (
        <Suspense>
          <FavouriteCoins
            email={user?.session.user.email}
            favourites={user?.user?.favourites}
          />
        </Suspense>
      )}
    </main>
  );
}
