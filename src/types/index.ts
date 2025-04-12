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
  _id?: string;
  title: string;
  thumbnail: string;
  shortDescription: string;
  isFeatured: boolean;
  description: string;
}

// types.ts
export type  TProjectData = {
  _id?: string;
  projectTitle: string;
  projectThumbnail: string;
  projectClientViewLink: string;
  projectServerViewLink: string;
  projectClientCodeLink: string;
  projectServerCodeLink: string;
  projectDescription: string;
  projectShortDescription: string;
  projectTags: string[];
  isFeatured: boolean;
  projectTechnologies: string[];
}
