import React from "react";
import SocialIcons from "./Hero/SocialIcon";

const Footer = () => {
  return (
    <div className="max-w-6xl mx-auto mt-10 ">
      <div className="mx-6 text-center gap-4 md:flex-row flex-col pt-4 flex items-center md:justify-between  border-t-1 border-white text-white">
        <p>All rights reserved to Md Junayed.</p>
        <div ><SocialIcons /></div>
      </div>
    </div>
  );
};

export default Footer;
