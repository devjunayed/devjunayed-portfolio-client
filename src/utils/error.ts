/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from "react-toastify";
export function ThrowError(error: any){
    console.log(error.response.data)
    toast.error(error.response.data.message);
     // Check if the error response exists and return the message
     if (error.response && error.response.data) {
        throw new Error(error.response.data.message || "An error occurred");
      }
      // If no specific error message, return a general error
      throw new Error("An unexpected error occurred");
}