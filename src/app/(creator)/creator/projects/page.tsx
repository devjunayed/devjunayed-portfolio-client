"use client";

import AllProjects from "@/app/(creator)/creator/projects/components/AllProjects";
import "@/components/ui/css/reset-tailwind.css";
import AddProjects from "./components/AddProjects";

const page = () => {
  return (
    <div className="overflow-y-scroll ">
      <AddProjects />
      <AllProjects />
    </div>
  );
};

export default page;
