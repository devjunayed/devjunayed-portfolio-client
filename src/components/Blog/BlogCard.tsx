import { TBlogData } from "@/types";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import ProfileImg from "@/assets/image.png";

const BlogCard = ({ blog }: { blog: TBlogData }) => {
  return (
    <div className=" md:mx-32 shadow-inner gap-4 flex flex-col lg:flex-row rounded-xl shadow-gray-400 mb-10 p-4">
      <div className="w-full lg:w-1/2 lg:h-auto h-56 relative rounded-lg">
        <Image src={blog.thumbnail} alt={blog.title} fill />
      </div>
      <div className="w-full lg:w-1/2 lg:min-h-60 items-center justify-center">
        <div className="mb-2 items-center  gap-2 flex">
          <Image
            src={ProfileImg}
            className="rounded-full    shadow-inner shadow-white"
            alt="image"
            height={30}
            width={30}
          />
          <p>Md Junayed</p>
        </div>
        <div className="flex flex-col justify-center h-full">
          <h3 className="text-xl mb-2">{blog.title}</h3>
          <p className="">{blog.shortDescription}...</p>

          <div className="flex justify-center items-center ">
            <Link
              href={`/blogs/${blog._id}`}
              className="mt-4  inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
