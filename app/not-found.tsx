import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsPlayFill } from "react-icons/bs";

const NotFound = () => {
  return (
    <div className="bg-[url('/error-bg.png')] bg-cover bg-center h-screen w-full flex items-center justify-center flex-col gap-5">
      <div className="flex items-center justify-center -my-12 sm:-my-16 lg:-my-20">
        <h2 className="text-[160px] sm:text-[220px] md:text-[300px] font-medium">
          4
        </h2>
        <Image
          src="/error.png"
          alt="404"
          width={500}
          height={500}
          className="w-[150px] sm:w-[220px] md:w-[270px] md:h-[270px]"
        />
        <h2 className="text-[160px] sm:text-[220px] md:text-[300px] font-medium">
          4
        </h2>
      </div>
      <p className="text-[#888B91] text-lg sm:mb-5">Couldn't find this page</p>
      <h2 className="text-base text-center sm:text-2xl font-bold">
        Check out more trending videos on TikTok
      </h2>
      <Link
        href="/"
        className="w-72 sm:w-96 text-center rounded-sm py-3 font-semibold bg-lightpink hover:bg-[#F02A50] text-white flex items-center justify-center gap-2"
      >
        <BsPlayFill className="text-2xl" />
        <p className="text-xl">Watch now</p>
      </Link>
    </div>
  );
};

export default NotFound;
