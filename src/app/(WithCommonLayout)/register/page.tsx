"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@nextui-org/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Controller, FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

import RWForm from "@/src/components/form/RWForm";
import RWInput from "@/src/components/form/RWInput";
import { useUserRegistration } from "@/src/hooks/auth.hook";
import registerValidationSchema from "@/src/schemas/register.schema";

const RegisterPage = () => {
  const { mutate: handleUserRegistration } = useUserRegistration();
  const router = useRouter();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Registering...");

    try {
      const formData = new FormData();
      const jsonData = {
        name: data.name,
        email: data.email,
        password: data.password,
        phone: data.phone,
        address: data.address,
      };

      formData.append("data", JSON.stringify(jsonData));
      formData.append("image", data.image);

      // Send the formData
      handleUserRegistration(formData, {
        onSuccess: () => {
          toast.success("User registration successful.", {
            id: toastId,
            duration: 1000,
          });
          router.push("/login");
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
    <div className=" bg-[#0F212F]">
      <div className=" min-h-screen ">
        <div className="w-full flex flex-col justify-center items-center my-auto">
          <div className="hero">
            <div className=" flex flex-col md:flex-row  rounded-xl justify-between">
              {/* form area */}
              <div className="lg:w-[600px] text-white bg-[#081B29] border mt-24  rounded-xl p-12 ">
                <div className="text-center py-8 text-2xl font-semibold">
                  <h3>Welcome To Portfolio</h3>
                  <p className="text-medium">Please register</p>
                </div>

                <RWForm
                  resolver={zodResolver(registerValidationSchema)}
                  onSubmit={onSubmit}
                >
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="py-1">
                      <RWInput label="Name" name="name" type="text" />
                    </div>
                    <div className="py-1">
                      <RWInput label="Email" name="email" type="email" />
                    </div>
                    <div className="py-1">
                      <RWInput label="Mobile Number" name="phone" type="text" />
                    </div>
                    <div className="py-1">
                      <RWInput
                        label="Password"
                        name="password"
                        type="password"
                      />
                    </div>
                    <div className="py-1 mt-2">
                      <RWInput label="Address" name="address" type="text" />
                    </div>
                    <div className="py-1">
                      <Controller
                        name="image"
                        render={({ field: { onChange, value, ...field } }) => (
                          <Input
                            required
                            type="file"
                            value={value?.fileName}
                            {...field}
                            className=" bg-none bg-transparent cursor-pointer"
                            label="Select profile photo (5MB max)"
                            onChange={(e) => onChange(e.target.files?.[0])}
                          />
                        )}
                      />
                    </div>
                  </div>

                  <button
                    className="w-full py-3 hover:text-black my-4 px-6 border rounded-lg hover:bg-gray-200"
                    type="submit"
                  >
                    Register
                  </button>
                </RWForm>

                <div className="text-center">
                  Already have an account?{" "}
                  <Link className="underline" href={"/login"}>
                    Login Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
