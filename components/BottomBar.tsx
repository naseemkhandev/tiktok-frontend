"use client";

import { bottomBar } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CreateButtonStyle1 =
  "before:absolute before:top-[1px] before:-right-1 before:w-1/2 before:h-[92%] before:bg-darkpink before:rounded-tr-lg before:rounded-br-lg before:-z-10";
const CreateButtonStyle2 =
  "after:absolute after:top-[1px] after:-left-1 after:w-1/2 after:h-[92%] after:bg-sky-300 after:rounded-tl-lg after:rounded-bl-lg after:-z-10";

const BottomBar = () => {
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-between fixed bottom-0 left-0 w-full px-5 py-3 border-t">
      {bottomBar.map((link) => {
        const OutlineIcon = link.iconOutline;
        const FillIcon = link.iconFill;

        return (
          <Link
            href={link.route}
            key={link.name}
            className={cn(
              "flex flex-col items-center capitalize",
              link.route === pathname
                ? "text-darkpink"
                : "text-[#8d8d8d] dark:text-[#898989] hover:text-[#000] dark:hover:text-lightgray relative"
            )}
          >
            <span
              className={cn(
                "text-2xl",
                link.route === "/upload"
                  ? `bg-white text-black rounded-lg py-1 px-2 ${CreateButtonStyle1} ${CreateButtonStyle2}`
                  : ""
              )}
            >
              {link.route === pathname ? <FillIcon /> : <OutlineIcon />}
            </span>
            <p className="text-xs font-semibold">{link.name}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default BottomBar;
