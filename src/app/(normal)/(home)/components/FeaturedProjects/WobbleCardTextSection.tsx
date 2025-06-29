import { Chip } from "@heroui/react";
import ProjectModal from "./ProjectModal";
import UiVerseButton from "@/components/ui/LinkButton/UiVerseButton";
import { TProjectData, TProjectTag } from "@/types";
import ProjectDetails from "./ProjectDetails";
import { IconEye } from "@tabler/icons-react";
import { InfoIcon } from "lucide-react";
import { useState } from "react";

interface TWobbleCardTextSection {
  project: TProjectData;
}

const WobbleCardTextSection = ({ project }: TWobbleCardTextSection) => {
  const [open, setIsOpen] = useState(false);
  const [singleOpen, setIsSingleOpen] = useState(false);
  return (
    <div className="w-full flex flex-col h-[400px] md:w-1/2 flex-grow">
      {/* Title */}
      <h2 className="text-left text-lg md:text-xl lg:text-xl font-semibold tracking-[-0.015em] text-white font-mono">
        {project.projectTitle}
      </h2>

      {/* Tags */}
      <div className="md:mt-4 mt-2 flex flex-wrap gap-1 md:gap-2">
        {project.projectTags.map((tag: TProjectTag, index) => (
          <Chip key={`tag${index}`}>{tag.title}</Chip>
        ))}
      </div>
      {/* Description */}
      <p className="mt-4  flex   text-left text-sm md:text-base lg:text-lg text-neutral-200">
        {project.projectShortDescription}
      </p>

      {/* <div className="md:mt-4 mt-2 flex md:gap-1 items-center text-white">
            <p>Used Tech :</p>
            <div className="flex md:gap-1">
              {project.projectTechnologies.map((tech, index) => (
                <Chip variant="shadow" color="secondary" key={`tech${index}`}>
                  {tech}
                </Chip>
              ))}
            </div>
          </div> */}
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
          <ProjectDetails project={project} />
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
  );
};

export default WobbleCardTextSection;
