import { theme } from "@/ChakraConfig";
import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import "animate.css/animate.min.css";
import Aos from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import type { AppProps } from "next/app";

import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    setTimeout(() => {
      Aos.init({
        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 400, // values from 0 to 3000, with step 50ms
        easing: "ease", // default easing for AOS animations
        once: true, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
      });
    }, 400); // Delay initialization by 400 milliseconds

    window.addEventListener("load", Aos.refresh);
  }, []);
  return (
    <>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
