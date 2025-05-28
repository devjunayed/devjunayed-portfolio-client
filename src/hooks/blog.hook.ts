import {
  createNewBlog,
  deleteBlog,
  getAllBlog,
  getFeaturedBlog,
  getSingleBlog,
} from "@/services/BlogService";
import { TBlogData } from "@/types";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";

export const useCreateBlog = () => {
  const queryClient = useQueryClient();
  return useMutation<unknown, Error, unknown>({
    mutationKey: ["CREATE_BLOG"],
    mutationFn: async (blogData) => await createNewBlog(blogData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["GET_ALL_BLOG"],
        exact: true,
      });

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

export const useGetSingleBlog = (blogId: string) => {
  return useQuery<TBlogData[], Error, TBlogData[]>({
    queryKey: ["GET_SINGLE_BLOG"],
    queryFn: async () => await getSingleBlog(blogId),
  });
};

export const useGetFeaturedBlog = () => {
  return useQuery<unknown, Error, TBlogData[]>({
    queryKey: ["GET_FEATURED_BLOG"],
    queryFn: async () => await getFeaturedBlog(),
  });
};

export const useDeleteBlog = () => {
  const queryClient = useQueryClient();
  return useMutation<unknown, Error, string>({
    mutationKey: ["DELETE_BLOG"],
    mutationFn: async (id: string) => await deleteBlog(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["GET_ALL_BLOG"],
        exact: true,
      });

      toast.success("Blog deleted successfully", {
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
