import Link from "next/link";

import { footerLink1, footerLink2, footerLink3 } from "@/constants/index";
import { Line } from "./Sidebar";

const FooterLinks = ({ links, text }: { links: string[]; text: string }) => {
  return (
    <div className="flex flex-col sm:flex-row flex-wrap">
      <p className="block sm:hidden text-[#A49B91] dark:text-[#898989] text-xs pb-2 pl-1 font-semibold">
        {text}
      </p>
      {links.map((link) => (
        <Link
          href={"/"}
          key={link}
          className="text-sm sm:text-xs sm:font-semibold sm:text-[#A49B91] sm:dark:text-[#898989] hover:underline ml-[.22rem] leading-loose sm:leading-relaxed whitespace-break-spaces"
        >
          {link}
        </Link>
      ))}
    </div>
  );
};

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <div className="relative pt-4 flex flex-col gap-8 sm:gap-3">
      <Line />

      <FooterLinks links={footerLink1} text="Company" />
      <FooterLinks links={footerLink2} text="Programs" />
      <FooterLinks links={footerLink3} text="Resources" />
      <p className="text-xs sm:text-[#A49B91] sm:dark:text-[#898989] leading-relaxed font-semibold">
        © {date} TikTok -{" "}
        <Link
          href={"https://www.linkedin.com/in/naseem-khan-275275258/"}
          target="_blank"
          className="hover:underline whitespace-break-spaces"
        >
          Naseem Khan
        </Link>
      </p>
    </div>
  );
};

export default Footer;
