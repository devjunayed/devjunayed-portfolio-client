import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";
import { TProjectData } from "@/types";
import Image from "next/image";
import UiVerseButton from "@/components/ui/LinkButton/UiVerseButton";
import { IconEye } from "@tabler/icons-react";
import { InfoIcon } from "lucide-react";

const ProjectCardHome = ({ project }: { project: TProjectData }) => {
  console.log(project)
  return (
    <WobbleCard containerClassName="border border-white bg-transparent w-full h-full flex flex-col">
      kire bokachoda
      {/* Flex container for content */}
      <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-6 w-full h-full flex-grow relative">
        {/* Text Section */}
        <div className="w-full flex flex-col h-[400px] md:w-1/2 flex-grow">
          {/* Title */}
          <h2 className="text-left text-lg md:text-xl lg:text-xl font-semibold tracking-[-0.015em] text-white">
            {project.projectTitle}
          </h2>

          {/* Description */}
          <p className="mt-4 flex-grow flex   text-left text-sm md:text-base lg:text-lg text-neutral-200">
            {project.projectDescription}
          </p>
          {/* Buttons at the bottom-left of the card */}

          <div className=" flex gap-2 md:gap-4 justify-center items-center p-4">
            <UiVerseButton
              icon={<IconEye />}
              href={project.projectClientViewLink}
              text="Preview"
            />
            <UiVerseButton
              icon={<InfoIcon />}
              href={`/projects/${project._id}`}
              text="Details"
            />
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 relative h-[400px]">
          <Image
            src={project.projectThumbnail}
            fill
            alt="Project image"
            className="w-full  object-cover rounded-2xl"
          />
        </div>
      </div>
    </WobbleCard>
  );
};

export default ProjectCardHome;
