import Education from "@/components/Home/Education";
import { Hero } from "@/components/Home/Hero";
import Skills from "@/components/Home/Skills";
import { TracingBeam } from "@/components/ui/tracing-beam";
import React from "react";

const page = () => {
  return (
    <div className="bg-slate-900 mt-20 ">
      <TracingBeam className="">
        <Hero />
        <Education />
        <Skills />
      </TracingBeam>
    </div>
  );
};

export default page;
