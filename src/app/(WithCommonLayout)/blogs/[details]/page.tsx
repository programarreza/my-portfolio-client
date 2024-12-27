"use client";

import Image from "next/image";
import { ImSpinner6 } from "react-icons/im";

import Container from "@/src/components/Container";
import { useGetSingleBlogs } from "@/src/hooks/blog.hook";

const BlogDetailsPage = ({ params }: { params: any }) => {
  const { data, isLoading } = useGetSingleBlogs(params?.details || "");
  const blog = data?.data;

  return (
    <Container>
      <div className="min-h-screen pt-24 px-24">
        {isLoading ? (
          <div className="flex justify-center items-center min-h-screen">
            <div className="flex w-fit mx-auto">
              <ImSpinner6 className="animate-spin m-auto" size={28} />
              <span>Loading...</span>
            </div>
          </div>
        ) : (
          <div className="bg-[#081B29] shadow-large border border-gray-500 flex flex-col justify-between h-full p-4 rounded-lg">
            <div className="mt-auto">
              <Image
                alt={blog?._id}
                className=" w-full h-[50vh] object-cover"
                height={200}
                src={blog?.image}
                width={200}
              />
            </div>

            <p className="my-2">{blog?.createdAt}</p>

            <div
              dangerouslySetInnerHTML={{
                __html:
                  blog?.content?.length > 70
                    ? blog?.content?.slice(0, 70) + "."
                    : blog?.content,
              }}
              className="prose prose-invert max-w-none text-white text-xl overflow-hidden text-ellipsis line-clamp-3 mb-4"
            />
          </div>
        )}
      </div>
    </Container>
  );
};

export default BlogDetailsPage;
