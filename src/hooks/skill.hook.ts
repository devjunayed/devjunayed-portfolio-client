import { createNewSkill, getAllSkill } from "@/services/SkillService";
import { TSkillData } from "@/types";
import {  useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useCreateSkill = () => {
  return useMutation<unknown, Error, unknown>({
    mutationKey: ["CREATE_SKILL"],
    mutationFn: async (skillData) => await createNewSkill(skillData),
    onSuccess: () => {
      toast.success("Create skill successfully", {
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

export const useGetAllSkill = () => {
  return useQuery<unknown, Error, TSkillData[]>({
    queryKey: ["GET_ALL_SKILL"],
    queryFn: async () => await getAllSkill(),
  });
};
