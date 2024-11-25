import { createNewSkill } from "@/services/SkillService";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useCreateSkill = () => {
    return useMutation<unknown, Error, unknown>({
      mutationKey: ["CREATE_SKILL"],
      mutationFn: async (skillData) => await createNewSkill(skillData),
      onSuccess: () => {
        toast.success("Create skill successfully", {
          position: 'top-center'
        });
      },
      onError: (error) => {
        toast.error(error.message, {
          position: "top-center"
        });
      },
    });
  };