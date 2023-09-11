"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { topics } from "@/constants/index";
import { cn } from "@/lib/utils";

const Topics = () => {
  const pathname = usePathname();

  return (
    <div className="topics w-full overflow-x-auto">
      <div className="flex flex-nowrap items-center gap-2 w-full pr-5 pl-5 sm:pl-0 sm:pr-10">
        {topics.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              href={`/?category=${item.name}`}
              key={item.name}
              className={cn(
                "flex items-center gap-1 sm:gap-2 capitalize py-2 px-2 lg:px-4 rounded-md cursor-pointer",
                pathname === `/?category=${item.name}`
                  ? "bg-lightpink hover:bg-darkpink"
                  : "bg-lightgray hover:bg-darkgray dark:bg-lightblack dark:hover:bg-[#484848]"
              )}
            >
              <span className="text-base lg:text-xl">{<Icon />}</span>
              <p className="text-sm lg:text-base font-semibold whitespace-nowrap">
                {item.name}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Topics;
