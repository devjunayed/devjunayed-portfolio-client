import { Hero } from "@/components/Home/Hero";
import Skills from "@/components/Home/Skills";
import React from "react";

const page = () => {
  return (
    <div className="bg-slate-900 mt-20">
      <Hero />
      <Skills />
    </div>
  );
};

export default page;
