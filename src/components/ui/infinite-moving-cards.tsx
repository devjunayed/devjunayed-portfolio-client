/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { cn } from "@/utils/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    icon: string;
    description: string;
    skillName: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse",
      );
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      const duration =
        speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items?.map((item, idx) => (
          <li
            key={item.skillName + idx}
            className="group relative w-[280px] h-[220px] mx-1 lg:w-[310px] max-w-full flex-shrink-0 rounded-2xl border border-slate-700 px-4 py-4 md:w-[400px] z-10 hover:z-30 transition-transform duration-300 ease-in-out hover:scale-110"
            style={{
              background:
                "linear-gradient(180deg, var(--slate-800), var(--slate-900))",
            }}
          >
            <div className="text-center mb-2 flex justify-center">
              <img
                src={`https://skillicons.dev/icons?i=${item.icon}`}
                alt={item.skillName}
              />
            </div>

            <blockquote>
              <h3 className="text-center text-white font-bold text-lg">
                {item.skillName}
              </h3>

              <div className="relative mt-1 h-[70px]">
                {/* clamped version - natural height, top-pinned only */}
                <p className="absolute top-0 left-0 right-0 text-center text-sm leading-[1.6] text-gray-100 font-normal line-clamp-2 transition-opacity duration-300 ease-in-out group-hover:opacity-0">
                  &#34;{item.description}&#34;
                </p>

                {/* full version - fades in on hover, fills the box */}
                <p className="absolute inset-0 text-center text-sm leading-[1.6] text-gray-100 font-normal opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                  &#34;{item.description}&#34;
                </p>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
