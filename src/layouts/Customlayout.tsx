import LargeWithNewsletter from "@/components/UI/Footer";
import WithSubnavigation from "@/components/UI/Navbar";
import { Inter } from "next/font/google";
import React from "react";
import CustomHead from "./CustomHead";

const inter = Inter({ subsets: ["latin"], display: "swap" });

/**const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
}); */
const Customlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-inter: ${inter.style.fontFamily};
          }
        `}
      </style>
      <CustomHead />
      <div className={inter.className}>
        <WithSubnavigation />
        <main>{children}</main>
        <LargeWithNewsletter />
      </div>
    </>
  );
};

export default Customlayout;
