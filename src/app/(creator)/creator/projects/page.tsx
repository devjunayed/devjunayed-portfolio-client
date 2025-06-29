"use client";

import AllProjects from "@/app/(creator)/creator/projects/components/AllProjects";
import "@/components/ui/css/reset-tailwind.css";
import ProjectForm from "./components/ProjectForm";
import { useState } from "react";
import { useCreateProject } from "@/hooks/project.hook";
import { Plus } from "lucide-react";
import { TProjectData } from "@/types";

const Projects = () => {
  const [modalOpen, setIsModalOpen] = useState(false);
  const { mutate: handleCreateProject } = useCreateProject();

  const handleProjectSubmit = (data: TProjectData) => {
    handleCreateProject(data);
  };

  return (
    <div className="overflow-y-scroll ">
      <ProjectForm
        btnText="Add project"
        title="Add Project"
        triggerButton={
          <div className="btn text-white rounded-2xl bg-transparent border border-white">
            <Plus /> Add Project
          </div>
        }
        modalOpen={modalOpen}
        onSubmit={(data) => handleProjectSubmit(data)}
        setIsOpen={setIsModalOpen}
      />
      <AllProjects />
    </div>
  );
};

export default Projects;
