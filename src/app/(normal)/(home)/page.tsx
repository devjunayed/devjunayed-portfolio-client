import Education from "@/app/(normal)/(home)/components/Education";
import { Hero } from "@/app/(normal)/(home)/components/Hero/Hero";
import Skills from "@/app/(normal)/(home)/components/Skills";
import { TracingBeam } from "@/components/ui/tracing-beam";
import React from "react";
import { Projects } from "./components/Projects";
import ContactUs from "./components/ContactUs/ContactUs";

const page = () => {
  return (
    <div className="bg-slate-900 mt-20 ">
      <TracingBeam className="h-full">
        <Hero />
        <Education />
        <Skills />
        <Projects />
        <ContactUs />
      </TracingBeam>
    </div>
  );
};

export default page;
