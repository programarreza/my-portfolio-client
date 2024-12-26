import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { createSkill } from "../services/Skill";

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
