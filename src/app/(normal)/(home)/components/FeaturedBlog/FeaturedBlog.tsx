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
    <div className="mx-6">
        <Heading title="Featured Blog" />
      <div>
        {data && data.length > 0 && (
          <FeaturedBlogCard items={data} direction="left" speed="slow" />
        )}
      </div>
    </div>
  );
};

export default FeaturedBlog;
