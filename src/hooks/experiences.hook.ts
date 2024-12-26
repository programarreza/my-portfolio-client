import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import {
  createExperience,
  getExperiences,
  updateExperience,
} from "../services/Experience";

export const useCreateExperience = () => {
  const queryClient = useQueryClient();

  return useMutation<any, Error>({
    mutationKey: ["CREATE_EXPERIENCE"],
    mutationFn: async (experienceData) =>
      createExperience(experienceData as any),
    onSuccess: () => {
      toast.success("Experience created successfully!");

      queryClient.invalidateQueries({ queryKey: ["GET_EXPERIENCE"] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export const useGetExperience = () => {
  return useQuery({
    queryKey: ["GET_EXPERIENCE"],
    queryFn: async () => {
      return await getExperiences();
    },
  });
};

export const useUpdateExperience = () => {
  const queryClient = useQueryClient();

  return useMutation<any, Error>({
    mutationKey: ["UPDATE_EXPERIENCE"],
    mutationFn: async (args) => updateExperience(args),
    onSuccess: () => {
      toast.success("Experience updated successfully!");

      queryClient.invalidateQueries({ queryKey: ["GET_EXPERIENCE"] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
