"use client";
import Loading from "@/components/Shared/Loading";
import { SidebarWrapper } from "@/components/ui/sidebar-wrapper";

import { useUser } from "@/context/user.provider";
import { creatorLinks } from "@/utils/creator.links";


import React, { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const { user } = useUser();

  if(!user){
    return <Loading />
  }  

  console.log(user)

  return (
    <div className="max-h-screen">
      <SidebarWrapper links={creatorLinks}>
        {children}
      </SidebarWrapper>
    </div>
  );
};

export default DashboardLayout;
