"use client";

import { ImSpinner6 } from "react-icons/im";

import Container from "@/src/components/Container";
import BlogCard from "@/src/components/dashboard/blogs/BlogCard";
import { useGetBlogs } from "@/src/hooks/blog.hook";

const BlogsPage = () => {
  const { data, isLoading } = useGetBlogs();
  const blogs = data?.data?.result || [];

  return (
    <Container>
      {/* <div className="min-h-screen pt-24">
        <BlogCard blogs={blogs} />
      </div> */}

      <div>
        {isLoading ? (
          <div className="flex justify-center items-center min-h-screen">
            <div className="flex w-fit mx-auto">
              <ImSpinner6 className="animate-spin m-auto" size={28} />
              <span>Loading...</span>
            </div>
          </div>
        ) : (
          <>
            {data?.data?.result?.length === 0 ? (
              <p className="flex justify-center items-center min-h-screen my-auto text-xl font-medium">
                blog not aboailvale
              </p>
            ) : (
              <div className="min-h-screen pt-24">
                <BlogCard blogs={blogs} />
              </div>
            )}
          </>
        )}
      </div>
    </Container>
  );
};

export default BlogsPage;
