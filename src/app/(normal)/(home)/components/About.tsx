import Heading from "@/components/Shared/Heading";
import React from "react";

const About = () => {
  return (
    <div className="text-white about  max-w-6xl mx-auto flex gap-4 ">
      <div className="mx-6">
        <Heading title="About Me" />
        <div className="flex gap-4 items-center flex-col md:flex-row mt-4 w-full">
          <div className="w-full space-y-6 md:w-1/2">
            <p>
              I&rsquo;m a MERN stack developer with a BSc in Computer Science
              and Engineering. I love building scalable web apps using React,
              Next.js, Node.js, MongoDB, Redux, and TypeScript.
            </p>
            <p>
              I&rsquo;ve built projects like TradeHub (eCommerce with SSLCommerz) and Sportyfy
              (sports facility booking with AmarPay). I focus on writing clean,
              maintainable code.
            </p>
            <p>
              Currently, I&rsquo;m improving my DSA skills with Striver&rsquo;s
              course, learning German (A1&ndash;B1), and boosting my typing
              speed to 100+ WPM.
            </p>
            <p>
              I&rsquo;m looking for a developer role where I can learn, grow,
              and contribute to meaningful projects.
            </p>
          </div>
          <div className="w-full md:h-[350px] md:w-1/2">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/8RQdmj7hqd8?si=eVUCwwa3iAUnD-uP"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
