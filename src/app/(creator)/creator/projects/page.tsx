"use client";
import AddProjects from "@/app/(creator)/creator/projects/components/AddProjects";
import AllProjects from "@/app/(creator)/creator/projects/components/AllProjects";
import "@/components/ui/css/reset-tailwind.css";

const page = () => {
  return (
    <div className="overflow-y-scroll ">
      <AddProjects />
      <AllProjects />
    </div>
  );
};

export default page;
