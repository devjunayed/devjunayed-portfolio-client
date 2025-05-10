import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";
import { TProjectData } from "@/types";
import WobbleCardTextSection from "./WobbleCardTextSection";

const ProjectCardHome = ({ project }: { project: TProjectData }) => {
  return (
    <WobbleCard containerClassName="border border-white bg-transparent w-full h-full flex flex-col">
      {/* Flex container for content */}
      <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-6 w-full h-full flex-grow relative">
        {/* Text Section */}
        <WobbleCardTextSection project={project} />

        {/* Image Section */}
        <div
          className={`w-full bg-cover bg-top  md:w-1/2 relative h-[200px] md:h-[300px] transition-all   hover:bg-bottom linear  bg-image-scroll`}
          style={{
            backgroundImage: `url(${project.projectThumbnail})`,
          }}
        ></div>
      </div>
    </WobbleCard>
  );
};

export default ProjectCardHome;
