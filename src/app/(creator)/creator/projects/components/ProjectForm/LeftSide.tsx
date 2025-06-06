"use client";

import { TProjectData } from "@/types";
import { joditMinimalConfig } from "@/utils/joditConfig";
import { Input, Textarea } from "@heroui/react";
import { Code, PencilIcon, Text, View, ViewIcon } from "lucide-react";
import dynamic from "next/dynamic";
const JoditEditor = dynamic(() => import("jodit-react"), {
    ssr: false, // Disable server-side rendering
  });

interface TLeftSide{
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    formData: TProjectData;
    setFormData: React.Dispatch<React.SetStateAction<TProjectData>>;
}

const LeftSide = ({handleInputChange, formData, setFormData}: TLeftSide) => {
  console.log(formData)
  return (
    <div className="w-9/12 border-r-2 pr-8 border-white">
      <div className="space-y-3 flex flex-col ">
        {/* Project Title */}

        <Input
          name="projectTitle"
          value={formData.projectTitle}
          defaultValue={formData.projectTitle}

          onChange={handleInputChange}
          labelPlacement="outside"
          placeholder="Project Title"
          endContent={
            <PencilIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
          }
          type="text"
        />

        <div className="flex gap-4 w-full">
          {/* Client View Link */}
          <Input
            name="projectClientViewLink"
            value={formData.projectClientViewLink}
            onChange={handleInputChange}
            className="w-1/2"
            labelPlacement="outside"
            placeholder="Client View Link"
            startContent={
              <div className="pointer-events-none flex items-center">
                <span className="text-default-400 text-small">https://</span>
              </div>
            }
            endContent={
              <View className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
            type="text"
          />{" "}
          {/* Server View Link */}
          <Input
            name="projectServerViewLink"
            value={formData.projectServerViewLink}
            onChange={handleInputChange}
            className=" w-1/2"
            labelPlacement="outside"
            placeholder="Server View Link"
            startContent={
              <div className="pointer-events-none flex items-center">
                <span className="text-default-400 text-small">https://</span>
              </div>
            }
            endContent={
              <ViewIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
            type="text"
          />
        </div>

        <div className="flex gap-4 w-full">
          {/* Client Code Link */}

          <Input
            name="projectClientCodeLink"
            value={formData.projectClientCodeLink}
            onChange={handleInputChange}
            className=" w-1/2"
            labelPlacement="outside"
            placeholder="Client Code Link"
            startContent={
              <div className="pointer-events-none flex items-center">
                <span className="text-default-400 text-small">https://</span>
              </div>
            }
            endContent={
              <Code className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
            type="text"
          />
          {/* Server Code Link */}

          <Input
            name="projectServerCodeLink"
            value={formData.projectServerCodeLink}
            onChange={handleInputChange}
            className=" w-1/2"
            labelPlacement="outside"
            placeholder="Server Code Link"
            startContent={
              <div className="pointer-events-none flex items-center">
                <span className="text-default-400 text-small">https://</span>
              </div>
            }
            endContent={
              <Code className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
            type="text"
          />
        </div>
        {/* Short Description */}
        <Textarea
          name="projectShortDescription"
          value={formData.projectShortDescription}
          onChange={handleInputChange}
          rows={6}
          endContent={
            <Text className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
          }
          placeholder="Project Short Description"
        ></Textarea>
        {/*  Description */}

        <div className="rounded-xl p-4 bg-white">
          <JoditEditor
            value={formData.projectDescription}
            config={joditMinimalConfig}
            className="w-full h-full border-none"
            onBlur={(value) =>
              setFormData((prev: TProjectData) => ({
                ...prev,
                projectDescription: value,
              }))
            }
          />
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
