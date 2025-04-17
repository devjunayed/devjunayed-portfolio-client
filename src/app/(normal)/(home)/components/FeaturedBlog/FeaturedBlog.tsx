"use client";
import Heading from "@/components/Shared/Heading";
import { useGetFeaturedBlog } from "@/hooks/blog.hook";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FeaturedBlogCard } from "./FeaturedBlogCard";

const FeaturedBlog = () => {
  const { data } = useGetFeaturedBlog();

  return (
    <div className="mx-6 mt-10 min-h-96">
      {data && data.length > 0 && (
        <div>
          <Heading title="Featured Blog" />
          <FeaturedBlogCard  items={data} direction="left" speed="slow" />
        </div>
      )}
    </div>
  );
};

export default FeaturedBlog;
