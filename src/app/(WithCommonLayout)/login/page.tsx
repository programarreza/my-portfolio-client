/* eslint-disable react/no-unescaped-entities */
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FieldValues, SubmitHandler } from "react-hook-form";

import RWForm from "@/src/components/form/RWForm";
import RWInput from "@/src/components/form/RWInput";
import { useUser } from "@/src/context/user.provider";
import { useUserLogin } from "@/src/hooks/auth.hook";
import loginValidationSchema from "@/src/schemas/login.schema";

const LoginPage = () => {
  const { mutate: handleUserLogin } = useUserLogin();
  const { setIsLoading: userLogin } = useUser();
  const router = useRouter();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const userData = {
      email: data.email,
      password: data.password,
    };

    handleUserLogin(userData, {
      onSuccess: () => {
        router.push("/");
        userLogin(true);
      },
    });
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
                  <h3>Welcome Back</h3>
                  <p className="text-medium">Please login now</p>
                </div>
                <RWForm
                  resolver={zodResolver(loginValidationSchema)}
                  onSubmit={onSubmit}
                >
                  <div className="">
                    <div className="py-1">
                      <RWInput label="Email" name="email" type="email" />
                    </div>
                    <div className="py-1">
                      <RWInput
                        label="Password"
                        name="password"
                        type="password"
                      />
                    </div>
                  </div>

                  <button
                    className="w-full py-3 my-4 px-6 border rounded-lg hover:bg-gray-200 hover:text-black"
                    type="submit"
                  >
                    Login
                  </button>
                </RWForm>

                <div className="text-center">
                  Don't have an account?{" "}
                  <Link className="underline" href={"/register"}>
                    Register Now
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

export default LoginPage;
