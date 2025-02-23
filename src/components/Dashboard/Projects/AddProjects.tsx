import React, { useState } from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "../../ui/animated-modal";
import { Plus } from "lucide-react";
import { useCreateProject } from "@/hooks/project.hook";
import FileUpload from "@/components/ui/FileUpload/file-upload";

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
                    <input
                      name="projectTitle"
                      value={formData.projectTitle}
                      onChange={handleInputChange}
                      className="input"
                      placeholder="Project Title"
                      type="text"
                    />

                    <div className="flex gap-4 w-full">
                      {/* Client View Link */}
                      <input
                        name="projectClientViewLink"
                        value={formData.projectClientViewLink}
                        onChange={handleInputChange}
                        className="input"
                        placeholder="Client View Link"
                        type="text"
                      />
                      {/* Server View Link */}
                      <input
                        name="projectServerViewLink"
                        value={formData.projectServerViewLink}
                        onChange={handleInputChange}
                        className="input"
                        placeholder="Server View Link"
                        type="text"
                      />
                    </div>

                    {/* Client Code Link */}
                    <input
                      name="projectClientCodeLink"
                      value={formData.projectClientCodeLink}
                      onChange={handleInputChange}
                      className="input"
                      placeholder="Client Code Link"
                      type="text"
                    />
                    {/* Server Code Link */}
                    <input
                      name="projectServerCodeLink"
                      value={formData.projectServerCodeLink}
                      onChange={handleInputChange}
                      className="input"
                      placeholder="Server Code Link"
                      type="text"
                    />
                    {/* Description */}
                    <textarea
                      name="projectDescription"
                      value={formData.projectDescription}
                      onChange={handleInputChange}
                      className="textarea wrap min-h-24 input"
                      rows={6}
                      placeholder="Project Description"
                    ></textarea>
                    {/* Short Description */}
                    <textarea
                      name="projectShortDescription"
                      value={formData.projectShortDescription}
                      onChange={handleInputChange}
                      className="textarea wrap min-h-16 input"
                      rows={6}
                      placeholder="Project Short Description"
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
