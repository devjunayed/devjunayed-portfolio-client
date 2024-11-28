import Education from "@/components/Home/Education";
import { Hero } from "@/components/Home/Hero";
import Skills from "@/components/Home/Skills";
import React from "react";

const page = () => {
  return (
    <div className="bg-slate-900 mt-20 ">
      <Hero />
      <Education />
      <Skills />
    </div>
  );
};

export default page;
