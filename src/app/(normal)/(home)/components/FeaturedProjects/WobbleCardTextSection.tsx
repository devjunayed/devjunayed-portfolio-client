import { TProjectData, TProjectTag } from "@/types";
import ProjectDetails from "./ProjectDetails";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import Modal from "@/components/ui/modal/modal";
import { EyeIcon } from "lucide-react";

interface TWobbleCardTextSection {
  project: TProjectData;
}

const WobbleCardTextSection = ({ project }: TWobbleCardTextSection) => {
  const [open, setIsOpen] = useState(false);
  const [singleOpen, setIsSingleOpen] = useState(false);
  return (
    <div className="w-full flex flex-col h-100 md:w-1/2 grow">
      {/* Title */}
      <h2 className="text-left text-lg md:text-xl lg:text-xl font-semibold tracking-[-0.015em] text-white font-mono">
        {project.projectTitle}
      </h2>

      {/* Tags */}
      <div className="md:mt-4 mt-2 flex flex-wrap gap-1 md:gap-2">
        {project.projectTags.map((tag: TProjectTag, index) => (
          <Badge key={`tag${index}`}>{tag.title}</Badge>
        ))}
      </div>
      {/* Description */}
      <p className="mt-4  flex   text-left text-sm md:text-base lg:text-lg text-neutral-200">
        {project.projectShortDescription}
      </p>

    

      <div className=" flex gap-2 md:gap-4 justify-center items-center p-4">
        <Modal
          title={project.projectTitle}
          open={open}
          setOpen={setIsOpen}
          modalButtonText="Preview"
          openInNewTab={true}
          closeButton={true}
          openInNewTabUrl={project.projectClientViewLink}
        >
          <iframe
            className="w-full min-h-[70vh]"
            src={project.projectClientViewLink}
          ></iframe>
        </Modal>
        <Modal

          title={project.projectTitle}
          open={singleOpen}
          modalButtonIcon={<EyeIcon />}
          setOpen={setIsSingleOpen}
          modalButtonText="Details"
          webLink={project.projectClientViewLink}
          codeLinkClient={project.projectClientCodeLink || ""}
          codeLinkServer={project.projectServerCodeLink || ""}
          closeButton={true}

        >
          <ProjectDetails project={project} />
        </Modal>
        
      </div>
    </div>
  );
};

export default WobbleCardTextSection;
