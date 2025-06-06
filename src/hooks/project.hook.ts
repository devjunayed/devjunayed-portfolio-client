import {
  createProject,
  getAllProjects,
  getFeaturedProjects,
  getSingleProject,
  updateProject,
} from "@/services/ProjectService";
import { TProjectData } from "@/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

// Hook to create a new project
export const useCreateProject = () => {
  const queryClient = useQueryClient();
  return useMutation<unknown, Error, unknown>({
    mutationKey: ["CREATE_PROJECT"],
    mutationFn: async (projectData) =>
      await createProject(projectData as TProjectData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["GET_ALL_PROJECTS"],
        exact: true,
      });
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
// Hook to update a  project
export const useUpdateProject = () => {
  const queryClient = useQueryClient();
  return useMutation<unknown, Error, { data: TProjectData; id: string }>(
    {
      mutationKey: ["UPDATE_PROJECT"],
      mutationFn: async ({ data, id }) =>
        await updateProject(data as TProjectData, id as string),
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["GET_ALL_PROJECTS"],
          exact: true,
        });
        toast.success("Project updated successfully", {
          position: "top-center",
        });
      },
      onError: (error) => {
        toast.error(error.message, {
          position: "top-center",
        });
      },
    }
  );
};

// Hook to get all projects
export const useGetAllProjects = () => {
  return useQuery<unknown, Error, TProjectData[]>({
    queryKey: ["GET_ALL_PROJECTS"],

    queryFn: async () => await getAllProjects(),
  });
};

export const useGetSingleProject = (projectId: string) => {
  return useQuery<unknown, Error, TProjectData>({
    queryKey: ["GET_SINGLE_PROJECT"],
    queryFn: async () => await getSingleProject(projectId),
  });
};

// Hook to get featured projects
export const useGetFeaturedProjects = () => {
  return useQuery<unknown, Error, TProjectData[]>({
    queryKey: ["GET_FEATURED_PROJECTS"],
    queryFn: async () => await getFeaturedProjects(),
  });
};
