"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { GoUnmute } from "react-icons/go";
import { HiPause } from "react-icons/hi2";
import { RiVolumeMuteFill } from "react-icons/ri";

const VideoCard = ({ post }: any) => {
  const [followUser, setFollowUser] = useState(false);
  const [isVideoplaying, setIsVideoPlaying] = useState(false);
  const [isVideoMuted, setIsVideoMuted] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  const onVideoPlay = () => {
    isVideoplaying
      ? (videoRef?.current?.pause(), setIsVideoPlaying(false))
      : (videoRef?.current?.play(), setIsVideoPlaying(true));
  };

  const onVideoMute = () => {
    if (videoRef?.current) {
      videoRef.current.muted = !isVideoMuted;
      setIsVideoMuted(!isVideoMuted);
    }
  };

  return (
    <div className="flex items-start gap-3 w-full py-5 pr-5 pl-5 sm:pl-0 border-b border-muted-foreground/50">
      <Link href={"/"}>
        <Image
          src={post.postedBy.image}
          alt={post.postedBy.name}
          width={60}
          height={60}
          className="rounded-full object-cover object-top"
        />
      </Link>

      <div className="flex flex-col gap-5 w-full">
        <div className="flex items-start justify-between gap-5">
          <div className="flex-1">
            <Link
              href={"/"}
              className="font-bold text-[1.15rem] hover:underline"
            >
              {post.postedBy.username}{" "}
              <span className="text-sm font-normal text-black/50 dark:text-white/50 hover:no-underline">
                {post.postedBy.name}
              </span>
            </Link>

            <p>
              {post.caption}{" "}
              <span className="pl-1 text-[#2B5DC0] font-semibold">
                {post.hashtag}
              </span>
            </p>
          </div>

          <div className="flex-2">
            <button
              onClick={() => setFollowUser(!followUser)}
              className="rounded py-[.35rem] px-5 border border-lightpink font-semibold bg-transparent w-full text-lightpink hover:text-lightpink hover:bg-lightpink/5 text-[1.1rem]"
            >
              {followUser ? "Following" : "Follow"}
            </button>
          </div>
        </div>

        <div
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          className="relative w-80 cursor-pointer"
        >
          <video
            loop
            ref={videoRef}
            onClick={onVideoPlay}
            className="w-full aspect-auto rounded-xl bg-black cursor-pointer"
          >
            <source src={post.video.asset.url} type="video/mp4" />
          </video>

          {isHover && (
            <div className="flex items-center justify-between absolute bottom-10 px-5 w-full">
              {isVideoplaying ? (
                <HiPause
                  onClick={onVideoPlay}
                  className="text-3xl text-white cursor-pointer"
                />
              ) : (
                <BsFillPlayFill
                  onClick={onVideoPlay}
                  className="text-3xl text-white cursor-pointer"
                />
              )}

              {isVideoMuted ? (
                <RiVolumeMuteFill
                  onClick={onVideoMute}
                  className="text-xl text-white cursor-pointer"
                />
              ) : (
                <GoUnmute
                  onClick={onVideoMute}
                  className="text-xl text-white cursor-pointer"
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
