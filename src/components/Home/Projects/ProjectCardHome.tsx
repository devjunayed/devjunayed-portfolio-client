
import React from 'react'
import Image from "next/image";
import { WobbleCard } from "../../ui/wobble-card";

const ProjectCardHome = () => {
  return (
       <WobbleCard containerClassName="col-span-1 bg-transparent lg:col-span-3 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
              <div className="max-w-sm">
                <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  Signup for blazing-fast cutting-edge state of the art Gippity AI
                  wrapper today!
                </h2>
                <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                  With over 100,000 mothly active bot users, Gippity AI is the most
                  popular AI platform for developers.
                </p>
              </div>
              <Image
                src="/linear.webp"
                width={500}
                height={500}
                alt="linear demo image"
                className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
              />
            </WobbleCard>
  )
}

export default ProjectCardHome
