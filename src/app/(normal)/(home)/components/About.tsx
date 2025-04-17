import Heading from "@/components/Shared/Heading";
import React from "react";

const About = () => {
  return (
    <div className="text-white about  max-w-6xl mx-auto flex gap-4 ">
      <div className="mx-6">
        <Heading title="About Me" />
        <div className="flex gap-4 items-center flex-col md:flex-row mt-4 w-full">
          <div className="w-full md:w-1/2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quae
            velit assumenda consequatur cupiditate nulla hic harum fugiat eaque,
            atque quisquam tempora maiores illo neque reprehenderit, similique
            qui aliquam nostrum. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Explicabo ex natus, sequi vel quaerat nesciunt!
            Praesentium ea qui repellendus possimus voluptates perspiciatis,
            tempora rem a sapiente maxime. Iusto, voluptates recusandae.
          </div>
          <div className="w-full md:w-1/2">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/iBOQDIdyQV4?si=G839HI4t1dU5Vrad"
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
