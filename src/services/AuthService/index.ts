/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import axiosInstance from "@/lib/AxiosInstance";
import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";
import { ThrowError } from "@/utils/error";

export const registerUser = async (userData: any) => {
  try {
    const { data } = await axiosInstance.post("/user/user-create", userData);
    if (data.success) {
      (await cookies()).set("access-token", data?.data?.accessToken);
      (await cookies()).set("refresh-token", data?.data.refreshToken);
    }
    return data;
  } catch (error: any) {
    ThrowError(error);
  }
};

export const loginUser = async (userData: any) => {
  try {
    const { data } = await axiosInstance.post("/auth/login", userData);
    if (data?.success) {
      (await cookies()).set("access-token", data?.token.accessToken);
      (await cookies()).set("refresh-token", data?.token.refreshToken);
    }
    return data;
  } catch (error: any) {
    ThrowError(error);
  }
};

export const getCurrentUser = async () => {
  try {
    const accessToken = (await cookies()).get("access-token")?.value;
    let decodedToken = null;



    if (accessToken) {
      decodedToken = await jwtDecode(accessToken);

      const { data } = await axiosInstance.get(`/user/${decodedToken?.email}`);
     

      
      return {
        ...data?.data,
      };
    }
    return decodedToken;
  } catch (error: any) {
   
    ThrowError(error);
  }
};

export const logOutUser = async () => {
  try {
    (await cookies()).delete("access-token");
    (await cookies()).delete("refresh-token");
  } catch (error: any) {
    ThrowError(error);
  }
};

export const setAccessToken = async (accessToken: string) => {
  (await cookies()).set("access-token", accessToken);
};

export const getNewAccessToken = async () => {
  try {
    const cookieStore = await cookies();
    const refreshToken = cookieStore.get("refresh-token")?.value;

   

    const res = await axiosInstance({
      url: "/auth/refresh-token",
      method: "POST",
      withCredentials: true,
      headers: {
        cookie: refreshToken,
      },
    });

    console.log("Access Token Refreshed");
    return res.data;
  } catch (error: any) {

    (await cookies()).delete("access-token");
    (await cookies()).delete("refresh-token");

    ThrowError(error);
  }
};
