"use client";

import Image from "next/image";
import { ImSpinner6 } from "react-icons/im";

import Container from "@/src/components/Container";
import { useGetSingleProject } from "@/src/hooks/project.hook";

const ProjectDetailsPage = ({ params }: { params: any }) => {
  const { data, isLoading } = useGetSingleProject(params?.details || "");
  const project = data?.data;

  return (
    <Container>
      <div className="min-h-screen py-24 px-24">
        {isLoading ? (
          <div className="flex justify-center items-center min-h-screen">
            <div className="flex w-fit mx-auto">
              <ImSpinner6 className="animate-spin m-auto" size={28} />
              <span>Loading...</span>
            </div>
          </div>
        ) : (
          <div className="bg-[#081B29] shadow-large border border-gray-500 flex flex-col justify-between h-full p-4 rounded-lg">
            <div className="mt-auto">
              <Image
                alt={project?._id}
                className=" w-full h-[50vh] object-cover"
                height={200}
                src={project?.image}
                width={200}
              />
            </div>

            <p className="my-2">{project?.createdAt}</p>
            <p className="my-2 text-xl">{project?.title}</p>
            <p className="my-2">{project?.description}</p>

            <div>
              <h1 className="mt-2 text-xl">Technologies:</h1>
              <ul className="flex gap-4 flex-wrap">
                {project?.technologies?.map(
                  (technology: any, index: number) => (
                    <li key={index} className="mb-2">
                      {index + 1}: {technology?.description}
                    </li>
                  )
                )}
              </ul>
            </div>

            <div>
              <h1 className="mt-2 text-xl">Features:</h1>
              <ul>
                {project?.features.map((feature: any, index: number) => (
                  <li key={index} className="mb-2">
                    {index + 1}: {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h1 className="mt-2 text-xl">Project Challenges:</h1>
              <p className="">{project?.projectChallenges}</p>
            </div>

            <div>
              <h1 className="mt-2 text-xl">Improvement:</h1>
              <p className="">{project?.improvement}</p>
            </div>

            <div>
              <h1 className="mt-2 text-xl">Resources:</h1>
              <p>
                Live link:{" "}
                {project?.deployLink && (
                  <a
                    className="text-blue-500 underline"
                    href={project.deployLink}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Click here
                  </a>
                )}
              </p>
              <p>
                GitHub client link:{" "}
                {project?.githubClientLink && (
                  <a
                    className="text-blue-500 underline"
                    href={project.githubClientLink}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Click here
                  </a>
                )}
              </p>
              <p>
                GitHub server link:{" "}
                {project?.githubServerLink && (
                  <a
                    className="text-blue-500 underline"
                    href={project.githubServerLink}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Click here
                  </a>
                )}
              </p>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};

export default ProjectDetailsPage;
