import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { createBlog } from "../services/Blog";

export const useCreateBlog = () => {
  const queryClient = useQueryClient();

  return useMutation<any, Error, FormData>({
    mutationKey: ["CREATE_BLOG"],
    mutationFn: async (blogData) => createBlog(blogData),
    onSuccess: () => {
      toast.success("Blog created successfully!");

      queryClient.invalidateQueries({ queryKey: ["GET_BLOGS"] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
