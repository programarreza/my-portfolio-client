"use server";

import envConfig from "@/src/config/envConfig";
import axiosInstance from "@/src/lib/AxiosInstance";
import { TQueryParams } from "@/src/types";

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

export const getProjects = async (
  page: number,
  pageSize: number,
  args: TQueryParams[]
) => {
  let fetchOptions = {};

  fetchOptions = {
    next: {
      tags: ["projects"],
    },
    cache: "no-store",
  };

  const params = new URLSearchParams();

  params.append("sort", "-createdAt");
  params.append("page", page.toString());
  params.append("limit", pageSize.toString());

  if (args) {
    args.forEach((item: TQueryParams) => {
      params.append(item.name, String(item.value));
    });
  }

  const res = await fetch(
    `${envConfig.baseApi}/projects?${params.toString()}`,
    fetchOptions
  );

  if (!res.ok) {
    throw new Error("Failed to fetch project data");
  }

  return await res.json();
};
