import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { TextGenerateEffect } from "../../../../../components/ui/text-generate-effect";
import Image from "next/image";

import {
  CardBody,
  CardContainer,
  CardItem,
} from "../../../../../components/ui/3d-card";
import ResumeButton from "./ResumeButton";
import SocialIcons from "./SocialIcon";

export function Hero() {
  const words = `"I am a MERN stack web developer with a B.Sc. in Computer Science and Engineering. I specialize in building dynamic, user-friendly web applications and am actively seeking opportunities to grow and contribute to impactful projects."`;

  return (
    <BackgroundBeamsWithCollision className="min-h-[100vh] relative ">
      <Image
        src="https://skillicons.dev/icons?i=react"
        className="absolute rounded-full top-32 left-0 md:left-16 w-12 animate-smooth-bounce"
        alt="image"
        height={70}
        width={70}
      />

      <Image
        src="https://skillicons.dev/icons?i=mongodb"
        className="absolute  top-0 md:top-8 w-12   rounded-full animate-smooth-bounce"
        alt="image"
        height={70}
        width={70}
      />
      <Image
        src="https://skillicons.dev/icons?i=nextjs"
        className="absolute top-32 right-0 w-12 md:right-16  rounded-full animate-smooth-bounce"
        alt="image"
        height={70}
        width={70}
      />
      <Image
        src="https://skillicons.dev/icons?i=express"
        className="absolute bottom-2 lg:bottom-16 w-12 md:right-48 sm:first-line:right-16 right-4  bg-white rounded-full animate-smooth-bounce"
        alt="image"
        height={70}
        width={70}
      />
      <Image
        src="https://skillicons.dev/icons?i=nodejs"
        className="absolute bottom-2 lg:bottom-16 w-12 md:left-48 sm:left-16 bg-none rounded-full animate-smooth-bounce left-4"
        alt="image"
        height={70}
        width={70}
      />

      <div className="flex z-30   flex-col justify-center items-center  ">
        <CardContainer className="inter-var">
          <CardBody className="relative group/card    w-auto  h-auto ">
            <CardItem translateZ="50" className="text-xl font-bold ">
              <Image
                src="/images/image.png"
                className="rounded-full  mx-auto  shadow-inner shadow-white"
                alt="image"
                height={200}
                width={200}
              />
            </CardItem>
          </CardBody>
        </CardContainer>

        <h1 className="text-white text-xl mt-4">Hi, I am Md Junayed</h1>
        <TextGenerateEffect duration={1} className="text-white" words={words} />

        {/* <Link
          href={
            "https://drive.google.com/file/d/1wsY96zMFD9yf8yKSugkCK6TFO8F9MOFw/view?usp=sharing"
          }
          target="_blank"
          className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          Download Resume
        </Link> */}
        <SocialIcons />
      <ResumeButton />
      </div>
    </BackgroundBeamsWithCollision>
  );
}
