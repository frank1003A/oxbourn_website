import { initAos } from "@/AosInit";
import { theme } from "@/ChakraConfig";
import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import "aos/dist/aos.css"; // Import AOS styles
import type { AppProps } from "next/app";

import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    initAos();
  }, []);
  return (
    <>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
