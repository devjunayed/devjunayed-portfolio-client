import { Code, HomeIcon,  MailIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { IoMdDocument } from "react-icons/io";

const Navbar = () => {
  const links = [
    {
      title: "Home",
      path: "/",
      icon: <HomeIcon size={24} />,
    },
    {
      title: "Blogs",
      path: "/blogs",
      icon: <IoMdDocument size={24} />,
    },
    {
      title: "Projects",
      path: "/projects",
      icon: <Code size={24} />,
    },
  ];
  return (
    <div className="w-full top-0 flex justify-center overflow-y-hidden  shadow-md shadow-gray-600 fixed z-50 bg-slate-900">
      <div className="flex justify-between w-full px-6 py-4 max-w-6xl ">
        <div className="navbar-start flex  ">
          <a
            href="mailto:mdjunayed601@gmail.com"
            className=" text-base  flex items-center gap-2 justify-center text-white"
          >
            <MailIcon /> mdjunayed601@gmail.com
          </a>
        </div>
        <div className="navbar-end  flex ">
          <div className="flex justify-end ">
            <ul className="gap-4 justify-end hidden  lg:flex">
              {links.map((link) => (
                <li key={link.title} className="flex justify-end items-end">
                  <Link
                    href={link.path}
                    className="flex gap-2   items-center text-white"
                  >
                    {link.icon} {link.title}
                  </Link>
                </li>
              ))}
            </ul>
            {/* For mobile menu */}
            {/* Drawer start */}
            <div className="drawer lg:hidden flex justify-end drawer-end w-7 ">
              <input
                id="my-drawer-3"
                type="checkbox"
                className="drawer-toggle "
              />
              <div className="drawer-content w-full flex items-center  flex-col">
                {/* Navbar */}
                {/* icon */}
                <div className="flex items-center justify-end lg:hidden">
                  <label
                    htmlFor="my-drawer-3"
                    aria-label="open sidebar"
                    className="text-white "
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
                <ul className="menu bg-slate-900 min-h-full w-56 p-4">
                  {/* Sidebar content here */}
                  {links.map((link) => (
                    <li key={link.title}>
                      <Link className="text-white" href={link.path}>
                        {link.icon} {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Drawer end */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
