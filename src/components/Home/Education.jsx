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
        {experiences?.map((experience) => (
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

        {/* <div className="">
          <h3 className="text-2xl mb-3">Job Experience </h3>
          <div className="border p-3 rounded-md ">
            <p className="flex items-center gap-2">
              <MdDateRange /> 10/01/2022 - 01/01/2023
            </p>
            <h2 className="text-2xl ">Distribution manager - Upay</h2>
            <p className="my-6">
              In the dynamic domain of mobile financial services, my role as
              Distribution Manager at "Upay" over the past year has been marked
              by strategic oversight and operational finesse. Collaborating with
              a diverse network of distributors and retailers, I've successfully
              expanded the market footprint of Upay's offerings.
            </p>

            <p className="">
              Through effective logistical planning and data-driven
              decision-making, I've optimized distribution channels, ensuring
              the accessibility of our financial products. This experience has
              not only deepened my understanding of the industry but also
              enhanced my ability to navigate challenges and seize
              opportunities. As a key contributor to Upay's success, I continue
              to thrive in this dynamic and evolving landscape.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Education;
