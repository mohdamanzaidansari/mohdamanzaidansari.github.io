import React from "react";
import Img from "../../../components/smallComp/image/Img"; // Assuming this path is correct for your project
import ArrowIcon from "../../../components/Icons/ArrowIcon"; // Assuming this path is correct for your project

interface AboutMeProps {
  // Define any props you might pass to AboutMe here
  // For example: profileImageUrl?: string;
}

const AboutMe = (props: AboutMeProps) => {
  const technologies = [
    [
      "React.js/Next.js",
      "Vue.js/Nuxt/Vuex",
      "Ember.js",
      "Redux/TanStack Query",
      "Tailwind CSS",
      "JavaScript(ES6)/TypeScript",
      "Accessibility (a11y)",
      "Internationalization (i18n)",
      "OpenLayers/Mirage.js/XState",
    ],
    [
      "Node.js/Express.js",
      "Python/Django",
      "MongoDB/PostgreSQL",
      "AWS",
      "Jest/QUnit/Cypress",
      "Flutter/Firebase",
      "CI/CD (Jenkins)",
      "Caching/Performance",
      "Test-Driven Development (TDD)",
    ],
  ];

  return (
    <div
      id="aboutSection"
      data-aos="fade-up"
      className="snap-start flex flex-col items-center py-20 bg-AAprimary"
    >
      {/* 0.1 About Me Title */}
      <div className="flex flex-col space-y-8 px-4 sm:px-0 w-full sm:w-[500px] md:w-[700px] lg:w-[900px]">
        <div className="flex flex-row items-center">
          <div className="flex flex-row items-center mr-4">
            <ArrowIcon
              className={
                "flex-none h-4 md:h-6 w-4 md:w-5 translate-y-[0.5px] text-AAsecondary"
              }
            />
            <span className="text-AAsecondary font-Header text-sm sm:text-xl">
              {" "}
              01.
            </span>
            <span className="flex-none text-gray-200 opacity-85 font-bold tracking-wider text-lg sm:text-2xl pl-4">
              About Me
            </span>
          </div>
          <div className="bg-gray-400 h-[0.2px] w-full sm:w-72 ml-4"></div>
        </div>

        {/* Paragraphs & Image */}
        <div className="w-full flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 sm:space-x-2">
          {/* Text Content */}
          <div className="w-full md:w-7/12 space-y-4 sm:text-base text-sm">
            <div className="font-Header text-gray-400 text-justify">
              Hey there! I&apos;m Aman, a software engineer who loves turning
              ideas into clean, scalable code. My curiosity for tech sparked
              during college when I took the{" "}
              <span className="text-AAsecondary">CS50 course</span> from Harvard
              University, taught by David J. Malan — and I’ve been hooked ever
              since.
            </div>

            <div className="font-Header text-gray-400 text-justify">
              Over the past <span className="text-AAsecondary">4+ years</span>,
              I’ve worked on high-impact products across multiple domains — from
              workspace scheduling and logistics to education and visa
              processing. I’ve led a development team on{" "}
              <span className="text-AAsecondary">HubStar Connect</span>, used by
              clients like the{" "}
              <span className="text-AAsecondary">
                UK Government’s Home Office
              </span>{" "}
              and logistics giant{" "}
              <span className="text-AAsecondary">DP World</span>, where I built
              scheduling views and improved app{" "}
              <span className="text-AAsecondary">performance</span> and{" "}
              <span className="text-AAsecondary">accessibility</span>. I&apos;ve
              also contributed to{" "}
              <span className="text-AAsecondary">Yocket</span>, one of India’s
              leading study abroad counseling platforms, by automating key
              workflows and enhancing the user experience.
            </div>

            <div className="font-Header text-gray-400 text-justify">
              What drives me is solving tough problems and constantly{" "}
              <span className="text-AAsecondary">learning new things</span> —
              whether it’s refining state management with XState, designing{" "}
              dynamic form engines, or exploring{" "}
              <span className="text-AAsecondary">
                clean architecture principles
              </span>
              . I’m always excited by projects where{" "}
              <span className="text-AAsecondary">thoughtful engineering</span>{" "}
              meets <span className="text-AAsecondary">real-world impact</span>,
              and I’m just getting started.
            </div>

            <div className="font-Header tracking-wide text-gray-400 pt-2 pb-1 text-justify">
              What powers most of my recent work:
            </div>
            {/* Technologies List */}
            <div className="font-Header tracking-wide flex flex-row space-x-12 md:space-x-16 justify-center lg:justify-start">
              {technologies.map((techGroup, groupIndex) => (
                <div
                  key={groupIndex}
                  className="flex flex-col space-y-4 sm:text-base text-sm"
                >
                  {techGroup.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="flex flex-row items-center space-x-2"
                    >
                      <ArrowIcon
                        className={"h-3 w-3 text-AAsecondary flex-none"}
                      />
                      <span className="text-gray-400 sm:text-sm text-xs">
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Image Section (Desktop and Tablet) */}
          <div className="group relative lg:w-96 lg:h-96 md:w-72 md:h-72 md:block hidden">
            <div className="group-hover:translate-x-3 group-hover:translate-y-3 duration-300 absolute w-5/6 h-5/6 border-2 border-AAsecondary translate-x-5 translate-y-5 rounded"></div>
            <div className="absolute w-5/6 h-5/6 rounded overflow-hidden">
              <div className="absolute w-full h-full group-hover:opacity-0 bg-AAsecondary opacity-10 duration-300 rounded overflow-hidden"></div>
              <Img
                src={"/img/DP.png"}
                className={"object-contain rounded-lg"}
                alt="My Image Not Found"
              />
            </div>
          </div>

          {/* Image Section (Mobile) */}
          <div className="relative w-full h-48 md:hidden flex justify-center items-center">
            <div className="absolute w-48 h-full rounded translate-x-5 translate-y-5 border-2 border-AAsecondary"></div>
            <div className="absolute w-48 h-full rounded overflow-hidden">
              <Img
                src={"/img/DP.png"}
                className={"object-contain rounded-lg"}
                alt="My Image Not Found"
              />
            </div>
            <div className="absolute w-48 h-full bg-AAsecondary opacity-10 md:opacity-60 rounded overflow-hidden"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutMe; // Changed to a const for functional component definition with type
