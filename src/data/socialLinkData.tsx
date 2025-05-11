  import { TSocialLink } from "@/app/(normal)/(home)/components/Hero/SocialLink";
import { Mail, PhoneCall } from "lucide-react";
  import {
    IoLogoFacebook,
    IoLogoGithub,
    IoLogoLinkedin,
    IoLogoWhatsapp,
  } from "react-icons/io";

  export const socialLinkData: TSocialLink[] = [
    {
      title: "Facebook",
      href: "https://facebook.com/devjunayed",
      icon: <IoLogoFacebook />,
      newTab: true,
    },
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/devjunayed",
      icon: <IoLogoLinkedin />,
      newTab: true,
    },
    {
      title: "GitHub",
      href: "https://github.com/devjunayed",
      icon: <IoLogoGithub />,
      newTab: true,
    },
    {
      title: "WhatsApp",
      href:
        "https://api.whatsapp.com/send?phone=8801814676613&text=Hello%20Junayed%2C%20I%20would%20like%20to%20talk%20with%20you.",
      icon: <IoLogoWhatsapp />,
      newTab: true,
    },
    {
      title: "Messenger",
      href: "https://www.messenger.com/t/100009351762319",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 50 50"
        >
          <path
            fill="white"
            d="M 25 2 C 12.347656 2 2 11.597656 2 23.5 C 2 30.007813 5.132813 35.785156 10 39.71875 L 10 48.65625 L 11.46875 47.875 L 18.6875 44.125 C 20.703125 44.664063 22.800781 45 25 45 C 37.652344 45 48 35.402344 48 23.5 C 48 11.597656 37.652344 2 25 2 Z M 25 4 C 36.644531 4 46 12.757813 46 23.5 C 46 34.242188 36.644531 43 25 43 C 22.835938 43 20.742188 42.6875 18.78125 42.125 L 18.40625 42.03125 L 18.0625 42.21875 L 12 45.375 L 12 38.8125 L 11.625 38.53125 C 6.960938 34.941406 4 29.539063 4 23.5 C 4 12.757813 13.355469 4 25 4 Z M 22.71875 17.71875 L 10.6875 30.46875 L 21.5 24.40625 L 27.28125 30.59375 L 39.15625 17.71875 L 28.625 23.625 Z"
          />
        </svg>
      ),
      newTab: true,
    },
    {
      title: "Phone",
      href: "tel:+8801814676613",
      icon: <PhoneCall />,
      newTab: false,
    },
    {
      title: "Email",
      href: "mailto:mdjunayed601@gmail.com",
      icon: <Mail />,
      newTab: false,
    },
  ];