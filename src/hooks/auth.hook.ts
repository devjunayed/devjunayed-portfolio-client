import { loginUser } from "@/services/AuthService";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";


export const useUserLogin = () => {
  return useMutation<unknown, Error, unknown>({
    mutationKey: ["USER_LOGIN"],
    mutationFn: async (userData) => await loginUser(userData),
    onSuccess: () => {
      toast.success("User logged in successfully", {
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
