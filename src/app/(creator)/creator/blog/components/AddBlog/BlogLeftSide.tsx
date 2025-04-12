"use client";

import { TBlogData } from "@/types";
import { joditMinimalConfig } from "@/utils/joditConfig";
import { Input, Textarea } from "@heroui/react";
import {  PencilIcon, Text} from "lucide-react";
import dynamic from "next/dynamic";
const JoditEditor = dynamic(() => import("jodit-react"), {
    ssr: false, // Disable server-side rendering
  });

interface TBlogLeftSide{
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    formData: TBlogData;
    setFormData: React.Dispatch<React.SetStateAction<TBlogData>>;
}

const BlogLeftSide = ({handleInputChange, formData, setFormData}: TBlogLeftSide) => {
  return (
    <div className="w-9/12 border-r-2 pr-8 border-white">
      <div className="space-y-3 flex flex-col ">
        {/* Blog Title */}

        <Input
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          labelPlacement="outside"
          placeholder="Blog Title"
          endContent={
            <PencilIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
          }
          type="text"
        />

      
        {/* Short Description */}
        <Textarea
          name="shortDescription"
          value={formData.shortDescription}
          onChange={handleInputChange}
          rows={6}
          endContent={
            <Text className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
          }
          placeholder="Blog Short Description"
        ></Textarea>
        {/*  Description */}

        <div className="rounded-xl p-4 bg-white">
          <JoditEditor
            value={formData.description}
            config={joditMinimalConfig}
            className="w-full h-full border-none"
            onBlur={(value) =>
              setFormData((prev: TBlogData) => ({
                ...prev,
                description: value,
              }))
            }
          />
        </div>
      </div>
    </div>
  );
};

export default BlogLeftSide;
