import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Primathon2023() {
  const tasks = [
    {
      text: "Designed and led the development of a user‑assisting system for Documitra, streamlining visa and passport service processes.",
      keywords: ["Documitra", "Designed", "led the development"],
    },
    {
      text: "Implemented a dynamic forms architecture that eliminated the need for manual code updates, enabling the internal team to seamlessly update or add new service offerings via the portal.",
      keywords: ["eliminated the need for manual code updates"],
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
            Feb. 2023 - Apr. 2024
          </span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            onClick={() => window.open("https://documitra.com/", "_blank")}
          >
            www.documitra.com
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
          Technologies: React.js, Redux, Node.js, Express.js, MongoDB, AWS, S3,
          Full‑stack, Dynamic form generation, scalable architecture.
        </span>
      </div>
    </>
  );
}
