"use client";

import RWForm from "@/src/components/form/RWForm";
import { useCreateBlog } from "@/src/hooks/blog.hook";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, FieldValues, SubmitHandler } from "react-hook-form";

import "react-quill/dist/quill.snow.css";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const CreateBlogPage = () => {
  const [value, setValue] = useState("");
  const router = useRouter();

  const { mutate: handleCreateBlog, isPending } = useCreateBlog();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const formData = new FormData();
    const contentData = {
      content: value,
    };

    formData.append("data", JSON.stringify(contentData));
    formData.append("image", data.image);

    handleCreateBlog(formData, {
      onSuccess: () => {
        setValue("");
        router.push("/dashboard/blogs");
      },
    });
  };

  return (
    <div className="text-white bg-[#0F212F]">
      <div className=" flex flex-col md:flex-row  rounded-xl justify-center items-center">
        {/* form area */}
        <div className="lg:w-[800px] bg-[#081B29] text-white rounded-xl p-12 ">
          <div className="text-center pb-8 text-2xl font-semibold">
            <h3>Create New Blog</h3>
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
                    Post Now
                  </Button>
                </>
              )}
            </div>
          </RWForm>
        </div>
      </div>
    </div>
  );
};

export default CreateBlogPage;
