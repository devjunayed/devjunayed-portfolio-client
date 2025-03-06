"use client";
import React, { useState } from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "@/components/ui/animated-modal";
import { Plus } from "lucide-react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

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

const AddProjects = () => {
  const [modalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <>
      <div className="flex justify-end text-white">
        <Modal open={modalOpen} setIsOpen={setIsModalOpen}>
          <ModalTrigger className="btn text-white rounded-2xl bg-transparent border border-white">
            <Plus /> Add Projects
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
                  initialFormData={initialFormData}
                  formData={formData}
                  setFormData={setFormData}
                />
              </div>
            </ModalContent>
          </ModalBody>
        </Modal>
      </div>
    </>
  );
};

export default AddProjects;
