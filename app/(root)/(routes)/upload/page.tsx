"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { MdCloudUpload } from "react-icons/md";

const page = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [videoAsset, setVideoAsset] = useState();

  const UploadVideo = async (e: any) => {};

  return (
    <div className="py-5">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="flex flex-col gap-5">
          <div>
            <h2 className="text-2xl font-bold">Upload Video</h2>
            <p className="text-black/30 dark:text-white/20 font-semibold">
              Post a video to your account
            </p>
          </div>

          <div className="max-w-7xl border-[3px] border-dashed border-darkgray hover:border-lightpink w-full m-auto rounded-lg cursor-pointer hover:bg-lightgray dark:hover:bg-white/5 px-5 pt-10 pb-6 relative">
            <div className="flex flex-col items-center gap-10">
              <div className="flex flex-col items-center">
                <span className="text-7xl text-black/10 dark:text-white/10">
                  <MdCloudUpload />
                </span>
                <h2 className="text-lg font-semibold">Upload Video</h2>
              </div>

              <div className="flex flex-col items-center gap-4 text-black/30 dark:text-white/20">
                <p>MP4 or WebM or ogg</p>
                <p>720x1280 or higher</p>
                <p>Upto 10 minutes</p>
                <p>Less than 2GB</p>
              </div>

              <div className="w-full relative">
                <Button className="w-full rounded-sm py-6 font-semibold text-base bg-lightpink hover:bg-[#F02A50] text-white">
                  Upload Video
                </Button>
              </div>
            </div>
            <input
              type="file"
              name="upload-video"
              onChange={UploadVideo}
              className="absolute top-0 left-0 w-full h-full block opacity-0 cursor-pointer"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default page;
