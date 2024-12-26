"use client";

import RWForm from "@/src/components/form/RWForm";
import RWInput from "@/src/components/form/RWInput";
import { useCreateExperience } from "@/src/hooks/experiences.hook";
import { Button } from "@nextui-org/button";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

import "react-quill/dist/quill.snow.css";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const CreateExperiencePage = () => {
  const [value, setValue] = useState("");
  const router = useRouter();

  const { mutate: handleCreateExperience, isPending } = useCreateExperience();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const experienceData = {
      content: value,
      category: data.category,
      date: data.date,
    };

    handleCreateExperience(experienceData as any, {
      onSuccess: () => {
        setValue("");
        router.push("/dashboard/experiences");
      },
    });
  };

  return (
    <div className="text-white bg-[#0F212F]">
      <div className=" flex flex-col md:flex-row  rounded-xl justify-center items-center">
        {/* form area */}
        <div className="lg:w-[800px] bg-[#081B29] text-white rounded-xl p-12 ">
          <div className="text-center pb-8 text-2xl font-semibold">
            <h3>Create Experience</h3>
          </div>
          <RWForm onSubmit={onSubmit}>
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
                    Submit Now
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

export default CreateExperiencePage;
