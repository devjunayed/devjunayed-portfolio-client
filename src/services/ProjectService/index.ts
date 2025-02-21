"use server"
import axiosInstance from "@/lib/AxiosInstance";
import { TProjectData } from "@/types";
import { ThrowError } from "@/utils/error";


// Function to create a new project
export const createProject = async (projectData: TProjectData) => {
  try {
    console.log(projectData);
    const { data } = await axiosInstance.post("/project", projectData);
    return data; // Return the response from the server
  } catch (error) {
    ThrowError(error); // Handle the error using your utility function
  }
};

// Function to fetch all projects
export const getAllProjects = async () => {
  try {
    const { data } = await axiosInstance.get("/project");
    return data.data; // Assuming the response structure has 'data' that contains the projects
  } catch (error) {
    ThrowError(error); // Handle the error using your utility function
  }
};
