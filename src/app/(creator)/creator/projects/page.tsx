"use client";
import AddProjects from "@/components/Dashboard/Projects/AddProjects"
import AllProjects from "@/components/Dashboard/Projects/AllProjects";
import "@/components/ui/css/reset-tailwind.css"


const page = () => {
  return (
    <div className="overflow-y-scroll ">
      <AddProjects />
      <AllProjects />
    </div>
  )
}

export default page
