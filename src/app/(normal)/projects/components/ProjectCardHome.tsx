import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";
import { TProjectData } from "@/types";
import Image from "next/image";
import { Eye, Info } from "lucide-react";
import LinkButton from "@/components/ui/LinkButton/LinkButton";

const ProjectCardHome = ({ project }: { project: TProjectData }) => {
  return (
    <WobbleCard containerClassName="border border-white bg-transparent w-full">
      <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-6 w-full h-full">
        {/* Text Section */}
        <div className="w-full flex items-center flex-col justify-between h-full md:w-1/2">
          <div className="flex-grow">
            <h2 className="text-left text-balance text-lg md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              {project.projectTitle}
            </h2>
            <p className="mt-4 text-left text-sm md:text-base lg:text-lg text-neutral-200 ">
              {project.projectDescription}
            </p>
          </div>

          {/* Buttons - Stick to Bottom */}
          <div className="mt-auto flex-grow flex gap-1 md:gap-4 justify-center items-center pt-4">
            <LinkButton icon={<Eye />} href={`/projects/${project._id}`} btnText="Preview" />
            <LinkButton icon={<Info />} href="" btnText="Details" />
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 relative">
          <Image
            src={project.projectThumbnail}
            layout="responsive"
            width={800} // Original image width
            height={600} // Original image height
            alt="Project image"
            className="w-full h-auto object-cover rounded-2xl"
          />
        </div>
      </div>
    </WobbleCard>
  );
};

export default ProjectCardHome;
