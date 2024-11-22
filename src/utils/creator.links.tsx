import {
  IconBrandTabler,
  IconPhotoScan,
  IconSettings,
} from "@tabler/icons-react";
import {  FileTextIcon, Folder, Star } from "lucide-react";

import { BiPhotoAlbum } from "react-icons/bi";

import { MdPhotoLibrary } from "react-icons/md";

export const creatorLinks = [
  {
    label: "Dashboard",
    href: `dashboard`,
    icon: <IconBrandTabler className="text-white h-5 w-5" />,
  },
  {
    label: "Blog",
    icon: <FileTextIcon className="text-white h-5 w-5" />,
    href: "blog"
  },
  {
    label: "Skills",
    icon: <Star className="text-white h-5 w-5" />,
    href: "skills",
  },
  {
    label: "Projects",
    icon: <Folder className="text-white h-5 w-5" />,
    href: "projects"
    
  },

  {
    label: "Settings",
    href: "settings",
    icon: <IconSettings className="text-white h-5 w-5" />,
  },
];
