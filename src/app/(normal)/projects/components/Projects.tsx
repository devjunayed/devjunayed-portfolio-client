"use client";
import React from "react";
import {   MoveRight } from "lucide-react";
import { useGetAllProjects } from "@/hooks/project.hook";
import ProjectCardHome from "./ProjectCardHome";
import Heading from "@/components/Shared/Heading";
import LinkButton from "@/components/ui/LinkButton/LinkButton";

export function Projects() {
  const { data: projectData } = useGetAllProjects();
  return (
    <div className="mx-6">
      <Heading title="projects" />
      <div className="">
        <div className="flex flex-col gap-4 mt-4">
          {projectData?.map((project, index) => {
            if (project?.isFeatured) {
              return <ProjectCardHome project={project} key={index} />;
            }
          })}
        </div>
        <div className="flex items-center justify-center mt-6">
          <LinkButton btnText="See More" icon={<MoveRight />} href="/projects" />
        </div>
      </div>
    </div>
  );
}
