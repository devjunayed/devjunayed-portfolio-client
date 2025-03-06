import { createProject, getAllProjects, getFeaturedProjects } from "@/services/ProjectService";
import { TProjectData } from "@/types";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";

// Hook to create a new project
export const useCreateProject = () => {
  return useMutation<unknown, Error, unknown>({
    mutationKey: ["CREATE_PROJECT"],
    mutationFn: async (projectData) => await createProject(projectData as TProjectData),
    onSuccess: () => {
      toast.success("Project created successfully", {
        position: "top-center",
      });
    },
    onError: (error) => {
      toast.error(error.message, {
        position: "top-center",
      });
    },
  });
};

// Hook to get all projects
export const useGetAllProjects = () => {
  return useQuery<unknown, Error, TProjectData[]>({
    queryKey: ["GET_ALL_PROJECTS"],
    queryFn: async () => await getAllProjects(),
  });
};


// Hook to get featured projects
export const useGetFeaturedProjects = () => {
  return useQuery<unknown, Error, TProjectData[]>({
    queryKey: ["GET_FEATURED_PROJECTS"],
    queryFn: async () => await getFeaturedProjects(),
  });
};
