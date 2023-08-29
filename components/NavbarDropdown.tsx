import { SignOutButton, SignedIn, useAuth } from "@clerk/nextjs";
import { RxDotsVertical } from "react-icons/rx";
import { RiUserLine } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import { FiBookmark } from "react-icons/fi";
import { LuLogOut } from "react-icons/lu";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { ToggleTheme } from "./ToggleTheme";
import { BiHelpCircle } from "react-icons/bi";
import { MdOutlineKeyboard } from "react-icons/md";
import { HiLanguage } from "react-icons/hi2";

const NavbarDropdown = () => {
  const { isSignedIn } = useAuth();

  return (
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
          <HiLanguage className="text-xl" />
          English
        </DropdownMenuItem>
        <DropdownMenuItem>
          <BiHelpCircle className="text-xl" />
          Feedback and help
        </DropdownMenuItem>
        <DropdownMenuItem>
          <MdOutlineKeyboard className="text-xl" />
          Keyboard shortcuts
        </DropdownMenuItem>
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
  );
};

export default NavbarDropdown;
