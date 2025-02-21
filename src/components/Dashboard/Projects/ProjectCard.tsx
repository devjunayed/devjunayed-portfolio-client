"use client";
import { TProjectData } from "@/types";
import { cn } from "@/utils/utils";

export function ProjectCard({
  project,
}: {
  key: number;
  project: TProjectData;
}) {
  return (
    <div className="max-w-xs w-full group/card">
      {/* utility */}
      <div>
        <button>Edit</button>
        <button>Delete</button>
      </div>
      <div
        className={cn(
          "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto flex flex-col justify-between p-4",
          "backgroundImage bg-cover"
        )}
        style={{
          backgroundImage: `url(${project?.projectThumbnail})`,
        }}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
        <div className="flex flex-row items-center space-x-4 z-10"></div>
        <div className="text content">
          <h1 className="font-bold text-lg md:text-xl text-gray-50 relative z-10">
            {project?.projectTitle}
          </h1>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
            {project?.projectShortDescription}
          </p>
        </div>
      </div>
    </div>
  );
}
