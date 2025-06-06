"use client";
import FileUpload from "@/components/ui/FileUpload/file-upload";
import { TProjectData } from "@/types";
import { tags } from "@/data/tags";
import React, { useState } from "react";
import SelectableSearch from "./SelectableSearch";
import { technologies } from "@/data/technologies";

interface TRightSide {
  formData: TProjectData;
  setFormData: React.Dispatch<React.SetStateAction<TProjectData>>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmit: (data: TProjectData , id?: string ) => void;
  initialData: TProjectData;
}

const RightSide = ({
  formData,
  setFormData,
  setIsOpen,
  initialData,
  onSubmit,
}: TRightSide) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [resetKey, setResetKey] = useState(`${Date.now().toString()}`);

  const resetForm = () => {
    setFormData(initialData);
  };

  const handleSubmit = () => {
    if (initialData._id) {
      onSubmit(formData, initialData._id);
    } else {
      onSubmit(formData);
    }
    resetForm();
    setResetKey(`${Date.now().toString()}`);
    setIsOpen(false)
  };

  const handleFileUpload = (imageUrls: string[]) => {
    if (imageUrls.length > 0) {
      setFormData((prev: TProjectData) => ({
        ...prev,
        projectThumbnail: imageUrls[0],
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

      <SelectableSearch
        label="Select Tag"
        placeholder="Search Tags.."
        fieldName={"projectTags"}
        formData={formData}
        items={tags}
        setFormData={setFormData}
      />
      <SelectableSearch
        label="Select Tech"
        placeholder="Search Tech..."
        fieldName={"projectTechnologies"}
        formData={formData}
        items={technologies}
        setFormData={setFormData}
      />

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
          Add Project
        </button>
      </div>
    </div>
  );
};

export default RightSide;
