import React from "react";
import SingleProjectCard from "./components/SingleProjectCard";

const SingleProjectPage = async ({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) => {
  const {projectId} = await params;


  return (
    <div className="mt-20  max-w-6xl mx-auto   text-white">
      <SingleProjectCard projectId={projectId} />
    </div>
  );
};

export default SingleProjectPage;
