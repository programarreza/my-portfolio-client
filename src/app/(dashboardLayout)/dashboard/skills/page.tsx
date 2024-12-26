"use client";

import SkillPageCard from "@/src/components/dashboard/skills/SkillPageCard";
import { useGetSkills } from "@/src/hooks/skill.hook";
import { ImSpinner6 } from "react-icons/im";

const SkillsPage = () => {
  const { data, isLoading } = useGetSkills();

  return (
    <div>
      {isLoading ? (
        <div className="flex justify-center items-center min-h-screen">
          <div className="flex w-fit mx-auto">
            <ImSpinner6 className="animate-spin m-auto" size={28} />
            <span>Loading...</span>
          </div>
        </div>
      ) : (
        <>
          {data?.data?.result?.length === 0 ? (
            <p className="flex justify-center items-center min-h-screen my-auto text-xl font-medium">
              skills not aboailvale
            </p>
          ) : (
            <SkillPageCard skills={data?.data} />
          )}
        </>
      )}
    </div>
  );
};

export default SkillsPage;
