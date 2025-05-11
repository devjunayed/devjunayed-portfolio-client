import React from "react";

import SocialLink, { TSocialLink } from "./SocialLink";
import { socialLinkData } from "@/data/socialLinkData";

const SocialIcons = () => {
  return (
    <div className="mb-6 flex items-center gap-4 text-white text-3xl">
      {socialLinkData.map((social: TSocialLink, index: number) => (
        <SocialLink key={index} {...social} />
      ))}
    </div>
  );
};

export default SocialIcons;
