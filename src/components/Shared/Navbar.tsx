import { HomeIcon, InfoIcon, MailIcon, } from "lucide-react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const links = [
    {
      title: "Home",
      path: "/",
      icon: <HomeIcon />
    },
    {
      title: "About",
      path: "#about",
      icon: <InfoIcon />
    },
  ];
  return (
    <div className="navbar px-10  fixed z-50 bg-slate-900 shadow-md shadow-gray-600 mb-2">
      <div className="navbar-start flex ">
     
        <a href="mailto:mdjunayed601@gmail.com" className=" text-base md:text-xl flex items-center gap-2 justify-center"><MailIcon /> mdjunayed601@gmail.com</a>
      </div>
      <div className="navbar-end ">
        <ul className="menu menu-horizontal  justify-end hidden lg:flex">
          {links.map((link) => (
            <li key={link.title}>
              <Link href={link.path}>{link.icon} {link.title}</Link>
            </li>
          ))}
        </ul>
           {/* Drawer start */}
           <div className="drawer drawer-end w-7 ">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle " />
          <div className="drawer-content flex flex-col">
            {/* Navbar */}
            <div className="flex lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className=" "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            {/* Page content here */}
          </div>
          <div className="drawer-side bg-slate- min-h-screen z-50">
            <label
              htmlFor="my-drawer-3"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-slate-900 min-h-full w-80 p-4">
              {/* Sidebar content here */}
              {links.map((link) => (
            <li key={link.title}>
              <Link href={link.path}>{link.icon} {link.title}</Link>
            </li>
          ))}
            </ul>
          </div>
        </div>
        {/* Drawer end */}
      </div>
     
    </div>
  );
};

export default Navbar;
