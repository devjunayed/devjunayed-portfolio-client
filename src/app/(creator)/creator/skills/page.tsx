"use client";
import AddSkills from "@/components/Dashboard/Skills/AddSkills";
import SkillCard from "@/components/Dashboard/Skills/SkillCard";
import { useGetAllSkill } from "@/hooks/skill.hook";
import React from "react";

const Page = () => {
  const { data: skillData } = useGetAllSkill();
  return (
    <>
      <AddSkills />
      <div>
        {skillData?.length === 0 && (
          <div className="h-[70vh] flex items-center justify-center text-2xl text-white">
            No skill yet 🤣
          </div>
        )}
        {/* Skill Categories */}
        <div className="space-y-4">
          {skillData &&
            skillData.map((category) => (
              <div key={category._id}>
                <h3 className="capitalize text-white text-xl border-b border-white pb-2">
                  {category.categoryName}
                </h3>
                <div className="flex mt-2">
                  {category.skills.map((skill) => (
                    <SkillCard key={skill.icon} skill={skill} />
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Page;
