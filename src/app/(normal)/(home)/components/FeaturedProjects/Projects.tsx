"use client";
import React from "react";
import { MoveRight } from "lucide-react";
import { useGetFeaturedProjects } from "@/hooks/project.hook";
import ProjectCardHome from "./ProjectCardHome";
import Heading from "@/components/Shared/Heading";
import UiVerseButton from "@/components/ui/LinkButton/UiVerseButton";
import { TProjectData } from "@/types";

export function Projects() {
  const { data: projectData } = useGetFeaturedProjects();

  return (
    <div>
   
    {projectData && projectData?.length > 0 && (
        <div className="mt-10 min-h-96">
        <div className="mx-6">
          <Heading title="Featured Projects" />
          <div className="">
            <div className="flex flex-col gap-4 mt-4">
              {projectData?.map((project: TProjectData, index: React.Key | null | undefined) => {
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
        </div>
      )}
         
    </div>
  );
}
