"use client";

import ProjectPageCard from "@/src/components/dashboard/projects/ProjectPageCard";
import { useGetProjects } from "@/src/hooks/project.hook";

const ProjectsPage = () => {
  const { data, isLoading } = useGetProjects();
  console.log("data", data);
  console.log("isLoading", isLoading);

  return (
    <div>
      <ProjectPageCard projects={data?.data} />
    </div>
  );
};

export default ProjectsPage;
