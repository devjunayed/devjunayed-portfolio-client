import { ReactNode } from "react";

export interface TLinkItem {
  label: string;
  href?: string;
  icon: ReactNode;
  subLinks?: TLinkItem[];
}

export type TSkill =  {
  skillName: string;
  description: string;
  icon: string;
}

export type TSkillData = {
  _id?: string;
  categoryName?: string;
  skills: [
   TSkill
  ];
};

export type TBlogData = {
  _id: string;
  title: string;
  description: string;
}