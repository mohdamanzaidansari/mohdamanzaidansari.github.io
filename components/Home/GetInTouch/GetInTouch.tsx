import React, { useEffect, useState } from "react";
import ArrowIcon from "../../Icons/ArrowIcon";

export default function GetInTouch() {
  const [isAndroidWebView, setIsAndroidWebView] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor;
    // Check for Android WebView by inspecting the user agent
    if (/android/i.test(userAgent) && /wv/.test(userAgent)) {
      setIsAndroidWebView(true);
    }
  }, []);
  return (
    <div
      id="GetInTouchSection"
      data-aos="fade-up"
      className="flex flex-col space-y-4 w-full h-96 items-center bg-AAprimary"
    >
      {/* // ? Title === > What's Next?  */}
      <div className="flex flex-row items-center ">
        <ArrowIcon className="flex-none h-5 md:h-6 w-5 md:w-5 text-AAsecondary" />
        <div className="flex flex-row space-x-2 items-center">
          <span className="text-AAsecondary font-sans text-sm  sm:text-base">
            {" "}
            04.
          </span>
          <span className=" font-sans text-AAsecondary text-base">
            What&apos;s Next?
          </span>
        </div>
      </div>
      {/* // ? Get In Touch */}
      <span className="text-gray-200 text-3xl sm:text-4xl font-bold tracking-wider opacity-85">
        Get In Touch
      </span>
      <p className="flex font-Header tracking-wider text-gray-400 text-center px-6 sm:px-16 md:px-0 md:w-[600px]">
        Although I&apos;m Always open for any new opportunities, my inbox is
        open. Whether you have a question or just want to say hi, I&apos;ll try
        my best to get back to you!
      </p>

      {/* Contact Links */}
      <div className="mt-8 flex items-center space-x-4 text-gray-400 font-mono text-sm">
        <a
          href="tel:+917037787840"
          className="text-AAsecondary hover:text-gray-200 transition-colors"
        >
          (+91) 70 377 87840
        </a>
        <span className="text-gray-400">|</span>
        <a
          href="mailto:mohdamanzaid07@gmail.com"
          className="text-AAsecondary hover:text-gray-200 transition-colors"
        >
          mohdamanzaid07@gmail.com
        </a>
        <span className="text-gray-400">|</span>
        <a
          target="_blank"
          href="https://github.com/mohdamanzaidansari/"
          rel="noopener noreferrer"
          className="text-AAsecondary hover:text-gray-200 transition-colors"
        >
          github.com/mohdamanzaidansari/
        </a>
        <span className="text-gray-400">|</span>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/mohd-aman-zaid/"
          rel="noopener noreferrer"
          className="text-AAsecondary hover:text-gray-200 transition-colors"
        >
          www.linkedin.com/in/mohd-aman-zaid/
        </a>
      </div>

      {/* Say Hello Button */}
      <div className="pt-4">
        {isAndroidWebView ? (
          <button
            className="font-mono text-sm text-AAsecondary border-AAsecondary 
                            px-8 py-4 border-[1.5px] rounded "
          >
            mohdamanzaid07@gmail.com
          </button>
        ) : (
          <a
            href="mailto:mohdamanzaid07@gmail.com"
            target={"_blank"}
            rel="noreferrer"
          >
            <button
              className="font-mono text-sm text-AAsecondary border-AAsecondary 
                            px-8 py-4 border-[1.5px] rounded "
            >
              Say Hello
            </button>
          </a>
        )}
      </div>
    </div>
  );
}
