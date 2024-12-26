import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { createBlog, getBlogs, updateBlog } from "../services/Blog";

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

export const useGetBlogs = () => {
  return useQuery({
    queryKey: ["GET_BLOGS"],
    queryFn: async () => {
      return await getBlogs();
    },
  });
};

export const useUpdateBlog = () => {
  const queryClient = useQueryClient();

  return useMutation<any, Error, FormData>({
    mutationKey: ["UPDATE_BLOGS"],
    mutationFn: async (args) => updateBlog(args),
    onSuccess: () => {
      toast.success("Blog updated successfully!");

      queryClient.invalidateQueries({ queryKey: ["GET_BLOGS"] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
