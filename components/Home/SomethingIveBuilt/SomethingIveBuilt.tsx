import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { motion } from "framer-motion";
import ArrowIcon from "../../Icons/ArrowIcon";
import Img from "../../smallComp/image/Img";
import GithubIcon from "../../Icons/GithubIconForSomethingIveBuild";
import ExternalLink from "../../Icons/ExternalLink";

// Custom hook for intersection observer
function useInView(ref: React.RefObject<Element>, options = {}) {
  const [isInView, setIsInView] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.3, ...options }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return isInView;
}

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
        <ProjectCard
          imageSrc="img/HubstarConnect.png"
          imageAlt="Project Screen shot"
          projectUrl="https://www.hubstar.com/solutions/connect"
          projectTitle="Hubstar connect"
          projectSubtitle="Intelligent Workspace Scheduling Platform"
          description="At HubStar Connect, used by the UK Home Office and DP World, I led the development of Agenda, Week, and Live views for seamless workspace scheduling. Improved performance with XState and caching, cutting bugs by 50% and API calls by 30%. Enabled cross-platform support— desktop, mobile, MS Teams, and Outlook —via responsive, reusable components. Delivered enterprise-grade standards with i18n, WCAG 2.1 accessibility, and CI/CD testing. The platform boosts space utilization by 30%, cuts 270 kg CO₂/desk annually."
          technologies={[
            "Responsive UI",
            "Accessibility (WCAG)",
            "Internationalization (i18n)",
            "XState",
          ]}
          isReversed={false}
          router={router}
        />

        {/* // ?  Project 2 - YpredictAI */}
        <ProjectCard
          imageSrc="/img/Documitra.png"
          imageAlt="Project Screen shot"
          projectUrl="https://documitra.com"
          projectTitle="Documitra"
          projectSubtitle="Visa & Passport Service Platform"
          description="I led the development of a scalable user-assistance system for Documitra, a platform that streamlines visa and passport services for thousands of users. I designed and implemented a dynamic forms engine that eliminated manual code updates—allowing the team to add new services and workflows through a visual portal. The product has supported over 15,000+ applications with a 98% approval rate, and is trusted by users for its reliability and ease of use."
          technologies={[
            "Form Engine",
            "Scalable Architecture",
            "Full-Stack Development",
          ]}
          isReversed={true}
          router={router}
        />

        {/* // ?  Project 2 - FeverTokens */}
        <ProjectCard
          imageSrc="/img/Yocket.png"
          imageAlt="Project Screen shot"
          projectUrl="https://yocket.com/"
          projectTitle="Yocket"
          projectSubtitle="Study Abroad Planning & Counseling Platform"
          description="At Yocket, one of India's largest study‑abroad platforms—with over 800K+ users, 1M+ community members, and a strong 95% visa success rate—I helped streamline student services by developing an auto‑counselor assignment system that automated 95% of counselor allocations and significantly improved operational efficiency. I also built a dependable email notification service to inform users about plan purchases, counselor assignments, and document reviews—enhancing user engagement and communication."
          technologies={[
            "Vue.js/Nuxt",
            "Email Notifications",
            "Auto‑Counselor allocation",
          ]}
          isReversed={false}
          router={router}
        />

        {/* // ?  Project  3*/}
        <ProjectCard
          imageSrc="img/UroSecure.png"
          imageAlt="Project Screen shot"
          projectUrl="http://secureme.urosecure.com/"
          projectTitle="UroSecure"
          projectSubtitle="Smarter Visitor Management"
          description="At SecureMe / UroSecure, I contributed to building a SaaS-based visitor management system adopted by major institutions like Indian Railways and its hospitals. The platform offered features like QR check-ins, temperature screening, appointment scheduling, consult history, and prescription uploads—all through a unified, cloud-connected dashboard. I engineered core workflows using Flutter, Firebase, geolocation, and QR scanning to enhance safety and streamline operations."
          technologies={[
            "Flutter/Firebase",
            "QR Check-ins",
            "Temperature Screening",
          ]}
          isReversed={true}
          router={router}
        />
      </div>
    </div>
  );
}

// Project Card Component
function ProjectCard({
  imageSrc,
  imageAlt,
  projectUrl,
  projectTitle,
  projectSubtitle,
  description,
  technologies,
  isReversed,
  router,
}: {
  imageSrc: string;
  imageAlt: string;
  projectUrl: string;
  projectTitle: string;
  projectSubtitle: string;
  description: string;
  technologies: string[];
  isReversed: boolean;
  router: any;
}) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Function to highlight specific terms in the description
  const highlightText = (text: string) => {
    // Define terms to highlight
    const highlightTerms = [
      "HubStar Connect",
      "UK Home Office",
      "DP World",
      "Agenda",
      "Week",
      "Live ",

      "cutting bugs by 50%",
      "API calls by 30%",
      "desktop, mobile, MS Teams, and Outlook",
      "i18n",
      "WCAG 2.1 accessibility",
      "CI/CD testing",
      "space utilization by 30%",
      "270 kg CO₂/desk annually",
      "Documitra",
      "visa and passport services",
      "dynamic forms engine",
      "add new services",
      "15,000+ applications",
      "98% approval rate",
      "reliability and ease of use",
      "Yocket",
      "800K+ users",
      "1M+ community members",
      "95% visa success rate",
      "auto‑counselor assignment system",
      "95%",
      "email notification service",
      "SecureMe / UroSecure",
      "Indian Railways",
      "QR check-ins",
      "temperature screening",
      "appointment scheduling",
      "Flutter",
      "Firebase",
    ];

    let highlightedText = text;

    highlightTerms.forEach((term) => {
      const regex = new RegExp(
        `(${term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`,
        "gi"
      );
      highlightedText = highlightedText.replace(
        regex,
        '<span class="text-AAsecondary">$1</span>'
      );
    });

    return highlightedText;
  };

  return (
    <div
      ref={ref}
      data-aos="fade-up"
      className="relative md:grid md:grid-cols-12 w-full md:h-96"
    >
      {/* Left/Right image */}
      <div
        className={`hidden bg-AAprimary z-10 py-4 absolute md:grid grid-cols-12 w-full h-full content-center ${
          isReversed ? "" : ""
        }`}
      >
        <div
          className={`relative rounded w-full h-full ${
            isReversed ? "col-span-7" : "col-start-6 col-span-7"
          }`}
        >
          <a
            href={projectUrl}
            target="_blank"
            rel="noreferrer"
            title={projectTitle}
          >
            <motion.div
              className="absolute w-full h-full rounded bg-AAprimary transition-opacity duration-700"
              initial={{ opacity: 0.5 }}
              animate={{ opacity: isInView ? 0 : 0.5 }}
            />
          </a>
          <Img
            src={imageSrc}
            alt={imageAlt}
            className="w-full rounded h-full"
          />
        </div>
      </div>

      {/* Content */}
      <div className="md:absolute py-4 md:grid md:grid-cols-12 w-full h-full content-center">
        {/* background for text in mobile responsive */}
        <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
          <div className="relative w-full h-full">
            <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
            <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
            <Img src={imageSrc} alt={imageAlt} className="w-full h-full" />
          </div>
        </div>

        <div
          className={`px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 col-span-8 flex flex-col items-start space-y-3 md:order-1 ${
            isReversed ? "xl:col-start-7 col-start-5 md:items-end" : ""
          }`}
        >
          <div
            className={`flex flex-col space-y-1 z-10 ${
              isReversed ? "md:items-end" : ""
            }`}
          >
            <a href={projectUrl} target="_blank" rel="noopener noreferrer">
              <span className="text-AAsecondary text-base hover:cursor-pointer">
                {projectTitle}
              </span>
              <br />
              <span className="md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                {projectSubtitle}
              </span>
            </a>
          </div>
          <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6 z-10">
            <p
              className="text-gray-300 md:text-gray-400 text-left"
              dangerouslySetInnerHTML={{ __html: highlightText(description) }}
            />
          </div>
          <ul
            className={`flex flex-wrap w-full text-gray-300 md:text-gray-400 text-sm font-Text2 z-10 ${
              isReversed ? "md:justify-end" : "md:justify-start"
            }`}
          >
            {technologies.map((tech, index) => (
              <span key={index} className="pr-4">
                {tech}
              </span>
            ))}
          </ul>
          <div className="z-10 flex fle-row space-x-5">
            <a href={projectUrl} target="_blank" rel="noreferrer">
              <ExternalLink url="" router={router} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
