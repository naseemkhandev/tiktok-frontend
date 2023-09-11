import { useUser } from "@clerk/nextjs";
import { client } from "./client";

export const createOrGetUser = async () => {
  const { user } = useUser();

  const newUserData = {
    _id: user?.id,
    _type: "user",
    name: user?.fullName,
    username: user?.username,
    image: user?.profileImageUrl,
  };

  const newUser = await client.fetch(`${newUserData}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  client.createIfNotExists(newUser);
};
