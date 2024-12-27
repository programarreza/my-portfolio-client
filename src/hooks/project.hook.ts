import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import {
  createProject,
  deleteProject,
  getProjects,
  getSingleProject,
  updateProject,
} from "../services/Project";

export const useCreateProject = () => {
  const queryClient = useQueryClient();

  return useMutation<any, Error, FormData>({
    mutationKey: ["CREATE_PROJECT"],
    mutationFn: async (projectData) => createProject(projectData),
    onSuccess: () => {
      toast.success("Project created successfully!");

      queryClient.invalidateQueries({ queryKey: ["GET_PROJECTS"] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export const useGetProjects = () => {
  return useQuery({
    queryKey: ["GET_PROJECTS"],
    queryFn: async () => {
      return await getProjects();
    },
  });
};

export const useGetSingleProject = (projectId: string) => {
  return useQuery({
    queryKey: ["GET_PROJECT", projectId],
    queryFn: async () => {
      return await getSingleProject(projectId);
    },
  });
};

export const useUpdateProject = () => {
  const queryClient = useQueryClient();

  return useMutation<any, Error, FormData>({
    mutationKey: ["UPDATE_PROJECT"],
    mutationFn: async (args) => updateProject(args),
    onSuccess: () => {
      toast.success("Project updated successfully!");

      queryClient.invalidateQueries({ queryKey: ["GET_PROJECTS"] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export const useDeleteProject = () => {
  const queryClient = useQueryClient();

  return useMutation<any, Error, string>({
    mutationKey: ["DELETE_PROJECT"],
    mutationFn: async (projectId) => deleteProject(projectId),
    onSuccess: () => {
      toast.success("Project deleted successfully!");

      queryClient.invalidateQueries({ queryKey: ["GET_PROJECTS"] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
