"use client";
import Link from "next/link";
import React from "react";


const LinkButton = ({href, btnText, icon}: {href: string, btnText: string, icon: React.ReactNode}) => {
  return (
    <>
    <Link

      href={href}
      className="cursor-pointer z-50 inline-flex mx-auto h-10 md:h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-3 md:px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 gap-2  md:gap-4"
    >
      {btnText} <span className="flex items-center h-full justify-center">{icon}</span>
    </Link>
    </>
  );
};

export default LinkButton;
