"use client";
import AddSkills from "@/components/Dashboard/AddSkills";
import React from "react";

const Page = () => {
  return (
    <>
    <AddSkills />
    <div>
      {/* Skill Categories */}
      <div className="space-y-4">
        {["Frontend", "Backend", "Tools"].map((category) => (
          <div key={category}>
            <h3 className="text-xl border-b border-white pb-2">{category}</h3>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Page;
