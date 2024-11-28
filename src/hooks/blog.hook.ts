import { createNewBlog, getAllBlog } from "@/services/BlogService";
import { TBlogData } from "@/types";
import {  useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useCreateBlog = () => {
  return useMutation<unknown, Error, unknown>({
    mutationKey: ["CREATE_BLOG"],
    mutationFn: async (blogData) => await createNewBlog(blogData),
    onSuccess: () => {
      toast.success("Create blog successfully", {
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

export const useGetAllBlog = () => {
  return useQuery<unknown, Error, TBlogData[]>({
    queryKey: ["GET_ALL_BLOG"],
    queryFn: async () => await getAllBlog(),
  });
};
