import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Primathon() {
  const tasks = [
    {
      text: "Leading a team on HubStar Connect (formerly Smartway2), an enterprise SaaS workspace scheduling app with notable clients like the UK Government’s Home Ministry.",
      keywords: [
        "HubStar Connect",
        "UK Government’s Home Ministry",
        "Leading a team",
      ],
    },
    {
      text: "Developed key features including Agenda‑View, Week‑View, and Live‑View, enhancing visibility into schedules and resource locations.",
      keywords: [
        "Agenda‑View",
        "Week‑View",
        "Live‑View",
        "key features",
        "schedules",
        "resource locations",
      ],
    },
    {
      text: "Reduced user interaction bugs by 50% using Xstate for event‑driven statecharts and optimized performance by minimizing API calls by 30% through efficient caching.",
      keywords: [
        "Reduced user interaction bugs by 50%",
        "optimized performance by minimizing API calls by 30%",
      ],
    },
    {
      text: "Implemented internationalization (i18n) and collaborated with a11y audit agencies to meet top‑tier web accessibility (a11y) standards.",
      keywords: [
        "internationalization",
        "i18n",
        "a11y",
        "web accessibility",
        "audit agencies",
        "standards",
      ],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Senior Software Engineer{" "}
            <span className="text-AAsecondary">@ Primathon</span>
          </span>
          {/* Location and Date */}
          <span className="font-mono text-xs text-gray-500">
            Gurgaon, India · Apr 2024 - Present
          </span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            onClick={() =>
              window.open(
                "https://www.hubstar.com/solutions/connect/",
                "_blank"
              )
            }
          >
            www.hubstar.com
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
                <ArrowIcon className={"h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(
                      item.text,
                      item.keywords
                    ),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
        <span className="text-xs text-gray-400 pt-2">
          Technologies: JavaScript, React.js, Node.js, HTML, CSS, Tailwind CSS,
          XState, Mirage.js, OpenLayers, Unit Testing, Caching.
        </span>
      </div>
    </>
  );
}
