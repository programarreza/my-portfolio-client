"use server";

import envConfig from "@/src/config/envConfig";
import axiosInstance from "@/src/lib/AxiosInstance";

export const createExperience = async (formData: any): Promise<any> => {
  try {
    const { data } = await axiosInstance.post(
      "/experiences/create-experience",
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getExperiences = async () => {
  const res = await fetch(`${envConfig.baseApi}/experiences`);

  if (!res.ok) {
    throw new Error("Failed to fetch experiences data");
  }

  return await res.json();
};

export const updateExperience = async (args: any) => {
  try {
    const { data } = await axiosInstance.patch(
      `/experiences/${args?.experienceId}`,
      args?.experienceData
    );

    return data;
  } catch (error: any) {
    console.log("from update experience", error?.response?.data?.message);
    throw new Error(error);
  }
};
