"use client";

import "@/components/ui/css/reset-tailwind.css";
import AddBlog from "./components/AddBlog";
import AllBlog from "./components/AllBlog";

const page = () => {
  return (
    <div className="overflow-y-scroll ">
      <AddBlog />
      <AllBlog />
    </div>
  );
};

export default page;