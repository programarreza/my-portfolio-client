/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import DownloadBtn from "./DownloadBtn";

const Banner = () => {
  return (
    <div
      className="px-8 flex justify-center items-center bg-[#081b29] min-h-screen text-white"
      id="banner"
    >
      <div className=" md:w-1/2 space-y-4">
        <h1 className="text-3xl md:text-4xl md:mt-24 lg:text-5xl">
          Hi, i'm Shafikul Islam
        </h1>
        <h3 className="text-xl md:text-2xl lg:text-3xl">
          Full Stack Developer
        </h3>
        <p className="text-base mb-2">
          As a Full Stack developer, I specialize in Next.js, Redux, React,
          Mongoose, Node, Express.js, Postgresql, Prisma, Nest.js and Docker
          Crafting robust and dynamic applications is my forte. From the
          database to the user interface, I'm here to streamline the process,
          optimize performance, and deliver an exceptional digital experience.
        </p>

        {/*cv download btn */}
        <DownloadBtn />
      </div>
      <div className=" md:w-1/2 ">
        <div>
          <Image
            alt="profile image"
            className="w-full hidden md:flex md:mt-32 lg:mt-20"
            height={500}
            src="https://i.postimg.cc/j2q9MBrd/no-bg11-removebg-preview.png"
            width={500}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
