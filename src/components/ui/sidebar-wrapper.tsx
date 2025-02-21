/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { ReactNode, useState } from "react";
import { cn } from "@/utils/utils";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { TLinkItem } from "@/types";

export function SidebarWrapper({
  children,
  links,
}: {
  children: ReactNode;
  links: TLinkItem[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={cn(
        "rounded-md bg flex flex-col md:flex-row w-full   flex-1   overflow-hidden ",
        "h-screen"
      )}
    >
      <Sidebar  open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between ">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLinkWithNested key={idx} link={link} />
              ))}
            </div>
          </div>
        </SidebarBody>
      </Sidebar>
      <Dashboard>{children}</Dashboard>
    </div>
  );
}

// Component for handling nested links
const SidebarLinkWithNested = ({ link }: { link: any }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <SidebarLink
        isOpen={isOpen}
        link={link}
        onClick={() => link.subLinks && setIsOpen(!isOpen)}
      />
      {link.subLinks && isOpen && (
        <div className="p-2 pl-8 rounded-lg ">
          {link.subLinks.map((subLink: any, idx: number) => (
            <SidebarLink
              onClick={() => setIsOpen(!isOpen)}
              key={idx}
              link={{
                label: subLink.label,
                href: subLink.href,
                icon: subLink.icon,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export const Dashboard = ({ children }: { children: ReactNode }) => {
  return <div className=" p-10  rounded-lg  md:mx-10 w-full shadow-xl">{children}</div>;
};
