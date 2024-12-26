"use client";

import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import dynamic from "next/dynamic";
import { useState } from "react";
import { Controller, FieldValues, SubmitHandler } from "react-hook-form";

import { useUpdateExperience } from "@/src/hooks/experiences.hook";
import "react-quill/dist/quill.snow.css";
import RWForm from "../../form/RWForm";
import RWInput from "../../form/RWInput";
import RWModal from "../../modal/RWModal";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const UpdateExperience = ({ experience }: { experience: any }) => {
  const [value, setValue] = useState(experience?.content || "");
  const { mutate: handleUpdateExperience, isPending } = useUpdateExperience();

  const defaultValues = {
    content: experience?.content || "",
    category: experience?.category || "",
    date: experience?.date || "",
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const experienceData = {
      content: value,
      category: data.category,
      date: data.date,
    };

    const args = {
      experienceId: experience._id,
      experienceData,
    };

    handleUpdateExperience(args as any, {
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
              <h3>Update Experience</h3>
            </div>
            <RWForm onSubmit={onSubmit} defaultValues={defaultValues}>
              <div className="grid grid-cols-2 gap-3 pb-5">
                <div className="py-1">
                  <RWInput name="category" type="text" label="Category" />
                </div>
                <div className="py-1">
                  <RWInput name="date" type="text" label="Date" />
                </div>
              </div>

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

export default UpdateExperience;
