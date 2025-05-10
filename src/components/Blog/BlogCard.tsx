import { TBlogData } from "@/types";
import React from "react";
import Image from "next/image";
import UiVerseButton from "../ui/LinkButton/UiVerseButton";
import { Eye } from "lucide-react";

const BlogCard = ({ blog }: { blog: TBlogData }) => {
  return (
    <div className="  shadow-inner gap-4 flex flex-col  rounded-xl shadow-gray-400  p-4">
      <div className="w-full   h-56 relative rounded-lg">
        <Image src={blog.thumbnail} alt={blog.title} fill />
      </div>
      <div className="w-full  items-center justify-center">
        <div className=" items-center  gap-2 flex">
          <Image
            src="/images/image.png"
            className="rounded-full    shadow-inner shadow-white"
            alt="image"
            height={30}
            width={30}
          />
          <p>Md Junayed</p>
        </div>
        <div className="flex flex-col justify-center h-full">
          <h3 className="text-lg mb-2 ">{blog.title}</h3>
          {/* <p className="">{blog.shortDescription.slice(0, 120)}...</p> */}

          <div className="flex justify-center items-center pb-4 ">
            <UiVerseButton
              icon={<Eye color="black"/>}
              href={`/blogs/${blog._id}`}
              text="Read More"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
