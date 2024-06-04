import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { FaRegStar, FaStar } from "react-icons/fa";

interface StarIconProps {
  toggleFavourite: () => void;
  coinId: string;
  pathname: string;
}

export function StarIcon({ toggleFavourite, coinId, pathname }: StarIconProps) {
  return (
    <>
      {pathname == "/portfolio" ? (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              {" "}
              <FaStar
                id={coinId}
                onClick={toggleFavourite}
                className={"text-yellow-400 text-4xl md:text-2xl"}
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>Click to remove from portfolio</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ) : (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              {" "}
              <FaRegStar
                id={coinId}
                onClick={toggleFavourite}
                className={"text-yellow-400 absolute text-4xl md:text-2xl"}
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>Click to add to portfolio</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
    </>
  );
}
