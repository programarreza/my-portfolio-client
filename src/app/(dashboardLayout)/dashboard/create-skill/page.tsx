"use client";

import RWForm from "@/src/components/form/RWForm";
import RWInput from "@/src/components/form/RWInput";
import RWTextArea from "@/src/components/form/RWTextForm";
import { useCreateSkill } from "@/src/hooks/skill.hook";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { useRouter } from "next/navigation";
import { Controller, FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

const CreateSkillPage = () => {
  const { mutate: handleCreateSkill, isPending } = useCreateSkill();
  const router = useRouter();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const formData = new FormData();
      const jsonData = {
        name: data.name,
        description: data.description,
      };

      formData.append("data", JSON.stringify(jsonData));
      formData.append("image", data.image);

      handleCreateSkill(formData, {
        onSuccess: () => {
          router.push("/dashboard/skills");
        },
      });
    } catch (error: any) {
      toast.error(error?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="text-white bg-[#0F212F]">
      <div className=" flex flex-col md:flex-row  rounded-xl justify-center items-center">
        {/* form area */}
        <div className="lg:w-[800px] bg-[#081B29] text-white rounded-xl p-12 ">
          <div className="text-center pb-8 text-2xl font-semibold">
            <h3>Create New Skill</h3>
          </div>
          <RWForm onSubmit={onSubmit}>
            {/* row-1 */}
            <div className="grid grid-cols-2 gap-3">
              <div className="py-1">
                <RWInput name="name" type="text" label="Name" />
              </div>
              <div className="-mt-4">
                <Controller
                  name="image"
                  render={({ field: { onChange, value, ...field } }) => (
                    <Input
                      type="file"
                      value={value?.fileName}
                      {...field}
                      onChange={(e) => onChange(e.target.files?.[0])}
                      className=" bg-none bg-transparent cursor-pointer w-full border p-1 border-dashed "
                      radius="none"
                      label="Select project image"
                    />
                  )}
                />
              </div>
            </div>

            <div className="py-1 mt-3">
              <RWTextArea name="description" label="Description" />
            </div>

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
          </RWForm>
        </div>
      </div>
    </div>
  );
};

export default CreateSkillPage;
