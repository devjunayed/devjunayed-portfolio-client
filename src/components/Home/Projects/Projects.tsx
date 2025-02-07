"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "../../ui/wobble-card";
import Heading from "../../Shared/Heading";
import Link from "next/link";
import { Eye } from "lucide-react";
import { useGetAllProjects } from "@/hooks/project.hook";
import ProjectCardHome from "./ProjectCardHome";

export function Projects() {
  const { data: projectData } = useGetAllProjects();
  return (
    <div>
      <Heading title="projects" />
      <div className="mt-4">
        <div>
          {projectData?.map((project, index) => {
            if (project?.isFeatured) {
              return <ProjectCardHome key={index} />;
            }
          })}
        </div>
        <div className="flex items-center justify-center">
          <Link
            href={"/projects"}
            className="inline-flex mx-auto h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            See More <Eye className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
