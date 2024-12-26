"use client";

import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import dynamic from "next/dynamic";
import { useState } from "react";
import { Controller, FieldValues, SubmitHandler } from "react-hook-form";

import { useUpdateBlog } from "@/src/hooks/blog.hook";
import "react-quill/dist/quill.snow.css";
import RWForm from "../../form/RWForm";
import RWModal from "../../modal/RWModal";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const UpdateBlog = ({ blog }: { blog: any }) => {
  const [value, setValue] = useState(blog?.content || "");
  const { mutate: handleUpdateBlog, isPending } = useUpdateBlog();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const formData = new FormData();
    const blogData = {
      content: value,
    };

    formData.append("data", JSON.stringify(blogData));
    if (data.image) {
      formData.append("image", data.image);
    } else if (blog?.image) {
      formData.append("image", blog.image);
    }

    const args = {
      blogId: blog._id,
      blogData: formData,
    };

    handleUpdateBlog(args as any, {
      onSuccess: () => {
        setValue("");
      },
    });
  };

  return (
    <RWModal buttonClassName="flex-1" buttonText="Update" size="2xl">
      <div className="text-white bg-[#0F212F]">
        <div className=" flex flex-col md:flex-row  rounded-xl justify-center items-center">
          {/* form area */}
          <div className="w-full bg-[#081B29] text-white rounded-xl  ">
            <div className="text-center pb-8 text-2xl font-semibold">
              <h3>Update Blog</h3>
            </div>
            <RWForm onSubmit={onSubmit}>
              <div className="space-y-2">
                {/* @ts-ignore */}
                <ReactQuill
                  className="mb-[50px]"
                  style={{ height: "170px" }}
                  theme="snow"
                  value={value}
                  onChange={setValue}
                />
              </div>
              <div className="py-3">
                <Controller
                  name="image"
                  render={({ field: { onChange, value, ...field } }) => (
                    <Input
                      type="file"
                      value={value?.fileName}
                      {...field}
                      onChange={(e) => onChange(e.target.files?.[0])}
                      className=" bg-none bg-transparent cursor-pointer w-full border p-1 mt-3 border-dashed "
                      radius="none"
                      label="Select project image"
                    />
                  )}
                />
              </div>
              <div>
                {isPending ? (
                  <>
                    <Button
                      className="w-full py-3 my-4 px-6 border rounded-lg hover:bg-[#0F212F] hover:text-white"
                      disabled
                    >
                      Sending....
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      className="w-full py-3 my-4 px-6 border rounded-lg hover:bg-[#0F212F] hover:text-white"
                      type="submit"
                    >
                      Update Now
                    </Button>
                  </>
                )}
              </div>
            </RWForm>
          </div>
        </div>
      </div>
    </RWModal>
  );
};

export default UpdateBlog;
