"use server";

import envConfig from "@/src/config/envConfig";
import axiosInstance from "@/src/lib/AxiosInstance";

export const createProject = async (formData: FormData): Promise<any> => {
  try {
    const { data } = await axiosInstance.post(
      "/projects/create-project",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getProjects = async () => {
  const res = await fetch(`${envConfig.baseApi}/projects`);

  if (!res.ok) {
    throw new Error("Failed to fetch project data");
  }

  return await res.json();
};
