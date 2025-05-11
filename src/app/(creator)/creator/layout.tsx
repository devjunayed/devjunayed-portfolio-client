"use client";
import Loading from "@/components/Shared/Loading";
import { SidebarWrapper } from "@/components/ui/sidebar-wrapper";

import { useUser } from "@/context/user.provider";
import { creatorLinks } from "@/data/creator.links";


import React, { ReactNode, useEffect, useState } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const { user } = useUser();
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    if(user){
      setCurrentUser(user);
    }
  }, [user])

  if(!currentUser){
    return <Loading />
  }  


  return (
    <div className="max-h-screen">
      <SidebarWrapper links={creatorLinks}>
        {children}
      </SidebarWrapper>
    </div>
  );
};

export default DashboardLayout;
