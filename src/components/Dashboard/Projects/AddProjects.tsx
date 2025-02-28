"use client";
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
import {
  Chip,
  Input,
  Select,
  SelectItem,
  SelectSection,
  Textarea,
} from "@heroui/react";
import { technologies } from "@/utils/technologies";
import { tags } from "@/utils/tags";
import dynamic from "next/dynamic";
const JoditEditor = dynamic(() => import("jodit-react"), {
  ssr: false, // Disable server-side rendering
});

const AddProjects = () => {
  const [modalOpen, setIsModalOpen] = useState(false);

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
    projectTags: [] as string[],
    projectTechnologies: [] as string[],
  });

  const { mutate: handleCreateProject } = useCreateProject();

  const handleTagsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      projectTags: Array.from(new Set(e.target.value.split(","))),
    }));
  };

  const handleTechChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      projectTechnologies: Array.from(new Set(e.target.value.split(","))),
    }));
  };
  const config = {
    readonly: false,
    placeholder: "Start typing...",
    toolbarAdaptive: false,
    toolbarSticky: true,
    showXPathInStatusbar: false,
    showCharsCounter: false,
    showWordsCounter: false,
    spellcheck: true,
    askBeforePasteHTML: false,
    askBeforePasteFromWord: false,
    buttons:
      "bold,italic,underline,strikethrough,|,ul,ol,|,font,fontsize,|,align,undo,redo,table",
    height: 400,
    width: "100%",
    style: {
      color: "#000", // Ensuring black text color
    },
  };

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
      projectTags: [] as string[],
      projectTechnologies: [] as string[],
    });
  };

  const handleSubmit = () => {
    console.log(formData);
    // handleCreateProject(formData);
    // resetForm();
    // setResetKey(`${Date.now().toString()}`);
  };

  const [searchQuery, setSearchQuery] = useState("");

  const filteredTags = tags.filter((tag) =>
    tag.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
                    {/* Short Description */}
                    <Textarea
                      name="projectShortDescription"
                      value={formData.projectShortDescription}
                      onChange={handleInputChange}
                      rows={6}
                      endContent={
                        <Text className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                      }
                      placeholder="Project Short Description"
                    ></Textarea>
                    {/*  Description */}

                    <div className="rounded-xl p-4 bg-white">
                      <JoditEditor
                        value={formData.projectDescription}
                        config={config}
                        className="w-full h-full border-none"
                        onBlur={(value) =>
                          setFormData((prev) => ({
                            ...prev,
                            projectDescription: value,
                          }))
                        }
                      />
                    </div>
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
                      isMultiline
                      items={filteredTags}
                      onChange={handleTagsChange}
                      label="Project Tags"
                      labelPlacement="outside"
                      placeholder="Select Tags"
                      renderValue={(items) =>
                        items.map((item) => (
                          <Chip key={item.key}>{item?.data?.title}</Chip>
                        ))
                      }
                      selectionMode="multiple"
                      variant="bordered"
                    >
                      <>
                        {/* Search Input */}
                        <SelectItem key="search-input" textValue="">
                          <input
                            type="text"
                            className="text-black w-full p-2 border-b"
                            placeholder="Search Tags..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onClick={(e) => e.stopPropagation()} // Prevent selection on click
                          />
                        </SelectItem>

                        {/* Filtered Tags */}
                        {filteredTags.map((tag) => (
                          <SelectItem key={tag.key} textValue={tag.title}>
                            <span className="text-small">{tag.title}</span>
                          </SelectItem>
                        ))}
                      </>
                    </Select>
                  </div>
                  <div>
                    <Select
                      className="border-white "
                      classNames={{
                        base: "max-w-xs",
                        trigger:
                          "min-h-12 py-2 data-[modalOpen=true]:border-white data-[focus=true]:border-white",
                      }}
                      isMultiline={true}
                      items={technologies}
                      label="Used Tech"
                      onChange={handleTechChange}
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
                        <SelectItem key={tech.name} textValue={tech.name}>
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
