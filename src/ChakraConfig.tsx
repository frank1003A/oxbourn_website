// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";

//#2F3C7E
//#8BD8BD
//#694fff
// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    primary: "#2F3C7E",
    opaque: "#694fff9c",
    header: "#ffffff",
    bg_white: "#ffffff",
    bg_grey: "#ebeaf9",
    footer: "#0d082a",
    heading: "#39364e",
    text: "#445781",
  },
};

const customTheme = extendTheme({
  semanticTokens: {
    colors: {
      text: {
        default: "gray.900",
        _dark: "gray.50",
      },
    },
  },
});

// 2. Update the breakpoints as key-value pairs
const breakpoints = {
  base: "0px",
  sm: "300px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
};

export const theme = extendTheme({ colors, breakpoints, customTheme });
