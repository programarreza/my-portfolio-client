"use client";
import { MdDateRange } from "react-icons/md";

import { useGetExperience } from "@/src/hooks/experiences.hook";

const Education = () => {
  const { data } = useGetExperience();
  const experiences = data?.data;

  return (
    <div
      className=" min-h-screen bg-[#0f212f] pt-24  text-white"
      id="educational"
    >
      <h2 className="text-white pb-12 text-3xl text-center"> My journey</h2>

      <div className="grid lg:grid-cols-2 gap-5">
        {experiences?.map((experience:any) => (
          <div key={experience?._id} className="">
            <h3 className="text-2xl mb-3">{experience?.category} </h3>
            <div className="border p-3 rounded-md ">
              <p className="flex items-center gap-2">
                <MdDateRange />
                {experience?.date}
              </p>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    experience?.content?.length > 1000
                      ? experience?.content?.slice(0, 1000) + "..."
                      : experience?.content,
                }}
                className="prose prose-invert max-w-none text-white text-sm"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
