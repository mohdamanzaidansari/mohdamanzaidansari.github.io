import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import Img from "../../smallComp/image/Img";
import GithubIcon from "../../Icons/GithubIconForSomethingIveBuild";
import ExternalLink from "../../Icons/ExternalLink";

export default function SomethingIveBuilt() {
  const router = useRouter();
  return (
    <div
      id="SomethingIveBuiltSection"
      className=" flex flex-col xl:space-y-28 space-y-12 bg-AAprimary w-full  
     2xl:px-72 lg:px-24 md:px-16 sm:px-16 py-32 px-4"
    >
      {/* // ? Title   */}
      <div data-aos="fade-up" className=" flex flex-row  items-center md:px-0">
        <ArrowIcon
          className={
            "flex-none h-5 md:h-6 w-5 md:w-5 translate-y-[2px] text-AAsecondary"
          }
        />
        <div className="flex-none flex-row space-x-2 items-center pr-2">
          <span className="text-AAsecondary font-sans text-sm  sm:text-xl">
            {" "}
            03.
          </span>
          <span className=" font-bold tracking-wider text-gray-200 text-lg md:text-2xl w-44 md:w-56 opacity-85">
            {" "}
            Some Things I&apos;ve Built
          </span>
        </div>
        <div className="bg-gray-400 h-[0.2px] w-full xl:w-1/3 md:w-1/2"></div>
      </div>

      <div className="flex flex-col   xl:space-y-36 space-y-8 md:space-y-28">
        {/* // TODO : to here  */}
        {/* // ?  Project  1 Ens Vision */}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96  "
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <a
                href={"https://www.hubstar.com/solutions/connect"}
                target="_blank"
                rel="noreferrer"
                title="Hubstar Connect"
              >
                <div
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>
              <Img
                src={"img/HubstarConnect.png"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"img/HubstarConnect.png"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full`}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <a
                  href="https://www.hubstar.com/solutions/connect"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-AAsecondary text-base hover:cursor-pointer">
                    Hubstar connect
                  </span>
                  <br />
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Intelligent Workspace Scheduling Platform
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-left">
                  At <span className="text-AAsecondary">HubStar Connect</span>,
                  used by the{" "}
                  <span className="text-AAsecondary">UK Home Office</span> and{" "}
                  <span className="text-AAsecondary">DP World</span>, I led the
                  development of{" "}
                  <span className="text-AAsecondary">Agenda</span>,{" "}
                  <span className="text-AAsecondary">Week</span>, and{" "}
                  <span className="text-AAsecondary">Live</span> views for
                  seamless workspace scheduling.
                  <br className="hidden md:block" />
                  Improved performance with{" "}
                  <span className="text-AAsecondary">XState</span> and caching,
                  cutting bugs by <span className="text-AAsecondary">50%</span>{" "}
                  and API calls by <span className="text-AAsecondary">30%</span>
                  .
                  <br className="hidden md:block" />
                  Enabled cross-platform support—{" "}
                  <span className="text-AAsecondary">
                    desktop, mobile, MS Teams, and Outlook
                  </span>
                  —via responsive, reusable components.
                  <br className="hidden md:block" />
                  Delivered enterprise-grade standards with{" "}
                  <span className="text-AAsecondary">i18n</span>,{" "}
                  <span className="text-AAsecondary">
                    WCAG 2.1 accessibility
                  </span>
                  , and <span className="text-AAsecondary">CI/CD testing</span>.
                  <br className="hidden md:block" />
                  The platform boosts{" "}
                  <span className="text-AAsecondary">
                    space utilization by 30%
                  </span>
                  , cuts{" "}
                  <span className="text-AAsecondary">
                    270 kg CO₂/desk annually
                  </span>
                  .
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">Responsive UI</span>
                <span className="pr-4 z-10">Accessibility (WCAG)</span>
                <span className="pr-4 z-10">Internationalization (i18n)</span>
                <span className="pr-4 z-10">XState</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                {/* <GithubIcon link="https://github.com/hktitof/Ypredict" /> */}
                <a
                  href="https://www.hubstar.com/solutions/connect"
                  target={"_blank"}
                  rel="noreferrer"
                  title="Hubstar Connect"
                >
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* // ?  Project 2 - YpredictAI */}

        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96 "
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 ">
              {/* <Link href={"/typing"}>
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-AAsecondary 
           transition-opacity opacity-20 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </Link> */}

              <a
                href="https://documitra.com"
                target={"_blank"}
                rel="noreferrer"
              >
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-30 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>

              <Img
                src={"/img/Documitra.png"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"/img/Documitra.png"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full `}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end space-y-3"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <a
                  href="https://documitra.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-AAsecondary text-base hover:cursor-pointer">
                    Documitra
                  </span>
                  <br />
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Visa & Passport Service Platform
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left">
                  I led the development of a scalable user-assistance system for{" "}
                  <span className="text-AAsecondary">Documitra</span>, a
                  platform that streamlines{" "}
                  <span className="text-AAsecondary">
                    visa and passport services
                  </span>{" "}
                  for thousands of users. I designed and implemented a{" "}
                  <span className="text-AAsecondary">dynamic forms engine</span>{" "}
                  that eliminated manual code updates—allowing the team to{" "}
                  <span className="text-AAsecondary">add new services</span> and
                  workflows through a visual portal. The product has supported
                  over{" "}
                  <span className="text-AAsecondary">15,000+ applications</span>{" "}
                  with a{" "}
                  <span className="text-AAsecondary">98% approval rate</span>,
                  and is trusted by users for its{" "}
                  <span className="text-AAsecondary">
                    reliability and ease of use
                  </span>
                  .
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">Form Engine</span>
                <span className="pr-4 z-10">Scalable Architecture</span>
                <span className="pr-4 z-10">Full-Stack Development</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <div className="z-10 flex fle-row space-x-5 ">
                  {/* <GithubIcon link="https://github.com/hktitof/Ypredict" /> */}
                  <a
                    href="https://documitra.com"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <ExternalLink url={""} router={router} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* // ?  Project 2 - FeverTokens */}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96  "
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <a href={"https://yocket.com/"} target="_blank" rel="noreferrer">
                <div
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>
              <Img
                src={"/img/Yocket.png"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"img/Yocket.png"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full`}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <a
                  href="https://yocket.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-AAsecondary text-base hover:cursor-pointer">
                    Yocket
                  </span>
                  <br />
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Study Abroad Planning & Counseling Platform
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left">
                  At <span className="text-AAsecondary">Yocket</span>, one of
                  India’s largest study‑abroad platforms—with over{" "}
                  <span className="text-AAsecondary">800K+ users</span>,{" "}
                  <span className="text-AAsecondary">
                    1M+ community members
                  </span>
                  , and a strong{" "}
                  <span className="text-AAsecondary">
                    95% visa success rate
                  </span>
                  —I helped streamline student services by developing an{" "}
                  <span className="text-AAsecondary">
                    auto‑counselor assignment system
                  </span>{" "}
                  that automated <span className="text-AAsecondary">95%</span>{" "}
                  of counselor allocations and significantly improved
                  operational efficiency. I also built a dependable{" "}
                  <span className="text-AAsecondary">
                    email notification service
                  </span>{" "}
                  to inform users about plan purchases, counselor assignments,
                  and document reviews—enhancing user engagement and
                  communication.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">Vue.js/Nuxt</span>
                <span className="pr-4 z-10">Email Notifications</span>
                <span className="pr-4 z-10">Auto‑Counselor allocation</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                {/* <GithubIcon link="https://github.com/hktitof/Ypredict" /> */}
                <a
                  href="https://yocket.com/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* // ?  Project  3*/}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96 "
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 ">
              <Link href={"http://secureme.urosecure.com/"}>
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-AAsecondary 
           transition-opacity opacity-10 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </Link>

              <Img
                src={"img/UroSecure.png"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"img/UroSecure.png"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full `}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end space-y-3"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <Link
                  href={"http://secureme.urosecure.com/"}
                  className="text-right"
                >
                  <span className="text-AAsecondary text-base hover:cursor-pointer">
                    UroSecure
                  </span>
                  <br />
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Smarter Visitor Management
                  </span>
                </Link>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left">
                  At{" "}
                  <span className="text-AAsecondary">SecureMe / UroSecure</span>
                  , I contributed to building a SaaS-based visitor management
                  system adopted by major institutions like{" "}
                  <span className="text-AAsecondary">Indian Railways</span> and
                  its hospitals. The platform offered features like{" "}
                  <span className="text-AAsecondary">QR check-ins</span>,{" "}
                  <span className="text-AAsecondary">
                    temperature screening
                  </span>
                  ,{" "}
                  <span className="text-AAsecondary">
                    appointment scheduling
                  </span>
                  , consult history, and prescription uploads—all through a
                  unified, cloud-connected dashboard. I engineered core
                  workflows using{" "}
                  <span className="text-AAsecondary">Flutter</span>,{" "}
                  <span className="text-AAsecondary">Firebase</span>,
                  geolocation, and QR scanning to enhance safety and streamline
                  operations.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">Flutter/Firebase</span>
                <span className="pr-4 z-10">QR Check-ins</span>
                <span className="pr-4 z-10">Temperature Screening</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                {/* <GithubIcon link="https://github.com/hktitof/Typing" /> */}
                <ExternalLink
                  url={"http://secureme.urosecure.com/"}
                  router={router}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
