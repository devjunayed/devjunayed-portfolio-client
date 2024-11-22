"use client"
import React, { useState } from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "@/components/ui/animated-modal";
import { Plus } from "lucide-react";

const Page = () => {
  const [formData, setFormData] = useState({
    skillName: "",
    description: "",
    icon: "",
    category: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCategoryChange = (category: string) => {
    setFormData((prevData) => ({ ...prevData, category }));
  };

  const resetForm = () => {
    setFormData({
      skillName: "",
      description: "",
      icon: "",
      category: "",
    });
  };

  const handleSubmit = () => {
    console.log("Form Data:", formData);
    resetForm(); // Reset the form after submission
    // Add your API call or data submission logic here
  };

  return (
    <div>
      {/* Add Skill Modal */}
      <div className="flex justify-end">
        <Modal>
          <ModalTrigger className="btn rounded-md bg-transparent border border-white">
            <Plus /> Add Skills
          </ModalTrigger>
          <ModalBody>
            <ModalContent className="bg-slate-900">
              <div className="space-y-3 flex flex-col">
                {/* Skill Name */}
                <input
                  name="skillName"
                  value={formData.skillName}
                  onChange={handleInputChange}
                  className="input"
                  placeholder="e.g. React Js"
                  type="text"
                />
                {/* Description */}
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="textarea wrap min-h-24 input"
                  rows={6}
                  placeholder="e.g. React is a JavaScript Library..."
                ></textarea>
                {/* Icon */}
                <select
                  name="icon"
                  value={formData.icon}
                  onChange={handleInputChange}
                  className="select"
                  title="Choose icon"
                >
                  <option hidden>Select Icon</option>
                  <option value="tailwindcss">TailwindCSS</option>
                  <option value="nextjs">Next.js</option>
                </select>
                {/* Category */}
                <div className="flex justify-between">
                  {["frontend", "backend", "tools"].map((category) => (
                    <div key={category} className="flex gap-2">
                      <input
                        id={category.toLowerCase()}
                        name="category"
                        type="radio"
                        checked={formData.category === category}
                        onChange={() => handleCategoryChange(category)}
                      />
                      <label htmlFor={category.toLowerCase()}>{category.toUpperCase()}</label>
                    </div>
                  ))}
                </div>
              </div>
            </ModalContent>
            <ModalFooter className="bg-slate-900 px-10">
            
             
              {/* Submit Button */}
              <button
                className="btn bg-slate-900 py-1  border border-white rounded-lg w-28"
                onClick={handleSubmit}
              >
                Add Skill
              </button>
            </ModalFooter>
          </ModalBody>
        </Modal>
      </div>

      {/* Skill Categories */}
      <div className="space-y-4">
        {["Frontend", "Backend", "Tools"].map((category) => (
          <div key={category}>
            <h3 className="text-xl border-b border-white pb-2">{category}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
