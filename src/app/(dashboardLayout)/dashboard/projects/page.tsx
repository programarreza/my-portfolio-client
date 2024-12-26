"use client";

import ProjectPageCard from "@/src/components/dashboard/projects/ProjectPageCard";
import { useGetProjects } from "@/src/hooks/project.hook";
import { ImSpinner6 } from "react-icons/im";

const ProjectsPage = () => {
  const { data, isLoading } = useGetProjects();

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
              project not aboailvale
            </p>
          ) : (
            <ProjectPageCard projects={data?.data} />
          )}
        </>
      )}
    </div>
  );
};

export default ProjectsPage;
