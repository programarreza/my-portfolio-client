import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { createProject, getProjects, updateProject } from "../services/Project";

export const useCreateProject = () => {
  const queryClient = useQueryClient();

  return useMutation<any, Error, FormData>({
    mutationKey: ["CREATE_PROJECT"],
    mutationFn: async (projectData) => createProject(projectData),
    onSuccess: () => {
      toast.success("Project created successfully!");

      //   Invalidate or refetch the contents after mutation success
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

export const useUpdateProject = () => {
  const queryClient = useQueryClient();

  return useMutation<any, Error, FormData>({
    mutationKey: ["UPDATE_PROJECT"],
    mutationFn: async (args) => updateProject(args),
    onSuccess: () => {
      toast.success("Project updated successfully!");
      //   Invalidate or refetch the contents after mutation success
      queryClient.invalidateQueries({ queryKey: ["GET_PROJECTS"] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
