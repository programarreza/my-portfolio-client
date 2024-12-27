import Image from "next/image";

const About = () => {
  return (
    <div className=" py-24 bg-[#081b29] text-white " id="about">
      <div className="flex flex-col items-center lg:flex-row lg:justify-center lg:items-center">
        <div className="flex-1 mx-auto">
          <Image
            alt="Profile"
            className="w-3/6 lg:w-3/6 mx-auto rounded-full border "
            height={200}
            src="https://i.postimg.cc/j2q9MBrd/no-bg11-removebg-preview.png"
            width={200}
          />
        </div>

        <div className="mb-12 md:mb-0 p-5 pt-0 flex-1">
          <h2 className="text-white pb-5 text-4xl text-center  lg:mb-12 flex">
            About Me
          </h2>

          <p className="mb-6">
            As a Full Stack developer, I specialize in Next.js, Redux, React,
            Mongoose, Node, Express.js, Postgresql, Prisma, Nest.js and Docker
            Crafting robust and dynamic applications is my forte. From the
            database to the user interface, I am here to streamline the process,
            optimize performance, and deliver an exceptional digital experience.
          </p>

          <p>
            Reliability and Structure: Punctuality is not just a habit; its a
            reflection of my commitment. With a judging trait, I bring structure
            and order to both my personal and professional life. You can rely on
            me to meet deadlines, honor commitments, and contribute to a
            well-organized environment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
