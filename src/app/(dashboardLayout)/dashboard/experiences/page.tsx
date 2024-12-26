"use client";

import ExperiencePageCard from "@/src/components/dashboard/experiences/ExperiencePageCard";
import { useGetExperience } from "@/src/hooks/experiences.hook";
import { ImSpinner6 } from "react-icons/im";

const ExperiencesPage = () => {
  const { data, isLoading } = useGetExperience();

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
          {data?.data?.length === 0 ? (
            <p className="flex justify-center items-center min-h-screen my-auto text-xl font-medium">
              experiences not aboailvale
            </p>
          ) : (
            <ExperiencePageCard experiences={data?.data} />
          )}
        </>
      )}
    </div>
  );
};

export default ExperiencesPage;
