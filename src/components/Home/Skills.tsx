import envConfig from "@/config/envConfig";
import Heading from "../Shared/Heading";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const Skills = async () => {
  const response = await fetch(`${envConfig.baseApi}/skill`, {
    cache: "no-store",
  });

  const skillData = await response.json();

  return (
    <div className="mx-6">
      <Heading title="skills" />
      <div className=" rounded-md flex flex-col antialiased k dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={skillData?.data[0]?.skills}
          direction="right"
          speed="normal"
        />
         <InfiniteMovingCards
          items={skillData?.data[1]?.skills}
          direction="left"
          speed="normal"
        />
        <InfiniteMovingCards
          items={skillData?.data[2]?.skills}
          direction="right"
          speed="normal"
        /> 
      </div>
    </div>
  );
};


export default Skills;
