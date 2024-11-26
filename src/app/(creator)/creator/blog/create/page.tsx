"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";

const JoditEditor = dynamic(() => import("jodit-react"), {
  ssr: false, // Disable server-side rendering
});

const Page = () => {
  const [content, setContent] = useState("");

  console.log(content);

  const config = {
    readonly: false,
    placeholder: "Start typing...",
  };

  return (
    <div className="w-full pt-10 px-10">
      <input
        type="text"
        className="w-full input"
        placeholder="Enter title here"
      />
      <div className="h-[70vh] overflow-y-scroll">
        <JoditEditor
          value={content}
          config={config}
          tabIndex={1} // tabIndex of textarea
          onBlur={(newContent) => setContent(newContent)} // Handle content update
        />
      </div>
    </div>
  );
};

export default Page;
