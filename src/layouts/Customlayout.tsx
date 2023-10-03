import LargeWithNewsletter from "@/components/Footer";
import WithSubnavigation from "@/components/Navbar";
import { Inter } from "next/font/google";
import React from "react";
import CustomHead from "./CustomHead";

const inter = Inter({ subsets: ["latin"] });

/**const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
}); */
const Customlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
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
