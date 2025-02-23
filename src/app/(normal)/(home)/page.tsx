import Education from "@/app/(normal)/(home)/components/Education";
import { Hero } from "@/app/(normal)/(home)/components/Hero";
import Skills from "@/app/(normal)/(home)/components/Skills";
import { TracingBeam } from "@/components/ui/tracing-beam";
import React from "react";
import { Projects } from "./components/Projects";

const page = () => {
  return (
    <div className="bg-slate-900 mt-20 ">
      <TracingBeam className="">
        <Hero />
        <Education />
        <Skills />
        <Projects />
      </TracingBeam>
    </div>
  );
};

export default page;
