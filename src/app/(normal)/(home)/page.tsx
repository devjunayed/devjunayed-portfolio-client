import Education from "@/app/(normal)/(home)/components/Education";
import { Hero } from "@/app/(normal)/(home)/components/Hero/Hero";
import Skills from "@/app/(normal)/(home)/components/Skills";
import { TracingBeam } from "@/components/ui/tracing-beam";
import React from "react";
import ContactUs from "./components/ContactUs/ContactUs";
import FeaturedBlog from "./components/FeaturedBlog/FeaturedBlog";
import { Projects } from "./components/FeaturedProjects/Projects";
import About from "./components/About";

const page = () => {
  return (
    <div className="bg-slate-900 mt-20 ">
      <TracingBeam className="min-h-screen">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <FeaturedBlog />
        <ContactUs />
      </TracingBeam>
    </div>
  );
};

export default page;
