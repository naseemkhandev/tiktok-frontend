"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@clerk/nextjs";
import { GoHome, GoHomeFill } from "react-icons/go";

import Footer from "./Footer";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { MdExplore, MdOutlineExplore } from "react-icons/md";
import { HiOutlineUsers, HiUsers } from "react-icons/hi2";
import { useState } from "react";
import { FiLogIn } from "react-icons/fi";

export const Line = () => {
  return (
    <span className="absolute top-0 left-0 w-full h-[1px] bg-[#cfcfd1] dark:bg-lightblack block" />
  );
};

interface SidebarLinksProps {
  title: string;
  link: string;
  iconOutline: any;
  iconFill: any;
}

const SidebarLinks = ({
  title,
  link,
  iconOutline,
  iconFill,
}: SidebarLinksProps) => {
  const pathname = usePathname();
  const OutlineIcon = iconOutline;
  const FillIcon = iconFill;

  return (
    <Link href={link}>
      <Button
        variant="ghost"
        className={cn(
          "bg-transparent w-full rounded-sm px-4 py-6 font-[700] text-xl flex items-center justify-start gap-1",
          pathname === link
            ? "text-lightpink hover:text-lightpink hover:bg-muted-foreground/10 bg-muted-foreground/10"
            : "hover:bg-muted-foreground/10"
        )}
      >
        {pathname === link ? (
          <FillIcon className="text-2xl" />
        ) : (
          <OutlineIcon className="text-2xl" />
        )}
        <p className="sm:hidden md:block">{title}</p>
      </Button>
    </Link>
  );
};

interface SidebarProps {
  customClasses?: string;
}

const Sidebar = ({ customClasses }: SidebarProps) => {
  const [isScrollbarVisible, setIsScrollbarVisible] = useState<boolean>(false);
  const { isSignedIn } = useAuth();

  return (
    <div
      onMouseEnter={() => setIsScrollbarVisible(true)}
      onMouseLeave={() => setIsScrollbarVisible(false)}
      className={cn(
        "w-64 sm:w-24 md:w-64 fixed sm:left-0 sm:top-16 h-full sm:h-[88%] overflow-y-auto z-50 transition-all duration-500",
        customClasses,
        isScrollbarVisible ? "" : "sidebar"
      )}
    >
      <div className="w-full px-[1.2rem] pt-16 sm:pt-4 pb-10 flex flex-col gap-4 relative">
        <SidebarLinks
          title="For You"
          link="/"
          iconFill={GoHomeFill}
          iconOutline={GoHome}
        />
        <SidebarLinks
          title="Following"
          link="/following"
          iconFill={HiUsers}
          iconOutline={HiOutlineUsers}
        />
        <SidebarLinks
          title="Explore"
          link="/explore"
          iconFill={MdExplore}
          iconOutline={MdOutlineExplore}
        />

        {isSignedIn ? (
          <div className="relative pt-4 flex flex-col gap-3">
            <Line />

            <h2 className="capitalize text-[#505264] dark:text-white text-sm font-semibold">
              <span className="sm:hidden md:inline-block">Suggested</span>{" "}
              accounts
            </h2>
            <span className="text-[#A49B91] dark:text-[#898989] pb-10 text-sm sm:text-[11px] md:text-sm font-semibold">
              Accounts you follow will appear here .
            </span>
          </div>
        ) : (
          <div className="relative pt-4 flex flex-col gap-5">
            <Line />
            <span className="text-[#A49B91] dark:text-[#898989] sm:hidden md:block text-base">
              Log in to follow creators, like videos, and view comments.
            </span>
            <h2 className="capitalize text-[#505264] dark:text-white font-semibold">
              Login
            </h2>

            <Link href="/sign-in">
              <Button
                variant="outline"
                className="rounded-sm px-8 py-6 sm:px-0 sm:py-0 md:px-8 md:py-6 border-lightpink font-semibold text-lg bg-transparent w-full text-lightpink hover:text-lightpink hover:bg-lightpink/5"
              >
                <span className="sm:hidden md:block">Log in</span>
                <FiLogIn className="hidden sm:block md:hidden text-xl" />
              </Button>
            </Link>
          </div>
        )}

        <div className="sm:hidden md:block">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
