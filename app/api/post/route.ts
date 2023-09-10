import { client } from "@/utils/client";
import { allPostsQuery } from "@/utils/queries";
import { NextResponse } from "next/server";
export const GET = async () => {
  try {
    const query = allPostsQuery();
    const data = await client.fetch(query);
    return new NextResponse(data, { status: 200 });
  } catch (error) {
    console.error("Error fetching data:", error);
    return new NextResponse({ error: "Failed to fetch data" }, { status: 500 });
  }
};
