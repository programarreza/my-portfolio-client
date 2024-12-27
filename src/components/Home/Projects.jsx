"use client";

import { Tooltip } from "@nextui-org/tooltip";
import Link from "next/link";
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { IoMdOpen } from "react-icons/io";

import { useGetProjects } from "@/src/hooks/project.hook";

const Projects = () => {
  const { data } = useGetProjects();
  const projects = data?.data;

  return (
    <div className=" bg-[#081b29] pb-12 text-white " id="projects">
      <h2 className="text-white pb-12 text-4xl text-center pt-12  ">
        Latest Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects?.map((project) => (
          <div
            key={project?._id}
            className="group  relative items-center justify-center overflow-hidden  hover:shadow-xl hover:shadow-black/30 transition-shadow"
          >
            <div className=" border">
              <img
                alt=""
                className="h-[300px] w-full object-cover group-hover:rotate-3 group-hover:scale-125 translate-transform duration-500"
                src={project?.image}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70" />

            <div className="absolute inset-0 flex flex-col items-center justify-center px-0 text-center translate-y-[95%]  group-hover:translate-y-0 translate-all duration-500 ">
              <h1 className="text-xl font-bold text-white">
                {project?.title?.length > 80
                  ? project?.title?.slice(0, 80) + "."
                  : project?.title}
              </h1>
              <p className="text-white mt-3 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {project?.description?.length > 80
                  ? project?.description?.slice(0, 80) + "."
                  : project?.description}
              </p>
              <div />
              <div className="flex justify-center space-x-3">
                <Link
                  className=""
                  href={project?.deployLink}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Tooltip color="#fff" content="Live link">
                    <div className="rounded-full -mt-1  text-sm capitalize text-white">
                      <IoMdOpen size={45} />
                    </div>
                  </Tooltip>
                </Link>

                <Link
                  className=""
                  href={project?.githubClientLink}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Tooltip color="#fff" content="Github client link">
                    <div className="rounded-full  text-sm capitalize text-white">
                      <FaSquareGithub size={40} />
                    </div>
                  </Tooltip>
                </Link>

                <Link
                  className=""
                  href={project?.githubServerLink}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Tooltip color="#fff" content="Github server link">
                    <div className="rounded-full  text-sm capitalize text-white">
                      <FaGithubSquare size={40} />
                    </div>
                  </Tooltip>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
