"use client";

import Image from "next/image";
import { IoCloseCircleSharp, IoSearch } from "react-icons/io5";
import { HiOutlineMenu, HiPlus } from "react-icons/hi";
import { RxDotsVertical } from "react-icons/rx";
import { RiUserLine } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import { FiBookmark } from "react-icons/fi";
import { LuLogOut } from "react-icons/lu";
import { useRef, useState } from "react";
import { SignOutButton, SignedIn, UserButton, useAuth } from "@clerk/nextjs";
import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ToggleTheme } from "./ToggleTheme";
import { Input } from "./ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [toggleSearch, setToggleSearch] = useState<boolean>(false);
  const [sidebar, setSidebar] = useState<boolean>(false);
  const searchInputField = useRef<HTMLInputElement | null>(null);
  const { isSignedIn } = useAuth();

  return (
    <>
      <div className="fixed top-0 w-full z-10">
        <div className="flex items-center justify-between gap-10 border-b-[1.5px] dark:border-b-lightblack py-[.5rem] px-5 text-base relative">
          <div className="relative">
            <Image
              src="/logo.png"
              width={115}
              height={150}
              alt="logo"
              className="sm:block hidden"
            />
            <Button
              onClick={() => setSidebar(true)}
              className="block sm:hidden text-2xl bg-transparent text-black dark:text-white hover:bg-transparent cursor-pointer"
              size="icon"
            >
              <HiOutlineMenu />
            </Button>
          </div>

          <div className="flex items-center justify-end sm:gap-3 md:gap-5 lg:gap-10 xl:gap-20 flex-1">
            <div className="block sm:hidden">
              <ToggleTheme />
            </div>
            <div
              className={cn(
                "w-[92%] sm:max-w-lg flex-1 absolute top-16 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:relative transition-all duration-500 sm:scale-100 sm:top-0 sm:left-0 ",
                toggleSearch ? "scale-100" : "scale-0"
              )}
            >
              <Input
                type="text"
                placeholder="Search"
                ref={searchInputField}
                className="rounded-full text-base bg-lightgray dark:placeholder:text-[#898989] dark:bg-lightblack pr-[5.6rem] pt-[1.4rem] pb-6 pl-5 w-full hover:border-darkgray dark:hover:border-[#484848] focus-within:border-darkgray dark:focus-within:border-[#484848] border-[1.5px] border-transparent caret-darkpink"
              />

              {searchInputField.current &&
              searchInputField.current.value.length > 0 ? (
                <IoCloseCircleSharp className="absolute top-1/2 -translate-y-1/2 right-[4.2rem] text-lg text-[#A7A7AC] cursor-pointer" />
              ) : null}

              <Button className="text-2xl rounded-tr-full rounded-br-full bg-lightgray hover:bg-darkgray py-[1.5rem] text-[#999898] hover:text-black absolute top-1/2 -translate-y-1/2 right-[1.5px] hover:border-darkgray dark:hover:bg-[#484848] dark:bg-lightblack dark:hover:border-[#484848] dark:hover:text-white">
                <IoSearch />
              </Button>

              <span className="absolute top-1/2 -translate-y-1/2 right-[3.6rem] w-[.5px] h-[55%] bg-[#cfcfd1] block" />
            </div>

            <div className="flex items-center lg:gap-2">
              <div
                className={cn(
                  "flex items-center flex-2",
                  isSignedIn
                    ? "xs:gap-1 md:gap-2"
                    : "xs:gap-1 md:gap-3 lg:gap-5"
                )}
              >
                <Button
                  variant="outline"
                  className="rounded-sm hidden font-semibold hover:bg-lightgray dark:bg-lightblack dark:hover:bg-[#1B1B1B] text-base sm:flex items-center gap-2 dark:border-0"
                >
                  <HiPlus className="text-xl" />
                  Upload
                </Button>
                
                {!isSignedIn && (
                  <Link href="/sign-in">
                    <Button className="rounded-sm px-8 hidden md:block font-bold text-base bg-lightpink hover:bg-[#F02A50] text-white">
                      Log in
                    </Button>
                  </Link>
                )}

                <Button
                  onClick={() => setToggleSearch(!toggleSearch)}
                  className="block sm:hidden text-xl bg-transparent text-black dark:text-white hover:bg-transparent"
                >
                  <IoSearch />
                </Button>

                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Button
                      className="bg-transparent text-black dark:text-white text-xl hover:bg-transparent hidden sm:block"
                      size="icon"
                    >
                      <RxDotsVertical />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {isSignedIn && (
                      <>
                        <DropdownMenuItem>
                          <RiUserLine className="text-xl" />
                          View Profile
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <FiBookmark className="text-xl" />
                          Favorites
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <AiOutlineHeart className="text-xl" />
                          Likes
                        </DropdownMenuItem>
                      </>
                    )}
                    <DropdownMenuItem>
                      <ToggleTheme />
                    </DropdownMenuItem>
                    {isSignedIn && (
                      <>
                        <DropdownMenuSeparator />
                        <SignedIn>
                          <SignOutButton>
                            <DropdownMenuItem>
                              <p className="flex items-center gap-1">
                                <LuLogOut className="text-xl" />
                                <span>Logout</span>
                              </p>
                            </DropdownMenuItem>
                          </SignOutButton>
                        </SignedIn>
                      </>
                    )}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="flex items-center gap-2">
                <UserButton afterSignOutUrl="/" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile menu */}
      <div className="sm:hidden block relative">
        <div
          className={cn(
            "flex items-center gap-2 duration-500 transition-all absolute top-0 left-0 w-[13.6rem] pb-1 pt-3 z-[80] bg-background dark:bg-[#121212]",
            sidebar ? "left-4" : "-left-full"
          )}
        >
          <Button
            onClick={() => setSidebar(false)}
            className="text-2xl bg-transparent text-black dark:text-white hover:bg-transparent cursor-pointer"
            size="icon"
          >
            <HiOutlineMenu />
          </Button>
          <Image src="/logo.png" width={100} height={100} alt="logo" />
        </div>
        <Sidebar
          customClasses={
            sidebar
              ? "top-0 left-0 bg-background dark:bg-[#121212] shadow-xl"
              : "-left-full"
          }
        />
      </div>
    </>
  );
};

export default Navbar;
