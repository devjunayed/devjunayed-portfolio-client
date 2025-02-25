import React, { useState } from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "../../ui/animated-modal";
import { Code, PencilIcon, Plus, Text, View, ViewIcon } from "lucide-react";
import { useCreateProject } from "@/hooks/project.hook";
import FileUpload from "@/components/ui/FileUpload/file-upload";
import { Chip, Input, Select, SelectItem, Textarea } from "@heroui/react";
import { IconLiveView } from "@tabler/icons-react";
import { technologies } from "@/utils/technologies";

const AddProjects = () => {
  const [open, setIsOpen] = useState(false);
  const [resetKey, setResetKey] = useState(`${Date.now().toString()}`);
  const [formData, setFormData] = useState({
    projectTitle: "",
    isFeatured: false,
    projectThumbnail: "",
    projectClientViewLink: "",
    projectServerViewLink: "",
    projectClientCodeLink: "",
    projectServerCodeLink: "",
    projectDescription: "",
    projectShortDescription: "",
    projectTags: "",
    projectTechnologies: "",
  });

  const { mutate: handleCreateProject } = useCreateProject();
  const handleFileUpload = (imageUrls: string[]) => {
    if (imageUrls.length > 0) {
      setFormData((prev) => ({
        ...prev,
        projectThumbnail: imageUrls[0],
      }));
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const resetForm = () => {
    setFormData({
      isFeatured: false,
      projectTitle: "",
      projectThumbnail: "",
      projectClientViewLink: "",
      projectServerViewLink: "",
      projectClientCodeLink: "",
      projectServerCodeLink: "",
      projectDescription: "",
      projectShortDescription: "",
      projectTags: "",
      projectTechnologies: "",
    });
  };

  const handleSubmit = () => {
    console.log(formData);
    // handleCreateProject(formData);
    // resetForm();
    setResetKey(`${Date.now().toString()}`);
  };

  return (
    <>
      <div className="flex justify-end text-white">
        <Modal open={open} setIsOpen={setIsOpen}>
          <ModalTrigger className="btn text-white rounded-2xl bg-transparent border border-white">
            <Plus /> Add Projects
          </ModalTrigger>
          <ModalBody>
            <ModalContent className="bg-slate-900 overflow-y-scroll">
              <div className="flex  justify-between gap-8 w-full">
                {/* Left side */}
                <div className="w-9/12 border-r-2 pr-8 border-white">
                  <div className="space-y-3 flex flex-col ">
                    {/* Project Title */}

                    <Input
                      name="projectTitle"
                      value={formData.projectTitle}
                      onChange={handleInputChange}
                      labelPlacement="outside"
                      placeholder="Project Title"
                      endContent={
                        <PencilIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                      }
                      type="text"
                    />

                    <div className="flex gap-4 w-full">
                      {/* Client View Link */}
                      <Input
                        name="projectClientViewLink"
                        value={formData.projectClientViewLink}
                        onChange={handleInputChange}
                        className="w-1/2"
                        labelPlacement="outside"
                        placeholder="Client View Link"
                        startContent={
                          <div className="pointer-events-none flex items-center">
                            <span className="text-default-400 text-small">
                              https://
                            </span>
                          </div>
                        }
                        endContent={
                          <View className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                        }
                        type="text"
                      />{" "}
                      {/* Server View Link */}
                      <Input
                        name="projectServerViewLink"
                        value={formData.projectServerViewLink}
                        onChange={handleInputChange}
                        className=" w-1/2"
                        labelPlacement="outside"
                        placeholder="Server View Link"
                        startContent={
                          <div className="pointer-events-none flex items-center">
                            <span className="text-default-400 text-small">
                              https://
                            </span>
                          </div>
                        }
                        endContent={
                          <ViewIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                        }
                        type="text"
                      />
                    </div>

                    <div className="flex gap-4 w-full">
                      {/* Client Code Link */}

                      <Input
                        name="projectClientCodeLink"
                        value={formData.projectClientCodeLink}
                        onChange={handleInputChange}
                        className=" w-1/2"
                        labelPlacement="outside"
                        placeholder="Client Code Link"
                        startContent={
                          <div className="pointer-events-none flex items-center">
                            <span className="text-default-400 text-small">
                              https://
                            </span>
                          </div>
                        }
                        endContent={
                          <Code className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                        }
                        type="text"
                      />
                      {/* Server Code Link */}

                      <Input
                        name="projectServerCodeLink"
                        value={formData.projectServerCodeLink}
                        onChange={handleInputChange}
                        className=" w-1/2"
                        labelPlacement="outside"
                        placeholder="Server Code Link"
                        startContent={
                          <div className="pointer-events-none flex items-center">
                            <span className="text-default-400 text-small">
                              https://
                            </span>
                          </div>
                        }
                        endContent={
                          <Code className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                        }
                        type="text"
                      />
                    </div>
                    {/* Description */}
                    <Textarea
                      name="projectShortDescription"
                      value={formData.projectDescription}
                      onChange={handleInputChange}
                      className=" min-h-24 "
                      rows={6}
                      endContent={
                        <Text className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                      }
                      placeholder="Project Short Description"
                    ></Textarea>
                    {/* Short Description */}
                    <textarea
                      name="projectDescription"
                      value={formData.projectShortDescription}
                      onChange={handleInputChange}
                      className="textarea wrap min-h-16 input"
                      rows={6}
                      placeholder="Project  Description"
                    ></textarea>
                    {/* Tags */}
                    <input
                      name="projectTags"
                      value={formData.projectTags}
                      onChange={handleInputChange}
                      className="input"
                      placeholder="Project Tags (comma-separated)"
                      type="text"
                    />
                    {/* Technologies */}
                    <input
                      name="projectTechnologies"
                      value={formData.projectTechnologies}
                      onChange={handleInputChange}
                      className="input"
                      placeholder="Technologies Used (comma-separated)"
                      type="text"
                    />
                  </div>
                </div>

                {/* Right Side */}
                <div className="flex  gap-2 flex-col w-3/12">
                  <div className="text-center mx-auto mb-4  ">
                    <FileUpload
                      maxUpload={1}
                      resetKey={resetKey}
                      imgbbUrl={`https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`}
                      handleFileUpload={handleFileUpload}
                      className="text-white"
                    />
                  </div>
                  <div>
                    <Select
                      className="border-white "
                      classNames={{
                        base: "max-w-xs",
                        trigger:
                          "min-h-12 py-2 data-[open=true]:border-white data-[focus=true]:border-white",
                      }}
                      isMultiline={true}
                      items={technologies}
                      label="Used Tech"
                      labelPlacement="outside"
                      placeholder="Select Tech"
                      renderValue={(items) => {
                        return (
                          <div className="flex flex-wrap gap-2">
                            {items.map((item) => (
                              <Chip key={item.key}>{item?.data?.name}</Chip>
                            ))}
                          </div>
                        );
                      }}
                      selectionMode="multiple"
                      variant="bordered"
                    >
                      {(tech) => (
                        <SelectItem key={tech.id} textValue={tech.name}>
                          <span className="text-small">{tech.name}</span>
                        </SelectItem>
                      )}
                    </Select>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      id="isFeatured"
                      checked={formData.isFeatured}
                      onChange={() =>
                        setFormData((prev) => ({
                          ...prev,
                          isFeatured: !prev.isFeatured,
                        }))
                      }
                      name="isFeatured"
                      type="checkbox"
                    />
                    <label htmlFor="isFeatured">Is featured</label>
                  </div>
                  {/* Submit Button */}

                  <div className="flex mt-4 justify-center">
                    <button
                      className="btn bg-slate-900 rounded2xl  border border-white  w-28"
                      onClick={handleSubmit}
                    >
                      Add Project
                    </button>
                  </div>
                </div>
              </div>
            </ModalContent>
          </ModalBody>
        </Modal>
      </div>
    </>
  );
};

export default AddProjects;
