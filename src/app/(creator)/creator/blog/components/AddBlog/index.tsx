"use client";
import React, { useState } from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "@/components/ui/animated-modal";
import { Plus } from "lucide-react";
import BlogLeftSide from "./BlogLeftSide";
import BlogRightSide from "./BlogRightSide";

export const initialFormData = {
  title: "",
  isFeatured: false,
  thumbnail: "",
  shortDescription: "",
  description: "",
};

const AddBlog = () => {
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
            <Plus /> Add Blog
          </ModalTrigger>
          <ModalBody modalTitle="Add Blog">
            <ModalContent className="bg-slate-900 overflow-y-scroll">
              <div className="flex  justify-between gap-8 w-full">
                {/* Left side */}
                <BlogLeftSide
                  setFormData={setFormData}
                  handleInputChange={handleInputChange}
                  formData={formData}
                />

                {/* Right Side */}
                <BlogRightSide
                  setIsModalOpen={setIsModalOpen}
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

export default AddBlog;
