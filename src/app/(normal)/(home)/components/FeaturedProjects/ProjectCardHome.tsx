import React, { useState } from "react";
import { WobbleCard } from "@/components/ui/wobble-card";
import { TProjectData } from "@/types";
import UiVerseButton from "@/components/ui/LinkButton/UiVerseButton";
import { IconBrandGithub, IconEye } from "@tabler/icons-react";
import { InfoIcon, LinkIcon } from "lucide-react";
import { Chip } from "@heroui/react";
import ProjectModal from "./ProjectModal";
import Parse from "html-react-parser";
import { Image } from "antd";
import Link from "next/link";

const ProjectCardHome = ({ project }: { project: TProjectData }) => {
  const [open, setIsOpen] = useState(false);
  const [singleOpen, setIsSingleOpen] = useState(false);
  return (
    <WobbleCard containerClassName="border border-white bg-transparent w-full h-full flex flex-col">
      {/* Flex container for content */}
      <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-6 w-full h-full flex-grow relative">
        {/* Text Section */}
        <div className="w-full flex flex-col h-[400px] md:w-1/2 flex-grow">
          {/* Title */}
          <h2 className="text-left text-lg md:text-xl lg:text-xl font-semibold tracking-[-0.015em] text-white font-mono">
            {project.projectTitle}
          </h2>

          {/* Tags */}
          <div className="md:mt-4 mt-2 flex flex-wrap gap-1 md:gap-2">
            {project.projectTags.map((tag, index) => (
              <Chip key={`tag${index}`}>{tag}</Chip>
            ))}
          </div>
          {/* Description */}
          <p className="mt-4 flex-grow flex   text-left text-sm md:text-base lg:text-lg text-neutral-200">
            {project.projectShortDescription}
          </p>

          <div className="md:mt-4 mt-2 flex md:gap-1 items-center text-white">
            <p>Used Tech :</p>
            <div className="flex md:gap-1">
              {project.projectTechnologies.map((tech, index) => (
                <Chip variant="shadow" color="secondary" key={`tech${index}`}>
                  {tech}
                </Chip>
              ))}
            </div>
          </div>
          {/* Buttons at the bottom-left of the card */}

          <div className=" flex gap-2 md:gap-4 justify-center items-center p-4">
            <ProjectModal
              title={project.projectTitle}
              modalOpen={open}
              setIsModalOpen={setIsOpen}
            >
              <iframe
                className="w-full min-h-[85vh]"
                src={project.projectClientViewLink}
              ></iframe>
            </ProjectModal>
            <ProjectModal
              title={project.projectTitle}
              modalOpen={singleOpen}
              setIsModalOpen={setIsSingleOpen}
            >
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
                  <Link
                    className="btn text-white "
                    href={project.projectClientViewLink}
                  >
                    <LinkIcon /> Live
                  </Link>
                  <Link
                    className="btn text-white "
                    href={project.projectClientCodeLink}
                  >
                    <IconBrandGithub /> Client Code
                  </Link>
                  <Link
                    className="btn text-white "
                    href={project.projectServerCodeLink}
                  >
                    <IconBrandGithub /> Server Code
                  </Link>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-4">Technologies used</h2>
                  <div>
                    {project.projectTechnologies.map((tech, index) => (
                      <Image
                        alt={tech}
                        src={`https://skillicons.dev/icons?i=${tech}`}
                        key={index}
                      />
                    ))}
                  </div>
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-4">
                    Project Description
                  </h2>
                  <p>{Parse(project.projectDescription)}</p>
                </div>
              </div>
            </ProjectModal>
            <UiVerseButton
              onClick={() => setIsOpen(true)}
              icon={<IconEye />}
              text="Preview"
            />
            <UiVerseButton
              onClick={() => setIsSingleOpen(true)}
              icon={<InfoIcon />}
              text="Details"
            />
          </div>
        </div>

        {/* Image Section */}
        <div
          className={`w-full bg-cover bg-top  md:w-1/2 relative h-[200px] md:h-[400px] transition-all   hover:bg-bottom linear  bg-image-scroll`}
          style={{
            backgroundImage: `url(${project.projectThumbnail})`,
          }}
        ></div>
      </div>
    </WobbleCard>
  );
};

export default ProjectCardHome;
