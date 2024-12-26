import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import {
  createSkill,
  deleteSkill,
  getSkills,
  updateSkill,
} from "../services/Skill";

export const useCreateSkill = () => {
  const queryClient = useQueryClient();

  return useMutation<any, Error, FormData>({
    mutationKey: ["CREATE_SKILL"],
    mutationFn: async (skillData) => createSkill(skillData),
    onSuccess: () => {
      toast.success("Skill created successfully!");

      queryClient.invalidateQueries({ queryKey: ["GET_SKILLS"] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export const useGetSkills = () => {
  return useQuery({
    queryKey: ["GET_SKILLS"],
    queryFn: async () => {
      return await getSkills();
    },
  });
};

export const useUpdateSkill = () => {
  const queryClient = useQueryClient();

  return useMutation<any, Error, FormData>({
    mutationKey: ["UPDATE_SKILL"],
    mutationFn: async (args) => updateSkill(args),
    onSuccess: () => {
      toast.success("Skill updated successfully!");

      queryClient.invalidateQueries({ queryKey: ["GET_SKILLS"] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export const useDeleteSkill = () => {
  const queryClient = useQueryClient();

  return useMutation<any, Error, string>({
    mutationKey: ["DELETE_SKILL"],
    mutationFn: async (skillId) => deleteSkill(skillId),
    onSuccess: () => {
      toast.success("Skill deleted successfully!");

      queryClient.invalidateQueries({ queryKey: ["GET_SKILLS"] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
