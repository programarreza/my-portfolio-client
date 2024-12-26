"use client";
import { useGetSkills } from "@/src/hooks/skill.hook";

const SkillSection = () => {
const {data} = useGetSkills();
console.log(5, data?.data);
const skills = data?.data;

  return (
    <div className="px-4 md:px-6 lg:px-12 xl:px-24 min-h-screen bg-[#0f212f]  py-12" id="skill">
      <h2 className="text-4xl text-white text-center mb-12 md:mb-12 md:my-12">My Skills </h2>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-12">
        {
          skills?.map((skill) => (
            <div className=" bg-[#081b29f8]  p-3 rounded-lg w-40 flex justify-center items-center">
              <div >
                <img
                  src={skill.icon}
                  alt="Your Image"
                  className="w-[90px] h-[90px] rounded-[50%] border-2 border-white"
                />
                <p className="mt-2 text-center">{skill.name}</p>
               </div>
            </div>
          ))
        }
        
      </div>
    </div>
  );
};

export default SkillSection;
