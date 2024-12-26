"use client";

import RWForm from "@/src/components/form/RWForm";
import RWInput from "@/src/components/form/RWInput";
import RWTextArea from "@/src/components/form/RWTextForm";
import { useUpdateSkill } from "@/src/hooks/skill.hook";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import {
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure,
} from "@nextui-org/modal";
import { Controller, FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

interface IProps {
  skill: any;
}

const UpdateSkill = ({ skill }: IProps) => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const { mutate: handleUpdateSkill, isPending } = useUpdateSkill();

  const defaultValues = {
    name: skill?.name || "",
    description: skill?.description || "",
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const formData = new FormData();
      const jsonData = {
        name: data.name,
        description: data.description,
      };

      formData.append("data", JSON.stringify(jsonData));

      if (data.image) {
        formData.append("image", data.image);
      } else if (skill?.image) {
        formData.append("image", skill.image);
      }

      const args = {
        skillData: formData,
        skillId: skill?._id,
      };

      handleUpdateSkill(args as any, {
        onSuccess: () => {
          onClose();
        },
      });
    } catch (error: any) {
      toast.error(error?.data?.message || "Something went wrong");
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
                <div className=" bg-[#081B29] text-white rounded-xl p-12 ">
                  <div className="text-center pb-8 text-2xl font-semibold">
                    <h3>Update Skill</h3>
                  </div>
                  <RWForm onSubmit={onSubmit} defaultValues={defaultValues}>
                    {/* row-1 */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="py-1">
                        <RWInput name="name" type="text" label="Name" />
                      </div>
                      <div className="-mt-4">
                        <Controller
                          name="image"
                          render={({
                            field: { onChange, value, ...field },
                          }) => (
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
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default UpdateSkill;
