/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import BlogCard from "@/components/Blog/BlogCard";
import Loading from "@/components/Shared/Loading";
import envConfig from "@/config/envConfig";
import { TBlogData } from "@/types";
import React, { useEffect, useState, useRef } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { CircleLoader } from "react-spinners";

const Page = () => {
  const [blogData, setBlogData] = useState<TBlogData[]>([]);
  const [blogCount, setBlogCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);
  const pageRef = useRef(1); // ✅ Track page using useRef to avoid unnecessary re-renders

  const fetchData = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate delay
      const response = await fetch(
        `${envConfig.baseApi}/blog?page=${pageRef.current}&limit=5`,
        {
          cache: "no-store",
        }
      );
      const data = await response.json();

      console.log("API Response:", data.data); // ✅ Check for duplicate data

      // ✅ Ensure uniqueness before updating state
      setBlogData((prev) => {
        const uniqueBlogs = [
          ...prev,
          ...data.data.filter((blog: TBlogData) => !prev.some((prevBlog) => prevBlog._id === blog._id)),
        ];
        return uniqueBlogs;
      });

      setBlogCount(data.totalDocument);
      pageRef.current += 1; // ✅ Increment pageRef instead of state
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
    <div className="max-w-6xl text-white px-6 mx-auto  mt-20 min-h-screen overflow-y-hidden pb-10">
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
          <p className="mt-6" style={{ textAlign: "center" }}>
            {blogData.length === blogCount && <b>Yay! You have seen it all</b>}
          </p>
        }
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {blogData.map((blog) => (
            <>
            <BlogCard key={blog._id} blog={blog} />
            <BlogCard key={blog._id} blog={blog} />
            <BlogCard key={blog._id} blog={blog} />
            <BlogCard key={blog._id} blog={blog} />
            <BlogCard key={blog._id} blog={blog} />
            <BlogCard key={blog._id} blog={blog} />
            </>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Page;
