import Heading from "../Shared/Heading";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const Skills = () => {
  return (
    <div className="">
      <Heading title="skills" />
      <div className="h-[40rem] rounded-md flex flex-col antialiased k dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={frontendSkills}
          direction="right"
          speed="normal"
        />
        <InfiniteMovingCards
          items={backendSkills}
          direction="left"
          speed="normal"
        />
        <InfiniteMovingCards
          items={toolsSkill}
          direction="right"
          speed="normal"
        />
      </div>
    </div>
  );
};

const frontendSkills = [
  {
    title: "React Js",
    image: "https://skillicons.dev/icons?i=react",
    quote:
      "React is free and open-source front-end JavaScript Library used for building Fast Single page application",
  },
  {
    title: "TypeScript",
    image: "https://skillicons.dev/icons?i=typescript",
    quote:
      "React is free and open-source front-end JavaScript Library used for building Fast Single page application",
  },
  {
    title: "Tailwind CSS",
    image: "https://skillicons.dev/icons?i=tailwindcss",
    quote:
      "React is free and open-source front-end JavaScript Library used for building Fast Single page application",
  },
  {
    title: "Redux",
    image: "https://skillicons.dev/icons?i=redux",
    quote:
      "React is free and open-source front-end JavaScript Library used for building Fast Single page application",
  },
  {
    title: "Next Js",
    image: "https://skillicons.dev/icons?i=nextjs",
    quote:
      "React is free and open-source front-end JavaScript Library used for building Fast Single page application",
  },
];
const backendSkills = [
  {
    title: "Node JS",
    image: "https://skillicons.dev/icons?i=nodejs",
    quote:
      "React is free and open-source front-end JavaScript Library used for building Fast Single page application",
  },
  {
    title: "Express JS",
    image: "https://skillicons.dev/icons?i=express",
    quote:
      "React is free and open-source front-end JavaScript Library used for building Fast Single page application",
  },
  {
    title: "Mongodb",
    image: "https://skillicons.dev/icons?i=mongodb",
    quote:
      "React is free and open-source front-end JavaScript Library used for building Fast Single page application",
  },
  {
    title: "Mongoose",
    image: "https://skillicons.dev/icons?i=mongoose",
    quote:
      "React is free and open-source front-end JavaScript Library used for building Fast Single page application",
  },
];
const toolsSkill = [
  {
    title: "VS Code",
    image: "https://skillicons.dev/icons?i=vscode",
    quote:
      "React is free and open-source front-end JavaScript Library used for building Fast Single page application",
  },
  {
    title: "Postman",
    image: "https://skillicons.dev/icons?i=postman",
    quote:
      "React is free and open-source front-end JavaScript Library used for building Fast Single page application",
  },
  {
    title: "Mongodb Compass",
    image: "https://skillicons.dev/icons?i=mongodb",
    quote:
      "React is free and open-source front-end JavaScript Library used for building Fast Single page application",
  },
  {
    title: "Git",
    image: "https://skillicons.dev/icons?i=git",
    quote:
      "React is free and open-source front-end JavaScript Library used for building Fast Single page application",
  },
  {
    title: "GitHub",
    image: "https://skillicons.dev/icons?i=github",
    quote:
      "React is free and open-source front-end JavaScript Library used for building Fast Single page application",
  },
];

export default Skills;
