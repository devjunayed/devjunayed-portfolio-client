import React from "react";
import { useGetAllBlog } from "@/hooks/blog.hook";
import { BlogCard } from "./BlogCard";

const AllBlog = () => {
  const { data: blogData } = useGetAllBlog();
  return (
    <div className=" flex justify-center overflow-scroll h-[86vh] flex-wrap gap-4 mt-4">
      {blogData?.map((blog, index) => (
        <BlogCard key={index} blog={blog} />
      ))}
    </div>
  );
};

export default AllBlog;
