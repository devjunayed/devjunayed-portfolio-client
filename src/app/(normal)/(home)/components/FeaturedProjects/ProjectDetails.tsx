import { TProjectData } from "@/types";
import { IconBrandGithub } from "@tabler/icons-react";
import { Image } from "antd";
import { LinkIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import Parse from 'html-react-parser'
import { Chip } from "@heroui/react";

interface TProjectDetails{
    project: TProjectData
}

const ProjectDetails = ({project}: TProjectDetails) => {
  return (
    <div className="h-[96vh] overflow-y-scroll">
      <div
        className={`w-full bg-cover bg-top  relative h-[200px] md:h-[470px] transition-all   hover:bg-bottom linear  bg-image-scroll`}
        style={{
          backgroundImage: `url(${project.projectThumbnail})`,
        }}
      ></div>
      <div className="md:mt-4 mt-2 justify-center flex flex-wrap gap-1 md:gap-2">
        {project.projectTags.map((tag, index) => (
          <Chip className="bg-white" key={`tag${index}`}>
            {tag}
          </Chip>
        ))}
      </div>
      <div className="flex gap-4 my-6 items-center justify-center">
        <Link className="btn text-white " href={project.projectClientViewLink}>
          <LinkIcon /> Live
        </Link>
        <Link className="btn text-white " href={project.projectClientCodeLink}>
          <IconBrandGithub /> Client Code
        </Link>
        <Link className="btn text-white " href={project.projectServerCodeLink}>
          <IconBrandGithub /> Server Code
        </Link>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">Technologies used</h2>
        <div>
          {project.projectTechnologies.map((tech, index) => {
            return (
              <Image
                alt={tech}
                width={70}
                height={70}
                src={`https://skillicons.dev/icons?i=react}`}
                key={index}
              />
            );
          })}
        </div>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-4">Project Description</h2>
        <div>{Parse(project.projectDescription)}</div>
      </div>
    </div>
  );
};

export default ProjectDetails;
