import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { createExperience } from "../services/Experience";

export const useCreateExperience = () => {
  const queryClient = useQueryClient();

  return useMutation<any, Error>({
    mutationKey: ["CREATE_EXPERIENCE"],
    mutationFn: async (experienceData) => createExperience(experienceData as any),
    onSuccess: () => {
      toast.success("Experience created successfully!");

      queryClient.invalidateQueries({ queryKey: ["GET_EXPERIENCE"] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
