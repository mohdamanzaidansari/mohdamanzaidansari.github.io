import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Yocket() {
  const tasks = [
    {
      text: "Worked with one of India’s leading study abroad platforms, Yocket to develop an auto‑counselor assignment feature that automated 95% of the counselor allocation process, significantly enhancing operational efficiency.",
      keywords: ["Yocket", "automated 95% of the counselor allocation process"],
    },
    {
      text: "Developed email service to notify users about key events like plan purchases, counselor assignments, and document reviews.",
      keywords: [
        "email service",
        "plan purchases",
        "counselor assignments",
        "document reviews",
      ],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Software Engineer <span className="text-AAsecondary">@ Yocket</span>
          </span>
          {/* Location and Date */}
          <span className="font-mono text-xs text-gray-500">
            Mumbai, India · Apr. 2022 - Feb. 2023
          </span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            onClick={() => window.open("https://yocket.com/", "_blank")}
          >
            www.yocket.com
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
          Technologies: Full‑stack, Vue.js, Nuxt, Node.js, Express.js,
          Microservices, CronJobs, PostgreSQL, S3.
        </span>
      </div>
    </>
  );
}
