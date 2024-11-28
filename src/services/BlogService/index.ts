"use server"
import axiosInstance from "@/lib/AxiosInstance";
import { ThrowError } from "@/utils/error"

export const createNewBlog= async(blogData: unknown) => {
    try {
        console.log(blogData)
        const { data } = await axiosInstance.post("/blog", blogData);
        return data;
    } catch (error) {
        ThrowError(error)   
    }
}
export const getAllBlog = async() => {
    try {
        const { data } = await axiosInstance.get("/blog");
        return data.data;
    } catch (error) {
        ThrowError(error)   
    }
}