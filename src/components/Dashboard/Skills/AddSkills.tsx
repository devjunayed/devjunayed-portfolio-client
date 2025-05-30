import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../../ui/animated-modal";
import { Plus } from "lucide-react";
import { useCreateSkill } from "@/hooks/skill.hook";
import { backendIcons, frontendIcons, toolsIcons } from "@/data/skills.icon";

const AddSkills = () => {
  const [formData, setFormData] = useState({
    skillName: "",
    description: "",
    icon: "",
    categoryName: "frontend",
  });

  const [open, setIsOpen] = useState(false);
  const [skillIcons, setSkillIcons] = useState(frontendIcons);

  const { mutate: handleCreateSkill } = useCreateSkill();
  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCategoryChange = (category: string) => {
    setFormData((prevData) => ({ ...prevData, categoryName: category }));
  };

  const resetForm = () => {
    setFormData({
      skillName: "",
      description: "",
      icon: "",
      categoryName: "",
    });
  };

  useEffect(() => {
    if (formData.categoryName === "frontend") {
      setSkillIcons(frontendIcons);
    } else if (formData.categoryName === "backend") {
      setSkillIcons(backendIcons);
    } else if (formData.categoryName === "tools") {
      setSkillIcons(toolsIcons);
    }
  }, [formData.categoryName]);

  const handleSubmit = () => {
    console.log("Form Data:", formData);
    handleCreateSkill(formData);
    resetForm();
    setIsOpen(false);
  };
  return (
    <>
      {/* Add Skill Modal */}
      <div className="flex justify-end text-white">
        <Modal open={open} setIsOpen={setIsOpen} >
          <ModalTrigger className="btn text-white rounded-xl bg-transparent border border-white">
            <Plus /> Add Skills
          </ModalTrigger>
          <ModalBody modalTitle="Add Skills">
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
                {/* Category */}
                <div className="flex justify-between my-4 mx-2">
                  {["frontend", "backend", "tools"].map((category) => (
                    <div key={category} className="flex gap-2">
                      <input
                        id={category.toLowerCase()}
                        name="category"
                        type="radio"
                        checked={formData.categoryName === category}
                        onChange={() => handleCategoryChange(category)}
                      />
                      <label htmlFor={category.toLowerCase()}>
                        {category.toUpperCase()}
                      </label>
                    </div>
                  ))}
                </div>
                {/* Icon */}
                <select
                  name="icon"
                  value={formData.icon}
                  onChange={handleInputChange}
                  className="select"
                  title="Choose icon"
                >
                  <option hidden>Select Icon</option>
                  {skillIcons.map((icon, index) => (
                    <option className="capitalize" key={index} value={icon}>
                      {icon}
                    </option>
                  ))}
                </select>
              </div>
            </ModalContent>
            <ModalFooter className="bg-slate-900 w-full ">
              {/* Submit Button */}
              <button
                className="btn  mx-auto bg-slate-900 py-1  border border-white rounded-xl w-28"
                onClick={handleSubmit}
              >
                Add Skill
              </button>
            </ModalFooter>
          </ModalBody>
        </Modal>
      </div>
    </>
  );
};

export default AddSkills;
