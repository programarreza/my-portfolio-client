"use client";

import { AddIcon, TrashIcon } from "@/src/assets/icons";
import RWForm from "@/src/components/form/RWForm";
import RWInput from "@/src/components/form/RWInput";
import RWTextArea from "@/src/components/form/RWTextForm";
import { useUpdateProject } from "@/src/hooks/project.hook";
// import { useUpdateProjectMutation } from "@/src/lib/Redux/features/project/projectApi";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import {
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure,
} from "@nextui-org/modal";
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useFieldArray,
  useFormContext,
} from "react-hook-form";
import { toast } from "sonner";

interface IProps {
  project: any;
}

interface IFeatures {
  features: string[];
}

const FeaturesCompo = () => {
  const { control } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "features",
  });

  return (
    <div className="">
      <div className="flex justify-between items-center mt-2">
        <h1 className="text-xl">Add multiple features</h1>
        <Button
          className="p-1 bg-gradient-to-t from-[#471133] to-[#140921]
 text-white"
          isIconOnly
          onClick={() => append("")}
        >
          <AddIcon />
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {fields.map((field, index) => (
          <div
            key={field.id}
            className="flex items-center gap-2 mt-2 text-white"
          >
            <RWInput
              name={`features.${index}`}
              label={`Features ${index + 1}`}
            />
            <Button
              className="p-1 absolute -mt-6  ml-64 bg-gradient-to-t from-[#471133] to-[#140921] w-fit"
              isIconOnly
              size="sm"
              onClick={() => {
                remove(index);
              }}
            >
              <TrashIcon />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

const UpdateProject = ({ project }: IProps) => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const { mutate: handleUpdateProject, isPending } = useUpdateProject();

  const defaultValues = {
    title: project?.title || "",
    deployLink: project?.deployLink || "",
    githubClientLink: project?.githubClientLink || "",
    githubServerLink: project?.githubServerLink || "",
    projectChallenges: project?.projectChallenges || "",
    improvement: project?.improvement || "",
    features: project?.features.length ? project?.features : [""],
    description: project?.description || "",
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("project updating...");

    try {
      const formData = new FormData();
      const jsonData = {
        title: data.title,
        description: data.description,
        deployLink: data.deployLink,
        githubClientLink: data.githubClientLink,
        githubServerLink: data.githubServerLink,
        projectChallenges: data.projectChallenges,
        improvement: data.improvement,
        features: data.features.map((feature: string) => feature),
      };

      formData.append("data", JSON.stringify(jsonData));

      if (data.image) {
        formData.append("image", data.image);
      } else if (project?.image) {
        formData.append("image", project.image);
      }

      const args = {
        projectData: formData,
        projectId: project?._id,
      };

      handleUpdateProject(args as any, {
        onSuccess: () => {
          toast.success("Project updated successfully!", {
            id: toastId,
            duration: 1000,
          });
          onClose();
        },
      });

    } catch (error: any) {
      toast.error(error?.data?.message || "Something went wrong", {
        id: toastId,
        duration: 1000,
      });
    }
  };

  return (
    <>
      <Button
        className="p-0 m-0 w-0 bg-transparent text-white"
        onPress={onOpen}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="size-5"
        >
          <path d="m5.433 13.917 1.262-3.155A4 4 0 0 1 7.58 9.42l6.92-6.918a2.121 2.121 0 0 1 3 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 0 1-.65-.65Z" />
          <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0 0 10 3H4.75A2.75 2.75 0 0 0 2 5.75v9.5A2.75 2.75 0 0 0 4.75 18h9.5A2.75 2.75 0 0 0 17 15.25V10a.75.75 0 0 0-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5Z" />
        </svg>
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="bg-[#081B29] text-white "
        size="2xl"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                {/* form area */}
                <div className=" bg-[#081B29] text-white ">
                  <div className="text-center  text-2xl font-semibold">
                    <h3> Update your Project</h3>
                  </div>
                  <RWForm onSubmit={onSubmit} defaultValues={defaultValues}>
                    {/* row-1 */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="py-1">
                        <RWInput name="title" type="text" label="Title" />
                      </div>
                      <div className="py-1">
                        <RWInput
                          name="deployLink"
                          type="text"
                          label="Deploy Link"
                        />
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
                        <RWInput
                          name="improvement"
                          type="text"
                          label="Improvement"
                        />
                      </div>
                    </div>

                    {/* row-4 features  */}
                    <div>
                      <FeaturesCompo />
                    </div>

                    {/* row-5*/}
                    <div className="py-1 ">
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
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default UpdateProject;
