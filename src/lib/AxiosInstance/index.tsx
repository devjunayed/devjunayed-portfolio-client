"use server";
import envConfig from "@/config/envConfig";
import { getNewAccessToken, setAccessToken } from "@/services/AuthService";
import axios from "axios";
import { cookies } from "next/headers";

const axiosInstance = axios.create({
  baseURL: envConfig.baseApi,
});

axiosInstance.interceptors.request.use(
  async function (config) {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("access-token")?.value;

    if (accessToken) {
      config.headers.Authorization = accessToken;
    }
    return config;
  },
  function (error) {
    console.log("hitting");
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    const config = error.config;
    if (
      (error?.response.status === 401 && !config?.sent) ||
      error.response.data.message === "jwt expired" ||
      error.response.status === 500
    ) {
      config.sent = true;
      const res = await getNewAccessToken();

      const accessToken = res.data;

      config.headers["Authorization"] = accessToken;
      setAccessToken(accessToken);

      return axiosInstance(config);
    } else {
      return Promise.reject(error);
    }
  }
);

export default axiosInstance;
