"use server";

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
