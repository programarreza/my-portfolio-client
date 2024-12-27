"use client";
import Image from "next/image";

import { useGetSkills } from "@/src/hooks/skill.hook";

const SkillSection = () => {
  const { data } = useGetSkills();
  const skills = data?.data;

  return (
    <div className=" bg-[#0f212f]  py-12" id="skill">
      <h2 className="text-4xl text-white text-center mb-12 md:mb-12 md:my-12">
        My Skills{" "}
      </h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6  lg:gap-12">
        {skills?.map((skill:any, index:any) => (
          <div
            key={index}
            className=" bg-[#081b29f8]  p-3 rounded-lg w-40 flex justify-center items-center"
          >
            <div>
              <Image
                alt="Your Image"
                className="w-[90px] h-[90px] rounded-[50%] border-2 border-white"
                height={500}
                src={skill?.icon}
                width={500}
              />
              <p className="mt-2 text-center">{skill.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillSection;
