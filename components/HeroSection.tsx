"use client";

import NoResult from "@/components/NoResult";
import VideoCard from "@/components/VideoCard";
import { createOrGetUser } from "@/utils";
import { client } from "@/utils/client";
import { allPostsQuery } from "@/utils/queries";

const HeroSection = async () => {
  const query = allPostsQuery();
  const videos = await client.fetch(query);
  createOrGetUser();

  return (
    <div className="max-w-2xl ml-28 py-5">
      <div className="flex flex-col gap-5">
        {videos.length ? (
          videos.map((videos: any) => (
            <VideoCard post={videos} key={videos._id} />
          ))
        ) : (
          <NoResult text="No Videos" />
        )}
      </div>
    </div>
  );
};

export default HeroSection;
