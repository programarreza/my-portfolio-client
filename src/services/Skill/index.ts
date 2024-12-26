"use server";

import axiosInstance from "@/src/lib/AxiosInstance";

export const createSkill = async (formData: FormData): Promise<any> => {
  try {
    const { data } = await axiosInstance.post(
      "/skills/create-skill",
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
