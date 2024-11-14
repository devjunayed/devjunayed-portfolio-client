import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import Image from "next/image";
import ProfileImg from "@/assets/image.png";
import { FacebookIcon, GithubIcon, LinkedinIcon, MessageCircleIcon } from "lucide-react";

export function Hero() {
  const words = `I am a MERN stack web developer. Ready to Join your team`;
  return (
    <BackgroundBeamsWithCollision className="min-h-[76vh]">
      {/* <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
        What&apos;s cooler than Beams?{" "}
        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span className="">Exploding beams.</span>
          </div>
          <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
            <span className="">Exploding beams.</span>
          </div>
        </div>
      </h2> */}
      <div className="flex mx-10 flex-col justify-center items-center  py-4">
        <Image
          src={ProfileImg}
          className="rounded-full  shadow-inner shadow-white"
          alt="image"
          height={200}
          width={200}
        />

        <h1 className=" text-xl mt-4">Hi, I am Md Junayed</h1>
        <TextGenerateEffect className="" words={words}  />
        <div className="flex justify-center mt-4 items-center gap-4 ">
          <span className="border p-2 rounded-full">
            <GithubIcon />
          </span>
          <span className="border p-2 rounded-full">
            <LinkedinIcon />
          </span>
          <span className="border p-2 rounded-full">
            <FacebookIcon />
          </span>
          <span className="border p-2 rounded-full">
            <MessageCircleIcon />
          </span>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
