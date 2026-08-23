import { TProjectData } from "@/types";
import { Database, LayoutTemplate, LinkIcon, Server } from "lucide-react";
import Link from "next/link";
import React from "react";
import Parse from "html-react-parser";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { IoLogoGithub } from "react-icons/io";

interface TProjectDetails {
  project: TProjectData;
}

const ProjectDetails = ({ project }: TProjectDetails) => {
  console.log(project);
  return (
    <div className="h-[70vh] overflow-y-scroll">
      <div
        className={`w-full bg-cover bg-top  relative h-20 md:h-90 transition-all   hover:bg-bottom linear  bg-image-scroll`}
        style={{
          backgroundImage: `url(${project.projectThumbnail})`,
        }}
      ></div>
      <div className="md:mt-4 mt-2 justify-center flex flex-wrap gap-1 md:gap-2">
        {project.projectTags.map((tag, index) => (
          <Badge className="bg-black" key={`tag${index}`}>
            {tag.title}
          </Badge>
        ))}
      </div>
 
      <div className="mb-4">
        <h2 className="text-xl text-gray-300 font-bold mb-4">
          Used Technologies
        </h2>
        <div className="flex gap-2">
          {project.projectTechnologies.map((tech, index) => (
            <Tooltip key={index}>
              <TooltipTrigger>
                <Image
                  alt={tech.title}
                  width={50}
                  height={50}
                  src={tech.icon}
                />
              </TooltipTrigger>
              <TooltipContent side="top">
                <p>{tech.title}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-xl text-gray-300 font-bold mb-4">
          Project Description
        </h2>
        <div className="bg-black rounded text-gray-300 p-4">
          {Parse(project.projectDescription)}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
