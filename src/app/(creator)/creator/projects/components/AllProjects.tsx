import { useGetAllProjects } from "@/hooks/project.hook";
import React from "react";
import { ProjectCard } from "./ProjectCard";

const AllProjects = () => {
  const { data: projectData } = useGetAllProjects();
  return (
    <div className=" flex justify-center overflow-scroll h-[86vh] flex-wrap gap-4 mt-4">
      {projectData?.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default AllProjects;
