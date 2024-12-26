import { MdDateRange } from "react-icons/md";

const Education = () => {
  return (
    <div
      className="px-4 md:px-6 lg:px-12 xl:px-24 min-h-screen bg-[#0f212f] pt-24 md:py-24 text-white"
      id="educational"
    >
      <h2 className="text-white pb-12 text-3xl text-center"> My journey</h2>

      <div className="grid lg:grid-cols-2 gap-5">
        <div className="">
          <h3 className="text-2xl mb-3">Education </h3>
          <div className="border p-3 rounded-md ">
            <p className="flex items-center gap-2">
              <MdDateRange />2022 - 2023
            </p>
            <h2 className="text-2xl ">Bachelor of Arts</h2>
            <p className="my-6">
            This pivotal second year of my Bachelor of Arts journey is characterized by a nuanced exploration of literature, history, philosophy, and sociology. I find myself at the intersection of theoretical depth and practical application, with a heightened emphasis on specialized studies. Engaging in collaborative discussions amplifies my understanding, while research projects refine my analytical prowess. 
            </p>

            <p className="lg:mb-6 xl:mb-0">
            communication takes center stage, weaving its way into every facet of my academic pursuits. These experiences not only fortify my intellectual acumen but also cultivate a profound sense of purpose. Armed with a diverse skill set, I am poised for a future where I can seamlessly contribute to the academic realm and beyond.
            </p>
          </div>
        </div>

        <div className="">
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
        </div>
      </div>
    </div>
  );
};

export default Education;
