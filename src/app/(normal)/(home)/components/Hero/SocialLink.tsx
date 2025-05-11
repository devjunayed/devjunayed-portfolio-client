import { Tooltip } from "antd";
import Link from "next/link";
import React from "react";

export interface TSocialLink {
  title: string;
  href: string;
  newTab?: boolean;
  icon: React.ReactNode;
}

const SocialLink = ({ title, href, newTab, icon }: TSocialLink) => {
  return (
    <Link href={href} {...(newTab && { target: "_blank" })}>
      <Tooltip title={title}>{icon}</Tooltip>
    </Link>
  );
};

export default SocialLink;
