"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { SaveIcon } from "lucide-react";
import { useCreateBlog } from "@/hooks/blog.hook";
import { CircleLoader } from "react-spinners";

const JoditEditor = dynamic(() => import("jodit-react"), {
  ssr: false, // Disable server-side rendering
});

const Page = () => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const { mutate: handleCreateBlog, isPending } = useCreateBlog();

  const config = {
    
    readonly: false,
    placeholder: "Start typing...",
  };

  const handleSave = () => {
    handleCreateBlog({ title, shortDescription, thumbnail, description: content });
  };

  return (
    <div className="pt-2">
      <div className="w-full">
        <div className="flex justify-end">
          <button
            onClick={handleSave}
            className="btn hover:bg-green-800 text-white bg-green-500 mb-4"
          >
            {isPending ? (
              <div className="flex items-center gap-4">
                <CircleLoader size={24} color="white" /> Saving
              </div>
            ) : (
              <>
                <SaveIcon /> Save
              </>
            )}
          </button>
        </div>
        <div className="flex mb-2 gap-2">
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            value={title}
            className="w-1/2 input text-white focus:border-none border-none focus:outline-none"
            placeholder="Enter title here"
          />
          <input
            onChange={(e) => setThumbnail(e.target.value)}
            type="text"
            value={thumbnail}
            className="w-1/2 input text-white focus:border-none border-none focus:outline-none"
            placeholder="Enter thumbnail link here"
          />
        </div>
        <div className="flex gap-2">
          <textarea
            onChange={(e) => setShortDescription(e.target.value)}
            value={shortDescription}
            className="w-full textarea min-h-[10vh] text-white focus:border-none border-none focus:outline-none"
            placeholder="Enter short description here"
          />
        </div>
        <div className="h-[50vh] w-full mt-4 overflow-auto bg-black  rounded-md">
          <JoditEditor

            value={content}
            config={config}
            className="w-full h-full px-20 bg-black"
            onBlur={(newContent) => setContent(newContent)}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
