"use server";
import axiosInstance from "@/src/lib/AxiosInstance";

export const createBlog = async (formData: FormData): Promise<any> => {
  try {
    const { data } = await axiosInstance.post("/blogs/create-blog", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
