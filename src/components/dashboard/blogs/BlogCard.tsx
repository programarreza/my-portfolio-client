"use client";

import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ blogs }: { blogs: any }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {blogs.map((blog: any) => (
          <Link key={blog?._id} passHref href={`/blogs/${blog?._id}`}>
            <div className="shadow-large border border-gray-500 flex flex-col justify-between h-full p-4 rounded-lg">
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    blog?.content?.length > 70
                      ? blog?.content?.slice(0, 70) + "."
                      : blog?.content,
                }}
                className="prose prose-invert max-w-none text-white text-xl overflow-hidden text-ellipsis line-clamp-3 mb-4"
              />
              <div className="mt-auto">
                <Image
                  alt={blog?._id}
                  className=" w-72 h-52 object-cover"
                  height={200}
                  src={blog?.image}
                  width={200}
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogCard;
