import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function CannyAlleyTech() {
  const tasks = [
    {
      text: "Built a SaaS‑based visitor management system for UroSecure, used by Indian Railways and hospitals, featuring QR‑based attendance, visitor/patient registration, temperature scanning, appointment management, consult history, and prescription uploads.",
      keywords: [
        "SaaS‑based visitor management system",
        "UroSecure",
        "Indian Railways",
        "hospitals",
        "QR‑based attendance",
        "visitor registration",
        "patient registration",
        "temperature scanning",
        "appointment management",
        "consult history",
        "prescription uploads",
      ],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Software Engineering Intern{" "}
            <span className="text-AAsecondary">@ Canny Alley Tech</span>
          </span>
          {/* Location and Date */}
          <span className="font-mono text-xs text-gray-500">
            Gurgaon, India · Sep. 2020 - Jun. 2021
          </span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            onClick={() =>
              window.open("http://secureme.urosecure.com", "_blank")
            }
          >
            www.urosecure.com
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
          Technologies: Dart, Flutter, Firebase, Push notifications, Custom QR,
          Geolocation, Voice alerts, Temperature scan.
        </span>
      </div>
    </>
  );
}
