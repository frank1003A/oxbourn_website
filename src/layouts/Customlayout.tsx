import LargeWithNewsletter from "@/components/UI/Footer";
import WithSubnavigation from "@/components/UI/Navbar";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import React from "react";
import CustomHead from "./CustomHead";

const inter = Inter({ subsets: ["latin"], display: "swap" });

const Customlayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const pageTitles = {
    home: "Home - Oxbourn Consulting",
    about: "About Us - Oxbourn Consulting",
  };

  const handleRoutesTitle = () => {
    let title = "";
    switch (router.pathname) {
      case "/":
        title = pageTitles.home;
        break;
      case "/about":
        title = pageTitles.about;
        break;
      default:
        title = pageTitles.home;
        break;
    }
    return title;
  };
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-inter: ${inter.style.fontFamily};
          }
        `}
      </style>
      <CustomHead title={handleRoutesTitle()} />
      <div className={inter.className}>
        <WithSubnavigation />
        <main>{children}</main>
        <LargeWithNewsletter />
      </div>
    </>
  );
};

export default Customlayout;
