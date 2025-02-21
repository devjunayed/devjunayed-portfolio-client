/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import BlogCard from "@/components/Blog/BlogCard";
import Loading from "@/components/Shared/Loading";
import envConfig from "@/config/envConfig";
import { TBlogData } from "@/types";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { CircleLoader } from "react-spinners";

const Page = () => {
  const [blogData, setBlogData] = useState<TBlogData[]>([]);
  const [blogCount, setBlogCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const response = await fetch(
        `${envConfig.baseApi}/blog?page=${page}&limit=5`,
        {
          cache: "no-store",
        }
      );
      const data = await response.json();

      // Append new blogs to the existing ones
      setBlogData((prev) => [...prev, ...data.data]);
      setBlogCount(data.totalDocument);

      // Increment page for the next fetch
      setPage((prev) => prev + 1);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      if (isLoading) {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="text-white mx-4 mt-20 min-h-screen overflow-y-hidden pb-10">
      <InfiniteScroll
        dataLength={blogData.length}
        next={fetchData}
        hasMore={blogData.length < blogCount}
        loader={
          <div className="flex justify-center text-white">
            <CircleLoader color="white" />
          </div>
        }
        endMessage={
          <p style={{ textAlign: "center" }}>
            {blogData.length === blogCount && <b>Yay! You have seen it all</b>}
          </p>
        }
      >
        {blogData.map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default Page;
