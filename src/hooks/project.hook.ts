import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { createProject, getProjects } from "../services/Project";
import { TQueryParams } from "../types";

export const useCreateProject = () => {
  const queryClient = useQueryClient();

  return useMutation<any, Error, FormData>({
    mutationKey: ["CREATE_PROJECT"],
    mutationFn: async (projectData) => createProject(projectData),
    onSuccess: () => {
      toast.success("Project created successfully!");

      // Invalidate or refetch the contents after mutation success
      //   queryClient.invalidateQueries({ queryKey: ["GET_CONTENTS"] }); // Invalidate the cache
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export const useGetProjects = (
  page: number,
  pageSize: number,
  params: TQueryParams[]
) => {
  return useQuery({
    queryKey: ["GET_PROJECTS", page, pageSize, params],
    queryFn: async () => {
      return await getProjects(page, pageSize, params);
    },
  });
};
