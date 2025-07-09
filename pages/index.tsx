import Header from "../components/Header/Header";
import MyName from "../components/Home/MyName/MyName";
import { useEffect } from "react";
import SocialMediaArround from "../components/Home/SocialMediaArround/SocialMediaArround";
import AboutMe from "../components/Home/AboutMe/AboutMe";
import WhereIHaveWorked from "../components/Home/WhereIHaveWorked/WhereIHaveWorked";
import SomethingIveBuilt from "../components/Home/SomethingIveBuilt/SomethingIveBuilt";
import GetInTouch from "../components/Home/GetInTouch/GetInTouch";
import Aos from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import ScreenSizeDetector from "../components/CustomComponents/ScreenSizeDetector";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);

  console.log("website is rendering...");
  const meta = {
    title: "Aman Zaid - Senior Software Engineer",
    description: `I've been working on Software development for more than 4 years. Get in touch with me to know more.`,
    image: "https://mohdamanzaidansari.github.io/img/DP.png",
    type: "website",
    url: "https://mohdamanzaidansari.github.io",
  };
  const isProd = process.env.NODE_ENV === "production";

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={meta.url} />
        <link rel="canonical" href={meta.url} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Aman Zaid" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta property="og:image:width" content="647" />
        <meta property="og:image:height" content="647" />
        <meta property="og:image:type" content="image/png" />
        <meta
          property="og:image:alt"
          content="Aman Zaid - Senior Software Engineer"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mohdamanzaidansari" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        <meta
          name="twitter:image:alt"
          content="Aman Zaid - Senior Software Engineer"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" href="/img/DP.png" />
        <link rel="apple-touch-icon" href="/img/DP.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="relative snap-mandatory min-h-screen bg-AAprimary w-full ">
        <Header />
        <MyName />
        <SocialMediaArround />
        <AboutMe />
        <WhereIHaveWorked />
        <SomethingIveBuilt />
        <GetInTouch />

        {!isProd && <ScreenSizeDetector />}
      </div>
    </>
  );
}
