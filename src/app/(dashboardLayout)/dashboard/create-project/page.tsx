"use client";

import { AddIcon, TrashIcon } from "@/src/assets/icons";
import RWForm from "@/src/components/form/RWForm";
import RWInput from "@/src/components/form/RWInput";
import RWTextArea from "@/src/components/form/RWTextForm";
import { useUser } from "@/src/context/user.provider";
import { useCreateProject } from "@/src/hooks/project.hook";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useFieldArray,
  useForm,
} from "react-hook-form";
import { toast } from "sonner";

const CreateProjectPage = () => {
  const { user } = useUser();
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const skillsData = [
    {
      _id: "676cf7fa7a8d21473c787be9",
      name: "react",
    },
    {
      _id: "676cf81b7a8d21473c787bed",
      name: "next.js",
    },
    {
      _id: "676cf83b7a8d21473c787bf1",
      name: "mongoose",
    },
  ];

  const { mutate: handleCreateProject, isPending } = useCreateProject();
  const router = useRouter();

  const methods = useForm();
  const { control, handleSubmit } = methods;
  const { fields, append, remove } = useFieldArray({
    control,
    name: "features",
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("project creating...");

    try {
      console.log("data", data, { selectedValues });
      const formData = new FormData();
      const jsonData = {
        title: data.title,
        description: data.description,
        deployLink: data.deployLink,
        githubClientLink: data.githubClientLink,
        githubServerLink: data.githubServerLink,
        projectChallenges: data.projectChallenges,
        improvement: data.improvement,
        technologies: selectedValues,
        features: data.features.map(
          (feature: { value: string }) => feature.value
        ),
      };

      formData.append("data", JSON.stringify(jsonData));
      formData.append("image", data.image);

      handleCreateProject(formData, {
        onSuccess: () => {
          router.push("/dashboard/projects");
        },
      });
    } catch (error: any) {
      toast.error(error?.data?.message || "Something went wrong", {
        id: toastId,
        duration: 1000,
      });
    }
  };

  const handleFieldAppend = () => {
    append({ name: "features" });
  };

  return (
    <div className="text-white bg-[#0F212F]">
      <div className=" flex flex-col md:flex-row  rounded-xl justify-center items-center">
        {/* form area */}
        <div className="lg:w-[800px] bg-[#081B29] text-white rounded-xl p-12 ">
          <div className="text-center pb-8 text-2xl font-semibold">
            <h3>Create New Project</h3>
            <p className="text-medium">
              Provide a full screenshot of your software and use it as an image
            </p>
          </div>
          <RWForm onSubmit={onSubmit}>
            {/* row-1 */}
            <div className="grid grid-cols-2 gap-3">
              <div className="py-1">
                <RWInput name="title" type="text" label="Title" />
              </div>
              <div className="py-1">
                <RWInput name="deployLink" type="text" label="Deploy Link" />
              </div>
            </div>

            {/* row-2 */}
            <div className="flex justify-between gap-5 items-center">
              <div className="py-1 flex-1 mt-5">
                <RWInput
                  name="githubClientLink"
                  type="text"
                  label="Github client link"
                />
              </div>
              <div className="py-1 flex-1 mt-5">
                <RWInput
                  name="githubServerLink"
                  type="text"
                  label="Github server link"
                />
              </div>
            </div>

            {/* row-3 */}
            <div className="flex justify-between gap-5 items-center">
              <div className="py-1 flex-1 mt-5">
                <RWInput
                  name="projectChallenges"
                  type="text"
                  label="Project challenges"
                />
              </div>
              <div className="py-1 flex-1 mt-5">
                <RWInput name="improvement" type="text" label="Improvement" />
              </div>
            </div>

            {/* row-4 */}
            <div className="flex justify-between gap-5 items-center">
              <div className="py-1 flex-1 mt-5">
                <div className="py-1">
                  <Select
                    className=""
                    items={skillsData}
                    label="Select used technologies"
                    selectedKeys={new Set(selectedValues)}
                    variant="bordered"
                    onSelectionChange={(keys) => {
                      const selected = Array.from(keys).map(String);
                      setSelectedValues(selected);
                    }}
                    selectionMode="multiple"
                  >
                    {skillsData?.map((item: any) => (
                      <SelectItem key={item?._id}>{item?.name}</SelectItem>
                    ))}
                  </Select>
                </div>
              </div>
              <div className="py-1 flex-1">
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
            </div>

            {/* row-5 */}
            <div className="flex justify-between items-center ">
              <h1 className="text-xl">Add multiple features</h1>
              <Button
                className="p-1 bg-[#0F212F] text-white"
                isIconOnly
                onClick={() => handleFieldAppend()}
              >
                <AddIcon />
              </Button>
            </div>

            {/* row-6 */}
            <div className="grid grid-cols-2 gap-3">
              {fields.map((field, index) => (
                <div key={field.id} className="flex items-center gap-2 mt-2">
                  <RWInput
                    name={`features.${index}.value`}
                    label={`Features ${index + 1}`}
                  />
                  <Button
                    className="p-1 absolute -mt-6  ml-80 bg-[#0F212F] w-fit"
                    isIconOnly
                    size="sm"
                    onClick={() => remove(index)}
                  >
                    <TrashIcon />
                  </Button>
                </div>
              ))}
            </div>

            <div className="py-1 mt-3">
              <RWTextArea name="description" label="Description" />
            </div>

            <button
              className="w-full py-3 my-4 px-6 border rounded-lg hover:bg-[#0F212F]"
              type="submit"
            >
              Submit Now
            </button>
          </RWForm>
        </div>
      </div>
    </div>
  );
};

export default CreateProjectPage;
