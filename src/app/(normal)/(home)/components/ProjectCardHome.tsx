import React, { useState } from "react";
import { WobbleCard } from "@/components/ui/wobble-card";
import { TProjectData } from "@/types";
import UiVerseButton from "@/components/ui/LinkButton/UiVerseButton";
import { IconEye } from "@tabler/icons-react";
import { InfoIcon } from "lucide-react";
import { Modal } from "antd";

const ProjectCardHome = ({ project }: { project: TProjectData }) => {
  const [modalOpen, setIsModalOpen] = useState(false);
  return (
    <WobbleCard containerClassName="border border-white bg-transparent w-full h-full flex flex-col">
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
            {project.projectShortDescription}
          </p>

          <div></div>
          {/* Buttons at the bottom-left of the card */}

          <div className=" flex gap-2 md:gap-4 justify-center items-center p-4">
            <Modal
              classNames={{body: "black" , }}
              className="bg-transparent"
              title={project.projectTitle}
              width={{
                xs: "95%",
                sm: "95%",
                md: "95%",
                lg: "95%",
                xl: "95%",
                xxl: "95%",
              }}
              style={{backgroundColor: "transparent", top: 20}}
              open={modalOpen}
              onOk={() => setIsModalOpen(false)}
              onCancel={() => setIsModalOpen(false)}
              footer={null}
            >
              <iframe
                className="w-full min-h-[85vh]"
                src={project.projectClientViewLink}
              ></iframe>
            </Modal>
            <UiVerseButton
              onClick={() => setIsModalOpen(true)}
              icon={<IconEye />}
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
