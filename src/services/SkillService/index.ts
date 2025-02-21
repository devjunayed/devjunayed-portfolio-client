"use server"
import axiosInstance from "@/lib/AxiosInstance";
import { ThrowError } from "@/utils/error"

export const createNewSkill = async(skillData: unknown) => {
    try {
        console.log(skillData)
        const { data } = await axiosInstance.post("/skill", skillData);
        return data;
    } catch (error) {
        ThrowError(error)   
    }
}
export const getAllSkill = async() => {
    try {
        const { data } = await axiosInstance.get("/skill");
        return data.data;
    } catch (error) {
        ThrowError(error)   
    }
}