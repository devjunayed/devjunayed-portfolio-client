/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "@/components/ui/animated-modal";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import { TProjectData } from "@/types";

export const initialFormData = {
  projectTitle: "",
  isFeatured: false,
  projectThumbnail: "",
  projectClientViewLink: "",
  projectServerViewLink: "",
  projectClientCodeLink: "",
  projectServerCodeLink: "",
  projectDescription: "",
  projectShortDescription: "",
  projectTags: [] as string[],
  projectTechnologies: [] as string[],
};

const ProjectForm = ({
  initialValue,
  modalOpen,
  setIsOpen,
  triggerButton,
  onSubmit,
}: {
  initialValue?: any;
  modalOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>,
  triggerButton: React.ReactNode,
  onSubmit: (data: TProjectData , id?: string) => void;
}) => {
  const initialData = initialValue || initialFormData;

  const [formData, setFormData] = useState(initialData);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData: any) => ({ ...prevData, [name]: value }));
  };

  return (
    <>
      <div className="flex justify-end text-white">
        <Modal open={modalOpen} setIsOpen={setIsOpen}>
          <ModalTrigger>
            {triggerButton}
          </ModalTrigger>
          <ModalBody modalTitle="Add Project">
            <ModalContent className="bg-slate-900 overflow-y-scroll">
              <div className="flex  justify-between gap-8 w-full">
                {/* Left side */}
                <LeftSide
                  setFormData={setFormData}
                  handleInputChange={handleInputChange}
                  formData={formData}
                />

                {/* Right Side */}
                <RightSide
                  onSubmit={onSubmit}
                  initialData={initialData}
                  formData={formData}
                  setFormData={setFormData}
                  setIsOpen={setIsOpen}
                />
              </div>
            </ModalContent>
          </ModalBody>
        </Modal>
      </div>
    </>
  );
};

export default ProjectForm;
