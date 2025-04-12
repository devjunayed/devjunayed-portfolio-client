"use client";
import FileUpload from "@/components/ui/FileUpload/file-upload";
import { useCreateBlog } from "@/hooks/blog.hook";
import { TBlogData } from "@/types";
import React, { useState } from "react";

interface TBlogRightSide {
  formData: TBlogData;
  setFormData: React.Dispatch<React.SetStateAction<TBlogData>>;
  initialFormData: TBlogData;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const BlogRightSide = ({ formData, setFormData, initialFormData, setIsModalOpen }: TBlogRightSide) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [resetKey, setResetKey] = useState(`${Date.now().toString()}`);

  const { mutate: handleCreateBlog } = useCreateBlog();
  const resetForm = () => {
    setFormData(initialFormData);
  };

  const handleSubmit = () => {
    handleCreateBlog(formData);
    setIsModalOpen(false)
    resetForm();
    setResetKey(`${Date.now().toString()}`);
  };

  const handleFileUpload = (imageUrls: string[]) => {
    if (imageUrls.length > 0) {
      setFormData((prev: TBlogData) => ({
        ...prev,
        thumbnail: imageUrls[0],
      }));
    }
  };

  return (
    <div className="flex  gap-2 flex-col w-3/12">
      <div className="text-center mx-auto mb-4  ">
        <FileUpload
          maxUpload={1}
          resetKey={resetKey}
          imgbbUrl={`https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`}
          handleFileUpload={handleFileUpload}
          className="text-white"
        />
      </div>

     
    
      <div className="flex items-center gap-2">
        <input
          id="isFeatured"
          checked={formData.isFeatured}
          onChange={() =>
            setFormData((prev) => ({
              ...prev,
              isFeatured: !prev.isFeatured,
            }))
          }
          name="isFeatured"
          type="checkbox"
        />
        <label htmlFor="isFeatured">Is featured</label>
      </div>
      {/* Submit Button */}

      <div className="flex mt-4 justify-center">
        <button
          className="btn bg-slate-900 rounded2xl  border border-white  w-28"
          onClick={handleSubmit}
        >
          Add Blog
        </button>
      </div>
    </div>
  );
};

export default BlogRightSide;
