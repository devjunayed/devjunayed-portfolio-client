import Heading from "../../../../components/Shared/Heading";

const Education = () => {
  return (
    <div className="mx-6">
      <Heading title="Education" />
      <div className="my-6 lg:my-10 text-white">
        <h3 className="text-xl text-white">Sonargaon University</h3>
        <span className="flex flex-col lg:flex-row gap-2 shadow shadow-gray-400 p-2 mt-2 justify-between flex-wrap">
          <h6>
            Bachelor of Science in Computer Science and Engineering (BSC in CSE)
          </h6>
          <h6>2019 - 2023 </h6>
        </span>
        <p className="mt-4 text-justify">
          I have completed BSC in CSE at 2023 with 166 credit and got overall
          cgpa 3.36. During the education time i have made several projects
          induvidually and with team. Among them CMS (Content Management System)
          with java swing and Bachelor Buddy (Mess Management System) are best
          and i have lead this project. During the University i have learned a
          lot of technology and then i have sharpen them by doing Complete Web
          Development Course on Programming Hero.{" "}
        </p>
      </div>
    </div>
  );
};

export default Education;
