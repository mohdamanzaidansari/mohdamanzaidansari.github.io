import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Storefront() {
  const tasks = [
    {
      text: "Own the merchant‑site editing experience end‑to‑end, spanning frontend and supporting backend — a visual no‑code editor where merchants customize storefronts, generate sections, and create pages against live previews through a custom editor‑bridge and iframe messaging layer.",
      keywords: [
        "visual no‑code editor",
        "editor‑bridge",
        "iframe messaging layer",
        "live previews",
        "end‑to‑end",
      ],
    },
    {
      text: "Engineered a template‑JSON pipeline that moves storefront structure, content, and styling out of hardcoded JSX into runtime‑interpreted data — enabling live edits with no code change or redeploy.",
      keywords: [
        "template‑JSON pipeline",
        "runtime‑interpreted data",
        "no code change or redeploy",
      ],
    },
    {
      text: "Delivered performance‑focused work on a platform where merchants have seen ₹6–10 crore in additional annual sales, up to ₹30 crore ($3.5M) at best.",
      keywords: ["₹6–10 crore", "₹30 crore", "$3.5M"],
    },
    {
      text: "Architected ShopForge, a next‑gen edge‑rendering engine — interpreted SSR templating with streamed HTML by Hono and HTMX + Alpine, hitting sub‑100ms TTFB in benchmarks.",
      keywords: [
        "ShopForge",
        "edge‑rendering engine",
        "streamed HTML",
        "Hono",
        "HTMX",
        "Alpine",
        "sub‑100ms TTFB",
      ],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Senior Software Engineer — Storefront Builder{" "}
            <span className="text-AAsecondary">@ Primathon</span>
          </span>
          {/* Location and Date */}
          <span className="font-mono text-xs text-gray-500">
            Gurgaon, India · July 2025 - Present
          </span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            onClick={() => window.open("https://primathon.in/", "_blank")}
          >
            www.primathon.in
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
          Technologies: TypeScript, JavaScript, React.js, Next.js, Bun, Hono,
          HTMX, Alpine.js, Tailwind CSS, Nest.js.
        </span>
      </div>
    </>
  );
}
