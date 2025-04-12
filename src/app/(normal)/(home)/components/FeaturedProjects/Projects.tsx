"use client";
import React from "react";
import { MoveRight } from "lucide-react";
import { useGetFeaturedProjects } from "@/hooks/project.hook";
import ProjectCardHome from "./ProjectCardHome";
import Heading from "@/components/Shared/Heading";
import UiVerseButton from "@/components/ui/LinkButton/UiVerseButton";

export function Projects() {
  const { data: projectData } = useGetFeaturedProjects();

  return (
    <>
      {projectData && projectData?.length > 0 && (
        <div className="mx-6">
          <Heading title="featured projects" />
          <div className="">
            <div className="flex flex-col gap-4 mt-4">
              {projectData?.map((project, index) => {
                return <ProjectCardHome project={project} key={index} />;
              })}
            </div>
            <div className="flex items-center justify-center mt-6">
              <UiVerseButton
                text="See More"
                icon={<MoveRight />}
                href="/projects"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
