import {
  IconBrandTabler,
  IconCertificate,
  IconSettings,
} from "@tabler/icons-react";
import {  FileTextIcon, Folder, Star } from "lucide-react";


export const creatorLinks = [
  {
    label: "Dashboard",
    href: `creator/dashboard`,
    icon: <IconBrandTabler className="text-white h-5 w-5" />,
  },
  {
    label: "Blog",
    icon: <FileTextIcon className="text-white h-5 w-5" />,
    href: "creator/blog"
  },
  {
    label: "Skills",
    icon: <Star className="text-white h-5 w-5" />,
    href: "creator/skills",
  },
  {
    label: "Projects",
    icon: <Folder className="text-white h-5 w-5" />,
    href: "creator/projects"
    
  },
  {
    label: "Certifications",
    icon: <IconCertificate className="text-white h-5 w-5" />,
    href: "creator/certifications"
    
  },

  {
    label: "Settings",
    href: "creator/settings",
    icon: <IconSettings className="text-white h-5 w-5" />,
  },
];
