import { BsEmojiSunglasses } from "react-icons/bs";
import { GiCakeSlice, GiGalaxy, GiLipstick } from "react-icons/gi";
import { FaPaw, FaMedal, FaGamepad, FaUsers } from "react-icons/fa";
import { GoHome, GoHomeFill } from "react-icons/go";
import { RiUserFill, RiUserLine } from "react-icons/ri";
import { BiPlus } from "react-icons/bi";
import { PiCodeBold } from "react-icons/pi";
import { MdExplore, MdMic, MdOutlineExplore } from "react-icons/md";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

export const topics = [
  {
    name: "development",
    icon: PiCodeBold,
  },
  {
    name: "comedy",
    icon: BsEmojiSunglasses,
  },
  {
    name: "gaming",
    icon: FaGamepad,
  },
  {
    name: "food",
    icon: GiCakeSlice,
  },
  {
    name: "dance",
    icon: GiGalaxy,
  },
  {
    name: "music",
    icon: MdMic,
  },
  {
    name: "beauty",
    icon: GiLipstick,
  },
  {
    name: "society",
    icon: FaUsers,
  },
  {
    name: "animals",
    icon: FaPaw,
  },
  {
    name: "sports",
    icon: FaMedal,
  },
];

export const bottomBar = [
  {
    name: "home",
    route: "/",
    iconOutline: GoHome,
    iconFill: GoHomeFill,
  },
  {
    name: "explore",
    route: "/explore",
    iconOutline: MdOutlineExplore,
    iconFill: MdExplore,
  },
  {
    name: "",
    route: "/upload",
    iconOutline: BiPlus,
    iconFill: BiPlus,
  },
  {
    name: "likes",
    route: "/likes",
    iconOutline: AiOutlineHeart,
    iconFill: AiFillHeart,
  },
  {
    name: "profile",
    route: "/profile",
    iconOutline: RiUserLine,
    iconFill: RiUserFill,
  },
];

export const footerLink1 = [
  "About",
  "Newsroom",
  "Store",
  "Contact",
  "Carrers",
  "ByteDance",
  "Creator Directory",
];
export const footerLink2 = [
  "TikTik for Good",
  "Advertise",
  "Developers",
  "Transparency",
  "TikTik Rewards",
];
export const footerLink3 = [
  "Help",
  "Safety",
  "Terms",
  "Privacy",
  "Creator Portal",
  "Community Guidelines",
];
