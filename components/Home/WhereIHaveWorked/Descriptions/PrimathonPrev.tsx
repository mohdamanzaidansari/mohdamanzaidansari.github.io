import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function PrimathonPrev() {
  const tasks = [
    {
      text: "Migrated Smartway2 from a monolithic MVC architecture to a modern REST‑based system, achieving a 45% AWS cost reduction.",
      keywords: ["Smartway2", "achieving a 45% AWS cost reduction"],
    },
    {
      text: "Created Booking Bot and Groups feature for seamless workspace resource collaboration.",
      keywords: [
        "Booking Bot",
        "Groups feature",
        "workspace resource collaboration",
        "Created",
      ],
    },
    {
      text: "Implemented automated testing with QUnit and Mirage.js to ensure system stability and reliability within a CI/CD pipeline.",
      keywords: [
        "Automated testing",
        "QUnit",
        "Mirage.js",
        "System stability",
        "Reliability",
        "CI/CD pipeline",
        "Continuous Integration",
        "Testing framework",
        "Test automation",
      ],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Software Engineer{" "}
            <span className="text-AAsecondary">@ Primathon</span>
          </span>
          {/* Location and Date */}
          <span className="font-mono text-xs text-gray-500">
            Gurgaon, India · Jun. 2021 - Mar. 2022
          </span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            onClick={() => window.open("https://smartway2.com/", "_blank")}
          >
            www.smartway2.com/
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
          Technologies: Ember.js, JavaScript, Tailwind CSS, Unit Testing,
          Test‑driven development(TDD), QUnit, Mirage.js, REST Architecture.
        </span>
      </div>
    </>
  );
}
