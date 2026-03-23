import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
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
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>{icon}</TooltipTrigger>
          <TooltipContent>{title}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </Link>
  );
};

export default SocialLink;
